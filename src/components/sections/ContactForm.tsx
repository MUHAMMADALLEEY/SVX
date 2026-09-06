"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactProductOptions } from "@/lib/contact-submission";

type FormStatus = "idle" | "sending" | "success" | "error";
const fallbackErrorMessage = "We could not send your enquiry. Please try again.";
const requestTimeoutMs = 15_000;

export function ContactForm({ initialMessage }: { initialMessage?: string } = {}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const submissionInFlight = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInFlight.current) return;

    submissionInFlight.current = true;
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), requestTimeoutMs);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const body = await response.json().catch(() => ({})) as { message?: string; success?: boolean };

      if (!response.ok || !body.success) {
        setStatus("error");
        setMessage(body.message ?? fallbackErrorMessage);
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your enquiry is on its way to the SportsVentureX team.");
    } catch {
      setStatus("error");
      setMessage(fallbackErrorMessage);
    } finally {
      window.clearTimeout(timeout);
      submissionInFlight.current = false;
    }
  }

  const isSending = status === "sending";

  return (
    <form className="contact-form reveal" aria-label="Project enquiry form" onSubmit={handleSubmit}>
      <p className="form-overline">Project enquiry</p>
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" autoComplete="name" minLength={2} maxLength={120} required disabled={isSending} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@company.com" autoComplete="email" maxLength={254} required disabled={isSending} />
      </label>
      <label>
        <span>Company</span>
        <input type="text" name="company" placeholder="Company name" autoComplete="organization" maxLength={120} disabled={isSending} />
      </label>
      <label>
        <span>Product interest</span>
        <select name="productInterest" required defaultValue="" disabled={isSending}>
          <option value="" disabled>Select product</option>
          {contactProductOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea defaultValue={initialMessage} name="message" placeholder="Tell us what you want to build" rows={4} minLength={10} maxLength={4000} required disabled={isSending} />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" disabled={isSending} />
      </label>
      <p className="form-privacy">
        By sending this form, you agree that we may use your details to answer your enquiry. See our <a href="/privacy-policy">privacy policy</a>.
      </p>
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending enquiry..." : "Send enquiry"}
      </button>
      <p id="contact-form-status" className={`form-status ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
