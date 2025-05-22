import ScrollReveal from "./ui/ScrollReveal";
import { Eye, Calendar } from "lucide-react";

interface GalleryItemProps {
  image: string;
  title: string;
  date: string;
  featured?: boolean;
}

function GalleryItem({ image, title, date, featured = false }: GalleryItemProps) {
  const handleViewGallery = () => {
    window.location.href = "/gallery";
  };

  return (
    <div className={`relative overflow-hidden ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="aspect-square md:aspect-auto h-full relative group rounded-xl overflow-hidden bg-card border border-border shadow-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">{title}</h3>
          <div className="flex items-center mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <p className="text-muted-foreground text-sm">{date}</p>
          </div>
          
          {/* View Button */}
          <button 
            onClick={handleViewGallery}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200 text-sm"
          >
            <Eye className="h-4 w-4 mr-2" /> View Gallery
          </button>
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border">
          Event
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const galleryItems: GalleryItemProps[] = [
    {
      image: "/images/gallery/image1.png",
      title: "Inauguration Ceremony of Avinya'25",
      date: "29 March 2025",
      featured: true
    },
    {
      image: "/images/gallery/image2.png",
      title: "I-Talk NASA Europa Clipper Mission",
      date: "04 April 2025"
    },
    {
      image: "/images/gallery/image3.png",
      title: "Discussion on Innovations in Sustainable Startups",
      date: "29 March 2025"
    },
    {
      image: "/images/gallery/image4.png",
      title: "Workshop on Sensors for Space Applications",
      date: "20 January 2025"
    },
    {
      image: "/images/gallery/image5.png",
      title: "Speaker Session - Raj Vikramaditya (Striver)",
      date: "29 March 2025"
    },
    {
      image: "/images/gallery/image6.png",
      title: "Workshop on Finite Element Methods for Advanced Materials",
      date: "17 September 2024"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h6 className="text-primary font-medium mb-2">EVENT GALLERY</h6>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Glimpses of Our Past Events</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Explore moments from our previous events, workshops, and innovation showcases.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={index} 
                image={item.image} 
                title={item.title} 
                date={item.date} 
                featured={item.featured}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}