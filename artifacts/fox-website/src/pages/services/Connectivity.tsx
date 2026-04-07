import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  Wifi,
  Building2,
  Globe,
  TrendingUp,
  Clock,
  PhoneCall,
  Shield,
  HelpCircle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Connection types ─────────────────────────────────────────── */

const connectionTypes = [
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Full Fibre Broadband (FTTP)",
    tag: "Most businesses",
    speed: "Up to 1 Gbps",
    desc: "Full Fibre to the Premises (FTTP) is now the standard recommendation for most UK businesses. Fibre all the way from the exchange to your building — no copper in the last mile. Faster, more reliable, and increasingly available across the East Midlands.",
    features: [
      "Speeds from 100 Mbps to 1 Gbps down",
      "No copper degradation — consistent speeds",
      "Contended (shared) but high performance",
      "Available across most East Midlands postcodes",
      "Cost-effective — suitable for 1–30 users typically",
    ],
    ideal: "Offices of 1–30 users with standard cloud, email, and video call usage.",
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: "Superfast Broadband (SOGEA/FTTC)",
    tag: "Where FTTP isn't available",
    speed: "Up to 80 Mbps",
    desc: "Where FTTP isn't yet available, SOGEA (Single Order Generic Ethernet Access) or FTTC (Fibre to the Cabinet) delivers fibre to the street cabinet with copper to your premises. Speeds of 40–80 Mbps down — still very capable for most SMBs and often more cost-effective.",
    features: [
      "Available in more locations than FTTP",
      "40–80 Mbps download speeds typical",
      "Single-order product — no phone line required",
      "Good solution for smaller teams",
      "Can be bonded for higher resilience",
    ],
    ideal: "Businesses in areas not yet reached by full fibre rollout.",
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "Leased Line (EFM / Ethernet)",
    tag: "Business-critical",
    speed: "10 Mbps – 10 Gbps",
    desc: "A dedicated leased line gives you uncontended, symmetrical bandwidth — meaning the speed you pay for is the speed you get, always, guaranteed by SLA. No sharing with other businesses, no peak-time slowdowns. Essential for cloud-heavy, multi-site, or critical operations.",
    features: [
      "Uncontended — dedicated line just for you",
      "Symmetrical — upload = download speed",
      "SLA-backed with financial remedy for downtime",
      "Speeds from 10 Mbps to 10 Gbps",
      "Static IP and full business-grade support",
    ],
    ideal: "Businesses with 20+ cloud-heavy users, VoIP dependency, hosted servers, or multiple offices.",
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "4G / 5G Business Backup",
    tag: "Resilience & failover",
    speed: "Up to 300 Mbps",
    desc: "A 4G or 5G mobile broadband connection configured as automatic failover — if your primary line goes down, your business switches seamlessly to the backup within seconds. Routers detect the outage and switch automatically. Most businesses don't need this; some can't afford to be without it.",
    features: [
      "Automatic failover — often imperceptible",
      "Available nationwide where mobile signal exists",
      "Paired with primary leased line or FTTP",
      "Business SIM with pooled data or unlimited",
      "No configuration required by staff",
    ],
    ideal: "Businesses where internet downtime is directly costly — VoIP, payment terminals, cloud-only operations.",
  },
];

/* ─── Decision guide ───────────────────────────────────────────── */

const decisionGuide = [
  { users: "1–5 users", rec: "FTTP Broadband", note: "Cost-effective and more than fast enough" },
  { users: "5–20 users", rec: "FTTP Broadband", note: "Good performance at modest cost" },
  { users: "20–50 users", rec: "FTTP or Leased Line", note: "Depends on cloud dependency and VoIP usage" },
  { users: "50+ users", rec: "Leased Line", note: "SLA-backed uptime, dedicated bandwidth" },
  { users: "Any size", rec: "Add 4G/5G failover", note: "If downtime costs more than £100/hour" },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function Connectivity() {
  return (
    <div>
      <ServicePageHero
        subtitle="Connectivity"
        title="Fast, reliable connectivity. Sorted."
        description="From full fibre broadband to dedicated leased lines and 4G failover — we find the right connection for your business, manage everything from survey to install, and support you ongoing. No waiting on hold with national providers."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "£6,000", label: "average cost of 4 hours downtime for a 10-person office" },
              { value: "99.9%", label: "uptime SLA on leased lines" },
              { value: "1 Gbps", label: "maximum speed on FTTP business broadband" },
              { value: "1", label: "point of contact — we manage it all" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection types */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Your options</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Which type of connection do you need?</h2>
            <p className="text-muted-foreground leading-relaxed">
              There's no one-size-fits-all answer. The right connection depends on your team size, how cloud-dependent you are, whether you run VoIP phone calls, and what downtime would actually cost you. We'll help you figure it out — no sales pressure, just honest advice. We supply via <strong>Giacom</strong> — the UK's leading telecommunications and cloud wholesale platform — giving us access to all major carriers including BT Openreach, Virgin Media Business, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {connectionTypes.map((conn, i) => (
              <motion.div key={conn.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all" data-testid={`connectivity-${conn.title.toLowerCase().replace(/\s|\//g, '-')}`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">{conn.icon}</div>
                  <div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{conn.tag}</span>
                    <h3 className="font-display font-bold text-xl text-secondary mt-1">{conn.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{conn.speed}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{conn.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {conn.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="bg-muted/50 rounded-xl px-4 py-2.5 border border-border">
                  <span className="text-xs font-semibold text-secondary">Ideal for: </span>
                  <span className="text-xs text-muted-foreground">{conn.ideal}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision guide */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-3">Quick decision guide</h2>
              <p className="text-muted-foreground text-sm">Not sure what to order? Here's a starting point.</p>
            </div>
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/60 border-b border-border">
                <div className="p-3 text-xs font-semibold text-secondary">Team size</div>
                <div className="p-3 text-xs font-semibold text-secondary">Recommended</div>
                <div className="p-3 text-xs font-semibold text-secondary">Why</div>
              </div>
              {decisionGuide.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                  <div className="p-3 text-sm font-semibold text-secondary">{row.users}</div>
                  <div className="p-3 text-sm text-primary font-semibold">{row.rec}</div>
                  <div className="p-3 text-xs text-muted-foreground">{row.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Fox */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why manage connectivity through Fox?</p>
              <h2 className="font-display font-bold text-3xl text-secondary mb-5">One call when something goes wrong</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When your internet goes down, the last thing you want is to be passed between your IT company and your ISP, each blaming the other. When connectivity is managed through Fox, there's one call. We own the problem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We supply connectivity via <strong>Giacom</strong> — the UK's leading comms and cloud wholesale platform, with access to all major network carriers. That means we can genuinely find you the best solution for your location, not just what one carrier happens to offer.
              </p>
              <ul className="space-y-3">
                {[
                  "Whole-of-market connectivity — not tied to one carrier",
                  "Survey, order, and installation managed by Fox",
                  "Ongoing technical support from your Fox team",
                  "Combined with IT support — one invoice, one contact",
                  "Proactive monitoring — we know if your line drops",
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
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-3">Not sure which you need?</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Tell us your postcode, how many people work in the office, and what you currently pay. We'll check availability, compare options, and come back to you with a clear recommendation.
                </p>
                <Link href="/contact">
                  <Button className="w-full font-semibold group" data-testid="connectivity-cta">
                    Get a connectivity review <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
