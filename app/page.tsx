import Showcase from "./components/Home/Showcase";
import AboutMe from "./components/Home/AboutMe";
import Skills from "./components/Home/Skills";
import WorkHistory from "./components/Home/WorkHistory";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Home/Projects";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <>
      <Showcase />
      <AboutMe />
      <WorkHistory />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
