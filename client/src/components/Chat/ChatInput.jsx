import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/services/api";

function ChatInput({ setMessages }) {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;

    const userText = text;

    // User Message
    const userMessage = {
      id: Date.now(),
      role: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Clear Input
    setText("");

    try {
      // Send request to backend
      const response = await api.post("/api/chat", {
        message: userText,
      });

      // AI Message
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        text: response.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "❌ Server Error",
        },
      ]);
    }
  };

  return (
    <div className="border-t border-zinc-800 p-6">
      <div className="max-w-4xl mx-auto flex gap-3">
        <Input
          placeholder="Ask anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="h-12"
        />

        <Button onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;