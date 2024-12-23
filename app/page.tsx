import About from "@/components/About";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NeighborhoodsCovered from "@/components/NeighborhoodsCovered";
import Services from "@/components/Services";
import ServicesCards from "@/components/ServicesCards";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ServicesCards />

      <NeighborhoodsCovered />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  )
}

