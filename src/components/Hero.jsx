import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-28">
      <header className="mb-10 text-center lg:mb-14 lg:text-left">
        <p className="mb-3 text-sm font-medium text-bento-muted dark:text-bento-muted-dark">
          Hello! I am
        </p>
        <h1 className="text-[2.75rem] font-bold leading-[1.02] tracking-tighter text-bento-ink dark:text-bento-ink-dark sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-zinc-900 via-violet-600 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:via-violet-300 dark:to-cyan-300">
            David Enock
          </span>
        </h1>
        <p className="mt-4 text-xl font-semibold text-violet-700 dark:text-violet-300 sm:text-2xl">
          Frontend developer
        </p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 space-y-6 lg:order-1 lg:col-span-7">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-bento-ink dark:text-white">
              Who am I?
            </h2>
            <p className="text-base leading-relaxed text-bento-muted dark:text-bento-muted-dark md:text-[17px] md:leading-relaxed">
              I&apos;m a developer based in Dodoma, Tanzania, who enjoys turning
              ideas into fast, accessible interfaces. I learn continuously from
              the community and care about details — motion, typography, and
              clear UX — so products feel as good as they look.
            </p>
          </div>

          <blockquote className="border-l-2 border-cyan-500 py-0.5 pl-5 text-[15px] italic leading-relaxed text-bento-ink/90 dark:border-cyan-400 dark:text-zinc-300 md:text-base">
            I really like building software people actually enjoy using.
          </blockquote>

          <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
            <Link to="/contact" className="btn-primary">
              Let&apos;s talk
            </Link>
            <a
              href="https://github.com/davunju"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 opacity-35 blur-2xl dark:opacity-25"
            />
            <div className="relative rounded-full bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-400/25 p-[3px] shadow-xl shadow-violet-500/15 dark:shadow-cyan-500/10">
              <img
                src="/david.jpg"
                alt="David Enock"
                className="size-40 rounded-full object-cover ring-[3px] ring-white dark:ring-slate-950 sm:size-48 md:size-52"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
