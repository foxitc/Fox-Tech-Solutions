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
  Activity,
  Shield,
  Monitor,
  Network,
  Building2,
  Warehouse,
  ShoppingBag,
  Coffee,
  Users,
  Lock,
  Radio,
  Settings,
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
    desc: "No guesswork. Before we spec a single access point, we design the solution around your building layout, the number of users and devices, your traffic types (video calls, file sharing, IoT, VoIP), and your security requirements. Access point placement, SSID structure, VLAN design, and firewall rules — all documented before any installation begins.",
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
    desc: "Qualified Unifi engineers install everything — cabling, mounting, configuration. Every access point is ceiling or wall-mounted cleanly, cabling is routed properly (trunking where visible, in-ceiling where not), and the network is fully configured and tested before we leave. Documentation left on-site and in your Fox IT portal.",
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
    title: "Ongoing Management (Managed WiFi)",
    desc: "For clients on Fox IT Managed IT, WiFi monitoring is included — we get alerted if an access point goes offline, can reboot it remotely, push firmware updates, and see performance trends. For standalone WiFi clients, we offer managed WiFi as an add-on service.",
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

/* ─── Unifi product range ──────────────────────────────────────── */

const unifiProducts = [
  {
    icon: <Radio className="w-5 h-5 text-primary" />,
    title: "Unifi Access Points",
    desc: "The hardware that creates your WiFi. From compact indoor APs to outdoor units, high-density enterprise APs for busy environments, and long-range APs for warehouses and large open spaces. Every AP is managed through the central Unifi Network controller.",
    examples: "U6 Lite, U6 Pro, U6 Enterprise, U6 Mesh, U6 Extender",
  },
  {
    icon: <Network className="w-5 h-5 text-primary" />,
    title: "Unifi Switches",
    desc: "Managed PoE switches that power access points over the network cable (no separate power supply needed) and provide centralised control of your entire wired network. VLAN support, port isolation, traffic analytics.",
    examples: "USW-Lite-8-PoE, USW-Pro-24-PoE, USW-Enterprise series",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Unifi Gateways (Firewall)",
    desc: "Unifi's security gateways and cloud gateways act as your internet router and firewall. Advanced threat management, IDS/IPS, deep packet inspection, VPN, and site-to-site connectivity — all managed from the same Unifi console.",
    examples: "UDM-SE, UDM-Pro, UCG-Ultra, USG",
  },
  {
    icon: <Monitor className="w-5 h-5 text-primary" />,
    title: "Unifi Network Application (Controller)",
    desc: "The central management platform for your entire Unifi network — cloud or self-hosted. Configure any device, see all connected clients, run topology maps, view analytics, and manage multiple sites from one place. Fox IT hosts and manages this for you.",
    examples: "Cloud-hosted or UniFi OS Console",
  },
];

/* ─── Industry use cases ───────────────────────────────────────── */

const industries = [
  {
    icon: <Building2 className="w-5 h-5 text-primary" />,
    title: "Offices",
    desc: "Coverage across all meeting rooms, open plan areas, and private offices. Staff and guest SSIDs separated. High device density managed. Consistent speeds regardless of how many people are on calls.",
  },
  {
    icon: <Warehouse className="w-5 h-5 text-primary" />,
    title: "Warehouses & Industrial",
    desc: "Long-range APs for large open spaces. Coverage for handheld scanners, forklifts, CCTV, and mobile devices. IP66-rated outdoor units for loading areas. Multi-access-point handoff for roaming devices.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-primary" />,
    title: "Retail",
    desc: "POS system reliability as priority. Separate SSID for card terminals, stock management devices, and customer WiFi. Captive portal for guest access with branded login page.",
  },
  {
    icon: <Coffee className="w-5 h-5 text-primary" />,
    title: "Hospitality",
    desc: "Guest WiFi with voucher or captive portal. Separate back-of-house network for EPOS and reservations systems. High density coverage for dining areas and function rooms.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function Wifi() {
  return (
    <div>
      <ServicePageHero
        subtitle="WiFi Solutions"
        title="No dead zones. Qualified Unifi specialists."
        description="We survey your space, design the right solution, and install it properly. Ubiquiti Unifi specialists — enterprise-grade WiFi that performs and keeps performing, managed ongoing."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Unifi", label: "qualified installation engineers" },
              { value: "100%", label: "coverage design — no guesswork" },
              { value: "24/7", label: "AP monitoring for managed clients" },
              { value: "10 Gbps", label: "max backhaul with enterprise switches" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
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
              Most business WiFi problems aren't the hardware — they're the lack of a proper process. Access points placed by guesswork, no channel planning, no VLAN structure, no documentation. We do it properly from the start.
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start hover:border-primary/30 hover:shadow-md transition-all" data-testid={`wifi-service-${step.title.toLowerCase().replace(/\s|&/g, '-')}`}>
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">{step.icon}</div>
                    <div>
                      <div className="font-display font-bold text-4xl text-primary/20 leading-none">{step.step}</div>
                    </div>
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

      {/* Unifi platform */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The platform</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Why Ubiquiti Unifi?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-2">
              Unifi is Ubiquiti's enterprise networking platform — access points, switches, gateways, cameras, and access control, all managed through a single unified controller. Enterprise performance at SMB-friendly pricing. It's why we recommend it for every business.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              We're qualified Unifi specialists — which means we know how to get the most out of the platform and avoid the common mistakes. A poorly designed Unifi network can be just as frustrating as any other. Done properly, it's transformative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unifiProducts.map((prod, i) => (
              <motion.div key={prod.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{prod.icon}</div>
                  <h3 className="font-display font-bold text-lg text-secondary pt-1">{prod.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{prod.desc}</p>
                <p className="text-xs text-muted-foreground font-medium">
                  <span className="text-secondary font-semibold">Examples: </span>{prod.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry use cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">By industry</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">We've done it across all environments</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Offices, warehouses, retail, hospitality — each has unique requirements and we design for them specifically.</p>
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

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <WifiIcon className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">WiFi not cutting it?</h2>
          <p className="text-white/70 text-lg mb-8">
            If your team is complaining about WiFi, it's already costing you in productivity and frustration. A proper survey often reveals the fix is simpler than expected. Let's find out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="font-bold px-10 group" data-testid="wifi-cta">
                Book a WiFi audit <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
            {["Qualified Unifi engineers", "Full survey before any install", "East Midlands-based"].map((p) => (
              <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
