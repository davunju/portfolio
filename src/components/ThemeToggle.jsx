import { useEffect, useId, useRef, useState } from "react";
import useTheme from "../hooks/useTheme";
import {
  ThemeOptionIcon,
  ThemeTriggerIcon,
} from "./icons/ThemeIcons";

const options = [
  {
    value: "system",
    label: "System",
    description: "Match device setting",
  },
  {
    value: "light",
    label: "Light",
    description: "Always light",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always dark",
  },
];

export default function ThemeToggle() {
  const menuId = useId();
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedDark } = useTheme();

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const active = options.find((option) => option.value === theme) ?? options[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-lg p-2 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={menuId}
        aria-label={`Theme: ${active.label}. Change theme`}
      >
        <ThemeTriggerIcon preference={theme} resolvedDark={resolvedDark} />
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label="Theme"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[11.5rem] overflow-hidden rounded-xl border border-zinc-200/90 bg-white/95 p-1 shadow-xl shadow-zinc-950/10 backdrop-blur-2xl dark:border-white/[0.1] dark:bg-slate-950/95 dark:shadow-black/50"
        >
          {options.map((option) => {
            const selected = theme === option.value;
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setTheme(option.value);
                    setOpen(false);
                  }}
                  className={[
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition",
                    selected
                      ? "bg-violet-500/10 text-violet-700 dark:bg-cyan-400/10 dark:text-cyan-300"
                      : "text-bento-ink hover:bg-black/[0.04] dark:text-bento-ink-dark dark:hover:bg-white/[0.06]",
                  ].join(" ")}
                >
                  <ThemeOptionIcon value={option.value} />
                  <span className="flex min-w-0 flex-col">
                    <span className="font-medium leading-tight">{option.label}</span>
                    <span className="text-xs text-bento-muted dark:text-bento-muted-dark">
                      {option.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
