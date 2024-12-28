import { CheckCircle2, Users } from "lucide-react";

interface SkillItemProps {
  name: string;
  icon?: string;
  category: string;
}

export const SkillItem = ({ name, icon, category }: SkillItemProps) => {
  const renderIcon = () => {
    if (icon) {
      return <img src={icon} alt={`${name} icon`} className="w-6 h-6 object-contain" />;
    }
    
    // Use default icons based on category
    if (category === "Testing Skills") {
      return <CheckCircle2 className="w-6 h-6" />;
    }
    if (category === "Soft Skills") {
      return <Users className="w-6 h-6" />;
    }
    
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-accent/10 transition-colors gap-2">
      {renderIcon()}
      <span className="text-sm text-gray-700 text-center">{name}</span>
    </div>
  );
};