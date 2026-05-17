const iconClass = "size-[1.125rem] shrink-0";

export function SunIcon({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function SystemIcon({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

/** Icon for the theme trigger: current appearance when on system. */
export function ThemeTriggerIcon({ preference, resolvedDark, className = iconClass }) {
  if (preference === "system") {
    return resolvedDark ? (
      <MoonIcon className={className} />
    ) : (
      <SunIcon className={className} />
    );
  }

  return preference === "dark" ? (
    <MoonIcon className={className} />
  ) : (
    <SunIcon className={className} />
  );
}

/** Icon beside each option in the theme menu. */
export function ThemeOptionIcon({ value, className = iconClass }) {
  if (value === "system") return <SystemIcon className={className} />;
  if (value === "dark") return <MoonIcon className={className} />;
  return <SunIcon className={className} />;
}
