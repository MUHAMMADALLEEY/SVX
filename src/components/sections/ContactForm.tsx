"use client";

import { useState, type FormEvent } from "react";
import { contactProductOptions } from "@/lib/contact-submission";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { message?: string; success?: boolean };

      if (!response.ok || !body.success) {
        throw new Error(body.message ?? "We could not send your enquiry. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your enquiry is on its way to the SportsVentureX team.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    }
  }

  const isSending = status === "sending";

  return (
    <form className="contact-form reveal" aria-label="Project enquiry form" onSubmit={handleSubmit} noValidate>
      <p className="form-overline">Project enquiry</p>
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" autoComplete="name" required disabled={isSending} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required disabled={isSending} />
      </label>
      <label>
        <span>Company</span>
        <input type="text" name="company" placeholder="Company name" autoComplete="organization" disabled={isSending} />
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
        <textarea name="message" placeholder="Tell us what you want to build" rows={4} required disabled={isSending} />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" disabled={isSending} />
      </label>
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending enquiry..." : "Send enquiry"}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
