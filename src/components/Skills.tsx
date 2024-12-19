import { motion } from "framer-motion";

const skills = [
  {
    category: "Testing",
    items: [
      { 
        name: "Selenium", 
        icon: "https://raw.githubusercontent.com/SeleniumHQ/seleniumhq.github.io/trunk/selenium-website/static/images/selenium_logo_square_green.png" 
      },
      { 
        name: "JUnit", 
        icon: "https://avatars.githubusercontent.com/u/874086?s=200&v=4" 
      },
      { 
        name: "TestNG", 
        icon: "https://e7.pngegg.com/pngimages/640/776/png-clipart-testng-logo-software-testing-software-framework-computer-icons-automation-testing-angle-text.png" 
      },
      { 
        name: "Cypress", 
        icon: "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg" 
      },
      { 
        name: "Postman", 
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
      },
    ],
  },
  {
    category: "Automation",
    items: [
      { 
        name: "Jenkins", 
        icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" 
      },
      { 
        name: "GitLab CI", 
        icon: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" 
      },
      { 
        name: "Docker", 
        icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" 
      },
      { 
        name: "Kubernetes", 
        icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" 
      },
    ],
  },
  {
    category: "Programming",
    items: [
      { 
        name: "Java", 
        icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg" 
      },
      { 
        name: "Python", 
        icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" 
      },
      { 
        name: "JavaScript", 
        icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" 
      },
      { 
        name: "SQL", 
        icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" 
      },
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
                <ul className="space-y-4">
                  {skillSet.items.map((skill) => (
                    <li key={skill.name} className="flex items-center space-x-3">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-6 h-6 object-contain"
                      />
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