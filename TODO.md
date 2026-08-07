# TODO — Contact Form Email Notification (Resend + Serverless API)

## Goal
Wire the existing homepage contact form to actually send emails to info.econutrient@gmail.com
via a serverless API function (Vercel `api/`) using Resend — **without changing any UI, styling, layout, or UX**.

## Plan
1. Backend — `api/contact.ts` serverless function:
   - Send email to info.econutrient@gmail.com via Resend
   - Exact subject: `[EcoNutrient Contact Form] New Customer Enquiry`
   - Exact plain-text body template
   - Server-side validation (required fields, email format, lengths, reject empty submissions)
   - Rate limiting per IP
   - Proper error handling + server-side logging
2. Environment — `.env.example` + `.gitignore` (never commit secrets)
3. Frontend — `src/pages/Home.tsx`:
   - Submit via `fetch` POST to `/api/contact`
   - Success toast: "Message sent! We'll get back to you shortly." + clear the form
   - Friendly error toast on failure (never pretend success)
   - No redirect, no UI change
4. Dependencies — add `resend` to `package.json` (+ `@types/node` dev, `dev:api` script)
5. Typings — add `src/vite-env.d.ts` for `import.meta.env`
6. Docs — README setup/deploy instructions
7. Verify build (needs Node.js)

## Steps
- [x] Create TODO.md
- [x] Create api/contact.ts
- [x] Create .env.example
- [x] Update .gitignore
- [x] Update package.json (resend dep)
- [x] Add src/vite-env.d.ts
- [x] Wire contact form in src/pages/Home.tsx
- [x] Update README.md
- [ ] Run install + build to verify (needs Node.js)

