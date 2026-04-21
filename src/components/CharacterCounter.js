import { useState } from "react";
import "./style.css";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Live Character Counter</h2>

      <textarea
        maxLength={150}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="textarea"
      />

      <p className="counter">{text.length}/150</p>
    </div>
  );
}