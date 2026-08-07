# EcoNutrients — techpage

Vite + React + TypeScript marketing site for EcoNutrients.

## Contact Form Email Notification

The homepage contact form now actually sends emails. When a visitor submits:

1. The frontend POSTs the enquiry to the serverless endpoint `/api/contact`.
2. The backend validates the request, rate-limits per IP, and rejects empty/bad submissions.
3. An email is sent to **info.econutrient@gmail.com** with the subject:

   ```
   [EcoNutrient Contact Form] New Customer Enquiry
   ```

4. On success the visitor sees *"Message sent! We'll get back to you shortly."* and the form clears (no redirect).
5. On failure the visitor sees a friendly error — the email is never falsely confirmed.

Email sending uses [Resend](https://resend.com) via a Vercel-style serverless
function in `api/contact.ts`. **No SMTP credentials ever reach the browser.**

## Local development

```bash
pnpm install
cp .env.example .env      # add your RESEND_API_KEY
pnpm dev                  # frontend at http://localhost:5173
pnpm dev:api              # run api/contact.ts locally via Vercel CLI (npx vercel dev)
```

> Requires Node.js 18+ and pnpm. The API endpoint is served at
> `http://localhost:3000/api/contact` when running `vercel dev`.

## Environment variables

| Variable                        | Required | Description                                                        |
| ------------------------------- | :------: | ------------------------------------------------------------------ |
| `RESEND_API_KEY`                |   Yes    | Resend API key (https://resend.com/api-keys).                      |
| `CONTACT_FROM_EMAIL`            |    No    | Verified sender. Default: `EcoNutrients <onboarding@resend.dev>`.   |
| `CONTACT_TO_EMAIL`              |    No    | Recipient. Default: `info.econutrient@gmail.com`.                  |
| `ALLOWED_ORIGIN`                |    No    | Lock CORS to your production origin.                                |
| `CONTACT_RATE_LIMIT`            |    No    | Max submissions per IP per window (default `5`).                   |
| `CONTACT_RATE_LIMIT_WINDOW_MS`  |    No    | Rate-limit window in ms (default `900000` = 15 min).               |
| `VITE_CONTACT_API_URL`          |    No    | Build-time; override the API URL (default `/api/contact`).         |

## Deploying to Vercel

1. Push this repository and import it into Vercel (framework preset: **Vite**).
2. Vercel automatically detects the `api/` directory and deploys `api/contact.ts` as a serverless function.
3. In **Project → Settings → Environment Variables**, add the variables from the table above.
4. Verify your sending domain in Resend and set `CONTACT_FROM_EMAIL` to a verified sender.
   - Until a domain is verified, `onboarding@resend.dev` can only send to **your** Resend account email.
5. Deploy. The function is available at `/api/contact` on the same origin as the site.

> If you host the SPA and the function on different origins, set
> `VITE_CONTACT_API_URL` at build time and `ALLOWED_ORIGIN` on the server.
> For strict cross-instance rate limiting under heavy load, swap the in-memory
> limiter for a shared store (Upstash / Vercel KV).

