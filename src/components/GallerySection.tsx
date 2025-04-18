
import React from 'react';
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

type GallerySectionProps = {
  className?: string;
};

const GallerySection: React.FC<GallerySectionProps> = ({ className }) => {
  // Array of gallery images
  const galleryImages = [
    {
      src: "https://source.unsplash.com/random/600x400/?udaipur,lake-pichola",
      alt: "Lake Pichola, Udaipur",
      caption: "Lake Pichola"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?udaipur,city-palace",
      alt: "City Palace, Udaipur",
      caption: "City Palace"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?udaipur,jag-mandir",
      alt: "Jag Mandir, Udaipur",
      caption: "Jag Mandir"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?rajasthan,folk-dance",
      alt: "Rajasthani Folk Dance",
      caption: "Folk Dance"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?rajasthan,traditional-food",
      alt: "Rajasthani Traditional Food",
      caption: "Traditional Cuisine"
    },
    {
      src: "https://source.unsplash.com/random/600x400/?rajasthan,desert",
      alt: "Rajasthan Desert",
      caption: "The Desert"
    }
  ];

  return (
    <section id="gallery" className={cn("py-20 bg-rajasthan-sand/10", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>Gallery - My Beautiful Udaipur</SectionTitle>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            A glimpse of the breathtaking beauty of my hometown Udaipur, known as the "City of Lakes" and the cultural heart of Rajasthan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg shadow-lg bg-white relative"
            >
              <div className="overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-playfair font-bold">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
