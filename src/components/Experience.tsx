import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior QA Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led end-to-end testing strategies for enterprise applications, reducing post-release issues by 75%.",
  },
  {
    title: "Test Automation Engineer",
    company: "Digital Innovations Co.",
    period: "2018 - 2020",
    description: "Developed and maintained automated test frameworks, achieving 90% test coverage.",
  },
  {
    title: "Quality Assurance Analyst",
    company: "Software Systems Ltd.",
    period: "2016 - 2018",
    description: "Conducted comprehensive testing for web and mobile applications, ensuring high-quality deliverables.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-accent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-accent mb-3">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};