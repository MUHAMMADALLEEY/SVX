import { describe, expect, it } from "vitest";
import { parseContactSubmission } from "@/lib/contact-submission";

const validSubmission = {
  name: "Jordan Smith",
  email: "jordan@example.com",
  company: "Northside FC",
  productInterest: "Footballs",
  message: "We would like to discuss a custom match-ball programme for next season.",
  website: "",
};

describe("parseContactSubmission", () => {
  it("accepts a complete enquiry and normalizes safe fields", () => {
    const result = parseContactSubmission({ ...validSubmission, name: "  Jordan   Smith  " });

    expect(result).toMatchObject({
      success: true,
      data: { name: "Jordan Smith", email: "jordan@example.com", productInterest: "Footballs" },
    });
  });

  it("rejects invalid email addresses without producing a submission", () => {
    const result = parseContactSubmission({ ...validSubmission, email: "not-an-email" });

    expect(result).toMatchObject({ success: false, errors: ["Enter a valid email address."] });
  });

  it("preserves the honeypot value for the route to silently discard", () => {
    const result = parseContactSubmission({ ...validSubmission, website: "https://spam.example" });

    expect(result).toMatchObject({ success: true, data: { website: "https://spam.example" } });
  });
});
