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
          <p className="leading-relaxed w-full lg:w-7/12 font-medium justify-self-stretch mb-5 lg:mb-10">
            Based in Dodoma, Tanzania, I'm a frontend web developer passionate
            about building accessible web apps with great user interfaces and
            user experiences.
          </p>
          <a
            href="#contact"
            className="inline-block border-b-4 py-2.5 px-6 uppercase border-emerald-700 hover:bg-emerald-700 transition ease-in-out delay-150 cursor-pointer font-semibold bg-emerald-600 ring-2 ring-emerald-700 rounded-xl text-neutral-100"
          >
            contact me
          </a>
        </article>
        <div>
          <img
            src="/david.jpg"
            alt="my image"
            className="w-[560px] rounded-3xl lg:skew-2"
          />
        </div>
      </div>
    </section>
  );
}
