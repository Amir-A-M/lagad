import About from "@/components/about/about";
import { Features } from "@/components/features/features";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
    </main>
  );
}
