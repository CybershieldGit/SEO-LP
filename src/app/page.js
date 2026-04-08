import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ScopeSection from "@/components/ScopeSection";
import LearnSection from "@/components/LearnSection";
import CountdownSection from "@/components/CountdownSection";
import CaseStudies from "@/components/CaseStudies";
import TrainerSection from "@/components/TrainerSection";
import WhyEnroll from "@/components/WhyEnroll";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Ticker />
      <Hero />
      <Stats />
      <ScopeSection />
      <LearnSection />
      <CountdownSection />
      <CaseStudies />
      <TrainerSection />
      <WhyEnroll />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
