import { useEffect, useState } from "react";

const icons = [
  {
    id: 1,
    image: "/github-mark.svg",
    img: "/github-mark-white.png",
    alt: "GitHub",
    link: "https://github.com/davunju",
  },
  {
    id: 2,
    image: "/frontendmentor-logo.svg",
    img: "/frontendmentorwhite.svg",
    alt: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/davunju",
  },
  {
    id: 3,
    image: "/linkedin.svg",
    img: "/linkedinwhite.svg",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/david-enock/",
  },
  {
    id: 4,
    image: "/freecodecamp.svg",
    img: "/freecodecampwhite.svg",
    alt: "freeCodeCamp",
    link: "https://www.freecodecamp.org/DavidEnock",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      root.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-3 z-50 px-4 md:px-6">
      <div className="relative mx-auto max-w-5xl">
        <nav className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white/75 px-4 py-2.5 shadow-lg shadow-zinc-950/[0.04] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-slate-950/70 dark:shadow-black/50 md:px-5">
          <a
            href="#about"
            onClick={closeMenu}
            className="shrink-0 bg-gradient-to-r from-zinc-900 via-violet-700 to-cyan-700 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-white dark:via-violet-300 dark:to-cyan-300"
          >
            davunju
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bento-muted transition hover:text-violet-600 dark:text-bento-muted-dark dark:hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-0.5">
            <div className="hidden items-center gap-0.5 sm:flex">
              {icons.map((icon) => (
                <a
                  href={icon.link}
                  key={icon.id}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
                  aria-label={icon.alt}
                >
                  <img
                    src={darkMode ? icon.img : icon.image}
                    alt=""
                    className="size-[1.125rem] opacity-90"
                    aria-hidden
                  />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg p-2 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <img src="/icon-sun.svg" alt="" className="size-[1.125rem]" />
              ) : (
                <img src="/icon-moon.svg" alt="" className="size-[1.125rem]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 md:hidden dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="size-[1.375rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-16 z-40 bg-zinc-950/20 backdrop-blur-[2px] md:hidden dark:bg-black/40"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <div
              id="mobile-nav"
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-xl shadow-zinc-950/10 backdrop-blur-2xl md:hidden dark:border-white/[0.08] dark:bg-slate-950/95 dark:shadow-black/50"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base font-medium text-bento-ink transition hover:bg-violet-500/10 hover:text-violet-700 dark:text-bento-ink-dark dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-1 flex items-center justify-center gap-1 border-t border-zinc-200/80 px-2 py-3 dark:border-white/[0.08] sm:hidden">
                {icons.map((icon) => (
                  <a
                    href={icon.link}
                    key={icon.id}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="rounded-lg p-2.5 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
                    aria-label={icon.alt}
                  >
                    <img
                      src={darkMode ? icon.img : icon.image}
                      alt=""
                      className="size-[1.125rem] opacity-90"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
