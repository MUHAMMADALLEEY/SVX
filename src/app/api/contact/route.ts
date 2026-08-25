import { Resend } from "resend";
import { createContactNotificationEmail } from "@/lib/contact-email";
import { parseContactSubmission } from "@/lib/contact-submission";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Please complete the enquiry form." }, { status: 400 });
  }

  const result = parseContactSubmission(payload);

  if (!result.success) {
    return Response.json({ message: result.errors[0] }, { status: 400 });
  }

  if (result.data.website) {
    return Response.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !recipient) {
    console.error("Contact form email configuration is incomplete.");
    return Response.json({ message: "We could not send your enquiry. Please try again later." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: result.data.email,
      subject: `[SVX] New enquiry from ${result.data.name}`,
      html: createContactNotificationEmail(result.data, new Date()),
    });

    if (error) {
      console.error("Resend contact notification failed.", error);
      return Response.json({ message: "We could not send your enquiry. Please try again later." }, { status: 500 });
    }
  } catch (error) {
    console.error("Contact notification request failed.", error);
    return Response.json({ message: "We could not send your enquiry. Please try again later." }, { status: 500 });
  }

  return Response.json({ success: true });
}
