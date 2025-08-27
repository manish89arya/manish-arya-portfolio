import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const functionalPoints = [
  "Create, maintain and expand automation suites (Rest Assured for APIs/integration, Selenium for UI, Appium for Mobile tests).",
  "Debug failures at root cause — distinguishing between issues in tests, code, or environment.",
  "Design and implement new automated tests for upcoming features, ensuring risk-based coverage.",
  "Set up and manage test data and environments for reliable, reproducible testing.",
  "Collaborate with developers and product managers to make code more testable and ensure requirements are testable and clear.",
  "Balance automation and manual testing, prioritizing what brings the highest value.",
  "Keep CI/CD pipelines healthy and respond quickly when builds break.",
  "Review pull requests with a quality and testability lens.",
  "Execute test cases, document results, and report defects clearly and efficiently.",
  "Collaborate with cross-functional teams to troubleshoot and resolve technical issues.",
  "Mentor and guide other SDETs and QA engineers, promoting a strong culture of quality.",
  "Partner with engineering teams to quickly identify, triage, and resolve defects throughout the development lifecycle.",
  "Provide regular feedback and development opportunities for team members."
];

export const FunctionalSummary = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Functional Summary</h2>
          
          <Card className="shadow-md border-accent/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {functionalPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};