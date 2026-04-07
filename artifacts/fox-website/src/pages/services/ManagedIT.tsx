import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Monitor,
  Server,
  Users,
  Clock,
  Headphones,
  Shield,
  Wrench,
  Activity,
  Lock,
  BarChart3,
  Laptop,
  Cloud,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: <Headphones className="w-6 h-6 text-primary" />,
    title: "UK Helpdesk Support",
    desc: "Real people, real answers — not a chatbot or overseas call centre. When something goes wrong, you contact us directly. We log the issue, communicate throughout, and fix it. Most issues are resolved remotely within the hour.",
    points: ["Phone, email & remote access support", "Fast response — we don't leave you waiting", "Same team every time — no passing around", "Jargon-free communication"],
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Proactive Monitoring (RMM)",
    desc: "We run Remote Monitoring & Management (RMM) software on all your devices. This means we can see issues developing — disk filling up, a patch failing to apply, a service crashing — before they become problems. We often fix things before you even know there was an issue.",
    points: ["24/7 device health monitoring", "Automated alerts on issues", "Patch status tracking", "Performance reporting"],
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: "Patch Management",
    desc: "Unpatched software is one of the most common ways attackers get in. We manage Windows updates, third-party application patching, and firmware updates centrally — tested, scheduled, and applied without disrupting your team's day.",
    points: ["Windows OS & Office patching", "Third-party app updates (Chrome, Adobe, etc.)", "Scheduled out-of-hours deployment", "Patch compliance reporting"],
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Endpoint Security",
    desc: "Every device in your business is a potential entry point. We deploy and manage enterprise-grade endpoint protection (EDR) across all your devices — monitoring for threats, investigating alerts, and responding automatically. Not just antivirus; proper next-gen endpoint security.",
    points: ["Managed EDR (Endpoint Detection & Response)", "Real-time threat detection", "Automatic remediation", "Central security dashboard"],
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Remote & On-Site Support",
    desc: "Most issues can be resolved remotely in minutes using secure remote access tools. When physical presence is needed — a hardware failure, a new machine setup, a server issue — we come to you. We cover the East Midlands and surrounding areas.",
    points: ["Secure remote access tools", "On-site within agreed SLA for critical issues", "New device setup & deployment", "Hardware procurement & installation"],
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Server & Infrastructure Management",
    desc: "Whether you run on-premise servers, a hybrid environment, or are fully cloud-based, we manage and monitor your infrastructure. Server health, storage, virtualisation, backup status — all kept in check, all documented.",
    points: ["Windows & Linux server management", "Virtualisation (Hyper-V, VMware)", "Backup monitoring & testing", "Capacity planning"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Microsoft 365 Management",
    desc: "M365 management is included in all Fox IT packages. Licencing, user onboarding/offboarding, security hardening, Teams configuration, SharePoint structure, MFA enforcement — we handle the whole platform, not just the helpdesk tickets.",
    points: ["User lifecycle management", "MFA & conditional access enforcement", "Licence management & cost optimisation", "Teams and SharePoint configuration"],
  },
  {
    icon: <Laptop className="w-6 h-6 text-primary" />,
    title: "Hardware Procurement",
    desc: "We source, configure, and deploy business hardware — laptops, desktops, servers, networking equipment. Every device is set up to your standard build before it lands on a desk. No out-of-box setup headaches, no forgotten software, no first-day IT frustrations.",
    points: ["Trusted supplier relationships — competitive pricing", "Pre-configured device deployment", "Asset register maintained", "Warranty & repair management"],
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "User Onboarding & Offboarding",
    desc: "A documented, repeatable process for new starters and leavers. New users get their account, email, devices, and apps ready on day one. Leavers have accounts disabled, data archived, and licences recovered immediately — no lingering access.",
    points: ["Account creation from a defined template", "Device imaging & delivery", "Immediate account suspension on exit", "Licence recovery — no waste"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Monthly Reporting & Reviews",
    desc: "We send a monthly report covering ticket volumes, response times, patch compliance, security status, and any recommendations. Quarterly or annual reviews available — so you always know what you're getting and can hold us to it.",
    points: ["Monthly performance report", "Ticket trends & resolution times", "Security posture overview", "Forward-looking recommendations"],
  },
];

const process = [
  { step: "01", title: "Discovery call", desc: "We learn about your business, your setup, your team size, and any existing IT pain points. No forms, no sales script — just a straight conversation." },
  { step: "02", title: "Audit & proposal", desc: "We audit what you've got and put together a clear proposal — what we'll do, what's included, what it costs. Plain English, no surprises." },
  { step: "03", title: "Onboarding", desc: "We deploy our monitoring, get familiar with your systems, document everything, and ensure a clean handover from any previous provider." },
  { step: "04", title: "Ongoing support", desc: "From day one you have a direct line to your Fox IT team. Monthly reports, quarterly reviews, and a team that grows to know your business inside out." },
];

export default function ManagedIT() {
  return (
    <div>
      <ServicePageHero
        subtitle="Managed IT Support"
        title="Your IT department, done properly."
        description="We become your IT department — helpdesk, monitoring, security, Microsoft 365, hardware, and strategy. Flat monthly cost, no surprises, and a team who treats your business like it's their own."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "< 1hr", label: "average remote resolution time" },
              { value: "99.9%", label: "monitored uptime target" },
              { value: "24/7", label: "automated system monitoring" },
              { value: "1", label: "point of contact for all IT" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What's included</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Everything you need — nothing you don't</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fox IT Managed IT is a fixed monthly service that covers every aspect of your IT. No per-ticket charges, no out-of-scope surprises. All included.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{svc.icon}</div>
                  <h3 className="font-display font-bold text-lg text-secondary leading-snug pt-1">{svc.title}</h3>
                </div>
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

      {/* Process */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How it works</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">From conversation to covered</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6 relative">
                <div className="font-display font-bold text-5xl text-primary/10 mb-3 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-secondary text-base mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fox difference + pricing link */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Fox difference</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">Not just a helpdesk. Your IT team.</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Most IT companies give you a ticket number. We give you a relationship. You'll know who's looking after your systems, and they'll know your business inside out. When something goes wrong — and at some point something always does — we already understand your setup, your priorities, and what needs fixing first.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dedicated account manager who knows your setup",
                  "Monthly reports — you always know what you're getting",
                  "Fixed monthly pricing — no surprise charges",
                  "Flexible contracts — we earn your loyalty, not demand it",
                  "East Midlands-based team — on-site when you need us",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button className="font-semibold group" data-testid="managed-it-cta">
                    Get a quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="font-semibold group">
                    View pricing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-secondary rounded-2xl p-8 text-white">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-3">Who this is for</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  Small and medium businesses in the East Midlands who want reliable, professional IT without the overhead of an in-house team. From 3-user start-ups to 50-user established businesses.
                </p>
                <div className="space-y-3 border-t border-white/10 pt-5">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-display font-bold text-primary text-sm mb-1">Foundation — from £30/user/mo</p>
                    <p className="text-white/60 text-xs">Core helpdesk, monitoring & security</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-primary/30">
                    <p className="font-display font-bold text-primary text-sm mb-1">Professional — from £50/user/mo ★</p>
                    <p className="text-white/60 text-xs">Full managed IT — most popular</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-display font-bold text-primary text-sm mb-1">Complete — from £75/user/mo</p>
                    <p className="text-white/60 text-xs">Everything + M365 licences included</p>
                  </div>
                  <Link href="/pricing">
                    <Button className="w-full font-semibold mt-2 group">
                      See full pricing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
