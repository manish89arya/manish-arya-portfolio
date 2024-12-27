import { motion } from "framer-motion";
import { Code, Database, GitBranch, Laptop, Terminal, TestTube } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-6 h-6 text-accent" />,
    items: [
      { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Karate DSL", icon: "https://karatelabs.github.io/karate/karate-core/favicon.png" },
      { name: "Gherkin", icon: "https://www.vectorlogo.zone/logos/cucumberio/cucumberio-icon.svg" },
      { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
      { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
      { name: "Bash", icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
    ],
  },
  {
    category: "Test Automation",
    icon: <TestTube className="w-6 h-6 text-accent" />,
    items: [
      { name: "Selenium", icon: "https://www.selenium.dev/images/selenium_logo_square_green.png" },
      { name: "Appium", icon: "https://appium.io/docs/en/latest/assets/images/appium-logo-horiz.png" },
      { name: "TestNG", icon: "https://avatars.githubusercontent.com/u/12528662" },
      { name: "Rest Assured", icon: "https://rest-assured.io/img/logo-transparent.png" },
      { name: "Cucumber", icon: "https://www.vectorlogo.zone/logos/cucumberio/cucumberio-icon.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "JMeter", icon: "https://jmeter.apache.org/images/favicon.png" },
      { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
    ],
  },
  {
    category: "Version Control & Infrastructure",
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    items: [
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
      { name: "Azure Pipelines", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
      { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
      { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: <Laptop className="w-6 h-6 text-accent" />,
    items: [
      { name: "IntelliJ", icon: "https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg" },
      { name: "VSCode", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
      { name: "Eclipse", icon: "https://www.vectorlogo.zone/logos/eclipse/eclipse-icon.svg" },
      { name: "Android Studio", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
      { name: "Xcode", icon: "https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" },
      { name: "Datadog", icon: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg" },
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