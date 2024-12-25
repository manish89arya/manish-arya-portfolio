import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Awards } from "../components/Awards";
import { Contact } from "../components/Contact";

const Index = () => {
  console.log("Index page rendering");

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;