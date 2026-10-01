const windowDurationMs = 10 * 60 * 1000;
const maximumRequestsPerWindow = 5;
const maximumTrackedClients = 5_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const attempts = new Map<string, RateLimitEntry>();

function pruneExpiredEntries(now: number) {
  for (const [identifier, entry] of attempts) {
    if (entry.resetAt <= now) attempts.delete(identifier);
  }
}

export function getContactClientIdentifier(request: Request) {
  const forwardedAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedAddress || request.headers.get("x-real-ip")?.trim() || "unknown-client";
}

export function checkContactRateLimit(identifier: string, now = Date.now()): RateLimitResult {
  pruneExpiredEntries(now);

  const currentEntry = attempts.get(identifier);

  if (!currentEntry) {
    if (attempts.size >= maximumTrackedClients) {
      const oldestIdentifier = attempts.keys().next().value as string | undefined;
      if (oldestIdentifier) attempts.delete(oldestIdentifier);
    }

    attempts.set(identifier, { count: 1, resetAt: now + windowDurationMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (currentEntry.count >= maximumRequestsPerWindow) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((currentEntry.resetAt - now) / 1000)),
    };
  }

  currentEntry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
