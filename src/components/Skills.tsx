import { motion } from "framer-motion";

const skills = [
  {
    category: "Testing",
    items: [
      { 
        name: "Selenium", 
        icon: "https://www.selenium.dev/images/selenium_logo_square_green.png" 
      },
      { 
        name: "JUnit", 
        icon: "https://junit.org/junit5/assets/img/junit5-logo.png" 
      },
      { 
        name: "TestNG", 
        icon: "https://testng.org/images/testng-logo.png" 
      },
      { 
        name: "Cypress", 
        icon: "https://www.cypress.io/images/layouts/cypress-logo.svg" 
      },
      { 
        name: "Postman", 
        icon: "https://www.postman.com/_ar-assets/images/postman-logo-icon-orange.svg" 
      },
    ],
  },
  {
    category: "Automation",
    items: [
      { 
        name: "Jenkins", 
        icon: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" 
      },
      { 
        name: "GitLab CI", 
        icon: "https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg" 
      },
      { 
        name: "Docker", 
        icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" 
      },
      { 
        name: "Kubernetes", 
        icon: "https://kubernetes.io/images/favicon.png" 
      },
    ],
  },
  {
    category: "Programming",
    items: [
      { 
        name: "Java", 
        icon: "https://dev.java/assets/images/java-logo-vert-blk.png" 
      },
      { 
        name: "Python", 
        icon: "https://www.python.org/static/community_logos/python-logo-generic.svg" 
      },
      { 
        name: "JavaScript", 
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
      },
      { 
        name: "SQL", 
        icon: "https://www.postgresql.org/media/img/about/press/elephant.png" 
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