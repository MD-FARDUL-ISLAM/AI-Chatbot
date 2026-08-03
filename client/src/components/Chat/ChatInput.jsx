import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ChatInput({ messages, setMessages }) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      text,
    };

    setMessages([...messages, newMessage]);
    setText("");
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