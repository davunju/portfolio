export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/restapicountries.png",
      alt: "restapi project preview",
      name: "rest countries api with colour theme switcher",
      url: "https://davunju-rest-countries.vercel.app/",
      description:
        "The project displays data from Rest Countries API, enabling user to see all countries, search, toggle colour theme, filter countries by region and view detailed information about a country.",
      tags: ["React", "Tailwindcss", "Axios", "RestAPI"],
    },
    {
      id: 2,
      image: "/ecommerce.png",
      alt: "ecommerce project preview",
      name: "e-commerce product page",
      url: "https://davunju-ecommerce-product-page.vercel.app/",
      description:
        "This project highlighted my JavaScript skills with the lightbox product gallery and cart functionality.",
      tags: ["Tailwindcss", "React", "TypeScript"],
    },
    {
      id: 3,
      image: "/agecalc.png",
      alt: "age calculator preview",
      name: "age calculator app",
      url: "https://davunju.github.io/age-calculator/",
      description:
        "This project sharpened my JavaScript and form validation skills, through working with dates in JavaScript. View an age in years, months, and days after submitting a valid date through the form",
      tags: ["JavaScript", "Tailwindcss", "FormValidation"],
    },
    {
      id: 4,
      image: "/randomadvices.png",
      alt: "random advices preview",
      name: "advice generator app",
      url: "https://davunju.github.io/random-advices/",
      description:
        "This was the perfect project for learning how to interact with 3rd-party APIs. The challenge used the Advice Slip API to generate random quotes of advice.",
      tags: ["React", "Tailwindcss", "FetchAPI"],
    },
  ];
  return (
    <section className="w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto my-16 px-5 text-slate-800 dark:text-white">
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-center lg:text-start">
        Projects
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-slate-800 bg-[#EEF8F9] ring ring-inset ring-slate-300 dark:ring-slate-600 rounded-xl overflow-hidden"
          >
            <a href={project.url} target="_blank">
              <img
                src={project.image}
                alt={project.alt}
                className="rounded-t-xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </a>
            <div className="p-5">
              <div className="border-t-2 border-b-2 py-5 border-slate-300 dark:border-slate-700 mb-5">
                <a href={project.url} target="_blank">
                  <h1 className="capitalize font-semibold text-lg md:text-xl mb-3 hover:underline hover:underline-offset-4">
                    {project.name}
                  </h1>
                </a>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                {project.tags.map((tag) => (
                  <p className="text-sm md:text-base" key={tag}>
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
