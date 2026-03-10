import { useEffect, useState } from "react";

export default function ThemeToggle({ asButton = true, value, onChange }) {
  const getInitialTheme = () => {
    if (value) return value;
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (value && value !== theme) setTheme(value);
  }, [value]); // sync when external value changes

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    onChange?.(next);
  };

  if (!asButton) return toggleTheme; // allow using inside settings

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}
