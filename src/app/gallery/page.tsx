"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Eye, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItemProps {
  image: string;
  title: string;
  date: string;
  description?: string;
  category: string;
}

function GalleryItem({ image, title, date, description, category, onClick }: GalleryItemProps & { onClick: () => void }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer" onClick={onClick}>
      <div className="aspect-square relative group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      <img 
  src={image} 
  alt={description || title} 
  title={description || title}
  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
/>
        
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <h3 className="text-lg font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">{title}</h3>
          <div className="flex items-center mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <p className="text-muted-foreground text-sm">{date}</p>
          </div>
          
          {/* View Button */}
          <button className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200 text-sm">
            <Eye className="h-4 w-4 mr-2" /> View Details
          </button>
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border">
          {category}
        </div>
      </div>
    </div>
  );
}

function Modal({ isOpen, onClose, item, onNext, onPrev }: {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItemProps | null;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Navigation buttons */}
          <button 
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border hover:bg-background transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={onNext}
            className="absolute right-16 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border hover:bg-background transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Image */}
          <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">{item.date}</span>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </span>
            </div>
            
            <h2 className="text-2xl font-heading font-bold mb-4">{item.title}</h2>
            
            {/* Placeholder for description */}
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                {item.description || "Event description will be added here. This space is reserved for detailed information about the event, including highlights, key speakers, achievements, and memorable moments from the occasion."}
              </p>
              <p>
                Additional paragraphs and detailed content about this event will be populated here, providing comprehensive information about the activities, participants, and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [selectedItem, setSelectedItem] = useState<GalleryItemProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems: GalleryItemProps[] = [
    {
      image: "/images/gallery/image1.png",
      title: "Inauguration Ceremony of Avinya'25",
      date: "29 March 2025",
      category: "Ceremony",
      description: "The inauguration ceremony of Avinya’25, organized by the Innovation Cell of NIT Raipur, began with a traditional lamp lighting and was graced by notable dignitaries from academia and industry. Key speakers, including Mr. Bheem Singh Kanwar, Dr. Shubhashis Sanyal, and Dr. Narendra D. Londhe, emphasized the importance of innovation in energy, healthcare, and national development. Thought-provoking speeches, symbolic gestures like sapling distribution, and engaging student interactions set a dynamic and inspiring tone for the three-day fest, reinforcing the institution’s commitment to fostering creativity, research, and entrepreneurship."
    },
    {
      image: "/images/gallery/image2.png",
      title: "I-Talk NASA Europa Clipper Mission",
      date: "04 April 2025",
      category: "Talk",
       description: "On April 4, 2025, the Innovation Cell of NIT Raipur hosted a virtual I-TALK with Dr. Murthy Gudipati, a leading scientist at NASA’s Jet Propulsion Laboratory. Dr. Gudipati shared deep insights into NASA’s Europa Clipper Mission, which aims to investigate the potential habitability of Jupiter’s icy moon Europa. He explained the scientific goals, including detecting subsurface oceans and studying ice behavior under extreme conditions. Dr. Gudipati also highlighted the engineering challenges of space missions and emphasized the interdisciplinary nature of astrobiology. His story of rising from India to NASA inspired students to dream big and explore space science. The event blended science, engineering, and motivation, leaving a lasting impression."
    },
    {
      image: "/images/gallery/image3.png",
      title: "Discussion on Innovations in Sustainable Startups",
      date: "29 March 2025",
      category: "Discussion",
       description: "The Innovation Cell at NIT Raipur organized a panel discussion on 'Innovations in Sustainable Startups' on March 29, 2025, featuring Isha Jhawar of Repeat Gud and Rishabh Suri of Qudrat. Moderated by Pawan Kataria, the discussion highlighted the challenges and breakthroughs in building eco-conscious businesses. Isha shared her story of developing healthy jaggery-based sauces, while Rishabh spoke about turning sugarcane waste into disposable tableware, replacing over 6 million plastic items. Both emphasized the importance of persistence, innovation, and tech empowerment in sustainability. Their journeys inspired students to take calculated risks and drive impactful change through entrepreneurship."
    },
    {
      image: "/images/gallery/image4.png",
      title: "Workshop on Sensors for Space Applications",
      date: "20 January 2025",
      category: "Workshop",
       description: "On 20th January 2025, the Innovation Cell at NIT Raipur hosted an enriching session on 'Sensors for Space Applications' as part of the Expert Lecture Series on Space Tech Research. The discussion was led by Prof. Nilesh J. Vasa from IIT Madras, who shared his expertise on laser technology, remote sensing, and MEMS devices. He explained how laser-material interactions are used to analyze extraterrestrial surfaces, such as the moon, and highlighted the importance of sensors in remote sensing and spacecraft instrumentation. The talk also showcased innovations in compact MEMS-based sensors and the integration of AI for enhanced space missions. The 90-minute session was highly engaging, with case studies and live examples that helped students connect theory with real-world applications, sparking greater interest in space technologies."
    },
    {
      image: "/images/gallery/image5.png",
      title: "Speaker Session - Raj Vikramaditya (Striver)",
      date: "29 March 2025",
      category: "Speaker Session",
       description: "On March 29, 2025, the Innovation Cell at NIT Raipur hosted an inspiring speaker session featuring Raj Vikramaditya, popularly known as Striver and founder of TakeUForward (TUF). Moderated by Dr. Saurabh Gupta, the event traced Striver’s journey from ICPC participation and a 30 LPA job offer to launching TUF, a platform revolutionizing DSA learning. He discussed key milestones like building a YouTube community, overcoming tech and market challenges, and growing a user base of over 5 lakh. Striver emphasized perseverance, community support, and calculated risks, inspiring students to take bold entrepreneurial steps. The session offered valuable lessons in resilience, innovation, and business strategy."
    },
    {
      image: "/images/gallery/image6.png",
      title: "Workshop on Finite Element Methods for Advanced Materials",
      date: "17 September 2024",
      category: "Workshop",
       description: "The Innovation Cell at NIT Raipur conducted an engaging I-TALK session on 'Design Thinking and Product Innovation,' delivered by Dr. N.V. Swamy Naidu from the Department of Mechanical Engineering. The session introduced students to the principles of design thinking, emphasizing its role in solving complex problems by balancing technological feasibility, business viability, and user desirability. Dr. Naidu elaborated on the four stages of the innovation process—What is, What if, What wows, and What works—while illustrating its practical applications in materials and aerospace industries. The talk equipped participants with a structured approach to innovation and encouraged the use of human-centered design to develop impactful solutions. The event saw active participation and was widely promoted through both online and offline channels by the Innovation Cell"
    }
  ];

  const openModal = (item: GalleryItemProps) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const navigateModal = (direction: 'next' | 'prev') => {
    if (!selectedItem) return;
    
    const currentIndex = galleryItems.findIndex(item => item.title === selectedItem.title);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedItem(galleryItems[newIndex]);
  };

  return (
    <>
      <Navbar/>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-primary font-medium mb-2">EVENT GALLERY</h6>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Event Gallery</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Explore comprehensive documentation of our events, workshops, and innovation showcases. Each image tells a story of collaboration, learning, and technological advancement.
              </p>
              {/* Placeholder space for additional paragraph */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={index} 
                image={item.image} 
                title={item.title} 
                date={item.date} 
                description={item.description}
                category={item.category}
                onClick={() => openModal(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedItem}
        onNext={() => navigateModal('next')}
        onPrev={() => navigateModal('prev')}
      />
      
      <Footer/>
    </>
  )
}

export default Page
