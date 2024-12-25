import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  {
    name: "PayU Global \"Thank You\" Award",
    description: "Recognized for outstanding contribution to the successful release of the PayU app, ensuring high-quality on time delivery.",
    year: "2019",
  },
  {
    name: "On-the-Spot Award at PayU",
    description: "Awarded for demonstrating exceptional ownership and leadership in the Common Onboarding Project. Reduced test data creation for multiple products by 90%.",
    year: "2018",
  },
];

export const Awards = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
              >
                <Trophy className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{award.name}</h3>
                  <p className="text-gray-600">{award.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};