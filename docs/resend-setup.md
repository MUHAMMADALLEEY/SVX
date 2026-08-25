# Resend Contact Form Setup

The website sends contact-form notifications through the server-only `POST /api/contact` endpoint.

## Resend

1. Create a Resend account and add the domain or sending subdomain you own.
2. Add the SPF and DKIM DNS records shown by Resend, then wait for the domain to verify.
3. Create an API key with permission to send email.
4. Copy `.env.example` to `.env.local` and add the real values. The `RESEND_FROM_EMAIL` address must use the exact verified Resend domain.

## Vercel

Add these Environment Variables to the Vercel project for both Preview and Production:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_NOTIFICATION_EMAIL`

Do not prefix these names with `NEXT_PUBLIC_`; the browser must never receive the Resend API key.

## Verification

1. Run `npm test` and `npm run build`.
2. Start the site with `npm run dev` and submit a real enquiry.
3. Confirm the recipient inbox receives the notification and that Reply targets the visitor's address.
4. Deploy to Vercel and repeat the submission against the production URL.
