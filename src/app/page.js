import About from "@/components/about/about";
import NewsletterBanner from "@/components/banner/newsletter";
import FeaturedPosts from "@/components/blog/featured-posts";
import FAQ from "@/components/faq/FAQ";
import { Features } from "@/components/features/features";
import Footer from "@/components/footer/footer";
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
      <FAQ />
      <NewsletterBanner />
      <Footer />
    </main>
  );
}
