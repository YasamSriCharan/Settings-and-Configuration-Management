import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FiSettings,
  FiUser,
  FiShield,
  FiBell,
  FiLock,
  FiSun,
  FiGlobe,
  FiCreditCard,
  FiGrid,
  FiCode,
  FiTool,
  FiMenu
} from "react-icons/fi";

export default function NavSidebar() {

  const [collapsed, setCollapsed] = useState(false);

  const getClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  const menu = [
    { name: "General", path: "/settings/general", icon: <FiSettings /> },
    { name: "Account", path: "/settings/account", icon: <FiUser /> },
    { name: "Security", path: "/settings/security", icon: <FiShield /> },
    { name: "Notifications", path: "/settings/notifications", icon: <FiBell /> },
    { name: "Privacy", path: "/settings/privacy", icon: <FiLock /> },
    { name: "Appearance", path: "/settings/appearance", icon: <FiSun /> },
    { name: "Localization", path: "/settings/localization", icon: <FiGlobe /> },
    { name: "Billing", path: "/settings/billing", icon: <FiCreditCard /> },
    { name: "Integrations", path: "/settings/integrations", icon: <FiGrid /> },
    { name: "Developer", path: "/settings/developer", icon: <FiCode /> },
    { name: "Advanced", path: "/settings/advanced", icon: <FiTool /> }
  ];

  return (
    <aside className={collapsed ? "nav collapsed" : "nav"}>

      {/* Header */}
      <div className="nav-header">
        <h2 className="nav-title">
          {!collapsed && "Settings"}
        </h2>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu */}
      <div className="nav-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={getClass}
          >
            <span className="icon">{item.icon}</span>

            {!collapsed && (
              <span className="label">{item.name}</span>
            )}
          </NavLink>
        ))}
      </div>

    </aside>
  );
}