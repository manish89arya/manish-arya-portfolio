import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;