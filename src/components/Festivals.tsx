import { Calendar, ExternalLink, Bell } from "lucide-react";

const festivals2026 = [
  {
    name: "Hanuman Jayanti",
    date: "April 14",
    day: "14",
    month: "APR",
    description: "Grand celebration of Lord Hanuman's birth with special abhishekam and alankaram.",
    special: ["Panchamrita Abhishekam", "108 Diya Harathi", "Annadanam"],
  },
  {
    name: "Sri Rama Navami",
    date: "March 28",
    day: "28",
    month: "MAR",
    description: "Celebration of Lord Rama's birth with kalyanam and special poojas.",
    special: ["Sita Rama Kalyanam", "Sundarakanda Parayanam"],
  },
  {
    name: "Diwali Celebrations",
    date: "November 8",
    day: "08",
    month: "NOV",
    description: "Festival of lights with special deepotsavam and cultural programs.",
    special: ["Laksha Deepotsavam", "Fireworks", "Cultural Programs"],
  },
  {
    name: "Karthika Masam",
    date: "November 15",
    day: "15",
    month: "NOV",
    description: "Sacred month celebrations with daily special poojas.",
    special: ["Daily Abhishekam", "Deepa Puja", "Bhajans"],
  },
  {
    name: "Brahmotsavam",
    date: "February 20-27",
    day: "20",
    month: "FEB",
    description: "Seven-day grand festival with vahana sevas and processions.",
    special: ["Rathotsavam", "Vahana Sevas", "Teppotsavam"],
  },
  {
    name: "Ugadi",
    date: "March 19",
    day: "19",
    month: "MAR",
    description: "Telugu New Year celebrations with special pujas.",
    special: ["Panchanga Sravanam", "Special Abhishekam"],
  },
];

const Festivals = () => {
  const generateCalendarLink = (festival: typeof festivals2026[0]) => {
    const text = encodeURIComponent(`${festival.name} - Sri Abhaya Anjaneya Swamy Temple`);
    const details = encodeURIComponent(festival.description);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}`;
  };

  return (
    <section id="festivals" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-body text-accent">Upcoming Events</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-gradient section-title">Festivals 2026</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar for these auspicious occasions. Join us for special poojas, 
            annadanam, and divine celebrations.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {festivals2026.map((festival, index) => (
            <div
              key={festival.name}
              className="festival-card group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Badge */}
              <div className="festival-date shrink-0">
                <span className="text-2xl font-heading font-bold text-primary-foreground">
                  {festival.day}
                </span>
                <span className="text-xs font-body font-semibold text-primary-foreground/80">
                  {festival.month}
                </span>
              </div>

              {/* Festival Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg text-gold-gradient mb-1 truncate">
                  {festival.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {festival.description}
                </p>
                
                {/* Special Events Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {festival.special.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                    >
                      {item}
                    </span>
                  ))}
                  {festival.special.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      +{festival.special.length - 2}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={generateCalendarLink(festival)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors"
                  >
                    <Bell className="w-3 h-3" />
                    Add to Calendar
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-lg font-heading text-sm border-2 border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300">
            View Complete Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Festivals;
