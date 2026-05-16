import Hero from "../components/Hero";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="relative space-y-20 md:space-y-28">
      <Hero />
      <Tools />
    </div>
  );
}
