import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarSocialLinks } from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", pathname: "/", hash: "#about" },
  { label: "Tech", pathname: "/", hash: "#technologies" },
  { label: "Projects", pathname: "/projects" },
  { label: "Contact", pathname: "/contact" },
];

function isNavLinkActive(link, { pathname, hash }) {
  if (!link.hash) {
    return pathname === link.pathname;
  }

  if (pathname !== "/") {
    return false;
  }

  return hash === link.hash;
}

function getNavLinkTo(link) {
  if (link.hash) {
    return { pathname: link.pathname, hash: link.hash };
  }
  return link.pathname;
}

function navLinkClassName(isActive) {
  return [
    "text-sm font-medium transition",
    isActive
      ? "text-violet-600 dark:text-cyan-300"
      : "text-bento-muted hover:text-violet-600 dark:text-bento-muted-dark dark:hover:text-cyan-300",
  ].join(" ");
}

function mobileNavLinkClassName(isActive) {
  return [
    "rounded-xl px-4 py-3 text-base font-medium transition",
    isActive
      ? "bg-violet-500/10 text-violet-700 dark:bg-cyan-400/10 dark:text-cyan-300"
      : "text-bento-ink hover:bg-violet-500/10 hover:text-violet-700 dark:text-bento-ink-dark dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-3 z-50 px-4 md:px-6">
      <div className="relative mx-auto max-w-5xl">
        <nav className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white/75 px-4 py-2.5 shadow-lg shadow-zinc-950/[0.04] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-slate-950/70 dark:shadow-black/50 md:px-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 bg-gradient-to-r from-zinc-900 via-violet-700 to-cyan-700 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-white dark:via-violet-300 dark:to-cyan-300"
          >
            davunju
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(link, location);
              return (
                <Link
                  key={link.label}
                  to={getNavLinkTo(link)}
                  className={navLinkClassName(isActive)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-0.5">
            <NavbarSocialLinks />

            <ThemeToggle />

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
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
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
                {navLinks.map((link) => {
                  const isActive = isNavLinkActive(link, location);
                  return (
                    <Link
                      key={link.label}
                      to={getNavLinkTo(link)}
                      onClick={closeMenu}
                      className={mobileNavLinkClassName(isActive)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <NavbarSocialLinks
                onNavigate={closeMenu}
                className="mt-1 flex items-center justify-center gap-1 border-t border-zinc-200/80 px-2 py-3 dark:border-white/[0.08] sm:hidden"
              />
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
