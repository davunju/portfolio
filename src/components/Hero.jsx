export default function Hero() {
  return (
    <section className="w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto my-8 lg:my-16 px-5 text-slate-800 dark:text-white">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:items-stretch justify-between">
        <article className="max-[769px]:text-center md:text-center lg:text-start">
          <div className="my-5 md:my-10">
            <h1 className="font-bold max-[340px]:text-3xl md:text-6xl sm:text-5xl max-[450px]:text-4xl lg:text-7xl">
              Nice to meet you!
            </h1>
            <h2 className="font-bold max-[340px]:text-3xl md:text-6xl sm:text-5xl max-[450px]:text-4xl lg:text-7xl">
              I'm{" "}
              <span className="border-b-4 border-emerald-700 text-transparent bg-gradient-to-r from-emerald-700 to-red-400 bg-clip-text">
                David Enock
              </span>
              .
            </h2>
          </div>
          <p className="leading-relaxed w-full lg:w-7/12 font-medium justify-self-stretch mb-5 lg:mb-10">
            Based in Dodoma, Tanzania, I'm a frontend web developer passionate
            about building accessible web apps with great user interfaces and
            user experiences.
          </p>
          <button className="border-b-4 p-2 uppercase border-emerald-700 cursor-pointer font-semibold">
            contact me
          </button>
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
