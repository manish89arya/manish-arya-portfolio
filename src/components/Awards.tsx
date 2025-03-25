
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    name: "PayU Global \"Thank You\" Award",
    description: "Recognized for outstanding contribution to the successful release of the PayU app, ensuring high-quality on time delivery.",
    year: "2019",
    company: "PayU Payments",
    image: "/lovable-uploads/c827403d-d3b2-49e2-bced-323bc1cb4d36.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    year: "2018",
    company: "PayU Payments",
    image: "/lovable-uploads/7ab1e67b-dd50-434b-a6e3-3a38af471d6b.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    year: "2018",
    company: "PayU Payments",
    image: "/lovable-uploads/7ecd3831-7c0f-4f31-967f-d87734ae539d.png"
  },
  {
    name: "PayU Letter of Recognition",
    description: "Awarded for demonstrating ownership and collaboration while launching mobile app and enabling PayU to reach next million merchants.",
    year: "2020",
    company: "PayU Payments",
    image: "/lovable-uploads/163b4490-ec0a-4877-81d4-f4588316f896.png"
  },
  {
    name: "Airtel Execution Excellence Award",
    description: "Recognized for outstanding execution and delivery of key projects with excellence and precision.",
    year: "2024",
    company: "Airtel Payments Bank",
    image: "/lovable-uploads/7e2a6331-8fe7-4ce7-9239-c5c79c581f4a.png"
  },
  {
    name: "Airtel Learning Agility Award",
    description: "Awarded for demonstrating exceptional learning capabilities and adaptability in implementing new technologies and methodologies.",
    year: "2023",
    company: "Airtel Payments Bank",
    image: "/lovable-uploads/344e6382-8f35-42ed-87a1-1b229bcb6870.png"
  }
];

export const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Sort awards by year in descending order
  const sortedAwards = [...awards].sort((a, b) => parseInt(b.year) - parseInt(a.year));

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
          
          <Card className="shadow-md border-accent/20">
            <CardContent className="p-0 overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-accent/10">
                  <TableRow>
                    <TableHead className="text-center font-semibold">Year</TableHead>
                    <TableHead className="text-center font-semibold">Company</TableHead>
                    <TableHead className="text-center font-semibold">Appreciated with</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAwards.map((award, index) => (
                    <TableRow 
                      key={index}
                      className="hover:bg-accent/5 transition-colors duration-200"
                    >
                      <TableCell className="text-center font-medium">{award.year}</TableCell>
                      <TableCell className="text-center">{award.company}</TableCell>
                      <TableCell className="text-center">
                        <button
                          onClick={() => setSelectedImage(award.image)}
                          className="flex items-center justify-center mx-auto gap-2 text-accent hover:text-accent-foreground hover:underline transition-colors duration-200"
                        >
                          <Award className="h-4 w-4" />
                          <span>{award.name}</span>
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </button>
                        <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto line-clamp-2">{award.description}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent"
            >
              <ExternalLink className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged certificate" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
