export const THEME_STORAGE_KEY = "theme";

/** @typedef {"system" | "light" | "dark"} ThemePreference */

/** @returns {ThemePreference} */
export function getStoredTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}

export function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** @param {ThemePreference} theme */
export function resolveDark(theme) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return getSystemPrefersDark();
}

/** @param {ThemePreference} theme */
export function applyTheme(theme) {
  const root = document.documentElement;
  if (resolveDark(theme)) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/** @param {ThemePreference} theme */
export function persistTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}
