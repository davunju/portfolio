export default function Footer() {
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
    <section className="text-white bg-slate-800">
      <footer className="flex flex-col md:flex-row gap-5 justify-between items-center px-5 py-8 w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto border-t-2 border-slate-600">
        <h1 className="font-bold text-xl">davunju</h1>
        <section className="flex justify-center items-center gap-4">
          {icons.map((icon) => (
            <a href={icon.link} key={icon.id} target="_blank">
              <img src={icon.img} alt={icon.alt} className="size-5" />
            </a>
          ))}
        </section>
      </footer>
    </section>
  );
}
