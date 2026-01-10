import { Radio, Users, Eye } from "lucide-react";

const LiveDarshan = () => {
  return (
    <section id="darshan" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 mb-6">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-body text-foreground/80">Live Streaming</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-gradient section-title">Live Darshan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the divine presence of Lord Hanuman from anywhere in the world. 
            Join thousands of devotees in live darshan.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glow-card overflow-hidden">
            {/* Live Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/90 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">LIVE</span>
            </div>

            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-maroon-deep to-background">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
                title="Live Darshan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Overlay for when stream is offline */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Stream Info */}
            <div className="p-6 border-t border-border/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg text-gold-gradient mb-1">
                    Morning Abhishekam & Darshan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Daily Schedule: 5:00 AM - 12:00 PM | 4:00 PM - 9:00 PM
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>2.4K watching</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-accent" />
                    <span>15K views today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: "🔔", label: "Set Reminder" },
              { icon: "📤", label: "Share" },
              { icon: "❤️", label: "Donate" },
              { icon: "📱", label: "Full Screen" },
            ].map((action) => (
              <button
                key={action.label}
                className="glow-card py-4 px-4 flex items-center justify-center gap-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors"
              >
                <span className="text-xl">{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshan;
