import SectionHeading from "./SectionHeading";

export default function Tools() {
  const tools = [
    {
      id: 1,
      image: "/html-logo.svg",
      name: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
    },
    {
      id: 2,
      image: "/css-logo.svg",
      name: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
    },
    {
      id: 3,
      image: "/js-logo.svg",
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",
    },
    {
      id: 4,
      image: "/react-logo.svg",
      name: "React",
      url: "https://react.dev/",
    },
    {
      id: 5,
      image: "/nextjs.png",
      name: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      id: 6,
      image: "/tailwindcss.svg",
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      id: 7,
      image: "/github-logo.svg",
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      id: 8,
      image: "/zabbix.png",
      name: "Zabbix",
      url: "https://www.zabbix.com/",
    },
    {
      id: 9,
      image: "/grafana.png",
      name: "Grafana",
      url: "https://grafana.com/",
    },
  ];

  return (
    <section id="technologies" className="scroll-mt-28">
      <SectionHeading
        kicker="02 — Stack"
        title="Technologies I have worked with"
      />
      <div className="flex flex-wrap gap-2 md:gap-2.5">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="tech-pill"
          >
            <img
              src={tool.image}
              alt=""
              className="size-5 shrink-0 opacity-90 dark:opacity-100"
              aria-hidden
            />
            <span>{tool.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
