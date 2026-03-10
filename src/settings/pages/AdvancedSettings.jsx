import Toggle from "../components/Toggle";
import { useSettingsStore } from "../store/settingsStore";

export default function AdvancedSettings() {
  const { experiments, setExperiments } = useSettingsStore();

  return (
    <div className="page">
      <h1>Advanced</h1>

      {/* Cache */}
      <div className="card">
        <h2>Cache & Storage</h2>
        <p>Manage disk usage and temporary files.</p>

        <footer>
          <button className="btn btn-secondary">Clear Cache</button>
        </footer>
      </div>

      {/* Reset */}
      <div className="card">
        <h2>Reset Options</h2>
        <p>Reset preferences or restore original defaults.</p>

        <footer>
          <button className="btn btn-danger">Reset Settings</button>
        </footer>
      </div>

      {/* Experimental */}
      <div className="card">
        <h2>Experimental Features</h2>
        <p>Try new test features before release.</p>

        <Toggle
          label="Enable Experiments"
          value={experiments}
          onChange={setExperiments}
        />

        <footer>
          <button className="btn btn-primary">Save</button>
        </footer>
      </div>
    </div>
  );
}
