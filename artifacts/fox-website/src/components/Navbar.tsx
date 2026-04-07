import React from "react";
import { Link, useLocation } from "wouter";
import { FoxLogoIcon } from "@/components/FoxLogo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, Shield, Server, Wifi, Phone, Activity, Brain, ClipboardList } from "lucide-react";

const services = [
  {
    title: "Managed IT Support",
    href: "/services/managed-it",
    description: "We become your IT department. Fast response, plain English.",
    icon: <Server className="w-5 h-5 text-primary" />
  },
  {
    title: "Cyber Security",
    href: "/services/cyber-security",
    description: "Protected, certified, and trained — before something goes wrong.",
    icon: <Shield className="w-5 h-5 text-primary" />
  },
  {
    title: "AI Services",
    href: "/services/ai",
    description: "AI readiness, Copilot, automation & small app builds.",
    icon: <Brain className="w-5 h-5 text-primary" />
  },
  {
    title: "Microsoft 365",
    href: "/services/microsoft-365",
    description: "Licencing, compliance, SharePoint, Teams — handled.",
    icon: <Server className="w-5 h-5 text-primary" />
  },
  {
    title: "Connectivity",
    href: "/services/connectivity",
    description: "Fast, reliable connectivity — leased lines and broadband.",
    icon: <Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "Mobile",
    href: "/services/mobile",
    description: "Business mobile sorted. O2, Vodafone, EE.",
    icon: <Phone className="w-5 h-5 text-primary" />
  },
  {
    title: "WiFi",
    href: "/services/wifi",
    description: "Enterprise-grade WiFi — surveyed, designed, installed.",
    icon: <Wifi className="w-5 h-5 text-primary" />
  },
  {
    title: "PAT Testing",
    href: "/services/pat-testing",
    description: "Keep your team safe and your compliance sorted.",
    icon: <Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "AI Readiness Quiz",
    href: "/ai-readiness",
    description: "20 questions. Find out where your business stands — and what to do next.",
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    highlight: true,
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <FoxLogoIcon className="h-12 w-auto" />
          <span className="font-display font-bold text-2xl tracking-tight text-secondary">Fox ITC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title} className={(service as any).highlight ? "md:col-span-2" : ""}>
                        <NavigationMenuLink asChild>
                          <Link href={service.href} className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${(service as any).highlight ? "bg-primary/5 border border-primary/20 hover:bg-primary/10" : "hover:bg-accent hover:text-accent-foreground"} focus:bg-accent focus:text-accent-foreground`}>
                            <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                              {service.icon}
                              {service.title}
                              {(service as any).highlight && <span className="ml-auto text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Free</span>}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/resources">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link href="/contact" className="hidden lg:block">
            <Button size="lg" className="font-semibold shadow-sm hover:-translate-y-0.5 transition-transform">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 absolute w-full shadow-lg">
          <Link href="/" className="px-4 py-2 font-semibold text-secondary rounded-md hover:bg-accent">Home</Link>
          <div className="px-4 py-2 font-semibold text-muted-foreground">Services</div>
          <div className="pl-8 flex flex-col gap-2 border-l-2 border-accent ml-6">
            {services.map(s => (
              <Link key={s.title} href={s.href} className="py-2 text-sm text-secondary hover:text-primary transition-colors">
                {s.title}
              </Link>
            ))}
          </div>
          <Link href="/ai-readiness" className="px-4 py-2 font-semibold text-primary rounded-md hover:bg-primary/10 flex items-center gap-2">
            <ClipboardList className="w-4 h-4" /> AI Readiness Quiz <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full font-semibold">Free</span>
          </Link>
          <Link href="/pricing" className="px-4 py-2 font-semibold text-secondary rounded-md hover:bg-accent">Pricing</Link>
          <Link href="/resources" className="px-4 py-2 font-semibold text-secondary rounded-md hover:bg-accent">Resources</Link>
          <Link href="/about" className="px-4 py-2 font-semibold text-secondary rounded-md hover:bg-accent">About</Link>
          <Link href="/contact" className="px-4 py-2 font-semibold text-secondary rounded-md hover:bg-accent">Contact</Link>
          <Link href="/contact" className="mt-4">
            <Button className="w-full">Get in touch</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
