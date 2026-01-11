import { ChevronDown } from "lucide-react";
import hanumanHero from "@/assets/hanuman-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden temple-pattern"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Om Symbol */}
          <div className="text-6xl mb-6 animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            ॐ
          </div>

          {/* Animated Hanuman Image */}
          <div className="relative mb-8 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
            {/* Divine Aura Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/30 animate-ping opacity-20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/40 animate-pulse" />
            </div>
            
            {/* Hanuman Image with Glow */}
            <div className="divine-aura float-animation">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-pulse border-4 border-accent/50 relative">
                <img 
                  src={hanumanHero} 
                  alt="Lord Hanuman in Abhaya Mudra blessing devotees" 
                  className="w-full h-full object-cover object-top scale-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Temple Name */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl mb-4 animate-fade-in-up opacity-0 [animation-delay:0.6s]">
            <span className="text-gold-gradient">Sri Abhaya Anjaneya</span>
          </h1>
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-primary mb-6 animate-fade-in-up opacity-0 [animation-delay:0.7s]">
            Swamy Temple
          </h2>

          {/* Location */}
          <p className="font-body text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in-up opacity-0 [animation-delay:0.8s]">
            Venkatapuram Village, Giddalur, Andhra Pradesh
          </p>

          {/* Sanskrit Shloka */}
          <div className="max-w-2xl mb-10 animate-fade-in-up opacity-0 [animation-delay:0.9s]">
            <p className="font-heading text-accent/90 text-lg md:text-xl italic mb-2">
              "बुद्धिर्बलं यशो धैर्यं निर्भयत्वं अरोगता"
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              Wisdom, Strength, Fame, Courage, Fearlessness, and Good Health
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 [animation-delay:1s]">
            <a href="#darshan" className="btn-divine">
              🔴 Watch Live Darshan
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-lg font-heading font-semibold text-lg border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Book Seva
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#darshan"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-accent/70 hover:text-accent transition-colors"
        aria-label="Scroll down to Live Darshan"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default HeroSection;
