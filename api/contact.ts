/**
 * EcoNutrients — Contact form serverless function (Vercel `api/` style).
 *
 * Receives POST requests from the homepage contact form and sends the enquiry
 * to info.econutrient@gmail.com via Resend.
 *
 * Security:
 *  - SMTP / API credentials are read ONLY from server-side environment variables.
 *  - Requests are validated server-side (required fields, email format, lengths).
 *  - Rate limited per client IP.
 *  - Body size is capped.
 *
 * Env vars (see .env.example):
 *  - RESEND_API_KEY                    (required)
 *  - CONTACT_FROM_EMAIL                (optional — verified sender in Resend)
 *  - CONTACT_TO_EMAIL                  (optional — default info.econutrient@gmail.com)
 *  - ALLOWED_ORIGIN                    (optional — lock CORS to your site origin)
 *  - CONTACT_RATE_LIMIT                (optional — max requests per window)
 *  - CONTACT_RATE_LIMIT_WINDOW_MS      (optional — window length in ms)
 */
import type { IncomingMessage, ServerResponse } from 'node:http';
import { Resend } from 'resend';

/* ── Configuration ── */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// NOTE: `onboarding@resend.dev` only delivers to your own account email until a
// domain is verified in Resend. Use a verified sender for production, e.g.
// "EcoNutrients <noreply@econutrients.in>".
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'EcoNutrients <onboarding@resend.dev>';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info.econutrient@gmail.com';
// This subject must never change so Gmail filters group all enquiries together.
const SUBJECT = '[EcoNutrient Contact Form] New Customer Enquiry';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';

const RATE_LIMIT_MAX = Math.max(1, Number(process.env.CONTACT_RATE_LIMIT || 5));
const RATE_LIMIT_WINDOW_MS = Math.max(
  60_000,
  Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 15 * 60_000),
);
const MAX_BODY_BYTES = 1_000_000;

/* ── In-memory rate limiter (per lambda instance) ──
 * For very high-traffic deployments consider a shared store (Upstash / Vercel KV).
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Opportunistic cleanup so the map does not grow unbounded.
  if (rateLimitStore.size > 1000) {
    for (const [key, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(key);
    }
  }

  const existing = rateLimitStore.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX;
}

/* ── Validation ── */

type CleanPayload = { name: string; email: string; phone: string; message: string };
type Validation = { ok: true; value: CleanPayload } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-()\s.]{6,30}$/;

function validatePayload(raw: Record<string, unknown>): Validation {
  const name = typeof raw.name === 'string' ? raw.name.trim() : '';
  const email = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : '';
  const phone = typeof raw.phone === 'string' ? raw.phone.trim() : '';
  const message = typeof raw.message === 'string' ? raw.message.trim() : '';

  // Reject empty submissions.
  if (!name || !email || !message) {
    return { ok: false, error: 'Name, email and message are required.' };
  }
  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: 'Name must be between 2 and 120 characters.' };
  }
  if (email.length > 200 || !EMAIL_RE.test(email)) {
    return { ok: false, error: 'Please provide a valid email address.' };
  }
  if (phone && !PHONE_RE.test(phone)) {
    return { ok: false, error: 'Please provide a valid phone number.' };
  }
  if (message.length < 5 || message.length > 5000) {
    return { ok: false, error: 'Message must be between 5 and 5000 characters.' };
  }

  return { ok: true, value: { name, email, phone, message } };
}

/* ── Email body builders ── */

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#39;');
}

function formatDate(now: Date): { date: string; time: string } {
  return {
    date: now.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    time: now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  };
}

/** Exact plain-text body required by the product spec. */
function buildText(v: CleanPayload & { now: Date }): string {
  const { date, time } = formatDate(v.now);
  const phone = v.phone || '(not provided)';

  return [
    '------------------------------------------------------',
    '',
    'New enquiry received from the EcoNutrient website.',
    '',
    'Name:',
    v.name,
    '',
    'Email:',
    v.email,
    '',
    'Phone:',
    phone,
    '',
    'Message:',
    '',
    v.message,
    '',
    '------------------------------------------------------',
    '',
    'Submitted At:',
    date,
    time,
    '',
    'Website:',
    'https://econutrients.in',
    '',
    '------------------------------------------------------',
  ].join('\n');
}

function buildHtml(v: CleanPayload & { now: Date }): string {
  const { date, time } = formatDate(v.now);
  const phone = v.phone || '(not provided)';
  const e = escapeHtml;

  return [
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#1b1b1b;max-width:600px;margin:0 auto;padding:8px;">',
    '<div style="border-top:3px solid #163b2e;border-bottom:1px solid #e0ddd6;padding:8px 0 16px;">',
    '<p style="margin:16px 0;"><strong>New enquiry received from the EcoNutrient website.</strong></p>',
    '<table role="presentation" cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse;">',
    '<tr><td style="vertical-align:top;width:110px;font-weight:600;color:#163b2e;">Name:</td><td>' + e(v.name) + '</td></tr>',
    '<tr><td style="vertical-align:top;width:110px;font-weight:600;color:#163b2e;">Email:</td><td>' + e(v.email) + '</td></tr>',
    '<tr><td style="vertical-align:top;width:110px;font-weight:600;color:#163b2e;">Phone:</td><td>' + e(phone) + '</td></tr>',
    '<tr><td style="vertical-align:top;width:110px;font-weight:600;color:#163b2e;">Message:</td><td style="white-space:pre-wrap;">' + e(v.message) + '</td></tr>',
    '</table>',
    '<hr style="border:none;border-top:1px solid #e0ddd6;margin:16px 0;" />',
    '<p style="margin:0;"><strong>Submitted At:</strong><br />' + date + '<br />' + time + '</p>',
    '<p style="margin:8px 0 0;"><strong>Website:</strong> <a href="https://econutrients.in" style="color:#163b2e;">https://econutrients.in</a></p>',
    '</div>',
    '</div>',
  ].join('\n');
}

/* ── Helpers ── */

function sendJson(res: ServerResponse, status: number, body: Record<string, unknown>): void {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function getClientIp(req: IncomingMessage): string {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff) return xff.split(',')[0].trim();
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp) return realIp.trim();
  return req.socket?.remoteAddress ?? 'unknown';
}

function readJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    // Vercel's Node runtime auto-parses JSON bodies when content-type is JSON.
    const existing = (req as IncomingMessage & { body?: unknown }).body;
    if (existing !== undefined) {
      resolve(existing && typeof existing === 'object' ? (existing as Record<string, unknown>) : {});
      return;
    }

    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk: string) => {
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body) as Record<string, unknown>);
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

/* ── Handler ── */

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  // CORS (safe defaults; lock down with ALLOWED_ORIGIN in production).
  const origin = req.headers.origin;
  if (ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  } else if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed.' });
    return;
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    console.warn(`[Contact] Rate limit exceeded for IP ${ip}`);
    sendJson(res, 429, { error: 'Too many requests. Please try again later.' });
    return;
  }

  let payload: Record<string, unknown>;
  try {
    payload = await readJsonBody(req);
  } catch (err) {
    console.error('[Contact] Invalid request body:', err);
    sendJson(res, 400, { error: 'Invalid request body.' });
    return;
  }

  const result = validatePayload(payload);
  if (!result.ok) {
    sendJson(res, 400, { error: result.error });
    return;
  }

  if (!RESEND_API_KEY) {
    console.error('[Contact] RESEND_API_KEY is not set on the server.');
    sendJson(res, 500, { error: 'Server is not configured to send email yet.' });
    return;
  }

  const value = result.value;
  const now = new Date();

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: SUBJECT,
      text: buildText({ ...value, now }),
      html: buildHtml({ ...value, now }),
    });

    if (error) throw error;

    console.log(
      `[Contact] Enquiry sent. From: ${value.name} <${value.email}> | To: ${TO_EMAIL} | Resend id: ${data?.id ?? 'n/a'} | IP: ${ip}`,
    );
    sendJson(res, 200, { success: true });
  } catch (err) {
    console.error('[Contact] Failed to send enquiry email:', err);
    sendJson(res, 500, { error: 'Failed to send your message. Please try again later.' });
  }
}

