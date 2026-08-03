import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

function ChatBox({ messages, setMessages }) {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />
      </div>

      <ChatInput
        messages={messages}
        setMessages={setMessages}
      />
    </main>
  );
}

export default ChatBox;