const icons = [
  {
    id: 1,
    light: "/github-mark.svg",
    dark: "/github-mark-white.png",
    alt: "GitHub",
    link: "https://github.com/davunju",
  },
  {
    id: 2,
    light: "/frontendmentor-logo.svg",
    dark: "/frontendmentorwhite.svg",
    alt: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/davunju",
  },
  {
    id: 3,
    light: "/linkedin.svg",
    dark: "/linkedinwhite.svg",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/david-enock/",
  },
  {
    id: 4,
    light: "/freecodecamp.svg",
    dark: "/freecodecampwhite.svg",
    alt: "freeCodeCamp",
    link: "https://www.freecodecamp.org/DavidEnock",
  },
];

export default function Footer() {
  return (
    <footer className="relative shrink-0 border-t border-zinc-200/70 bg-white/45 px-4 py-8 backdrop-blur-md dark:border-white/[0.06] dark:bg-slate-950/50 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-bento-muted dark:text-bento-muted-dark sm:text-left">
          © {new Date().getFullYear()} David Enock · React & Tailwind
        </p>
        <div className="flex items-center gap-2">
          {icons.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              aria-label={icon.alt}
              className="rounded-lg bg-white/85 p-2.5 shadow-sm ring-1 ring-zinc-950/[0.06] transition hover:ring-violet-400/35 dark:bg-white/[0.06] dark:ring-white/[0.08] dark:hover:ring-cyan-400/35"
            >
              <img
                src={icon.light}
                alt=""
                className="size-[1.125rem] dark:hidden"
                aria-hidden
              />
              <img
                src={icon.dark}
                alt=""
                className="hidden size-[1.125rem] dark:block"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
