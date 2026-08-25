import type { ContactSubmission } from "@/lib/contact-submission";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 0 20px 13px 0; color: #6e6e73; font: 600 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em; vertical-align: top;">${label}</td>
      <td style="padding: 0 0 13px; color: #10131d; font: 16px/1.55 Arial, sans-serif;">${escapeHtml(value)}</td>
    </tr>`;
}

export function createContactNotificationEmail(submission: ContactSubmission, submittedAt: Date) {
  const company = submission.company || "Not provided";
  const message = escapeHtml(submission.message).replaceAll("\n", "<br />");

  return `<!doctype html>
<html lang="en">
  <body style="margin: 0; background: #f5f5f7; color: #10131d;">
    <main style="width: 100%; padding: 32px 16px;">
      <section style="max-width: 640px; margin: 0 auto; background: #ffffff;">
        <div style="padding: 24px 28px; background: #10131d; color: #ffffff;">
          <p style="margin: 0 0 8px; color: #ff4d22; font: 700 11px Arial, sans-serif; letter-spacing: 0.1em; text-transform: uppercase;">SportsVentureX</p>
          <h1 style="margin: 0; font: 700 28px/1.1 Arial, sans-serif;">New project enquiry</h1>
        </div>
        <div style="padding: 28px;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            ${detailRow("Name", submission.name)}
            ${detailRow("Email", submission.email)}
            ${detailRow("Company", company)}
            ${detailRow("Product", submission.productInterest)}
            ${detailRow("Received", submittedAt.toUTCString())}
          </table>
          <div style="margin-top: 10px; padding-top: 22px; border-top: 1px solid #d2d2d7;">
            <p style="margin: 0 0 9px; color: #6e6e73; font: 600 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em;">Message</p>
            <p style="margin: 0; color: #10131d; font: 16px/1.6 Arial, sans-serif;">${message}</p>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>`;
}
