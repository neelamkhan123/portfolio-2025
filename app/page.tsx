import Showcase from "./components/Home/Showcase";
import AboutMe from "./components/Home/AboutMe";
import Skills from "./components/Home/Skills";
import WorkHistory from "./components/Home/WorkHistory";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Home/Projects";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Showcase />
      <AboutMe />
      <WorkHistory />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
