import { Link } from "wouter";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const serviceLinks = [
  { title: "Managed IT Support", href: "/services/managed-it" },
  { title: "Cyber Security", href: "/services/cyber-security" },
  { title: "Connectivity", href: "/services/connectivity" },
  { title: "Mobile", href: "/services/mobile" },
  { title: "Microsoft 365", href: "/services/microsoft-365" },
  { title: "WiFi", href: "/services/wifi" },
  { title: "PAT Testing", href: "/services/pat-testing" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-xl">F</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">Fox IT</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              IT support that feels like talking to a mate, not a call centre. We're a small, expert team — and we actually care.
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

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Free Resources</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:01234567890" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  01234 567890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@fox-it.co.uk" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  hello@fox-it.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/70">
                  United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Fox IT. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            IT that just works. People who actually care.
          </p>
        </div>
      </div>
    </footer>
  );
}
