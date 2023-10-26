import { useState } from "react";

type Props = {
  onSubmit: React.Dispatch<React.SetStateAction<string>>;
};

export const SignInForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
