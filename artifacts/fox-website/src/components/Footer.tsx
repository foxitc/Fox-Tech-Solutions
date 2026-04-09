import { Link } from "wouter";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { FoxLogoIcon } from "@/components/FoxLogo";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <FoxLogoIcon className="h-12 w-auto" />
              <span className="font-display font-bold text-2xl text-white">Fox ITC</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-4">
              IT support that feels like talking to a mate, not a call centre. We're a small, expert team — and we actually care.
            </p>
            <p className="text-xs text-secondary-foreground/50 italic leading-relaxed mb-5">
              "Do It. Care 4 It. Own Shit. Simplify It."
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <a href="tel:03300581877" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    03300 581 877
                  </a>
                  <a href="https://wa.me/443300581877" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center gap-1 text-xs text-[#25D366] hover:text-[#1da851] transition-colors font-medium">
                    <SiWhatsapp className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@foxitc.co.uk" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  hello@foxitc.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/70">Leicestershire, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Fox ITC. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            IT that just works. People who actually care.
          </p>
        </div>
      </div>
    </footer>
  );
}
