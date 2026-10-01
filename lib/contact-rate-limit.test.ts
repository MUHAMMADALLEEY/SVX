import { describe, expect, it } from "vitest";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";

describe("checkContactRateLimit", () => {
  it("allows a bounded number of requests and then returns a retry delay", () => {
    const identifier = "rate-limit-test-client";
    const start = 1_800_000_000_000;

    for (let request = 0; request < 5; request += 1) {
      expect(checkContactRateLimit(identifier, start + request)).toEqual({
        allowed: true,
        retryAfterSeconds: 0,
      });
    }

    const limited = checkContactRateLimit(identifier, start + 5);
    expect(limited.allowed).toBe(false);
    expect(limited.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("starts a new window after the previous window expires", () => {
    const identifier = "rate-limit-reset-test-client";
    const start = 1_800_100_000_000;

    for (let request = 0; request < 5; request += 1) {
      checkContactRateLimit(identifier, start + request);
    }

    expect(checkContactRateLimit(identifier, start + 10 * 60 * 1000)).toEqual({
      allowed: true,
      retryAfterSeconds: 0,
    });
  });
});
