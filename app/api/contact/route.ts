import { createContactNotificationEmail } from '@/lib/contact-email';
import { checkContactRateLimit, getContactClientIdentifier } from '@/lib/contact-rate-limit';
import { parseContactSubmission } from '@/lib/contact-submission';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(contentLength) && contentLength > 64_000) {
    return Response.json({ message: 'The enquiry is too large to process.' }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: 'Please complete the enquiry form.' }, { status: 400 });
  }

  const result = parseContactSubmission(payload);
  if (!result.success) return Response.json({ message: result.errors[0] }, { status: 400 });
  if (result.data.website) return Response.json({ success: true });

  const rateLimit = checkContactRateLimit(getContactClientIdentifier(request));
  if (!rateLimit.allowed) {
    return Response.json(
      { message: 'Too many enquiries were submitted. Please wait a few minutes and try again.' },
      { status: 429, headers: { 'Retry-After': rateLimit.retryAfterSeconds.toString() } },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipients = (process.env.CONTACT_NOTIFICATION_EMAIL ?? '')
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (!apiKey || !from || recipients.length === 0) {
    console.error('Contact form email configuration is incomplete.');
    return Response.json({ message: 'We could not send your brief. Please try again later.' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: result.data.email,
        subject: `[SVX] New brief from ${result.data.name}`,
        html: createContactNotificationEmail(result.data, new Date()),
      }),
    });

    if (!response.ok) {
      console.error('Resend contact notification failed.', response.status, await response.text());
      return Response.json({ message: 'We could not send your brief. Please try again later.' }, { status: 502 });
    }
  } catch (error) {
    console.error('Contact notification request failed.', error);
    return Response.json({ message: 'We could not send your brief. Please try again later.' }, { status: 500 });
  }

  return Response.json({ success: true });
}
