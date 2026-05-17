import { socialLinks } from "../data/socialLinks";
import ThemedIcon from "./ThemedIcon";

const linkClassName =
  "rounded-lg p-2 text-bento-muted transition-colors hover:bg-black/[0.05] hover:text-violet-600 dark:text-bento-muted-dark dark:hover:bg-white/[0.06] dark:hover:text-cyan-300";

const footerLinkClassName =
  "rounded-lg bg-white/85 p-2.5 shadow-sm ring-1 ring-zinc-950/[0.06] transition hover:ring-violet-400/35 dark:bg-white/[0.06] dark:ring-white/[0.08] dark:hover:ring-cyan-400/35";

export function NavbarSocialLinks({ onNavigate, className = "hidden items-center gap-0.5 sm:flex" }) {
  return (
    <div className={className}>
      {socialLinks.map((icon) => (
        <a
          key={icon.id}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
          aria-label={icon.alt}
          onClick={onNavigate}
        >
          <ThemedIcon lightSrc={icon.light} darkSrc={icon.dark} alt="" />
        </a>
      ))}
    </div>
  );
}

export function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((icon) => (
        <a
          key={icon.id}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className={footerLinkClassName}
          aria-label={icon.alt}
        >
          <ThemedIcon lightSrc={icon.light} darkSrc={icon.dark} alt="" />
        </a>
      ))}
    </div>
  );
}
