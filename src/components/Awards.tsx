import { motion } from "framer-motion";
import { Trophy, X } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const awards = [
  {
    name: "PayU Global \"Thank You\" Award",
    description: "Recognized for outstanding contribution to the successful release of the PayU app, ensuring high-quality on time delivery.",
    year: "2019",
    image: "/lovable-uploads/c827403d-d3b2-49e2-bced-323bc1cb4d36.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    year: "2018",
    image: "/lovable-uploads/7ab1e67b-dd50-434b-a6e3-3a38af471d6b.png"
  },
  {
    name: "PayU U ROCK Performance Appreciation",
    description: "Recognized for great attitude, exceptional work & dedication.",
    year: "2018",
    image: "/lovable-uploads/7ecd3831-7c0f-4f31-967f-d87734ae539d.png"
  },
  {
    name: "PayU Letter of Recognition",
    description: "Awarded for demonstrating ownership and collaboration while launching mobile app and enabling PayU to reach next million merchants.",
    year: "2020",
    image: "/lovable-uploads/163b4490-ec0a-4877-81d4-f4588316f896.png"
  },
  {
    name: "Airtel Execution Excellence Award",
    description: "Recognized for outstanding execution and delivery of key projects with excellence and precision.",
    year: "2024",
    image: "/lovable-uploads/7e2a6331-8fe7-4ce7-9239-c5c79c581f4a.png"
  },
  {
    name: "Airtel Learning Agility Award",
    description: "Awarded for demonstrating exceptional learning capabilities and adaptability in implementing new technologies and methodologies.",
    year: "2023",
    image: "/lovable-uploads/344e6382-8f35-42ed-87a1-1b229bcb6870.png"
  }
];

export const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Initialize carousel without autoplay
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false
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
          
          {/* Carousel */}
          <div className="relative px-12">
            <div ref={emblaRef} className="overflow-hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {awards.map((award, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Trophy className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{award.name}</h3>
                          <p className="text-gray-600 text-sm">{award.description}</p>
                          <p className="text-sm text-gray-500 mt-2">{award.year}</p>
                        </div>
                      </div>
                      <div 
                        onClick={() => setSelectedImage(award.image)}
                        className="border-2 border-gray-200 rounded-lg p-2 hover:border-accent transition-colors duration-300 aspect-[4/3] overflow-hidden cursor-pointer"
                      >
                        <img
                          src={award.image}
                          alt={`${award.name} certificate`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                  </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="h-16 w-16 -left-16" />
                <CarouselNext className="h-16 w-16 -right-16" />
              </Carousel>
            </div>
          </div>
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
              <X className="w-8 h-8" />
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
