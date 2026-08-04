import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ChatBox from "@/components/Chat/ChatBox";
import api from "@/services/api";

function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const res = await api.get("/history");

        const formattedMessages = res.data.map((msg) => ({
          id: msg._id,
          role: msg.role,
          text: msg.content,
        }));

        setMessages(formattedMessages);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    loadMessages();
  }, []);

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