import { connect } from "socket.io-client";
import { useState, useCallback, useEffect } from "react";
import { nanoid } from "nanoid";
import type { message } from "./App.types";

import { Chat } from "./components/Chat";
import { SignInForm } from "./components/SignInForm";
import { MessageForm } from "./components/MessageForm";

const socket = connect("http://localhost:3000");

const App = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    socket.on("chat-msg", (msg: string) => {
      const newMsg = { id: nanoid(), from: "server", message: msg };
      setMessages((prevMessages) => [...prevMessages, newMsg]);
    });
  }, []);

  const sendMessage = useCallback((msg: string) => {
    const newMsg = {
      id: nanoid(),
      from: "you",
      message: msg,
    };
    setMessages((prevMessages) => [...prevMessages, newMsg]);

    socket.emit("chat-msg", msg);
  }, []);

  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {!username && <SignInForm onSubmit={setUsername} />}
      {username && <MessageForm onSubmit={sendMessage} />}
      {username && <Chat messages={messages} />}
    </div>
  );
};

export default App;
