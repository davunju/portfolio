export default function Tools() {
  const tools = [
    {
      id: 1,
      image: "/html-logo.svg",
      alt: "html logo",
      name: "HTML",
      description: "To structure a web page and its contents",
    },
    {
      id: 2,
      image: "/css-logo.svg",
      alt: "css logo",
      name: "CSS",
      description: "To style a web page layout",
    },
    {
      id: 3,
      image: "/js-logo.svg",
      alt: "js logo",
      name: "JavaScript",
      description: "To add interactivity to a web page",
    },
    {
      id: 4,
      image: "/react-logo.svg",
      alt: "react logo",
      name: "React",
      description: "As a JavaScript library for creating user interfaces",
    },
    {
      id: 5,
      image: "/tailwindcss.svg",
      alt: "tailwind logo",
      name: "Tailwind CSS",
      description: "As a CSS framework for inline styling of elements",
    },
    {
      id: 6,
      image: "/github-logo.svg",
      alt: "github logo",
      name: "Github",
      description: "For version control",
    },
  ];
  return (
    <section className="w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto my-16 px-5 text-slate-800 dark:text-white">
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-center lg:text-start">
        Technologies
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="dark:bg-slate-800 bg-[#EEF8F9] ring ring-inset ring-slate-300 dark:ring-slate-600 rounded-xl p-4 flex items-start gap-3 md:gap-5"
          >
            <img
              src={tool.image}
              alt={tool.alt}
              className="size-10 md:size-12"
            />
            <div>
              <h1 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">
                {tool.name}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
