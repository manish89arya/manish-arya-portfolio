import { motion } from "framer-motion";
import { Calendar, Building2, MapPin } from "lucide-react";

const experiences = [
  {
    title: "SDET-III",
    company: "Airtel Payments Bank",
    location: "Bhopal, Madhya Pradesh",
    period: "03/2023 - Present",
    achievements: [
      "Led mobile automation testing for Airtel Merchant Android app, leveraging Appium with Java to reduce manual testing effort by 30%",
      "Architected end-to-end testing framework integrating Karate for API automation, improving test environment stability by 90%",
      "Leveraged ARCOS for real-time log analysis across service layers",
      "Standardized test documentation using Zephyr and Confluence, cutting new team member onboarding time by 50%",
    ],
  },
  {
    title: "Sr. QA Engineer",
    company: "Renegade Insurance",
    location: "Bhopal, Madhya Pradesh",
    period: "12/2020 - 03/2023",
    achievements: [
      "Led framework evaluation using PUGH matrix analysis to select optimal testing tools",
      "Designed scalable API automation framework with Postman and Karate, achieving 70% test coverage",
      "Implemented end-to-end CI/CD with Azure Pipelines",
      "Built maintainable Selenium WebDriver framework in Java, reducing maintenance overhead by 30%",
    ],
  },
  {
    title: "Team Lead in Test",
    company: "PayU Payments Pvt Ltd",
    location: "Gurugram, Haryana",
    period: "10/2015 - 07/2020",
    achievements: [
      "Automated test data generation with JMeter, reducing merchant onboarding data creation time by 90%",
      "Built mobile testing framework using Selenium with Java, Cucumber and Appium for PayU app/SDK",
      "Managed end-to-end QA processes with zero critical production bugs",
      "Led 3-person QA team while driving agile methodology adoption",
    ],
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
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-accent mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">{achievement}</li>
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