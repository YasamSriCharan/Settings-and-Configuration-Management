// src/settings/pages/SettingsLayout.jsx
import { Outlet } from "react-router-dom";
import NavSidebar from "../components/NavSidebar";
import "../settings.css";

export default function SettingsLayout() {
  return (
    <div className="settings-layout">
      <aside className="settings-sidebar">
        <NavSidebar />
      </aside>

      <main className="settings-content">
        <Outlet />
      </main>
    </div>
  );
}
