import "../styles/LandingPage.css";
import { FeaturesSection } from "../components/Card";
import { NewsSection } from "../components/Noticias";
import { Header } from "../components/Header";
import { ProjectionsSection } from "../components/ProjectionsSection";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { AboutSection } from "../components/AboutSection";
import { ObjectivesSection } from "../components/ObjectivesSection";
import { AdhesionSection } from "../components/AdhesionSection";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <AboutSection />
      <ObjectivesSection />
      <FeaturesSection />
      <ProjectionsSection />
      <AdhesionSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
