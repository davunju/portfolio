import Navbar from "./Navbar";

export default function Contact() {
  return (
    <section className="bg-slate-800 py-16">
      <div className="w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto px-5 text-white">
        <section className="flex flex-col md:flex-row gap-10 lg:gap-20 items-start">
          <article>
            <h1 className="font-bold text-3xl md:text-5xl mb-8">Contact</h1>
            <p className="w-full md:w-9/12">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </article>
          <div>
            <form className="w-full space-y-5">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="NAME"
                className="w-full border-b-2 border-slate-600 p-3"
              />
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="EMAIL"
                className="w-full border-b-2 border-slate-600 p-3"
              />
              <textarea
                name="msg"
                id="msg"
                placeholder="MESSAGE"
                className="w-full border-b-2 border-slate-600 p-3"
              ></textarea>
            </form>
            <button className="mt-3 cursor-pointer uppercase py-2 border-b-2 border-emerald-700">
              send message
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
