import ScrollReveal from "./ui/ScrollReveal";
import Image from "next/image";

interface PartnerProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

function PartnerCard({ name, description, image, link }: PartnerProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-80 group relative overflow-hidden border-r border-border/20 p-8 transition-all duration-300 hover:bg-card/50"
    >
      <div className="mb-4 h-16 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={160}
          height={40}
          className="h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      <h3 className="text-xl font-medium mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{name}</h3>
      
      <p className="text-muted-foreground text-sm">{description}</p>
    </a>
  );
}

export default function PartnersSection() {
  const partners: PartnerProps[] = [
    {
      name: "Sponsor-1",
      description: "Cloud technology and AI research partner providing Azure cloud services and technical resources.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      link: "https://microsoft.com"
    },
    {
      name: "Sponsor-2",
      description: "Hardware and innovation labs sponsor supporting processor technology projects and IoT development.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      link: "https://intel.com"
    },
    {
      name: "Sponsor-3",
      description: "Provides AWS cloud credits and mentorship for startup development and scalable infrastructure solutions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      link: "https://amazon.com"
    },
    {
      name: "Sponsor-4",
      description: "GPU technology partner for AI research, providing hardware acceleration for deep learning projects.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      link: "https://nvidia.com"
    },
    {
      name: "Sponsor-5",
      description: "Quantum computing research collaboration partner offering access to quantum computing resources.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      link: "https://ibm.com"
    },
    {
      name: "Sponsor-6",
      description: "Software tools and developer support through Google Cloud Platform and technical workshops for students.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      link: "https://google.com"
    },
  ];

  // Duplicate for continuous marquee effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h6 className="text-primary font-medium mb-2">OUR PARTNERS</h6>
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">Collaborating With Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovation initiatives are supported by these leading organizations that provide technology, mentorship, and resources.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent"></div>
        
        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent"></div>
        
        {/* Marquee container */}
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}