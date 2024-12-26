import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Globe, Server, Database } from "lucide-react";

const projects = [
  {
    title: "Airtel Merchant & Mitra App",
    description: "Led end-to-end mobile and API automation testing for merchant-focused applications.",
    achievements: [
      "Led mobile automation testing for Airtel Merchant Android app, reducing manual testing effort by 30%",
      "Architected end-to-end testing framework integrating Karate for API automation, improving test environment stability by 90%",
      "Leveraged ARCOS for real-time log analysis across service layers",
      "Standardized test documentation using Zephyr and Confluence, cutting onboarding time by 50%"
    ],
    tech: ["Appium", "Java", "Karate", "ARCOS"],
    icon: <Smartphone className="w-6 h-6 text-accent" />,
    links: [
      { text: "Mitra App", url: "https://play.google.com/store/apps/details?id=com.airtel.agilelabs.retailerapp&hl=en_IN" },
      { text: "Airtel Merchant App", url: "https://play.google.com/store/apps/details?id=com.apbl.merchant&hl=en_IN" }
    ]
  },
  {
    title: "Renegade CRM & Quoting",
    description: "Implemented comprehensive testing solutions for insurance quoting and CRM platforms.",
    achievements: [
      "Designed scalable API automation framework achieving 70% test coverage",
      "Implemented end-to-end CI/CD with Azure Pipelines",
      "Built maintainable Selenium WebDriver framework reducing maintenance by 30%",
      "Improved system performance using JMeter"
    ],
    tech: ["Selenium", "Azure Pipelines", "Karate", "JMeter"],
    icon: <Globe className="w-6 h-6 text-accent" />,
    links: [
      { text: "renegadeinsurance", url: "https://renegadeinsurance.com/" }
    ]
  },
  {
    title: "HRMS & Society Management Portal",
    description: "Developed testing infrastructure for government management portals.",
    achievements: [
      "Developed comprehensive test strategy with 100% requirements coverage",
      "Built scalable API testing framework cutting regression time by 70%"
    ],
    tech: ["Postman", "Azure DevOps", "TestNG"],
    icon: <Server className="w-6 h-6 text-accent" />
  },
  {
    title: "PayU App & SDK",
    description: "Led testing initiatives for payment processing mobile applications and SDK integration.",
    achievements: [
      "Automated test data generation reducing merchant onboarding time by 90%",
      "Built mobile testing framework for Android and iOS platforms",
      "Managed end-to-end QA processes with zero critical bugs",
      "Optimized mobile build management for .apk, .app, and .ipa files"
    ],
    tech: ["Appium", "Selenium", "JMeter", "Cucumber"],
    icon: <Smartphone className="w-6 h-6 text-accent" />,
    links: [
      { text: "PayU App", url: "https://play.google.com/store/apps/details?id=payumoney.merchantapp&hl=en_IN" },
      { text: "Android Checkout Pro SDK", url: "https://docs.payu.in/docs/android-checkoutpro-sdk" }
    ]
  },
  {
    title: "Feelshare",
    description: "Managed business analysis and testing for social media platform.",
    achievements: [
      "Documented user stories and requirements through stakeholder collaboration",
      "Created detailed requirement docs and facilitated discussions",
      "Improved project forecasting and client billing",
      "Conducted cross-platform testing validation"
    ],
    tech: ["Gherkin", "BDD", "Mobile Testing"],
    icon: <Database className="w-6 h-6 text-accent" />
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {project.icon}
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {project.description}
                    </CardDescription>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                    {project.links && (
                      <div className="mb-4">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-accent hover:underline mb-1"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};