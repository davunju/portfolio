import Hero from "../components/Hero";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-5xl space-y-20 px-4 pb-20 pt-6 md:space-y-28 md:px-6 md:pb-24 md:pt-8">
      <Hero />
      <Tools />
    </main>
  );
}
