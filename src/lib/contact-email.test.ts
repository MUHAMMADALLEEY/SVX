import { describe, expect, it } from "vitest";
import { createContactNotificationEmail } from "@/lib/contact-email";

describe("createContactNotificationEmail", () => {
  it("includes enquiry details and escapes visitor message content", () => {
    const html = createContactNotificationEmail(
      {
        name: "Jordan Smith",
        email: "jordan@example.com",
        company: "Northside FC",
        productInterest: "Footballs",
        message: "Please use <strong>our brand</strong> on the ball.",
        website: "",
      },
      new Date("2026-08-25T10:00:00.000Z"),
    );

    expect(html).toContain("New project enquiry");
    expect(html).toContain("jordan@example.com");
    expect(html).toContain("&lt;strong&gt;our brand&lt;/strong&gt;");
  });
});
