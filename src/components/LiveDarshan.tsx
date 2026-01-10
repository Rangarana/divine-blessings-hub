import { useState } from "react";
import { Radio, Users, Eye, Clock, Bell, Calendar, Play, Loader2, AlertCircle, ToggleLeft, ToggleRight } from "lucide-react";

const darshanSchedule = [
  { time: "5:00 AM", event: "Suprabhatam & Temple Opening", active: false },
  { time: "6:00 AM", event: "Abhishekam", active: false },
  { time: "7:00 AM", event: "Alankaram", active: true },
  { time: "8:00 AM", event: "Morning Harathi", active: false },
  { time: "12:00 PM", event: "Madhyahna Pooja", active: false },
  { time: "4:00 PM", event: "Evening Opening", active: false },
  { time: "6:00 PM", event: "Special Abhishekam", active: false },
  { time: "7:00 PM", event: "Sandhya Harathi", active: false },
  { time: "9:00 PM", event: "Maha Harathi & Closing", active: false },
];

const LiveDarshan = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const toggleAutoplay = () => {
    const newState = !isAutoplay;
    setIsAutoplay(newState);
    if (newState) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <section id="darshan" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 mb-6">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-body text-foreground/80">Live Streaming 24/7</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-gradient section-title">Live Darshan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the divine presence of Lord Hanuman from anywhere in the world. 
            Join thousands of devotees in live darshan and receive blessings.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Video Player - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="glow-card overflow-hidden">
              {/* Live Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/90 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white">LIVE</span>
              </div>

              {/* Autoplay Toggle */}
              <button
                onClick={toggleAutoplay}
                className="absolute top-4 right-16 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors border border-white/10"
              >
                <span className="text-xs font-semibold text-white">Autoplay</span>
                {isAutoplay ? (
                  <ToggleRight className="w-4 h-4 text-green-400" />
                ) : (
                  <ToggleLeft className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {/* HD Badge */}
              <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                <span className="text-xs font-semibold text-white">HD</span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-maroon-deep to-background">
                {!isPlaying ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/20 backdrop-blur-[2px] transition-all duration-300 hover:bg-black/30">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg shadow-red-600/40"
                      aria-label="Start Live Darshan"
                    >
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                      <span className="absolute inset-0 rounded-full animate-ping bg-red-600/50 -z-10" />
                    </button>
                    <p className="mt-6 text-white font-heading text-lg drop-shadow-lg">Start Live Darshan</p>
                    <p className="text-white/80 text-sm font-body">Click to watch with sound</p>
                  </div>
                ) : (
                  <>
                    {!isLoaded && !hasError && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/10 backdrop-blur-sm">
                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                      </div>
                    )}
                    {hasError ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-maroon-deep z-20">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604606778669-7d4b59d9c7f7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                        <div className="relative z-10 flex flex-col items-center text-center p-6">
                          <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                          <p className="text-white font-heading text-lg mb-2">Stream Unavailable</p>
                          <p className="text-white/70 text-sm mb-6 max-w-xs">Unable to load the live stream. Please check your connection or try again later.</p>
                          <button 
                            onClick={() => { setHasError(false); setIsLoaded(false); }}
                            className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm transition-colors font-medium"
                          >
                            Retry Connection
                          </button>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        src={`https://www.youtube.com/embed/SFwEJ6zwecw?autoplay=1&mute=${isAutoplay ? 1 : 0}&playsinline=1&rel=0`}
                        title="Live Darshan - Sri Abhaya Anjaneya Swamy Temple"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setHasError(true)}
                      />
                    )}
                  </>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Stream Info Bar */}
              <div className="p-4 md:p-6 border-t border-border/30">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg text-gold-gradient mb-1">
                      Garbhagudi Live Darshan
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Sri Abhaya Anjaneya Swamy Temple, Venkatapuram
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50">
                      <Users className="w-4 h-4 text-primary" />
                      <span>2,847 watching</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50">
                      <Eye className="w-4 h-4 text-accent" />
                      <span>15.2K today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { icon: Bell, label: "Set Reminder", color: "text-primary" },
                { icon: Play, label: "Picture-in-Picture", color: "text-accent" },
                { icon: Calendar, label: "Schedule", color: "text-gold" },
                { icon: Users, label: "Share", color: "text-secondary" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="glow-card py-3 px-3 flex items-center justify-center gap-2 text-xs md:text-sm font-body text-foreground/80 hover:text-primary transition-colors"
                >
                  <action.icon className={`w-4 h-4 ${action.color}`} />
                  <span className="hidden sm:inline">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Darshan Schedule - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="glow-card p-5 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="font-heading text-lg text-gold-gradient">
                  Today's Darshan Schedule
                </h3>
              </div>

              {/* Schedule List */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                {darshanSchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                      item.active
                        ? "bg-primary/20 border border-primary/40"
                        : "hover:bg-muted/30"
                    }`}
                  >
                    {/* Time */}
                    <div className={`text-sm font-semibold min-w-[70px] ${
                      item.active ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {item.time}
                    </div>

                    {/* Event */}
                    <div className="flex-1">
                      <p className={`text-sm ${
                        item.active ? "text-foreground font-medium" : "text-foreground/80"
                      }`}>
                        {item.event}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    {item.active && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400 font-medium">NOW</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Today's Special */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🪔</div>
                  <div>
                    <h4 className="font-heading text-sm text-gold-gradient mb-1">
                      Today's Special
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Saturday Special Abhishekam with Panchamrita & 108 Deepa Harathi
                    </p>
                  </div>
                </div>
              </div>

              {/* Temple Contact */}
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  For special darshan bookings, call:{" "}
                  <span className="text-primary font-medium">+91 98765 43210</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 mt-8">
          <div className="glow-card p-5 text-center">
            <div className="text-3xl mb-2">🙏</div>
            <h4 className="font-heading text-sm text-gold-gradient mb-1">Virtual Seva</h4>
            <p className="text-xs text-muted-foreground">
              Participate in online archana and receive prasadam at home
            </p>
          </div>
          <div className="glow-card p-5 text-center">
            <div className="text-3xl mb-2">📱</div>
            <h4 className="font-heading text-sm text-gold-gradient mb-1">Mobile App</h4>
            <p className="text-xs text-muted-foreground">
              Download our app for notifications on special events
            </p>
          </div>
          <div className="glow-card p-5 text-center">
            <div className="text-3xl mb-2">🔔</div>
            <h4 className="font-heading text-sm text-gold-gradient mb-1">Push Notifications</h4>
            <p className="text-xs text-muted-foreground">
              Get alerts when harathi and special poojas begin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshan;
