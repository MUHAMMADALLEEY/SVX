export const contactProductOptions = ["Footballs", "Socks", "Bags", "Multiple products"] as const;

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  productInterest: (typeof contactProductOptions)[number];
  message: string;
  website: string;
};

type ParseResult =
  | { success: true; data: ContactSubmission }
  | { success: false; errors: string[] };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeSingleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function parseContactSubmission(input: unknown): ParseResult {
  if (!isRecord(input)) {
    return { success: false, errors: ["Please complete the enquiry form."] };
  }

  const name = normalizeSingleLine(getString(input.name));
  const email = normalizeSingleLine(getString(input.email)).toLowerCase();
  const company = normalizeSingleLine(getString(input.company));
  const productInterest = getString(input.productInterest);
  const message = getString(input.message);
  const website = getString(input.website);
  const errors: string[] = [];

  if (name.length < 2 || name.length > 120) errors.push("Enter a name between 2 and 120 characters.");
  if (!emailPattern.test(email) || email.length > 254) errors.push("Enter a valid email address.");
  if (company.length > 120) errors.push("Company name must be 120 characters or fewer.");
  if (!contactProductOptions.includes(productInterest as ContactSubmission["productInterest"])) {
    errors.push("Choose a product interest.");
  }
  if (message.length < 10 || message.length > 4000) {
    errors.push("Tell us a little more in 10 to 4,000 characters.");
  }

  if (errors.length > 0) return { success: false, errors };

  return {
    success: true,
    data: {
      name,
      email,
      company,
      productInterest: productInterest as ContactSubmission["productInterest"],
      message,
      website,
    },
  };
}
