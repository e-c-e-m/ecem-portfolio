"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { fallbackReplies, predefinedAnswers } from "@/data/chatbot";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string | React.ReactNode;
};

export default function FakeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      sender: "bot",
      text: "Learn more about me...",
    },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const lower = text.trim().toLowerCase();
    const reply =
      predefinedAnswers[lower] ??
      fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];

    const newMessages: Message[] = [
      { id: uuidv4(), sender: "user", text },
      { id: uuidv4(), sender: "bot", text: reply },
    ];

    setMessages((prev) => [...prev, ...newMessages]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-2xl mx-auto p-4">
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
                  ? "bg-gray-200 text-black"
                  : "bg-[#ffa3ce] text-white"
              }`}
            >
              {typeof msg.text === "string" ? msg.text : <div>{msg.text}</div>}
            </motion.div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-[#ffa3ce] text-white px-4 py-2 text-sm rounded-md hover:bg-[#ffa3ce]/70"
        >
          Send
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {Object.keys(predefinedAnswers).map((question) => (
          <button
            key={question}
            onClick={() => handleSend(question)}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 text-sm rounded-md"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
