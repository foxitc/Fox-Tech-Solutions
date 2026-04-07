import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Wifi as WifiIcon,
  Search,
  Ruler,
  Wrench,
  Monitor,
  Network,
  Building2,
  Warehouse,
  ShoppingBag,
  Coffee,
  Radio,
  Shield,
  Activity,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Process steps ────────────────────────────────────────────── */

const processSteps = [
  {
    icon: <Search className="w-7 h-7 text-primary" />,
    step: "01",
    title: "Site Survey & WiFi Audit",
    desc: "We start by understanding your space and your current setup — or diagnosing what's wrong with it. Using professional WiFi analysis tools, we measure signal strength, identify interference, check channel congestion, and map coverage across every area. You get a written report with our findings and clear recommendations.",
    points: [
      "Full RF (Radio Frequency) site survey",
      "Coverage heat map — see exactly where signal drops",
      "Channel interference and congestion analysis",
      "Existing hardware assessment — what to keep, what to replace",
      "Capacity assessment — how many concurrent devices can it support?",
      "Written report with prioritised recommendations",
    ],
  },
  {
    icon: <Ruler className="w-7 h-7 text-primary" />,
    step: "02",
    title: "Network Design",
    desc: "Before we spec anything, we design the solution around your building layout, number of users and devices, traffic types (video calls, file sharing, IoT, VoIP), and security requirements. Access point placement, SSID structure, VLAN design, and firewall rules — all documented and agreed before any installation begins. No guesswork.",
    points: [
      "Predictive heat mapping (how coverage will look before installation)",
      "Access point positioning calculated for overlap and capacity",
      "VLAN design — separate networks for staff, guests, IoT",
      "Security requirements built into the design",
      "Scalability planned in — the network grows with you",
      "Full network diagram provided",
    ],
  },
  {
    icon: <Wrench className="w-7 h-7 text-primary" />,
    step: "03",
    title: "Professional Installation",
    desc: "Experienced engineers install everything — cabling, mounting, configuration. Every access point is ceiling or wall-mounted cleanly, cabling is routed properly (trunking where visible, in-ceiling where not), and the network is fully configured and tested before we leave. Full documentation is left with you.",
    points: [
      "All Cat6 cabling installed and tested",
      "Access points cleanly mounted — no exposed cables",
      "Full switch configuration and VLAN setup",
      "SSIDs, passwords, and guest portal configured",
      "End-to-end testing across every area",
      "Full documentation — cable schedules, switch configs, AP locations",
    ],
  },
  {
    icon: <Monitor className="w-7 h-7 text-primary" />,
    step: "04",
    title: "Ongoing Management",
    desc: "For Fox ITC Managed IT clients, WiFi monitoring is included — we're alerted if an access point goes offline, can reboot it remotely, push firmware updates, and see performance trends. For standalone WiFi clients, managed WiFi is available as an add-on.",
    points: [
      "AP uptime monitoring — we know before you do",
      "Remote configuration changes",
      "Firmware updates — centrally managed",
      "Client connectivity analytics",
      "Capacity alerts — know when you're approaching limits",
      "Monthly WiFi performance report available",
    ],
  },
];

/* ─── What goes into a good network ───────────────────────────── */

const networkComponents = [
  {
    icon: <Radio className="w-6 h-6 text-primary" />,
    title: "Access Points",
    desc: "The hardware that creates your wireless signal. We specify the right type for your environment — compact indoor units for open offices, high-density APs for busy meeting rooms, long-range units for warehouses, and weatherproof outdoor access points for loading areas or external spaces. Placement and quantity are calculated from your survey data, not guesswork.",
  },
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Managed Switches",
    desc: "Business-grade managed switches sit at the heart of your network — powering access points over PoE (no separate power supplies needed), enabling VLAN segmentation, and providing detailed traffic visibility. We size and configure switches to suit your environment, whether it's a single-floor office or a multi-building campus.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Firewall & Gateway",
    desc: "Your gateway controls how traffic enters and leaves your network — and a properly configured firewall is essential security infrastructure, not optional. We configure firewalls with appropriate rules, content filtering, VPN access, and intrusion detection as standard. Guest networks are always properly isolated from your business data.",
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Centralised Management",
    desc: "All the hardware we install is managed from a single platform — giving us (and you, if useful) visibility across every device, every connected client, and every performance metric. We host and manage the controller, push configuration changes remotely, and monitor the health of your network without needing to visit site.",
  },
];

/* ─── Industry use cases ───────────────────────────────────────── */

const industries = [
  {
    icon: <Building2 className="w-5 h-5 text-primary" />,
    title: "Offices",
    desc: "Coverage across all meeting rooms, open plan areas, and private offices. Staff and guest SSIDs properly separated. High device density handled. Consistent speeds regardless of how many people are on video calls simultaneously.",
  },
  {
    icon: <Warehouse className="w-5 h-5 text-primary" />,
    title: "Warehouses & Industrial",
    desc: "Long-range access points for large open spaces. Reliable coverage for handheld scanners, forklifts, CCTV, and mobile devices. Weatherproof units for loading bays and external areas. Seamless roaming for devices that move around the site.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-primary" />,
    title: "Retail",
    desc: "Rock-solid connectivity for POS and card payment terminals is the priority. Separate SSIDs for stock management devices and customer WiFi. Captive portal for guest access with branded login if required.",
  },
  {
    icon: <Coffee className="w-5 h-5 text-primary" />,
    title: "Hospitality",
    desc: "Guest WiFi with voucher or captive portal. Separate back-of-house network for EPOS, reservations, and kitchen systems. High-density coverage for dining rooms and function spaces.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function Wifi() {
  return (
    <div>
      <ServicePageHero
        subtitle="WiFi Solutions"
        title="No dead zones. Properly designed."
        description="We survey your space, design the right solution for it, and install it properly. Enterprise-grade wireless networking — surveyed, designed, installed, and managed by engineers who do this every day."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Survey first", label: "always — no guesswork installations" },
              { value: "100%", label: "coverage designed before any hardware is ordered" },
              { value: "24/7", label: "monitoring for managed WiFi clients" },
              { value: "All sites", label: "offices, warehouses, retail, hospitality" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-2xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our process</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Survey. Design. Install. Manage.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most business WiFi problems aren't about the hardware — they're about the lack of a proper process. Access points placed by guesswork, no channel planning, no VLAN structure, no documentation. We approach every project the same way: survey first, design second, install third. It's the only way to get it right.
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start hover:border-primary/30 hover:shadow-md transition-all" data-testid={`wifi-service-${step.title.toLowerCase().replace(/\s|&/g, '-')}`}>
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">{step.icon}</div>
                    <div className="font-display font-bold text-4xl text-primary/20 leading-none">{step.step}</div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">What's included:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What goes into a good network */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The technology</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">What goes into a properly built business network</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're hardware-agnostic and specify the right equipment for each project — not whatever we happen to stock. We work with leading enterprise networking vendors including Ubiquiti, Cisco Meraki, and others, depending on what best fits your environment, budget, and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkComponents.map((comp, i) => (
              <motion.div key={comp.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{comp.icon}</div>
                  <h3 className="font-display font-bold text-lg text-secondary pt-1">{comp.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry use cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">By environment</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">We've done it across all settings</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Every environment has different requirements. We design for what you actually have — not a generic template.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-muted/40 border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">{ind.icon}</div>
                <h3 className="font-display font-bold text-base text-secondary mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fox */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}
            className="bg-secondary rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_95%_53%_/_0.15)_0%,_transparent_60%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Fox ITC</p>
                <h2 className="font-display font-bold text-3xl text-white mb-5">WiFi is only as good as the people who design it</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We're experienced wireless networking engineers — not generalist IT providers who do WiFi on the side. Every installation is designed from a proper site survey, using the right hardware for the environment.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We specify enterprise-grade equipment — including Ubiquiti, Cisco Meraki and others — and manage everything from a centralised platform. You get a network that works today and scales with you.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Survey before every installation — no guesswork",
                  "Hardware-agnostic — right tool for the job",
                  "Full cabling and infrastructure work in-house",
                  "Post-install documentation always provided",
                  "Ongoing monitoring and management available",
                  "East Midlands-based — on-site fast when needed",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <WifiIcon className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">WiFi not cutting it?</h2>
          <p className="text-white/70 text-lg mb-8">
            If your team is complaining about the WiFi, it's already costing you. A proper survey often reveals the fix is simpler — and cheaper — than expected. Let's take a look.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-bold px-10 group" data-testid="wifi-cta">
              Book a WiFi survey <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
            {["Survey before every install", "Hardware-agnostic advice", "East Midlands-based engineers"].map((p) => (
              <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
