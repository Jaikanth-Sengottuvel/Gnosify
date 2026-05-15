import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import InteractiveGrid from "@/components/InteractiveGrid";
import AboutUs from "@/components/AboutUs";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import NavigationDots from "@/components/NavigationDots";
import StatsBar from "@/components/StatsBar";
import PortfolioPreview from "@/components/PortfolioPreview";

export const metadata: Metadata = {
  title: "Gnosify | AI-First Digital Solutions for Growing Businesses",
  description:
    "Gnosify builds high-performance websites, AI automation, mobile apps, and digital marketing solutions that help businesses grow faster. Get a free consultation today.",
  alternates: { canonical: "https://gnosify.in" },
};

export default function Home() {
  return (
    <main className="scroll-container">
      <InteractiveGrid />
      <Navbar />
      <NavigationDots />
      <div className="slide" id="hero"><Hero /></div>
      <div className="slide" id="about"><AboutUs /></div>
      <div className="slide" style={{ minHeight: 'auto' }}><StatsBar /></div>
      <div className="slide" id="services"><ServicesOverview /></div>
      <div className="slide" id="why-choose-us"><WhyChooseUs /></div>
      <div className="slide" id="technologies"><Technologies /></div>
      <div className="slide" id="portfolio"><PortfolioPreview /></div>
      <div className="slide" id="faq"><FAQ limit={5} /></div>
      <div className="slide" id="contact"><CTA /></div>
      <div className="slide" id="footer" style={{ minHeight: 'auto' }}><Footer /></div>
    </main>
  );
}
