import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";
import { SkillCategory } from "./SkillCategory";

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
            {skillsData.map((skillSet) => (
              <SkillCategory
                key={skillSet.category}
                category={skillSet.category}
                Icon={skillSet.icon}
                items={skillSet.items}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};