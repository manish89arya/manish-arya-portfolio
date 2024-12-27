import { motion } from "framer-motion";
import { Code, Database, GitBranch, Laptop, Terminal, TestTube } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-6 h-6 text-accent" />,
    items: [
      { name: "Java", icon: "/lovable-uploads/java-icon.png" },
      { name: "Karate DSL", icon: "/lovable-uploads/karate-icon.png" },
      { name: "Gherkin", icon: "/lovable-uploads/cucumber-icon.png" },
      { name: "JavaScript", icon: "/lovable-uploads/js-icon.png" },
      { name: "Python", icon: "/lovable-uploads/python-icon.png" },
      { name: "Bash", icon: "/lovable-uploads/bash-icon.png" },
    ],
  },
  {
    category: "Test Automation",
    icon: <TestTube className="w-6 h-6 text-accent" />,
    items: [
      { name: "Selenium", icon: "/lovable-uploads/selenium-icon.png" },
      { name: "Appium", icon: "/lovable-uploads/appium-icon.png" },
      { name: "TestNG", icon: "/lovable-uploads/testng-icon.png" },
      { name: "Rest Assured", icon: "/lovable-uploads/rest-assured-icon.png" },
      { name: "Cucumber", icon: "/lovable-uploads/cucumber-icon.png" },
      { name: "Postman", icon: "/lovable-uploads/postman-icon.png" },
      { name: "JMeter", icon: "/lovable-uploads/jmeter-icon.png" },
      { name: "GraphQL", icon: "/lovable-uploads/graphql-icon.png" },
    ],
  },
  {
    category: "Version Control & Infrastructure",
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    items: [
      { name: "Git", icon: "/lovable-uploads/git-icon.png" },
      { name: "Jenkins", icon: "/lovable-uploads/jenkins-icon.png" },
      { name: "Azure Pipelines", icon: "/lovable-uploads/azure-icon.png" },
      { name: "Docker", icon: "/lovable-uploads/docker-icon.png" },
      { name: "MySQL", icon: "/lovable-uploads/mysql-icon.png" },
      { name: "MongoDB", icon: "/lovable-uploads/mongodb-icon.png" },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: <Laptop className="w-6 h-6 text-accent" />,
    items: [
      { name: "IntelliJ", icon: "/lovable-uploads/intellij-icon.png" },
      { name: "VSCode", icon: "/lovable-uploads/vscode-icon.png" },
      { name: "Eclipse", icon: "/lovable-uploads/eclipse-icon.png" },
      { name: "Android Studio", icon: "/lovable-uploads/android-studio-icon.png" },
      { name: "Xcode", icon: "/lovable-uploads/xcode-icon.png" },
      { name: "Datadog", icon: "/lovable-uploads/datadog-icon.png" },
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
                <div className="flex items-center gap-3 mb-6">
                  {skillSet.icon}
                  <h3 className="text-xl font-semibold text-accent">{skillSet.category}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {skillSet.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors gap-2"
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-sm text-gray-700 text-center">{skill.name}</span>
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