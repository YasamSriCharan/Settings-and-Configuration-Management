// src/settings/components/Input.jsx
export default function Input({ label, value, onChange }) {
  return (
    <div className="input-row">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}