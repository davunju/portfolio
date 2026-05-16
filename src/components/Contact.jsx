import { useState } from "react";
import SectionHeading from "./SectionHeading";
import AvailabilityLine from "./AvailabilityLine";
import resumePdf from "../assets/Curriculum_Vitae.pdf";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function Contact() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

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
    if (!accessKey?.trim()) {
      setStatus(
        "Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (see .env.example)."
      );
      return;
    }

    setStatus("Sending…");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Portfolio contact form",
          from_name: "Portfolio site",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Thanks — your message is on its way.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <section className="relative bento-card bento-card-padding scroll-mt-28 pb-6 md:pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-56 rounded-full bg-gradient-to-tl from-violet-500/20 to-transparent blur-3xl dark:from-cyan-500/15"
      />

      <SectionHeading kicker="04 — Contact" title="Get in touch" />

      <div className="relative mt-2 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <AvailabilityLine className="mb-5" />
          <p className="text-sm leading-relaxed text-bento-muted dark:text-bento-muted-dark md:text-[15px]">
            Have a project or role in mind?{" "}
            <a
              href="#contact-form"
              className="font-medium text-violet-600 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-700 dark:text-cyan-300 dark:decoration-cyan-400/50 dark:hover:text-cyan-200"
            >
              Send a message
            </a>{" "}
            — I&apos;ll respond as soon as I can.
          </p>
          <a
            href={resumePdf}
            download="David_Enock_CV.pdf"
            className="btn-secondary mt-5 inline-flex"
          >
            Download CV
          </a>
          {!accessKey?.trim() ? (
            <p className="mt-5 rounded-xl border border-dashed border-violet-400/35 bg-violet-500/[0.06] px-3.5 py-3 text-sm leading-relaxed text-violet-800 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
              Set{" "}
              <code className="rounded-md bg-white/70 px-1.5 py-0.5 text-xs font-medium dark:bg-slate-950/60">
                VITE_WEB3FORMS_ACCESS_KEY
              </code>{" "}
              from{" "}
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-violet-400/50 underline-offset-2 hover:decoration-violet-600 dark:decoration-cyan-400/60"
              >
                web3forms.com
              </a>
              .
            </p>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="scroll-mt-32 space-y-4 rounded-xl border border-zinc-200/80 bg-white/55 p-5 shadow-inner shadow-zinc-950/[0.02] dark:border-white/[0.07] dark:bg-white/[0.04] md:p-6"
          >
            <label className="grid gap-1.5 text-sm font-medium text-bento-ink dark:text-bento-ink-dark">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bento-input"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-bento-ink dark:text-bento-ink-dark">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="bento-input"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-bento-ink dark:text-bento-ink-dark">
              Message
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What would you like to collaborate on?"
                className="bento-input min-h-[130px] resize-y"
              />
            </label>

            <button type="submit" className="btn-primary mt-1 w-full sm:w-auto">
              Send message
            </button>

            {status ? (
              <p
                role="status"
                className="text-sm text-bento-muted dark:text-bento-muted-dark"
              >
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
