import { FooterSocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative shrink-0 border-t border-zinc-200/70 bg-white/45 px-4 py-8 backdrop-blur-md dark:border-white/[0.06] dark:bg-slate-950/50 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-bento-muted dark:text-bento-muted-dark sm:text-left">
          © {new Date().getFullYear()} David Enock · React & Tailwind
        </p>
        <FooterSocialLinks />
      </div>
    </footer>
  );
}
