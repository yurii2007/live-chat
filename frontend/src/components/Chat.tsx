import { message } from "../App.types";

export const Chat = ({ messages }: { messages: message[] }) => {
  return (
    <ul>
      {messages.map((msg) => (
        <li
          key={msg.id}
          style={{ color: msg.from === "you" ? "blue" : "black", listStyle: "none" }}
        >
          {msg.message}
        </li>
      ))}
    </ul>
  );
};
