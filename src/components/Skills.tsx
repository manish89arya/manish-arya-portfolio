import { motion } from "framer-motion";
import { Code, Cog, Bug, Database, GitBranch, Laptop, BarChart, ClipboardList } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-6 h-6 text-accent" />,
    items: [
      { name: "Java", level: "Expert" },
      { name: "Karate DSL", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
    ],
  },
  {
    category: "Test Automation",
    icon: <Bug className="w-6 h-6 text-accent" />,
    items: [
      { name: "Selenium", level: "Expert" },
      { name: "Appium", level: "Expert" },
      { name: "TestNG", level: "Expert" },
      { name: "Rest Assured", level: "Advanced" },
      { name: "Cucumber", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "JMeter", level: "Advanced" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    items: [
      { name: "Git", level: "Expert" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Azure Pipelines", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: <Laptop className="w-6 h-6 text-accent" />,
    items: [
      { name: "IntelliJ", level: "Expert" },
      { name: "VSCode", level: "Advanced" },
      { name: "Android Studio", level: "Advanced" },
      { name: "Xcode", level: "Intermediate" },
      { name: "Datadog", level: "Intermediate" },
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
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skillSet) => (
              <motion.div
                key={skillSet.category}
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skillSet.icon}
                  <h3 className="text-xl font-semibold text-accent">{skillSet.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillSet.items.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-accent">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};