import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      root.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const icons = [
    {
      id: 1,
      image: "/github-mark.svg",
      img: "/github-mark-white.png",
      alt: "github logo",
      link: "https://github.com/davunju",
    },
    {
      id: 2,
      image: "/frontendmentor-logo.svg",
      img: "/frontendmentorwhite.svg",
      alt: "frontendmentor logo",
      link: "https://www.frontendmentor.io/profile/davunju",
    },
    {
      id: 3,
      image: "/linkedin.svg",
      img: "/linkedinwhite.svg",
      alt: "linkedin logo",
      link: "https://www.linkedin.com/in/david-enock/",
    },
    {
      id: 4,
      image: "/freecodecamp.svg",
      img: "/freecodecampwhite.svg",
      alt: "freecodecamp logo",
      link: "https://www.freecodecamp.org/DavidEnock",
    },
  ];

  return (
    <section className="dark:text-white text-slate-800">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-5 p-5 w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto">
        <h1 className="font-bold text-xl">davunju</h1>
        <section className="flex justify-center items-center gap-4">
          {icons.map((icon) => (
            <a
              href={icon.link}
              key={icon.id}
              target="_blank"
              className="ring-1 ring-inset p-2 rounded-2xl ring-slate-700 hover:bg-slate-300 transition delay-150 ease-in-out dark:hover:bg-slate-800"
            >
              {darkMode ? (
                <img src={icon.img} alt={icon.alt} className="size-5" />
              ) : (
                <img src={icon.image} alt={icon.alt} className="size-5" />
              )}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 cursor-pointer ring-1 ring-inset rounded-2xl ring-slate-700 hover:bg-slate-300 transition delay-150 ease-in-out dark:hover:bg-slate-800"
          >
            {darkMode ? (
              <img src="/icon-sun.svg" className="size-5" />
            ) : (
              <img src="/icon-moon.svg" className="size-5" />
            )}
          </button>
        </section>
      </nav>
    </section>
  );
}
