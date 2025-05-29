import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("https://contact-backend-l8ez.onrender.com", formData);
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send. Try again.");
      console.log(error);
    }
  };
  return (
    <section id="contact" className="bg-slate-800 py-16">
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
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <input
                type="text"
                name="name"
                id="fullname"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="NAME"
                className="w-full border-b-2 border-slate-600 p-3"
              />
              <input
                type="email"
                name="email"
                id="mail"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="EMAIL"
                className="w-full border-b-2 border-slate-600 p-3"
              />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="MESSAGE"
                className="w-full border-b-2 border-slate-600 p-3"
              ></textarea>
            </form>
            <button
              type="submit"
              className="mt-3 cursor-pointer uppercase p-2 border-b-4 border-emerald-700 hover:bg-emerald-600 hover:ring-2 hover:ring-emerald-700 hover:rounded-xl hover:text-neutral-100 transition ease-in-out delay-150"
            >
              send message
            </button>
            <p>{status}</p>
          </div>
        </section>
      </div>
    </section>
  );
}
