import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  Shield,
  BadgeCheck,
  Mail,
  BookOpen,
  Target,
  CheckCircle2,
  X,
  AlertTriangle,
  Lock,
  Eye,
  RefreshCw,
  Archive,
  HardDrive,
  Globe,
  Users,
  Brain,
  Zap,
  FileSearch,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Hornet tiers ─────────────────────────────────────────────── */

const hornetTiers = [
  {
    name: "365 Total Protection\nBusiness",
    tag: "Email Essentials",
    colour: "border-slate-200",
    features: {
      "Spam & malware filtering": true,
      "Phishing URL protection": true,
      "Email continuity service": true,
      "Advanced Threat Protection (ATP)": false,
      "AI Threat Intelligence": false,
      "M365 Backup (Exchange, Teams, SharePoint)": false,
      "Email Archiving (compliance)": false,
      "Security Awareness Training": false,
      "DMARC Manager": false,
      "Permission Manager (Teams/OneDrive)": false,
    },
  },
  {
    name: "365 Total Protection\nBusiness + AI",
    tag: "Recommended for SMBs",
    colour: "border-primary/40 ring-2 ring-primary/20",
    highlight: true,
    features: {
      "Spam & malware filtering": true,
      "Phishing URL protection": true,
      "Email continuity service": true,
      "Advanced Threat Protection (ATP)": true,
      "AI Threat Intelligence": true,
      "M365 Backup (Exchange, Teams, SharePoint)": false,
      "Email Archiving (compliance)": false,
      "Security Awareness Training": false,
      "DMARC Manager": false,
      "Permission Manager (Teams/OneDrive)": false,
    },
  },
  {
    name: "365 Total Protection\nEnterprise",
    tag: "Backup Included",
    colour: "border-slate-200",
    features: {
      "Spam & malware filtering": true,
      "Phishing URL protection": true,
      "Email continuity service": true,
      "Advanced Threat Protection (ATP)": true,
      "AI Threat Intelligence": false,
      "M365 Backup (Exchange, Teams, SharePoint)": true,
      "Email Archiving (compliance)": true,
      "Security Awareness Training": false,
      "DMARC Manager": false,
      "Permission Manager (Teams/OneDrive)": false,
    },
  },
  {
    name: "365 Total Protection\nEnterprise + AI",
    tag: "Complete Suite",
    colour: "border-slate-200",
    features: {
      "Spam & malware filtering": true,
      "Phishing URL protection": true,
      "Email continuity service": true,
      "Advanced Threat Protection (ATP)": true,
      "AI Threat Intelligence": true,
      "M365 Backup (Exchange, Teams, SharePoint)": true,
      "Email Archiving (compliance)": true,
      "Security Awareness Training": true,
      "DMARC Manager": true,
      "Permission Manager (Teams/OneDrive)": true,
    },
  },
];

const hornetFeatureRows = [
  "Spam & malware filtering",
  "Phishing URL protection",
  "Email continuity service",
  "Advanced Threat Protection (ATP)",
  "AI Threat Intelligence",
  "M365 Backup (Exchange, Teams, SharePoint)",
  "Email Archiving (compliance)",
  "Security Awareness Training",
  "DMARC Manager",
  "Permission Manager (Teams/OneDrive)",
];

/* ─── Hornet product cards ─────────────────────────────────────── */

const hornetProducts = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Spam & Malware Protection",
    desc: "The first line of defence. Hornet's AI-powered engine filters out spam, viruses, malware, and ransomware before they ever reach your inbox. Detection rates exceed 99.9% with near-zero false positives — so your team gets clean inboxes, not false alarms.",
    points: ["99.9%+ detection rate", "Real-time threat scanning", "Works alongside Microsoft Defender"],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    title: "Advanced Threat Protection (ATP)",
    desc: "Designed for the threats that basic filtering misses — zero-day attacks, weaponised attachments, and sophisticated social engineering. ATP uses sandboxing to detonate suspicious files in an isolated environment before they reach your users, and time-of-click URL rewriting to check links the moment they're opened, not just when the email arrives.",
    points: ["Sandbox detonation of attachments", "Time-of-click URL rewriting", "QR code phishing detection", "Impersonation detection"],
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "AI Threat Intelligence",
    desc: "Hornet's AI Cyber Assistant analyses communication patterns across your organisation to detect anomalies — unusual senders, changed payment details, impersonation of internal contacts. It spots Business Email Compromise (BEC) attacks that no signature-based system ever will.",
    points: ["Business Email Compromise (BEC) detection", "Communication pattern analysis", "Supplier impersonation alerts", "AI-generated content detection"],
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: "Email Continuity",
    desc: "If Microsoft's email servers go down — and it happens — Email Continuity keeps your business sending and receiving. Staff get a temporary web portal to access their emails within minutes of an outage. Invisible to your customers, invisible to you. Until you need it.",
    points: ["Automatic failover in under 2 minutes", "25-day emergency inbox access", "No configuration required by end users"],
  },
  {
    icon: <Archive className="w-6 h-6 text-primary" />,
    title: "Email Archiving",
    desc: "A tamper-proof, legally compliant email archive for Microsoft 365. Every email sent and received is captured, indexed, and stored with a full audit trail. Ideal for regulated industries, GDPR compliance, and any business that needs to retrieve historical email quickly.",
    points: ["10-year retention available", "Legal hold & eDiscovery support", "Full audit trail", "Works with M365 and on-premise Exchange"],
  },
  {
    icon: <HardDrive className="w-6 h-6 text-primary" />,
    title: "365 Total Backup",
    desc: "Microsoft does not back up your data. If someone deletes a Teams channel, empties SharePoint, or leaves and you need their emails — Microsoft can't help. Hornet's 365 Total Backup takes automatic daily backups of Exchange, Teams, SharePoint, and OneDrive, and restores them in minutes.",
    points: ["Exchange, Teams, SharePoint, OneDrive backup", "Point-in-time restore", "Granular recovery (single emails, files, sites)", "Immutable storage — ransomware can't touch it"],
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "DMARC Manager",
    desc: "Domain impersonation is one of the most common ways attackers pose as your business. DMARC Manager guides you through setting up DMARC, DKIM, and SPF policies that prevent your domain being spoofed — protecting your reputation and your customers.",
    points: ["DMARC, DKIM, SPF management", "Domain spoofing prevention", "Email sender reputation protection", "Visual reporting dashboard"],
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Permission Manager",
    desc: "Over-permissioned SharePoint, OneDrive, and Teams environments are a data leak waiting to happen. Permission Manager scans your Microsoft 365 tenant, highlights risky sharing configurations, and gives you a centralised view of who has access to what — with the tools to fix it.",
    points: ["Teams, OneDrive & SharePoint audit", "Risky sharing detection", "Data Loss Prevention policies", "Compliance reporting"],
  },
];

/* ─── Other services ───────────────────────────────────────────── */

const otherServices = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: "Cyber Essentials",
    badge: "Government-backed",
    detail: `Cyber Essentials is the UK Government-backed certification scheme that demonstrates you have the basic security controls in place to protect against the most common cyber threats. It's managed by the NCSC and covers five key controls:`,
    controls: [
      "Firewalls — protecting your internet connection",
      "Secure configuration — devices and software hardened by default",
      "User access control — only the right people can access the right things",
      "Malware protection — up-to-date and actively running",
      "Patch management — software and OS kept up to date",
    ],
    extra: "We handle everything: the initial assessment and gap analysis, any remediation work needed, and the certification submission. You get the badge. We do the work. For businesses supplying the public sector, Cyber Essentials is increasingly mandatory. For everyone else, it's proof you're serious about security.",
    link: "/services/cyber-essentials",
    linkLabel: "Full Cyber Essentials guide →",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Security Awareness Training",
    badge: "Staff training",
    detail: "Your team is your most important — and most targeted — line of defence. Hornet's Security Awareness Service delivers automated, AI-driven training that adapts to each individual's behaviour and risk profile. No death-by-PowerPoint. No annual tick-box sessions.",
    controls: [
      "Short, engaging e-learning modules (5–10 minutes)",
      "AI-personalised content based on individual risk score",
      "Benchmarking against your industry",
      "Automatic remediation training triggered by risky behaviour",
      "Reporting dashboard for management",
    ],
    extra: "Topics include phishing recognition, password hygiene, secure working from home, data handling, and social engineering. New modules are added regularly as the threat landscape evolves.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Simulated Phishing",
    badge: "Phishing simulation",
    detail: "Test your team before the hackers do. We run realistic, customised phishing simulations against your organisation — emails that look like they're from your bank, HMRC, your CEO, Microsoft. See who clicks, who reports, and who needs more training.",
    controls: [
      "Customised to your industry and business",
      "Hundreds of realistic phishing templates",
      "Immediate training trigger on click",
      "Detailed reporting on click rates, report rates, repeat offenders",
      "Tracks improvement over time",
    ],
    extra: "The results are always eye-opening. Typically 20–30% of staff click on the first simulation. With ongoing training and repeated simulations, that drops dramatically. The data makes a compelling case for continued investment in awareness — and gives management real numbers.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function CyberSecurity() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <div>
      <ServicePageHero
        subtitle="Cyber Security"
        title="Cyber attacks don't care how small you are."
        description="We make sure you're protected, certified, and trained — before something goes wrong, not after. From email security and backup through to certification and phishing simulation."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "90%", label: "of breaches start with a phishing email" },
              { value: "£3.1k", label: "average cost of a cyber incident to a UK SMB" },
              { value: "60%", label: "of SMBs close within 6 months of a serious breach" },
              { value: "1 in 3", label: "UK SMBs attacked every year — most are unprepared" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hornet Security — header */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Email & cloud security</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Hornetsecurity — the full picture</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email is still the number one route into a business for attackers. Hornetsecurity is a German-engineered, enterprise-grade platform trusted by over 125,000 organisations worldwide. We're a certified Hornet partner — which means we configure, manage, and monitor it for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hornet is not just a spam filter. It's a full security, backup, archiving, awareness training, and compliance platform built on top of — and extending — Microsoft 365. Below is what each product does.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {hornetProducts.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{p.icon}</div>
                  <h3 className="font-display font-bold text-lg text-secondary leading-snug pt-1">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Hornet tier comparison */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Plan comparison</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-2">Hornetsecurity 365 Total Protection — tiers</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
              Every Fox ITC client gets Hornetsecurity included in their package. The tier depends on your requirements. Pricing available on request — we supply via our partner network and typically beat direct pricing.
            </p>
          </motion.div>

          {/* Comparison table — scrollable on mobile */}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-secondary bg-muted/40 min-w-[200px]">Feature</th>
                  {hornetTiers.map((tier) => (
                    <th key={tier.name} className={`p-4 text-center bg-muted/40 min-w-[160px] ${tier.highlight ? "bg-primary/5" : ""}`}>
                      <div className="font-display font-bold text-secondary text-sm leading-snug whitespace-pre-line mb-1">{tier.name}</div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tier.highlight ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>{tier.tag}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hornetFeatureRows.map((feature, ri) => (
                  <tr key={feature} className={`border-b border-border/50 ${ri % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                    <td className="p-4 text-foreground font-medium text-xs">{feature}</td>
                    {hornetTiers.map((tier) => (
                      <td key={tier.name} className={`p-4 text-center ${tier.highlight ? "bg-primary/5" : ""}`}>
                        {tier.features[feature as keyof typeof tier.features]
                          ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                          : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-border">
                  <td className="p-4" />
                  {hornetTiers.map((tier) => (
                    <td key={tier.name} className={`p-4 text-center ${tier.highlight ? "bg-primary/5" : ""}`}>
                      <Link href="/contact">
                        <Button size="sm" variant={tier.highlight ? "default" : "outline"} className="text-xs font-semibold">Get a quote</Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cyber Essentials & Awareness */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Certification & training</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">Beyond the technology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The best technology won't protect you if your team clicks the wrong link or you haven't got the certification your clients need to see.
            </p>
          </motion.div>

          <div className="space-y-6">
            {otherServices.map((svc, i) => (
              <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl overflow-hidden">
                <button className="w-full text-left p-7 flex items-start gap-5" onClick={() => setOpenCard(openCard === i ? null : i)}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{svc.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{svc.badge}</div>
                    <h3 className="font-display font-bold text-xl text-secondary">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{svc.detail}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-primary mt-1 flex-shrink-0 transition-transform ${openCard === i ? "rotate-90" : ""}`} />
                </button>
                {openCard === i && (
                  <div className="px-7 pb-7 ml-17">
                    <div className="ml-17 pl-4 border-l-2 border-primary/30">
                      <ul className="space-y-2 mb-4">
                        {svc.controls.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{c}
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.extra}</p>
                      {"link" in svc && svc.link && (
                        <div className="mt-4">
                          <Link href={svc.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                            {svc.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Don't wait for a breach to take this seriously.</h2>
            <p className="text-white/70 text-lg mb-8">The businesses that get hit hardest are the ones who thought it wouldn't happen to them. Let's make sure you're not one of them.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-bold px-10 group" data-testid="cyber-cta-btn">
                  Get protected today <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="font-bold px-10 border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Free security health check
                </Button>
              </Link>
            </div>
            <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
              {["Hornetsecurity certified partner", "Cyber Essentials certified provider", "UK-based team"].map((p) => (
                <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
