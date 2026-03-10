// src/settings/components/Select.jsx
export default function Select({ label, value, options, onChange }) {
  return (
    <div className="select-row">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}