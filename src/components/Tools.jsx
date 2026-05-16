import SectionHeading from "./SectionHeading";

const highlights = [
  { lead: "Accessible", rest: "interfaces" },
  { lead: "Component", rest: "architecture" },
  { lead: "Responsive", rest: "by default" },
  { lead: "Calm", rest: "motion & UX" },
  { lead: "Ship", rest: "with care" },
];

const spanClass = {
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const tools = [
  {
    id: 1,
    image: "/html-logo.svg",
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
    tone: "tech-glass-violet",
    span: 2,
  },
  {
    id: 2,
    image: "/css-logo.svg",
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
    tone: "tech-glass-cyan",
    span: 2,
  },
  {
    id: 3,
    image: "/js-logo.svg",
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",
    tone: "tech-glass-indigo",
    span: 2,
  },
  {
    id: 4,
    image: "/react-logo.svg",
    name: "React",
    url: "https://react.dev/",
    tone: "tech-glass-violet",
    span: 4,
    featured: true,
  },
  {
    id: 5,
    image: "/nextjs.png",
    name: "Next.js",
    url: "https://nextjs.org/",
    tone: "tech-glass-indigo",
    span: 2,
  },
  {
    id: 6,
    image: "/tailwindcss.svg",
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    tone: "tech-glass-cyan",
    span: 3,
  },
  {
    id: 7,
    image: "/github-logo.svg",
    name: "GitHub",
    url: "https://github.com/",
    tone: "tech-glass-cyan",
    span: 3,
  },
  {
    id: 8,
    image: "/zabbix.png",
    name: "Zabbix",
    url: "https://www.zabbix.com/",
    tone: "tech-glass-violet",
    span: 2,
  },
  {
    id: 9,
    image: "/grafana.png",
    name: "Grafana",
    url: "https://grafana.com/",
    tone: "tech-glass-indigo",
    span: 4,
    featured: true,
  },
];

export default function Tools() {
  return (
    <section id="technologies" className="scroll-mt-28 overflow-hidden">
      <SectionHeading
        kicker="02 — Stack"
        title="Technologies I have worked with"
      />

      <div className="mt-1 grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
        <aside className="tech-glass-card tech-glass-violet flex flex-col justify-center gap-5 p-6 md:p-8 lg:col-span-7">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
              How I build
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-bento-muted dark:text-bento-muted-dark">
              Principles behind the tools I reach for every day.
            </p>
          </div>

          <ul className="space-y-3" aria-label="Development highlights">
            {highlights.map((item) => (
              <li
                key={item.lead}
                className="text-base font-medium leading-snug tracking-tight md:text-lg"
              >
                <span className="tech-highlight-word">{item.lead}</span>
                {item.rest ? (
                  <span className="text-bento-muted dark:text-bento-muted-dark">
                    {" "}
                    {item.rest}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </aside>

        <div className="grid min-w-0 grid-cols-6 gap-2.5 auto-rows-[minmax(4.75rem,auto)] lg:col-span-5 lg:gap-2">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${tool.name} — open documentation`}
              className={[
                "tech-glass-card group relative z-0 flex min-w-0 items-center justify-center overflow-hidden p-3",
                spanClass[tool.span] ?? spanClass[2],
                tool.tone,
              ].join(" ")}
            >
              <span className="relative z-10 flex size-10 items-center justify-center rounded-xl border border-white/60 bg-white/50 shadow-inner shadow-zinc-950/[0.03] backdrop-blur-md transition duration-300 group-hover:scale-105 group-focus-visible:scale-105 dark:border-white/10 dark:bg-white/[0.08] md:size-11">
                <img
                  src={tool.image}
                  alt=""
                  className={[
                    "object-contain transition duration-300 group-hover:scale-95 group-focus-visible:scale-95",
                    tool.featured ? "size-7" : "size-6",
                  ].join(" ")}
                  aria-hidden
                />
              </span>

              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-2 pb-2 pt-6 text-center text-[11px] font-semibold leading-tight tracking-tight text-zinc-800 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 dark:text-zinc-100"
                aria-hidden
              >
                <span className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/70" />
                <span className="relative">{tool.name}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
