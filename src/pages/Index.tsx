import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";

const Index = () => {
  console.log("Index page rendering"); // Adding logging for debugging

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;