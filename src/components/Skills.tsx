import { motion } from "framer-motion";
import { Code, Database, Bug, ShieldCheck, TestTube } from "lucide-react";

const skills = [
  {
    category: "Testing",
    items: [
      { name: "Selenium", icon: <TestTube className="w-5 h-5" /> },
      { name: "JUnit", icon: <Bug className="w-5 h-5" /> },
      { name: "TestNG", icon: <ShieldCheck className="w-5 h-5" /> },
      { name: "Cypress", icon: <TestTube className="w-5 h-5" /> },
      { name: "Postman", icon: <Code className="w-5 h-5" /> },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "Jenkins", icon: <Database className="w-5 h-5" /> },
      { name: "GitLab CI", icon: <Code className="w-5 h-5" /> },
      { name: "Docker", icon: <Database className="w-5 h-5" /> },
      { name: "Kubernetes", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Java", icon: <Code className="w-5 h-5" /> },
      { name: "Python", icon: <Code className="w-5 h-5" /> },
      { name: "JavaScript", icon: <Code className="w-5 h-5" /> },
      { name: "SQL", icon: <Database className="w-5 h-5" /> },
    ],
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
                    <li key={skill.name} className="flex items-center space-x-3">
                      <span className="text-accent">{skill.icon}</span>
                      <span>{skill.name}</span>
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