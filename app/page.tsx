import ScrollToTop from "./components/site/ScrollToTop";
import ScrollEffects from "./components/site/ScrollEffects";
import TopNav from "./components/site/TopNav";
import Hero from "./components/site/Hero";
import WorkSection from "./components/site/WorkSection";
import StackSection from "./components/site/StackSection";
import ExperienceSection from "./components/site/ExperienceSection";
import AboutSection from "./components/site/AboutSection";
import ContactSection from "./components/site/ContactSection";

export default function HomePage() {
  return (
    <>
      <ScrollEffects />
      <TopNav />
      <ScrollToTop />
      <Hero />
      <WorkSection />
      <StackSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
