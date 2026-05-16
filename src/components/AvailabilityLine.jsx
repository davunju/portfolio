import { Link } from "react-router-dom";

export const availabilityText =
  "Open to frontend roles · remote or hybrid";

export default function AvailabilityLine({ className = "" }) {
  return (
    <Link
      to="/contact#contact-form"
      className={[
        "group inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-1.5 text-sm font-medium text-emerald-800 transition hover:border-emerald-500/50 hover:bg-emerald-500/[0.14] dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:border-cyan-400/45 dark:hover:bg-cyan-400/[0.16]",
        className,
      ].join(" ")}
    >
      <span
        className="size-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.65)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.55)]"
        aria-hidden
      />
      <span className="text-left leading-snug">{availabilityText}</span>
      <span
        className="text-emerald-600 opacity-0 transition group-hover:opacity-100 dark:text-cyan-300"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}
