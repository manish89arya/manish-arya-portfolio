import { motion } from "framer-motion";
import { Code, Database, GitBranch, Laptop, Terminal, TestTube, Bug, Wrench, Server, Blocks } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-6 h-6 text-accent" />,
    items: ["Java", "Karate DSL", "Gherkin", "JavaScript", "Python", "Bash"],
  },
  {
    category: "Test Automation",
    icon: <TestTube className="w-6 h-6 text-accent" />,
    items: ["Selenium", "Appium", "TestNG", "Rest Assured", "Cucumber", "Postman", "JMeter", "GraphQL"],
  },
  {
    category: "DevOps & Infrastructure",
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    items: ["Git", "Jenkins", "Azure Pipelines", "Docker", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & IDEs",
    icon: <Laptop className="w-6 h-6 text-accent" />,
    items: ["IntelliJ", "VSCode", "Eclipse", "Android Studio", "Xcode", "Datadog"],
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
                <div className="flex items-center gap-3 mb-6">
                  {skillSet.icon}
                  <h3 className="text-xl font-semibold text-accent">{skillSet.category}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {skillSet.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{skill}</span>
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