import { describe, expect, it } from "vitest";
import { fallbackAnswer, isGreeting, isIdentityQuery, isMeetingQuery, isThankYou } from "@/app/api/chat/route";
import { searchLocalKnowledge } from "@/lib/site-knowledge";

describe("Chatbot Intent Detection", () => {
  it("correctly identifies greetings", () => {
    expect(isGreeting("hi")).toBe(true);
    expect(isGreeting("hello there")).toBe(true);
    expect(isGreeting("good morning")).toBe(true);
    expect(isGreeting("what footballs do you have")).toBe(false);
  });

  it("correctly identifies identity questions", () => {
    expect(isIdentityQuery("who u are?")).toBe(true);
    expect(isIdentityQuery("who are you")).toBe(true);
    expect(isIdentityQuery("what is sportsventurex")).toBe(true);
    expect(isIdentityQuery("tell me about yourself")).toBe(true);
    expect(isIdentityQuery("how much does shipping cost")).toBe(false);
  });

  it("correctly identifies thank you messages", () => {
    expect(isThankYou("thanks")).toBe(true);
    expect(isThankYou("thank you so much")).toBe(true);
  });

  it("correctly identifies meeting and scheduling queries", () => {
    expect(isMeetingQuery("i want to add the meet")).toBe(true);
    expect(isMeetingQuery("schedule a meeting")).toBe(true);
    expect(isMeetingQuery("book a call")).toBe(true);
    expect(isMeetingQuery("can we talk on zoom or calendly")).toBe(true);
    expect(isMeetingQuery("what are your socks made of")).toBe(false);
  });
});

describe("fallbackAnswer", () => {
  it("returns a warm structured greeting for 'hi'", () => {
    const response = fallbackAnswer("hi", []);
    expect(response.answer).toContain("Hello! Welcome to SportsVentureX.");
    expect(response.answer).toContain("• Custom sports gear");
  });

  it("returns a brand introduction for 'who u are?'", () => {
    const response = fallbackAnswer("who u are?", []);
    expect(response.answer).toContain("SportsVentureX is a custom sports goods development");
    expect(response.answer).toContain("• Custom Footballs");
  });

  it("returns a Calendly action for meeting requests", () => {
    const response = fallbackAnswer("i want to add the meet", []);
    expect(response.answer).toContain("Calendly");
    expect(response).toHaveProperty("action");
    expect((response as { action?: { type: string; url: string } }).action?.type).toBe("calendly");
  });

  it("formats search documents into structured bullet points", () => {
    const docs = searchLocalKnowledge("footballs");
    const response = fallbackAnswer("tell me about footballs", docs);
    expect(response.answer).toContain("• ");
  });
});


