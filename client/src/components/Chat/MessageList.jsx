import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div className="max-w-4xl mx-auto w-full p-6">
      {messages.map((message) => (
        <Message
          key={message.id}
          role={message.role}
          text={message.text}
        />
      ))}
    </div>
  );
}

export default MessageList;