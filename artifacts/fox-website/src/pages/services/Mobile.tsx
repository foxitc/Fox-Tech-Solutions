import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Globe,
  Smartphone,
  Shield,
  RefreshCw,
  BarChart3,
  Lock,
  Wifi,
  Users,
  PackageCheck,
} from "lucide-react";
import { SiVodafone } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Networks ─────────────────────────────────────────────────── */

const networks = [
  {
    name: "O2",
    icon: <Phone className="w-8 h-8 text-primary" />,
    tag: "Our go-to for most SMBs",
    description: "O2 Business is our most commonly recommended network for East Midlands businesses. Excellent coverage across the region, strong 5G rollout, and some of the most competitive business tariffs available. O2's Priority and business tools add genuine value beyond just calls and data.",
    coverage: "99% UK population (4G) · Nationwide 5G rollout",
    strengths: [
      "Highly competitive business tariffs",
      "Strong rural and urban coverage across East Midlands",
      "O2 Business account management tools",
      "Flexible airtime — SIM-only to full device packages",
      "Wifi Calling on compatible handsets",
      "International roaming across 75+ countries",
    ],
    bestFor: "Most SMBs — best balance of price, coverage and service",
  },
  {
    name: "Vodafone",
    icon: <SiVodafone className="w-8 h-8 text-primary" />,
    tag: "Best for international use",
    description: "Vodafone Business is built for reliability and international reach. If your team regularly travels abroad or makes international calls, Vodafone is hard to beat. Strong infrastructure, excellent data speeds, and business-grade SLA options make it the right choice for larger or more demanding businesses.",
    coverage: "99% UK population (4G) · Extensive 5G footprint",
    strengths: [
      "Best-in-class international roaming (185+ countries)",
      "Vodafone Business Connect — secure mobile networking",
      "Superior data speeds on 5G where available",
      "Strong SLA options for business-critical users",
      "Teams integration via Vodafone Business UC",
      "Device management via Vodafone Business Tools",
    ],
    bestFor: "International travellers, larger teams, and data-heavy users",
  },
  {
    name: "EE",
    icon: <Phone className="w-8 h-8 text-primary" />,
    tag: "UK's fastest mobile network",
    description: "EE is consistently rated the UK's fastest and most reliable mobile network. The widest 5G coverage of any UK operator, excellent call quality, and genuine speed advantages in urban areas. For businesses where connectivity performance is paramount, EE is the benchmark.",
    coverage: "99%+ UK population (4G) · Widest 5G coverage in UK",
    strengths: [
      "Fastest UK network — consistently in independent tests",
      "Widest 5G coverage nationally",
      "Excellent call quality and HD Voice",
      "EE Business plans include extra features",
      "Microsoft Teams Calling integration",
      "Strong coverage in areas other networks miss",
    ],
    bestFor: "Speed-critical users and businesses in areas with variable coverage",
  },
];

/* ─── Services ─────────────────────────────────────────────────── */

const mobileServices = [
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "SIM-Only Business Tariffs",
    desc: "For businesses who want competitive tariffs without new handsets, SIM-only is the most flexible and cost-effective option. Monthly or annual plans, mix of networks across your team, pooled or individual data allowances.",
    points: ["Monthly or 12-month plans", "Pooled data across your team available", "Mix of networks — right network for each person", "No handset commitment"],
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Business Handsets",
    desc: "We supply new handsets with business contracts across all three networks. iPhone, Samsung Galaxy, Google Pixel — we'll advise on the best device for the job. Standard 24 or 36-month contracts, with options to refresh hardware mid-contract.",
    points: ["iPhone, Samsung, Google Pixel available", "24 or 36-month contracts", "Pre-configured and ready to use on arrival", "Managed under your existing business account"],
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Mobile Device Management (MDM)",
    desc: "Mobile Device Management lets you manage and secure all company devices and BYOD (personal) devices centrally. Enforce PIN requirements, push business apps, configure email profiles automatically, and remotely wipe a lost or stolen device in minutes. Essential for GDPR compliance.",
    points: ["Remote wipe lost or stolen devices", "Enforce passcode and encryption policies", "Push apps and email profiles", "Included via Microsoft Intune (Business Premium)"],
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "International Roaming",
    desc: "Business travel needs reliable roaming. We configure international packages per trip or ongoing, ensure your team's devices are correctly provisioned for each country, and keep a close eye on usage to avoid bill shock.",
    points: ["Pre-configured roaming add-ons per user", "Coverage across 75–185 countries depending on network", "Usage alerts to prevent overage", "Emergency replacement SIMs for lost devices"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Usage Management & Reporting",
    desc: "We track mobile usage across your whole estate and flag anomalies before they hit your bill. Monthly reporting, contract end reminders, and proactive tariff reviews — making sure you're always on the most cost-effective plan.",
    points: ["Monthly usage reporting per user", "Contract renewal reminders (no auto-renewals missed)", "Tariff reviews as usage changes", "Spend alerts and controls available"],
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: "Contract Migration & Porting",
    desc: "Moving from another provider? We handle everything — number porting, early termination negotiation where applicable, account setup, device configuration. Your team keeps their numbers, and the transition is invisible to them.",
    points: ["Number porting managed start to finish", "Early termination assessment", "Existing number preserved", "New SIMs delivered pre-configured"],
  },
];

export default function Mobile() {
  return (
    <div>
      <ServicePageHero
        subtitle="Business Mobile"
        title="Business mobile sorted. No faff."
        description="O2, Vodafone, EE — we work across all the major networks, supplied via Giacom. We find the right deal for each person in your team, manage the contracts, and handle everything from order to delivery — with MDM and security included."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3", label: "major networks — O2, Vodafone, EE" },
              { value: "1", label: "contact for all your mobile needs" },
              { value: "185+", label: "countries covered for international roaming" },
              { value: "MDM", label: "device security included as standard" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Networks */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The networks</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Not tied to one network</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're not an O2 shop or a Vodafone shop. We supply across all three major networks via <strong>Giacom</strong> — the UK's leading comms wholesale platform. That means we recommend what's right for you, not what's easiest for us. Different people in your team might be on different networks — and that's fine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {networks.map((network, i) => (
              <motion.div key={network.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all flex flex-col" data-testid={`mobile-network-${network.name.toLowerCase()}`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">{network.icon}</div>
                  <div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full block mb-1">{network.tag}</span>
                    <h3 className="font-display font-bold text-2xl text-secondary">{network.name}</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 font-medium">{network.coverage}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{network.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {network.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
                <div className="bg-muted/50 rounded-xl px-4 py-2.5 border border-border mt-auto">
                  <span className="text-xs font-semibold text-secondary">Best for: </span>
                  <span className="text-xs text-muted-foreground">{network.bestFor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile services */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What we provide</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">More than just SIMs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Managing mobile through Fox ITC means proper management — not just handing out SIMs. MDM, usage monitoring, security, porting, and reporting all included.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileServices.map((svc, i) => (
              <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">{svc.icon}</div>
                <h3 className="font-display font-bold text-base text-secondary mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why manage mobile through Fox?</p>
              <h2 className="font-display font-bold text-3xl text-secondary mb-5">One invoice. One contact. No hassle.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you manage mobile through Fox, everything sits under one relationship — IT support, connectivity, Microsoft 365, and mobile all through the same team. No more calling three companies when something goes wrong.
              </p>
              <ul className="space-y-3">
                {[
                  "Competitive tariffs — we benchmark the market",
                  "All networks available — right choice for each user",
                  "MDM and security configured from day one",
                  "One monthly invoice for all IT services",
                  "Proactive renewal management — no missed renewal dates",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="bg-secondary rounded-2xl p-8 text-white">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-3">Get a mobile quote</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Tell us how many users, what you're paying now, and which network you're on. We'll compare and see if we can do better — and usually we can.
                </p>
                <Link href="/contact">
                  <Button className="w-full font-semibold group" data-testid="mobile-cta">
                    Get a quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
