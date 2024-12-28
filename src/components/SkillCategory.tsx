import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { SkillItem } from "./SkillItem";

interface SkillCategoryProps {
  category: string;
  Icon: LucideIcon;
  items: Array<{ name: string; icon?: string }>;
}

export const SkillCategory = ({ category, Icon, items }: SkillCategoryProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-semibold text-accent">{category}</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            category={category}
          />
        ))}
      </div>
    </motion.div>
  );
};