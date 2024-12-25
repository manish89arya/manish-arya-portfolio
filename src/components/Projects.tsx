import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Globe, Gauge } from "lucide-react";

const projects = [
  {
    title: "PayU Mobile App & SDK",
    description: "Led end-to-end testing for PayU's mobile applications and SDK integration. Built comprehensive mobile testing framework using Selenium, Java, Cucumber and Appium.",
    tech: ["Appium", "Selenium", "Java", "Cucumber"],
    icon: <Smartphone className="w-6 h-6 text-accent" />,
  },
  {
    title: "Merchant Onboarding Automation",
    description: "Automated test data generation process for merchant onboarding, reducing data creation time by 90% while ensuring data quality and consistency.",
    tech: ["JMeter", "Java", "MySQL"],
    icon: <Globe className="w-6 h-6 text-accent" />,
  },
  {
    title: "Performance Testing Framework",
    description: "Designed and implemented performance testing solutions using JMeter and Grafana, significantly improving application performance metrics.",
    tech: ["JMeter", "Grafana", "Docker"],
    icon: <Gauge className="w-6 h-6 text-accent" />,
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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