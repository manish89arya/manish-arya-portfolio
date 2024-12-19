import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
            Senior QA Engineer & SDET
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Driving Quality Through
            <span className="text-accent"> Automation Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            10+ years of expertise in Test Automation, Performance Testing, and DevOps practices.
            Specializing in building robust test frameworks and CI/CD pipelines.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium 
                       hover:bg-accent/90 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/manish89arya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium 
                       hover:bg-accent/10 transition-colors duration-200"
            >
              View LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};