
import { motion } from "framer-motion";
import { Calendar, Building2, MapPin } from "lucide-react";
import { ExperienceTable } from "./ExperienceTable";

const experiences = [
  {
    title: "SDET-III",
    company: "Airtel Payments Bank",
    logo: "/lovable-uploads/c5f83569-7e8d-48df-a1b8-0b695c16179d.png",
    location: "Bhopal, Madhya Pradesh",
    period: "03/2023 - Present",
    description: "Leading mobile and API automation initiatives while mentoring junior QA team members."
  },
  {
    title: "Sr. QA Engineer",
    company: "Renegade Insurance",
    logo: "/lovable-uploads/0c869001-056a-4f19-8f80-a91373c9d6f4.png",
    location: "Bhopal, Madhya Pradesh",
    period: "12/2020 - 03/2023",
    description: "Led framework evaluation and implementation while serving as Acting Lead for the QA team."
  },
  {
    title: "Test Engineer",
    company: "Madhya Pradesh Agency For Promotion Of Information Technology",
    logo: "/lovable-uploads/310e2bb8-1860-4495-8fa7-ade1897c16a8.png",
    location: "Bhopal, Madhya Pradesh",
    period: "08/2020 - 11/2020",
    description: "Developed test strategies and frameworks for government management portals."
  },
  {
    title: "Team Lead in Test",
    company: "PayU Payments Pvt Ltd",
    logo: "/lovable-uploads/a69d5d4c-eb3e-4199-a949-dc3db1dc656c.png",
    location: "Gurugram, Haryana",
    period: "10/2015 - 07/2020",
    description: "Led QA team and managed end-to-end testing processes for payment processing applications."
  },
  {
    title: "Business Management Analyst",
    company: "Systango Infosoft Pvt Ltd",
    logo: "/lovable-uploads/2588a4fa-eacc-458c-a01e-593970b36099.png",
    location: "Indore, Madhya Pradesh",
    period: "01/2014 - 10/2015",
    description: "Managed requirements documentation and testing for social media platform development."
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
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    )}
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
                  </div>
                  <div className="flex items-center gap-2 text-accent mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ExperienceTable />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
