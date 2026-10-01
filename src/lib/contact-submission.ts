export const contactProductOptions = [
  "Socks",
  "Footballs",
  "Bags",
] as const;

export type ContactSubmission = {
  name: string;
  email: string;
  company?: string;
  productInterest: (typeof contactProductOptions)[number];
  productName?: string;
  quantity?: string;
  market?: string;
  message: string;
  website?: string;
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
  const productName = normalizeSingleLine(getString(input.productName));
  const quantity = normalizeSingleLine(getString(input.quantity));
  const market = normalizeSingleLine(getString(input.market));
  const message = getString(input.message);
  const website = getString(input.website);
  const errors: string[] = [];

  if (name.length < 2 || name.length > 120) errors.push("Enter a name between 2 and 120 characters.");
  if (!emailPattern.test(email) || email.length > 254) errors.push("Enter a valid email address.");
  if (company.length > 120) errors.push("Company name must be 120 characters or fewer.");
  if (productName.length > 160) errors.push("Selected sub-category must be 160 characters or fewer.");
  if (quantity.length > 100) errors.push("Quantity must be 100 characters or fewer.");
  if (market.length > 120) errors.push("Destination market must be 120 characters or fewer.");

  if (!contactProductOptions.includes(productInterest as ContactSubmission["productInterest"])) {
    errors.push("Choose a product interest.");
  }
  if (message.length < 5 || message.length > 4000) {
    errors.push("Tell us a little more about your requirements in 5 to 4,000 characters.");
  }

  if (errors.length > 0) return { success: false, errors };

  return {
    success: true,
    data: {
      name,
      email,
      company: company || undefined,
      productInterest: productInterest as ContactSubmission["productInterest"],
      productName: productName || undefined,
      quantity: quantity || undefined,
      market: market || undefined,
      message,
      website: website || undefined,
    },
  };
}
