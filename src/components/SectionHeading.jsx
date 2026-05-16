export default function SectionHeading({ kicker, title }) {
  return (
    <header className="mb-7 md:mb-9">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan-600 dark:text-cyan-400">
        {kicker}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-bento-ink dark:text-bento-ink-dark md:text-3xl">
        {title}
      </h2>
    </header>
  );
}
