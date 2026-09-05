"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Calendar, ExternalLink, MessageCircle, Send, X } from "lucide-react";

type ChatAction = {
  type: string;
  label: string;
  url: string;
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  action?: ChatAction;
};

const starterMessage: ChatMessage = {
  id: "starter",
  role: "assistant",
  content:
    "Hello! Welcome to **SportsVentureX**.\n\n" +"How i can help you?" };

const quickSuggestions = [
  "📅 Schedule a Meeting",
  "Custom Footballs",
  "Performance Socks",
  "Gear Bags",
  "T-Shirts & Apparel",
];

function renderFormattedInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function FormattedMessage({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="chatbot-message-body">
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        const isBulletBlock = lines.every((line) => line.trim().startsWith("•") || line.trim().startsWith("-"));

        if (isBulletBlock) {
          return (
            <ul key={index} className="chatbot-message-list">
              {lines.map((line, lIdx) => (
                <li key={lIdx}>{renderFormattedInline(line.replace(/^[•\-]\s*/, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="chatbot-message-paragraph">
            {lines.map((line, lIdx) => (
              <span key={lIdx}>
                {lIdx > 0 ? <br /> : null}
                {renderFormattedInline(line)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isSending, isOpen]);

  async function handleSend(questionText: string) {
    const question = questionText.trim();
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
      const body = (await response.json().catch(() => ({}))) as {
        answer?: string;
        message?: string;
        action?: ChatAction;
      };
      const answer = response.ok && body.answer
        ? body.answer
        : body.message ?? "I could not answer that yet. Please send an enquiry through the contact form below and our team will assist you.";

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: answer,
          action: body.action,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: "I could not connect right now. Please try again or use the contact form on this page.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSend(input);
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
              <span>Product & enquiry guide</span>
            </div>
            <button type="button" aria-label="Close chat" title="Close chat" onClick={() => setIsOpen(false)}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`chatbot-message ${message.role}`}>
                <FormattedMessage text={message.content} />
                {message.action ? (
                  <a
                    href={message.action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chatbot-action-button"
                  >
                    <Calendar size={14} aria-hidden="true" />
                    <span>{message.action.label}</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            ))}
            {isSending ? (
              <div className="chatbot-message assistant">
                <span className="chatbot-typing">Thinking...</span>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 ? (
            <div className="chatbot-suggestions">
              {quickSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="chatbot-chip"
                  disabled={isSending}
                  onClick={() => handleSend(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
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
