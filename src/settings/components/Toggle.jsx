// src/settings/components/Toggle.jsx
export default function Toggle({ label, value, onChange }) {
  return (
    <label className="toggle-row">
      <span>{label}</span>

      <span className="toggle-wrapper">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="toggle-slider" />
      </span>
    </label>
  );
}