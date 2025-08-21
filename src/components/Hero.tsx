
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <motion.img
              src="/lovable-uploads/9abc9e5f-d32f-4320-9896-da6bb1abdf4a.png"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-accent/20 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:+919893070471" className="flex items-center gap-2 text-gray-600 hover:text-accent">
              <Phone className="w-4 h-4" />
              <span>+91 989 307 0471</span>
            </a>
            <a href="mailto:manish1089arya@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-accent">
              <Mail className="w-4 h-4" />
              <span>manish1089arya@gmail.com</span>
            </a>
          </div>

          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
            Software Development Engineer in Test - III
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Driving Quality Through
            <span className="text-accent"> Test Automation Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-left">
            Software QA professional with 10+ years of relevant experience, specializing in 4 years of Web, API, and Mobile
            automation. Self-driven leader focused on product quality through questioning and experiential learning. Proven track
            record of driving continuous improvement across cross-functional teams. Strong domain knowledge in ecommerce,
            fintech, and insurance, enabling effective testing and quality assurance strategies tailored to industry-spec
            requirements.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap"
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
