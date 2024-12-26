import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  {
    name: "PayU Global \"Thank You\" Award",
    description: "Recognized for outstanding contribution to the successful release of the PayU app, ensuring high-quality on time delivery.",
    year: "2019",
    image: "/lovable-uploads/532c5c3b-cee8-4897-a007-b550f5478863.png"
  },
  {
    name: "PayU Letter of Recognition",
    description: "Awarded for demonstrating ownership and collaboration while launching mobile app and enabling PayU to reach next million merchants.",
    year: "2019",
    image: "/lovable-uploads/5feca742-9d99-412a-a652-dc1b61237cf9.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication in product delivery.",
    year: "2018",
    image: [
      "/lovable-uploads/a4dfa9b1-3661-4877-a6a6-a6c9246a6272.png",
      "/lovable-uploads/af27dedd-8617-4eb4-838a-923fb1055c9a.png"
    ]
  }
];

export const Awards = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Trophy className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{award.name}</h3>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{award.year}</p>
                  </div>
                </div>
                {award.image && (
                  <div className="mt-4">
                    {Array.isArray(award.image) ? (
                      <div className="grid grid-cols-2 gap-2">
                        {award.image.map((img, i) => (
                          <div 
                            key={i}
                            className="border-2 border-gray-200 rounded-lg p-2 hover:border-accent transition-colors duration-300"
                          >
                            <img
                              src={img}
                              alt={`${award.name} certificate ${i + 1}`}
                              className="w-full h-auto rounded"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="border-2 border-gray-200 rounded-lg p-2 hover:border-accent transition-colors duration-300">
                        <img
                          src={award.image}
                          alt={`${award.name} certificate`}
                          className="w-full h-auto rounded"
                        />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};