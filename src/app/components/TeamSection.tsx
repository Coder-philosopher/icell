import ScrollReveal from "./ui/ScrollReveal";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";


interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

function TeamMember({ name, role, image, bio, social }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 group-hover:border-primary/50">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
            <p className="text-sm text-muted-foreground line-clamp-4">{bio}</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-clash text-xl font-medium mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{role}</p>
          
          {social && (
            <div className="flex space-x-3">
              {social.github && (
                <a 
                  href={social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {social.linkedin && (
                <a 
                  href={social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
              {social.twitter && (
                <a 
                  href={social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Rahul Sharma",
      role: "Faculty Advisor",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Sharma provides strategic guidance to the Innovation Cell. With over 15 years of experience in academia and industry, he helps connect student innovators with the right resources.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Student Lead",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "A final year Computer Science student with a passion for AI and machine learning. Priya has led multiple hackathons and workshops for the Innovation Cell.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Arjun Mehta",
      role: "Technical Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Arjun specializes in web development and IoT. He manages the technical infrastructure for Innovation Cell projects and mentors junior members.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Neha Singh",
      role: "Event Manager",
      image: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Responsible for organizing all Innovation Cell events, from weekly workshops to annual summits. Neha ensures everything runs smoothly and creates engaging experiences.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h6 className="text-primary font-medium mb-2">OUR TEAM</h6>
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">Meet the Innovators</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our diverse team brings together expertise from various disciplines to foster innovation and creativity.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}