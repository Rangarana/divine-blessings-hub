import { Clock, IndianRupee } from "lucide-react";

const sevaList = [
  {
    name: "Abhishekam",
    icon: "💧",
    description: "Sacred bathing ritual of the deity with milk, honey, and holy water.",
    timing: "6:00 AM - 7:00 AM",
    donation: "₹501",
    popular: true,
  },
  {
    name: "Archana",
    icon: "🌺",
    description: "Offering of 108 names or Sahasranama to Lord Hanuman.",
    timing: "All Day",
    donation: "₹101",
    popular: false,
  },
  {
    name: "Alankaram",
    icon: "👑",
    description: "Special decoration of the deity with flowers and ornaments.",
    timing: "7:00 AM - 8:00 AM",
    donation: "₹1,001",
    popular: true,
  },
  {
    name: "Maha Harathi",
    icon: "🪔",
    description: "Grand evening aarti with camphor and lamps.",
    timing: "7:00 PM",
    donation: "₹251",
    popular: false,
  },
  {
    name: "Annadanam",
    icon: "🍚",
    description: "Sacred food offering to devotees. Sponsor a meal for the community.",
    timing: "12:00 PM",
    donation: "₹5,001",
    popular: true,
  },
  {
    name: "Sundarakanda Parayanam",
    icon: "📖",
    description: "Complete recitation of Sundarakanda for your well-being.",
    timing: "Saturdays",
    donation: "₹1,501",
    popular: false,
  },
  {
    name: "Vahana Seva",
    icon: "🐘",
    description: "Special procession seva during festivals.",
    timing: "Festival Days",
    donation: "₹2,001",
    popular: false,
  },
  {
    name: "Homam",
    icon: "🔥",
    description: "Sacred fire ritual for specific desires and blessings.",
    timing: "By Appointment",
    donation: "₹3,001",
    popular: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6">
            <span className="text-xl">🙏</span>
            <span className="text-sm font-body text-foreground/80">Divine Offerings</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-gradient section-title">Sevas & Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participate in sacred rituals and receive divine blessings. 
            Book your seva online and connect with the divine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sevaList.map((seva, index) => (
            <div
              key={seva.name}
              className="seva-card group animate-fade-in-up opacity-0 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {seva.popular && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="seva-icon text-3xl">
                {seva.icon}
              </div>

              {/* Details */}
              <h3 className="font-heading text-lg text-gold-gradient mb-2">
                {seva.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {seva.description}
              </p>

              {/* Timing & Price */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{seva.timing}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm font-semibold text-primary">
                  <IndianRupee className="w-3 h-3" />
                  <span>{seva.donation}</span>
                </div>
              </div>

              {/* Book Button */}
              <button className="w-full py-2 rounded-lg text-sm font-body font-medium border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Book Seva
              </button>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glow-card p-6 text-center">
            <p className="text-muted-foreground text-sm">
              <span className="text-accent">✦</span> All seva donations contribute to temple maintenance, 
              annadanam, and community welfare activities. 
              <span className="text-accent"> ✦</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
