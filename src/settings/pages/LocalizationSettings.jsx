import Toggle from "../components/Toggle";
import { useSettingsStore } from "../store/settingsStore";

export default function LocalizationSettings() {
  const {
    region,
    calendar,
    use24h,
    setRegion,
    setCalendar,
    setUse24h
  } = useSettingsStore();

  return (
    <div className="page">
      <h1>Localization</h1>

      {/* Region Format */}
      <div className="card">
        <h2>Region Format</h2>
        <p>Choose how dates, times, and numbers appear.</p>

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="us">United States</option>
          <option value="india">India</option>
          <option value="uk">United Kingdom</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      {/* Calendar Type */}
      <div className="card">
        <h2>Calendar Type</h2>
        <p>Select which calendar system you use.</p>

        <select
          value={calendar}
          onChange={(e) => setCalendar(e.target.value)}
        >
          <option value="gregorian">Gregorian</option>
          <option value="iso">ISO</option>
          <option value="buddhist">Buddhist</option>
        </select>
      </div>

      {/* Time Format */}
      <div className="card">
        <h2>Time Format</h2>
        <p>Choose between 12-hour or 24-hour time.</p>

        <Toggle
          label="Use 24h Time"
          value={use24h}
          onChange={setUse24h}
        />
      </div>
    </div>
  );
}
