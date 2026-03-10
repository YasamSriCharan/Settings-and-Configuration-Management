import { useState } from "react";

export default function PasswordInput({ label, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">
      <label>{label}</label>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
