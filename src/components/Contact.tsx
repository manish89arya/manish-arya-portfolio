import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Looking to enhance your team's quality assurance practices? Let's discuss how my expertise in test automation can contribute to your success.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:manish89arya@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manish89arya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/manish89arya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://manish89arya.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};