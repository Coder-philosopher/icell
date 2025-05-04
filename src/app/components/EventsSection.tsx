import { useState, useEffect } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CalendarIcon, ArrowRight, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import eventsData from "../data/events.json";
type EventCategory = "all" | "weekly" | "monthly" | "annual";

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  endDate?: string;
  time?: string;
  location?: string;
  category: EventCategory;
  featured?: boolean;
  month: number;
}

interface MonthOption {
  id: number;
  name: string;
}

function EventFilterButton({
  category,
  label,
  activeCategory,
  onClick,
}: {
  category: EventCategory;
  label: string;
  activeCategory: EventCategory;
  onClick: (category: EventCategory) => void;
}) {
  const isActive = activeCategory === category;

  return (
    <button
      onClick={() => onClick(category)}
      className={cn(
        "mx-2 my-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm",
        isActive
          ? "bg-primary text-black shadow-md"
          : "bg-muted text-black text-muted-foreground border border-border hover:border-primary hover:text-primary hover:bg-muted/50"
      )}
    >
      {label}
    </button>
  );
}

function EventCard({
  title,
  description,
  image,
  date,
  endDate,
  time,
  location,
  category,
  featured = false,
}: EventCardProps) {
  const categoryMap = {
    annual: { bg: "bg-primary/10", text: "text-primary", label: "ANNUAL FLAGSHIP" },
    monthly: { bg: "bg-secondary/10", text: "text-secondary", label: "MONTHLY EVENT" },
    weekly: { bg: "bg-accent/10", text: "text-accent", label: "WEEKLY ACTIVITIES" },
    all: { bg: "bg-gray-200", text: "text-gray-700", label: "EVENT" },
  };

  const { bg, text, label } = categoryMap[category];

  const formatDate = (start: string, end?: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const startDate = new Date(start).toLocaleDateString("en-US", options);
    if (end) {
      const endDate = new Date(end).toLocaleDateString("en-US", options);
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  };

  return (
    <div
      className={cn(
        "group rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 shadow hover:shadow-lg",
        featured ? "md:col-span-2 border-primary/40" : ""
      )}
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full object-cover transition-all duration-700 group-hover:scale-105",
              featured ? "h-64" : "h-48"
            )}
          />
          <div className="absolute top-4 left-4">
            <span className={cn("text-xs font-medium px-3 py-1 rounded-full", bg, text)}>{label}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold font-clash mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
              {formatDate(date, endDate)}
            </div>
            {time && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-secondary" />
                {time}
              </div>
            )}
            {location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                {location}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <Button variant="ghost" className="w-full justify-start px-0 hover:pl-2 transition-all group-hover:text-primary">
            Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>((new Date().getMonth() + 1).toString());
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventCardProps[]>([]);
  const months: MonthOption[] = eventsData.months;

  useEffect(() => {
    setEvents(eventsData.events as EventCardProps[]);
  }, []);

  useEffect(() => {
    const monthNumber = parseInt(selectedMonth);
    let filtered = [...events];

    if (!isNaN(monthNumber)) {
      filtered = filtered.filter((event) => event.month === monthNumber);
    }

    if (activeCategory !== "all") {
      filtered = filtered.filter((event) => event.category === activeCategory);
    }

    setFilteredEvents(filtered);
  }, [activeCategory, selectedMonth, events]);

  return (
    <section id="events" className="w-full bg-gradient-to-b from-background to-muted py-16 md:py-24">
      <div className="w-full px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h6 className="text-primary font-medium uppercase mb-2 tracking-wide">Our Events</h6>
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
              From Weekly Workshops to Annual Summits
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Throughout the year, we organize a variety of events to inspire, educate, and showcase innovation.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center md:justify-start">
            <EventFilterButton category="all" label="All Events" activeCategory={activeCategory} onClick={setActiveCategory} />
            <EventFilterButton category="weekly" label="Weekly Activities" activeCategory={activeCategory} onClick={setActiveCategory} />
            <EventFilterButton category="monthly" label="Monthly Events" activeCategory={activeCategory} onClick={setActiveCategory} />
            <EventFilterButton category="annual" label="Annual Flagship" activeCategory={activeCategory} onClick={setActiveCategory} />
          </div>

          {/* Month Selector */}
          <div className="w-full sm:w-auto">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="border border-border w-full sm:w-[180px]">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.id} value={month.id.toString()}>
                    {month.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card border border-border rounded-xl">
            <h3 className="text-xl font-clash font-medium mb-2">No Events Found</h3>
            <p className="text-muted-foreground">There are no events scheduled for this month and category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
