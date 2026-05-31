import SectionHeading from "./SectionHeading";

export default function Projects() {
  const projects = [
    {
      id: 0,
      image: "/wildessentialsafaris.avif",
      alt: "Wild Essential Safaris",
      name: "Wild Essential Safaris Website",
      url: "https://wildessentialsafaris.com/",
      description: "Tourism agency website with fully functionalities such as booking, staff administrations for CRUD actions.",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 1,
      image: "/restapicountries.png",
      alt: "REST Countries app preview",
      name: "REST Countries API",
      url: "https://davunju-rest-countries.vercel.app/",
      description:
        "Search, filter by region, theme switching, and rich country detail views powered by the REST Countries API.",
      tags: ["React", "Tailwind", "REST"],
    },
    {
      id: 2,
      image: "/ecommerce.png",
      alt: "E-commerce product page preview",
      name: "E-commerce product page",
      url: "https://davunju-ecommerce-product-page.vercel.app/",
      description:
        "Product gallery with lightbox behavior and a polished cart flow — focused on motion and layout.",
      tags: ["React", "TypeScript"],
    },
    {
      id: 3,
      image: "/agecalc.png",
      alt: "Age calculator preview",
      name: "Age calculator",
      url: "https://davunju.github.io/age-calculator/",
      description:
        "Date validation and precise breakdown into years, months, and days.",
      tags: ["JavaScript", "Forms"],
    },
    {
      id: 4,
      image: "/randomadvices.png",
      alt: "Advice generator preview",
      name: "Advice generator",
      url: "https://davunju.github.io/random-advices/",
      description:
        "Single-purpose UI around the Advice Slip API — loading states and playful copy.",
      tags: ["React", "Fetch"],
    },
  ];

  return (
    <section className="scroll-mt-28">
      <header className="mb-10 md:mb-14">
        <SectionHeading kicker="03 — Work" title="Projects" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bento-muted dark:text-bento-muted-dark md:text-[15px]">
          A selection of front-end work with live demos. More challenges on{" "}
          <a
            href="https://www.frontendmentor.io/profile/davunju/solutions"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-violet-600 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-700 dark:text-cyan-300 dark:decoration-cyan-400/50"
          >
            Frontend Mentor
          </a>
          .
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bento-card overflow-hidden rounded-2xl border-zinc-200/80 dark:border-white/[0.07]"
          >
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-video shrink-0 overflow-hidden lg:aspect-auto lg:w-[52%] lg:max-w-none"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-70 lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950/30" />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-zinc-900 opacity-0 shadow-lg backdrop-blur-sm transition duration-300 group-hover:opacity-100 dark:bg-white/15 dark:text-white">
                  Open live ↗
                </span>
              </a>

              <div className="flex flex-1 flex-col justify-center gap-4 bento-card-padding lg:w-[48%] lg:border-l lg:border-zinc-200/70 lg:dark:border-white/[0.06]">
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/t inline-flex flex-wrap items-center gap-2"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-bento-ink transition-colors group-hover/t:text-violet-600 dark:text-bento-ink-dark dark:group-hover/t:text-cyan-300">
                      {project.name}
                    </h3>
                    <span
                      className="text-violet-600 opacity-0 transition-all group-hover/t:translate-x-0 group-hover/t:opacity-100 dark:text-cyan-400"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-bento-muted dark:text-bento-muted-dark md:text-[15px]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bento-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        <a
          href="https://www.frontendmentor.io/profile/davunju/solutions"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300/90 bg-white/50 px-4 py-3.5 text-sm font-semibold text-bento-muted backdrop-blur-sm transition hover:border-violet-400/45 hover:text-violet-700 dark:border-white/[0.12] dark:bg-white/[0.04] dark:text-bento-muted-dark dark:hover:border-cyan-400/35 dark:hover:text-cyan-300 sm:inline-flex sm:w-auto"
        >
          More challenges on Frontend Mentor →
        </a>
      </div>
    </section>
  );
}
