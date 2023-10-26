import { useState } from "react";

type Props = {
  onSubmit: (message: string) => void;
};

export const MessageForm = ({ onSubmit }: Props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
