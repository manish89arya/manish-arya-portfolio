import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;