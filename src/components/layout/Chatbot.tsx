"use client";

import { FormEvent, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const starterMessage: ChatMessage = {
  id: "starter",
  role: "assistant",
  content: "Hi, I can answer questions about SportsVentureX products, process, branding, and enquiries.",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const question = input.trim();
    if (!question || isSending) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const body = (await response.json().catch(() => ({}))) as { answer?: string; message?: string };
      const answer = response.ok && body.answer
        ? body.answer
        : body.message ?? "I could not answer that yet. Please send an enquiry and the team can help.";

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: "I could not connect right now. Please try again or use the contact form.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function openChat() {
    setIsOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }

  return (
    <div className={`chatbot ${isOpen ? "is-open" : ""}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="SportsVentureX chat assistant">
          <div className="chatbot-header">
            <div>
              <strong>SVX Assistant</strong>
              <span>Product and enquiry help</span>
            </div>
            <button type="button" aria-label="Close chat" title="Close chat" onClick={() => setIsOpen(false)}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message) => (
              <p key={message.id} className={`chatbot-message ${message.role}`}>
                {message.content}
              </p>
            ))}
            {isSending ? <p className="chatbot-message assistant">Thinking...</p> : null}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about products..."
              maxLength={700}
              disabled={isSending}
              aria-label="Ask the SportsVentureX assistant"
            />
            <button type="submit" aria-label="Send message" title="Send message" disabled={isSending || !input.trim()}>
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      ) : (
        <button className="chatbot-launcher" type="button" aria-label="Open chat" title="Open chat" onClick={openChat}>
          <MessageCircle size={21} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
