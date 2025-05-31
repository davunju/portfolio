export default function Tools() {
  const tools = [
    {
      id: 1,
      image: "/html-logo.svg",
      alt: "html logo",
      name: "HTML",
      description: "To structure a web page and its contents",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
    },
    {
      id: 2,
      image: "/css-logo.svg",
      alt: "css logo",
      name: "CSS",
      description: "To style a web page layout",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
    },
    {
      id: 3,
      image: "/js-logo.svg",
      alt: "js logo",
      name: "JavaScript",
      description: "To add interactivity to a web page",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",
    },
    {
      id: 4,
      image: "/react-logo.svg",
      alt: "react logo",
      name: "React",
      description: "As a JavaScript library for creating user interfaces",
      url: "https://react.dev/",
    },
    {
      id: 5,
      image: "/tailwindcss.svg",
      alt: "tailwind logo",
      name: "Tailwind CSS",
      description: "As a CSS framework for inline styling of elements",
      url: "https://tailwindcss.com/",
    },
    {
      id: 6,
      image: "/github-logo.svg",
      alt: "github logo",
      name: "Github",
      description: "For version control",
      url: "https://github.com/",
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
            className="dark:bg-slate-800 bg-[#EEF8F9] ring ring-inset ring-slate-300 dark:ring-slate-600 rounded-xl p-4 flex items-center gap-3 md:gap-5"
          >
            <img
              src={tool.image}
              alt={tool.alt}
              className="size-10 md:size-12"
            />
            <a
              href={tool.url}
              target="_blank"
              className="dark:bg-slate-700 bg-slate-200 hover:bg-slate-300 h-full w-full px-5 py-3 rounded-r-xl dark:hover:bg-slate-900 transition-transform delay-300 ease-in-out cursor-pointer"
            >
              <h1 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">
                {tool.name}
              </h1>
              <p className="text-slate-700 dark:text-slate-300">
                {tool.description}
              </p>
            </a>
          </div>
        ))}
      </article>
    </section>
  );
}
