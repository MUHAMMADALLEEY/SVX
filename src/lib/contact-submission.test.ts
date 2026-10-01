import { describe, expect, it } from "vitest";
import { parseContactSubmission } from "@/lib/contact-submission";

const validSubmission = {
  name: "Jordan Smith",
  email: "jordan@example.com",
  company: "Northside FC",
  productInterest: "Footballs",
  productName: "Professional",
  message: "We would like to discuss a custom match-ball programme for next season.",
  website: "",
};

describe("parseContactSubmission", () => {
  it("accepts a complete enquiry and normalizes safe fields", () => {
    const result = parseContactSubmission({ ...validSubmission, name: "  Jordan   Smith  " });

    expect(result).toMatchObject({
      success: true,
      data: { name: "Jordan Smith", email: "jordan@example.com", productInterest: "Footballs", productName: "Professional" },
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

  it.each(["Socks", "Footballs", "Bags"])(
    "accepts the available %s product category",
    (productInterest) => {
      const result = parseContactSubmission({
        ...validSubmission,
        productInterest,
        productName: "Custom development brief",
      });

      expect(result).toMatchObject({ success: true, data: { productInterest } });
    },
  );

  it.each(["Apparel", "Sports Products", "Hockey", "Cricket", "Pickleball & Padel Rackets"])(
    "rejects the unavailable %s product category",
    (productInterest) => {
      const result = parseContactSubmission({ ...validSubmission, productInterest });

      expect(result).toMatchObject({ success: false, errors: ["Choose a product interest."] });
    },
  );
});
