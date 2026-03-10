const THEME_KEY = "theme";

// Apply theme by setting attribute on <html>
export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Initialize theme on page load
export function initTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored || (prefersDark ? "dark" : "light");
    applyTheme(initial);
    localStorage.setItem(THEME_KEY, initial);
  } catch (error) {
    console.error("Theme init error:", error);
  }
}

// Toggle theme manually
export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";

  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}
