import About from "@/components/about/about";
import FeaturedPosts from "@/components/blog/featured-posts";
import { Features } from "@/components/features/features";
import Hero from "@/components/hero/hero";
import FeaturedProjects from "@/components/projects/featured-projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <FeaturedProjects />
      <FeaturedPosts />
    </main>
  );
}
