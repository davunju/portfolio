import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-5xl space-y-20 px-4 pb-20 pt-6 md:space-y-28 md:px-6 md:pb-24 md:pt-8">
        <Hero />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
