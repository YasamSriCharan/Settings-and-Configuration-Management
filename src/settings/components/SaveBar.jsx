// src/settings/components/SaveBar.jsx
export default function SaveBar() {

  function saveSettings() {
    alert("Settings Saved");
  }

  return (
    <div className="save-bar">
      <button onClick={saveSettings}>
        Save Changes
      </button>
    </div>
  );
}
