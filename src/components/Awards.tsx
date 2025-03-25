
import { motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
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
    name: "Airtel Automation Excellence Award",
    description: "Certificate of Achievement for Automation Excellence awarded by Khushboo Sandhu, Sr.EM - RnM Technology.",
    date: "30 Jan 2025",
    year: "2025",
    company: "Airtel Payments Bank",
    image: "/lovable-uploads/62f6665d-b640-4c5f-91c9-cfea04f1ae46.png"
  },
  {
    name: "PayU Global \"Thank You\" Award",
    description: "Recognized for outstanding contribution to the successful release of the PayU app, ensuring high-quality on time delivery.",
    date: "19 Apr 2024",
    year: "2024",
    company: "PayU Payments",
    image: "/lovable-uploads/c827403d-d3b2-49e2-bced-323bc1cb4d36.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    date: "20 Jun 2023",
    year: "2023",
    company: "PayU Payments",
    image: "/lovable-uploads/7ab1e67b-dd50-434b-a6e3-3a38af471d6b.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    date: "19 Jun 2020",
    year: "2020",
    company: "PayU Payments",
    image: "/lovable-uploads/7ecd3831-7c0f-4f31-967f-d87734ae539d.png"
  },
  {
    name: "PayU Letter of Recognition",
    description: "Awarded for demonstrating ownership and collaboration while launching mobile app and enabling PayU to reach next million merchants.",
    date: "19 Sep 2019",
    year: "2019",
    company: "PayU Payments",
    image: "/lovable-uploads/163b4490-ec0a-4877-81d4-f4588316f896.png"
  },
  {
    name: "Airtel Execution Excellence Award",
    description: "Recognized for outstanding execution and delivery of key projects with excellence and precision.",
    date: "13 Nov 2018",
    year: "2018",
    company: "Airtel Payments Bank",
    image: "/lovable-uploads/7e2a6331-8fe7-4ce7-9239-c5c79c581f4a.png"
  },
  {
    name: "Airtel Learning Agility Award",
    description: "Awarded for demonstrating exceptional learning capabilities and adaptability in implementing new technologies and methodologies.",
    date: "27 Dec 2018",
    year: "2018",
    company: "Airtel Payments Bank",
    image: "/lovable-uploads/344e6382-8f35-42ed-87a1-1b229bcb6870.png"
  }
];

export const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedImage]);

  // Sort awards by date in descending order
  const sortedAwards = [...awards].sort((a, b) => {
    const dateA = new Date(a.date.split(' ').reverse().join(' '));
    const dateB = new Date(b.date.split(' ').reverse().join(' '));
    return dateB.getTime() - dateA.getTime();
  });

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
                    <TableHead className="text-center font-semibold">Date</TableHead>
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
                      <TableCell className="text-center font-medium">{award.date}</TableCell>
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8 overflow-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2"
            onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-black text-white hover:bg-gray-700 p-1 rounded-full z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] overflow-auto">
              <img 
                src={selectedImage} 
                alt="Award certificate" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
