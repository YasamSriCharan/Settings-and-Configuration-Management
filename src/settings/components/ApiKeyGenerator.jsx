import { useState } from "react";

export default function ApiKeyGenerator() {
  const [key, setKey] = useState("");

  function generateKey() {
    const newKey =
      "sk-" + Math.random().toString(36).substring(2, 15);
    setKey(newKey);
  }

  return (
    <div>
      <h4>API Key</h4>

      {key && (
        <input value={key} readOnly style={{ width: "100%" }} />
      )}

      <button className="btn btn-primary" onClick={generateKey}>Generate API Key</button>
    </div>
  );
}
