import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ChatBox from "@/components/Chat/ChatBox";

function Home() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello 👋 আমি তোমার AI Assistant।",
    },
  ]);

  return (
    <div className="flex h-screen bg-[#212121] text-white overflow-hidden">
      <Sidebar />
      <ChatBox
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default Home;