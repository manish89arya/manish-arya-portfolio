import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills = [
  {
    category: "Testing",
    items: ["Selenium", "JUnit", "TestNG", "Cypress", "Postman"],
  },
  {
    category: "Automation",
    items: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
  },
  {
    category: "Programming",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet) => (
              <motion.div
                key={skillSet.category}
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {skillSet.category}
                </h3>
                <ul className="space-y-3">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};