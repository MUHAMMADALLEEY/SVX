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
      <td style="padding: 0 20px 13px 0; color: #6e6e73; font: 600 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em; vertical-align: top; width: 140px;">${label}</td>
      <td style="padding: 0 0 13px; color: #10131d; font: 16px/1.55 Arial, sans-serif;">${escapeHtml(value)}</td>
    </tr>`;
}

export function createContactNotificationEmail(submission: ContactSubmission, submittedAt: Date) {
  const company = submission.company || "Not provided";
  const productName = submission.productName || "Not specified";
  const quantity = submission.quantity || "Not specified";
  const market = submission.market || "Not specified";
  const message = escapeHtml(submission.message).replaceAll("\n", "<br />");

  return `<!doctype html>
<html lang="en">
  <body style="margin: 0; background: #f5f5f7; color: #10131d;">
    <main style="width: 100%; padding: 32px 16px;">
      <section style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.08);">
        <div style="padding: 24px 28px; background: #070a10; color: #ffffff;">
          <p style="margin: 0 0 8px; color: #ff4c18; font: 700 11px Arial, sans-serif; letter-spacing: 0.12em; text-transform: uppercase;">SportsVentureX Brief</p>
          <h1 style="margin: 0; font: 700 26px/1.2 Arial, sans-serif;">New Manufacturing Brief: ${escapeHtml(submission.productInterest)}</h1>
        </div>
        <div style="padding: 28px;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            ${detailRow("Name", submission.name)}
            ${detailRow("Email", submission.email)}
            ${detailRow("Company", company)}
            ${detailRow("Product Category", submission.productInterest)}
            ${detailRow("Selected Sub-category", productName)}
            ${detailRow("Quantity", quantity)}
            ${detailRow("Destination Market", market)}
            ${detailRow("Submitted At", submittedAt.toUTCString())}
          </table>
          <div style="margin-top: 14px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0 0 9px; color: #6e6e73; font: 600 12px Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.06em;">Requirements &amp; Brief Specifications</p>
            <div style="margin: 0; color: #10131d; font: 15px/1.6 Arial, sans-serif; background: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #f0f1f3;">
              ${message}
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>`;
}
