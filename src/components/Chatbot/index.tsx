"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import {
  fallbackReplies,
  predefinedAnswers,
  terminalCommands,
} from "@/data/chatbot";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string | React.ReactNode;
  isTyping?: boolean;
};

const normalizeInput = (q: string) =>
  q
    .trim()
    .toLowerCase()
    .replace(/[?!.]+$/g, "")
    .replace(/\s+/g, " ");

const SUGGESTED_QUESTIONS = [
  "Where have you worked?",
  "What technologies do you use?",
  "Are you open to TSM or product roles?",
  "Tell me about your product experience",
  "How can I contact you?",
  "Can I see your CV?",
];

export default function FakeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      sender: "bot",
      text: "Hey 👋 I'm Ecem's portfolio bot — powered by Claude (yes, actual AI). Ask me anything about her experience, skills, or what she's looking for next. Or type /help for some easter eggs 🐣",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  const addBotMessage = (text: string | React.ReactNode) => {
    setMessages((prev) => [
      ...prev,
      { id: uuidv4(), sender: "bot", text },
    ]);
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { id: uuidv4(), sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    const normalized = normalizeInput(text);

    // Check terminal commands first
    if (text.trim().startsWith("/")) {
      const cmd = text.trim().toLowerCase();
      if (terminalCommands[cmd]) {
        addBotMessage(terminalCommands[cmd]);
        return;
      } else {
        addBotMessage(
          `Unknown command: ${cmd}. Type /help to see available commands.`
        );
        return;
      }
    }

    // Check predefined answers
    if (predefinedAnswers[normalized]) {
      addBotMessage(predefinedAnswers[normalized]);
      return;
    }

    // Fall back to Claude AI
    setIsLoading(true);
    const typingId = uuidv4();
    setMessages((prev) => [
      ...prev,
      { id: typingId, sender: "bot", text: "...", isTyping: true },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? { ...m, text: data.reply || "Hmm, something went wrong.", isTyping: false }
            : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? {
                ...m,
                text: fallbackReplies[
                  Math.floor(Math.random() * fallbackReplies.length)
                ],
                isTyping: false,
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="mb-4 pb-3 border-b border-gray-200">
        <p className="text-xs text-gray-400 font-mono">
          powered by{" "}
          <span className="text-[#ffa3ce] font-semibold">Claude (Anthropic)</span>
          {" · "}type{" "}
          <span className="font-mono bg-gray-100 px-1 rounded">/help</span> for
          easter eggs
        </p>
      </div>

      {/* Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4 no-scrollbar"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[75%] px-4 py-2 text-sm rounded-lg whitespace-pre-line ${
                msg.sender === "bot"
                  ? "bg-gray-100 text-black"
                  : "bg-[#ffa3ce] text-white"
              } ${msg.isTyping ? "animate-pulse" : ""}`}
            >
              {typeof msg.text === "string" ? msg.text : <div>{msg.text}</div>}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isLoading ? "thinking..." : "Ask something or type /help"}
          disabled={isLoading}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ffa3ce] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#ffa3ce] text-white px-4 py-2 text-sm rounded-md hover:bg-[#ffa3ce]/70 disabled:opacity-50 transition-opacity"
        >
          Send
        </button>
      </form>

      {/* Suggested questions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map((question) => (
          <button
            key={question}
            onClick={() => handleSend(question)}
            disabled={isLoading}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 text-xs rounded-full disabled:opacity-50 transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
