"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from "lucide-react";

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  month: string;
  theme: string;
  type: 'workshop' | 'ideathon' | 'talk' | 'showcase' | 'challenge' | 'special' | 'field visit' | 'festival';
  participants?: string;
  featured?: boolean;
}


function EventCard({ event, onClick }: { event: EventProps; onClick: () => void }) {
  const getTypeColor = (type: string) => {
  switch (type) {
    case 'workshop': return 'bg-blue-500/10 text-blue-600 border-blue-200';
    case 'ideathon': return 'bg-purple-500/10 text-purple-600 border-purple-200';
    case 'talk': return 'bg-green-500/10 text-green-600 border-green-200';
    case 'showcase': return 'bg-orange-500/10 text-orange-600 border-orange-200';
    case 'challenge': return 'bg-red-500/10 text-red-600 border-red-200';
    case 'special': return 'bg-gradient-to-r from-brand-blue to-brand-teal text-white border-transparent';
    case 'field visit': return 'bg-teal-500/10 text-teal-600 border-teal-200';
    case 'festival': return 'bg-pink-500/10 text-pink-600 border-pink-200';
    default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
  }
};

  return (
    <div 
      className={`group cursor-pointer rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 ${event.featured ? 'ring-2 ring-brand-blue/20' : ''}`}
      onClick={onClick}
    >
      {event.featured && (
        <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white text-center py-2 text-sm font-medium">
          Featured Event
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{event.month}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{event.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-brand-blue" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-brand-blue" />
            {event.location}
          </div>
          {event.participants && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-brand-blue" />
              {event.participants}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
            {event.theme}
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
}

function EventModal({ isOpen, onClose, event }: {
  isOpen: boolean;
  onClose: () => void;
  event: EventProps | null;
}) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleRegisterClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  const handleAddToCalendarClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white p-6 rounded-t-xl">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              ✕
            </button>
            <div className="pr-8">
              <span className="text-sm opacity-90">{event.month} • {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
              <h2 className="text-2xl font-bold mt-1">{event.title}</h2>
              <p className="text-sm opacity-90 mt-2">{event.theme}</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-brand-blue" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-brand-blue" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-brand-blue" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </div>
              {event.participants && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-brand-blue" />
                  <div>
                    <p className="font-medium">Participants</p>
                    <p className="text-sm text-muted-foreground">{event.participants}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-3">About this Event</h3>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  This event is part of our monthly theme focusing on <strong>{event.theme}</strong>. 
                  Join us for an engaging session that combines learning, innovation, and collaboration.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3 relative">
              <button 
                onClick={handleRegisterClick}
                className="flex-1 bg-gradient-to-r from-brand-blue to-brand-teal text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                Register Now
              </button>
              <button 
                onClick={handleAddToCalendarClick}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors cursor-pointer"
              >
                Add to Calendar
              </button>
              
              {/* Coming Soon Popup */}
              {showComingSoon && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-10">
                  Coming Soon
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const upcomingEvents: EventProps[] = [
    {
      id: '1',
      title: 'Induction Program & Innovation Leadership Keynote',
      date: 'August 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium & Innovation Lab',
      category: 'Orientation',
      description: 'Join us for the official induction program featuring orientation sessions, makerspace tours, and an inspiring keynote by a renowned innovation leader. Perfect for new members and anyone passionate about innovation.',
      month: 'August 2025',
      theme: 'Onboarding & Inspiration',
      type: 'special',
      participants: 'All Students',
      featured: true
    },
    {
      id: '2',
      title: 'Design Thinking & Rapid Brainstorming Workshop',
      date: 'August 20, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Lab',
      category: 'Workshop',
      description: 'Learn the fundamentals of design thinking methodology and rapid brainstorming techniques. Includes hands-on group activities and take-home templates for your innovation projects.',
      month: 'August 2025',
      theme: 'Onboarding & Inspiration',
      type: 'workshop',
      participants: '50 Students'
    },
    {
      id: '3',
      title: 'Creative Hack Poster Jam',
      date: 'August 28, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Design Studio',
      category: 'Challenge',
      description: 'Visual design challenge where participants create innovative posters on innovation themes. Winners get featured on social media and display space in the innovation center.',
      month: 'August 2025',
      theme: 'Onboarding & Inspiration',
      type: 'challenge',
      participants: 'Teams of 2-3'
    },
    {
      id: '4',
      title: 'Basics of Rapid Prototyping Workshop',
      date: 'September 10, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Makerspace',
      category: 'Workshop',
      description: 'Hands-on workshop covering rapid prototyping techniques and makerspace tool demonstrations. Includes a paper prototype challenge for any tech product of your choice.',
      month: 'September 2025',
      theme: 'Prototyping & Making',
      type: 'workshop',
      participants: '30 Students'
    },
    {
      id: '5',
      title: 'InnoJam #1: Mystery Material Challenge',
      date: 'September 25, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Innovation Lab',
      category: 'Challenge',
      description: 'Team-based tinkering session with surprise material kits. 3-hour intensive challenge to create innovative prototypes. Top 3 teams get campus display space for their creations.',
      month: 'September 2025',
      theme: 'Prototyping & Making',
      type: 'challenge',
      participants: 'Teams of 4-5',
      featured: true
    },
    {
      id: '6',
      title: 'IPR & Patents Simplified Workshop',
      date: 'October 8, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      category: 'Workshop',
      description: 'Learn about intellectual property rights and patent processes in simple terms. Includes patent mini-quiz and hands-on exercise to draft mock patent abstracts.',
      month: 'October 2025',
      theme: 'Space Meets Sustainability',
      type: 'workshop',
      participants: '60 Students'
    },
    {
      id: '7',
      title: 'Space-Sustain Ideathon',
      date: 'October 28, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Multiple Venues',
      category: 'Ideathon',
      description: 'Quarterly special event merging sustainability and space technology. Collaboration with ISRO interns, design faculty, and startup representatives. Top 5 concepts get incubation mentorship.',
      month: 'October 2025',
      theme: 'Space Meets Sustainability',
      type: 'ideathon',
      participants: 'Teams of 3-4',
      featured: true
    },
    {
      id: '8',
      title: 'Sensors & Microcontrollers 101 Workshop',
      date: 'November 12, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Electronics Lab',
      category: 'Workshop',
      description: 'Comprehensive workshop on sensors and microcontrollers with Arduino demonstrations. Participants submit video demos of their projects using Arduino or simulations.',
      month: 'November 2025',
      theme: 'Electronics, Sensors & Embedded Tech',
      type: 'workshop',
      participants: '40 Students'
    },
    {
      id: '9',
      title: 'Innovation Unplugged: Tech Innovator Talk',
      date: 'November 26, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'Talk',
      description: 'Fireside chat with a renowned IoT/ISRO engineer followed by 5-minute idea pitches from students. Interactive session combining inspiration with practical insights.',
      month: 'November 2025',
      theme: 'Electronics, Sensors & Embedded Tech',
      type: 'talk',
      participants: 'Open to All'
    },
    {
      id: '10',
      title: 'Tinkerthon: 24hr Makeathon',
      date: 'November 29-30, 2025',
      time: '6:00 PM - 6:00 PM',
      location: 'Innovation Complex',
      category: 'Makeathon',
      description: '24-hour intensive makeathon with electronic kits and live updates tracking. Ultimate test of creativity, technical skills, and endurance with comprehensive material support.',
      month: 'November 2025',
      theme: 'Electronics, Sensors & Embedded Tech',
      type: 'challenge',
      participants: 'Teams of 3-5',
      featured: true
    },
    {
    id: '11',
    title: 'Rural Reboot Field Visit',
    date: 'December 12, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Nearby Village/Area',
    category: 'Field Visit',
    description: 'Visit to a rural area to document community needs. Teams ideate local tech solutions and submit impact reports.',
    month: 'December 2025',
    theme: 'Ground Realities & Local Impact',
    type: 'field visit',
    participants: 'Teams of 4-5'
  },
  {
    id: '12',
    title: 'Mini Avinya – Progress Showcase',
    date: 'December 23, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Center',
    category: 'Showcase',
    description: 'Student teams exhibit idea prototypes. Feedback collected from peers and mentors. Top 3 teams nominated for full-scale Avinya.',
    month: 'December 2025',
    theme: 'Ground Realities & Local Impact',
    type: 'showcase',
    participants: 'Selected Student Teams',
    featured: true
  },
  {
    id: '13',
    title: 'Business Model Canvas Workshop',
    date: 'January 14, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Hall',
    category: 'Workshop',
    description: 'Students learn and apply Business Model Canvas to their startup ideas. Includes a 2-minute pitch session.',
    month: 'January 2026',
    theme: 'Startup Thinking & Business Design',
    type: 'workshop',
    participants: '50 Students'
  },
  {
    id: '14',
    title: 'Zero Gravity Design Sprint',
    date: 'January 28, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Innovation Lab',
    category: 'Sprint',
    description: 'Open challenge across themes like space, climate, and ed-tech. Rapid prototyping and mentorship follow-up.',
    month: 'January 2026',
    theme: 'Startup Thinking & Business Design',
    type: 'challenge',
    participants: 'Open to All',
    featured: true
  },
  {
    id: '15',
    title: 'InnoJam #2: Space Utility Challenge',
    date: 'February 26, 2026',
    time: '10:00 AM - 1:00 PM',
    location: 'Makerspace',
    category: 'Challenge',
    description: 'Build tools that solve daily or space-themed problems. Winning team receives scaling support from Makerspace.',
    month: 'February 2026',
    theme: 'Collaboration & Failure Stories',
    type: 'challenge',
    participants: 'Teams of 3-4',
    featured: true
  },
  {
    id: '16',
    title: 'Pitching, Storytelling & Visual Thinking Workshop',
    date: 'March 12, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Hall',
    category: 'Workshop',
    description: 'Learn to pitch with storytelling and visual thinking. Elevator pitch sessions will be recorded and reviewed.',
    month: 'March 2026',
    theme: 'Storytelling, Tech & AI',
    type: 'workshop',
    participants: '40 Students'
  },
  {
    id: '17',
    title: 'Space Startathon',
    date: 'March 27-29, 2026',
    time: '9:00 AM (Mar 27) - 5:00 PM (Mar 29)',
    location: 'Innovation Complex',
    category: 'Startathon',
    description: '48-hour build & pitch challenge. Best 3 teams get nominated to pitch at Avinya Festival.',
    month: 'March 2026',
    theme: 'Storytelling, Tech & AI',
    type: 'challenge',
    participants: 'Teams of 3-5',
    featured: true
  },
  {
    id: '18',
    title: 'Avinya Innovation Festival',
    date: 'April 18, 2026',
    time: '10:00 AM - 6:00 PM',
    location: 'Campus Wide',
    category: 'Festival',
    description: 'Flagship event featuring speaker series, project showcase, live pitch arena, expo, and awards ceremony.',
    month: 'April 2026',
    theme: 'Celebration & Reflection',
    type: 'festival',
    participants: 'All Students and Guests',
    featured: true
  }
  ];

  const openModal = (event: EventProps) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesType = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesMonth = selectedMonth === 'all' || event.month === selectedMonth;
    return matchesType && matchesMonth;
  });

  const months = [...new Set(upcomingEvents.map(event => event.month))];
  const types = [...new Set(upcomingEvents.map(event => event.type))];

  return (
    <>
      <Navbar/>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h6 className="text-white/90 font-medium mb-2">UPCOMING EVENTS</h6>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Innovation Calendar 2025-26</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/90 mb-6">
                Join us for an exciting year of workshops, ideathons, talks, and challenges designed to foster innovation, 
                collaboration, and creative problem-solving across diverse technology domains.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white/80">
                <p className="italic">
                  Our annual planner features monthly themes ranging from Space Technology and Sustainability 
                  to AI, Rural Tech, and HealthTech - providing comprehensive learning experiences for every innovator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter Events:</span>
            </div>
            
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All Months</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            
            <div className="ml-auto text-sm text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event}
                onClick={() => openModal(event)}
              />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No events found matching your filters.</p>
              <button 
                onClick={() => {setSelectedFilter('all'); setSelectedMonth('all');}}
                className="mt-4 text-brand-blue hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Join the Innovation Journey?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on these incredible opportunities to learn, create, and innovate. 
            Register for upcoming events and be part of the innovation community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              View All Events
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
      
      <Footer/>
    </>
  )
}

export default Page