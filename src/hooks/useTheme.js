import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  persistTheme,
  resolveDark,
} from "../lib/theme";

export default function useTheme() {
  const [theme, setThemeState] = useState(getStoredTheme);
  const [resolvedDark, setResolvedDark] = useState(() => resolveDark(getStoredTheme()));

  useEffect(() => {
    applyTheme(theme);
    setResolvedDark(resolveDark(theme));

    if (theme !== "system") return undefined;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      applyTheme("system");
      setResolvedDark(resolveDark("system"));
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = (next) => {
    persistTheme(next);
    setThemeState(next);
    setResolvedDark(resolveDark(next));
  };

  return { theme, setTheme, resolvedDark };
}
