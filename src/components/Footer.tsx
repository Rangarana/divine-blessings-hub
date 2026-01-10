import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border/30 bg-gradient-to-b from-transparent to-maroon-deep/20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Temple Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl shadow-lg">
                🙏
              </div>
              <div>
                <h3 className="font-heading text-lg text-gold-gradient">
                  Sri Abhaya Anjaneya
                </h3>
                <p className="text-xs text-muted-foreground">Swamy Temple</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A sacred abode of Lord Hanuman in Abhaya Mudra, blessing devotees with 
              fearlessness, strength, and divine protection.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Venkatapuram Village, Giddalur Mandal, Prakasam District, Andhra Pradesh - 523357</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@abhayaanjaneya.org</span>
              </li>
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Temple Timings</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <span className="text-foreground">Morning:</span>
                  <span className="text-muted-foreground ml-2">5:00 AM - 12:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <span className="text-foreground">Evening:</span>
                  <span className="text-muted-foreground ml-2">4:00 PM - 9:00 PM</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/30">
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">✦</span> Special timings during festivals
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us for daily darshan updates, festival announcements, and spiritual content.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Sri Abhaya Anjaneya Swamy Temple. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">जय श्री राम</span>
              <span>•</span>
              <span className="text-accent">जय हनुमान</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
