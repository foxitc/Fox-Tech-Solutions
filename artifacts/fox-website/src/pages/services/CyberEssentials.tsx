import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  BadgeCheck,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lock,
  RefreshCw,
  Users,
  Globe,
  Server,
  ChevronDown,
  ChevronUp,
  FileText,
  Award,
  Clock,
  Building2,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Five Controls ─────────────────────────────────────────────── */

const controls = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    number: "01",
    title: "Firewalls",
    summary: "Protecting your internet connection",
    detail:
      "A boundary firewall must be in place between your organisation and the internet. It should be configured to block unauthorised access, with a default-deny policy for inbound traffic. This applies to both hardware firewalls and software firewalls on individual devices.",
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    number: "02",
    title: "Secure Configuration",
    summary: "Devices and software set up safely from the start",
    detail:
      "Computers and network devices must be configured securely — removing or disabling unnecessary software, services, and accounts. Default passwords must be changed, and auto-run features disabled. The goal is to reduce the attack surface from the outset.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    number: "03",
    title: "User Access Control",
    summary: "Only the right people can access the right things",
    detail:
      "User accounts must be provisioned with the minimum privileges needed to do the job. Administrative accounts must only be used for administrative tasks. Multi-factor authentication (MFA) is required for cloud services and remote access under Cyber Essentials.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    number: "04",
    title: "Malware Protection",
    summary: "Active protection against malicious software",
    detail:
      "Malware protection must be active on all devices in scope. This means up-to-date antivirus or application allow-listing. Devices must be protected from downloading or running malware from the internet, email attachments, and removable media.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    number: "05",
    title: "Patch Management",
    summary: "Software kept up to date, always",
    detail:
      "All software — operating systems, applications, firmware — must be kept up to date with security patches. High and critical patches must be applied within 14 days of release. Unsupported software (no longer receiving updates) must not be in use.",
  },
];

/* ─── CE vs CE+ ─────────────────────────────────────────────────── */

const comparison = [
  { feature: "Self-assessment questionnaire", ce: true, ceplus: true },
  { feature: "Independent technical verification", ce: false, ceplus: true },
  { feature: "External vulnerability scan", ce: false, ceplus: true },
  { feature: "On-site or remote assessment visit", ce: false, ceplus: true },
  { feature: "Cyber Essentials badge", ce: true, ceplus: true },
  { feature: "Cyber Essentials Plus badge", ce: false, ceplus: true },
  { feature: "Required for many government contracts", ce: true, ceplus: true },
  { feature: "Preferred for higher-value MOD contracts", ce: false, ceplus: true },
  { feature: "Stronger proof of security posture", ce: false, ceplus: true },
  { feature: "Certificate valid for 12 months", ce: true, ceplus: true },
];

/* ─── Why Certify ───────────────────────────────────────────────── */

const benefits = [
  {
    icon: <Building2 className="w-5 h-5 text-primary" />,
    title: "Win public sector contracts",
    desc: "Cyber Essentials certification is mandatory for all UK government contracts involving the handling of sensitive information or personal data. It's increasingly expected by local councils, NHS trusts, and public sector buyers.",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Qualify for cyber insurance",
    desc: "Many insurers now require or heavily discount premiums for Cyber Essentials holders. Demonstrating you have the basic controls in place reduces your risk profile and makes coverage easier to obtain.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    title: "Block 80% of common attacks",
    desc: "The NCSC estimates that Cyber Essentials controls protect against the vast majority of common cyber attacks. It's not a silver bullet, but it removes the low-hanging fruit that most attackers are after.",
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Demonstrate your commitment",
    desc: "Clients, partners, and prospects increasingly ask about your security posture. The Cyber Essentials badge on your website and proposals signals you take security seriously — without requiring a lengthy security questionnaire.",
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: "Supply chain confidence",
    desc: "Your clients may ask you to certify as part of their own supply chain risk management. Holding Cyber Essentials means you're ahead of the curve and won't lose contracts due to a failed supplier assessment.",
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: "Free cyber insurance included",
    desc: "IASME (the Cyber Essentials certification body) includes free cyber liability insurance for UK organisations with under £20m turnover — valid for the 12-month certificate period.",
  },
];

/* ─── Process Steps ─────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Initial assessment & scoping",
    desc: "We review your IT environment to understand what's in scope for the certification — devices, servers, cloud services, and remote working arrangements. We'll identify any obvious gaps before the formal questionnaire.",
    time: "1–2 days",
  },
  {
    num: "02",
    title: "Gap analysis & remediation",
    desc: "We work through each of the five controls, identifying anything that doesn't currently meet the standard. We carry out or coordinate any remediation work needed — patching, MFA setup, firewall review, or configuration changes.",
    time: "1–3 weeks",
  },
  {
    num: "03",
    title: "Questionnaire submission",
    desc: "We complete the self-assessment questionnaire on your behalf and submit it to the certification body. For Cyber Essentials Plus, we also arrange the independent technical verification and vulnerability scan.",
    time: "1–2 days",
  },
  {
    num: "04",
    title: "Certification issued",
    desc: "Once the submission is approved, your Cyber Essentials (or Plus) certificate is issued, valid for 12 months. You receive the official badge to use on your website, proposals, and marketing materials.",
    time: "Within 5 working days",
  },
];

/* ─── FAQs ──────────────────────────────────────────────────────── */

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "For a typical SMB, from initial conversation to certificate in hand usually takes 2–6 weeks, depending on what remediation is needed. Many clients are already close to compliant and we can move faster. Cyber Essentials Plus takes slightly longer due to the independent verification step.",
  },
  {
    q: "How much does Cyber Essentials certification cost?",
    a: "The IASME certification fee starts at around £300–£500 depending on your organisation size. There's also the cost of our assessment and any remediation work — we'll give you a fixed-price quote after the initial scoping call. Cyber Essentials Plus has additional costs due to the independent assessment.",
  },
  {
    q: "Do I need to recertify every year?",
    a: "Yes. Cyber Essentials certification is valid for 12 months. Annual renewal is recommended by the NCSC because the threat landscape changes, and it ensures your controls stay up to date. We make the renewal process straightforward.",
  },
  {
    q: "Does Cyber Essentials cover cloud services like Microsoft 365?",
    a: "Yes — cloud services used by your organisation are included in scope, including Microsoft 365, Google Workspace, and other SaaS tools. We'll help you ensure your cloud configuration meets the standard, including MFA and access controls.",
  },
  {
    q: "We're a small business with only a few computers. Is it still relevant?",
    a: "Absolutely. Cyber Essentials is designed for organisations of all sizes — including sole traders and micro businesses. The controls scale to your environment. A small business with five laptops and a Microsoft 365 subscription is entirely achievable.",
  },
  {
    q: "What's the difference between Cyber Essentials and ISO 27001?",
    a: "Cyber Essentials is a government-backed baseline certification focused on five specific technical controls. ISO 27001 is a far more comprehensive international standard covering your entire information security management system — it's significantly more involved and expensive to achieve. Most SMBs start with Cyber Essentials.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-display font-semibold text-secondary text-sm md:text-base">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function CyberEssentials() {
  return (
    <div>
      <ServicePageHero
        subtitle="Cyber Essentials"
        title="Get certified. Get protected. Get ahead."
        description="Cyber Essentials is the UK Government-backed certification scheme that protects against the most common cyber attacks. We handle everything from gap analysis through to the final submission — you just get the badge."
      />

      {/* Intro strip */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "80%", label: "of common cyber attacks blocked by CE controls" },
              { value: "12 mo", label: "certificate validity — renewed annually" },
              { value: "Free", label: "cyber liability insurance included for SMBs" },
              { value: "NCSC", label: "government-backed and internationally recognised" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Cyber Essentials */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What is it?</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">
                The UK's baseline standard for cyber security
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cyber Essentials is a UK Government-backed certification scheme managed by the National Cyber Security Centre (NCSC). It defines a set of five basic security controls that, when properly implemented, protect your organisation against around 80% of common cyber threats.
                </p>
                <p>
                  It's not about ticking boxes for the sake of it. The five controls — firewalls, secure configuration, user access control, malware protection, and patch management — address the real-world vulnerabilities that attackers exploit every day.
                </p>
                <p>
                  There are two levels: <strong className="text-secondary">Cyber Essentials</strong>, which is a self-assessment verified by the certification body, and <strong className="text-secondary">Cyber Essentials Plus</strong>, which adds independent technical verification and a vulnerability scan. Both are valid for 12 months.
                </p>
                <p>
                  Fox ITC is a certified Cyber Essentials provider. We've helped businesses across the UK achieve and maintain certification — handling everything from the gap analysis through to submission so you can focus on running your business.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary">Cyber Essentials</h3>
                    <p className="text-xs text-muted-foreground">Self-assessment + certification body verification</p>
                  </div>
                  <Badge className="ml-auto bg-primary/10 text-primary border-primary/20">Level 1</Badge>
                </div>
                <ul className="space-y-2">
                  {["Self-assessment questionnaire", "Verified by IASME certification body", "Cyber Essentials badge", "Free cyber insurance (under £20m turnover)", "Valid for 12 months"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary text-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">Cyber Essentials Plus</h3>
                    <p className="text-xs text-white/60">Everything in CE, plus independent technical verification</p>
                  </div>
                  <Badge className="ml-auto bg-primary/20 text-primary border-primary/30">Level 2</Badge>
                </div>
                <ul className="space-y-2">
                  {["Everything in Cyber Essentials", "Independent technical assessment", "External vulnerability scan", "Cyber Essentials Plus badge", "Stronger proof for high-value contracts"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Five Controls */}
      <section className="py-20 md:py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The standard</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              The five technical controls
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cyber Essentials is built around five specific controls. Miss one, and you won't certify. We make sure all five are properly implemented and documented before submission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {controls.map((control, i) => (
              <motion.div
                key={control.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-2xl border border-border p-6"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-display font-bold text-3xl text-primary/20 leading-none">{control.number}</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {control.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-secondary mb-1">{control.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">{control.summary}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{control.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why certify */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why do it?</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              Six good reasons to get certified
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Beyond the technical protections, Cyber Essentials opens doors and removes friction across your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-muted/40 rounded-2xl border border-border p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CE vs CE+ comparison */}
      <section className="py-20 md:py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              Cyber Essentials vs Cyber Essentials Plus
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Both certifications protect your business. The right level depends on your clients, contracts, and risk profile.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-background rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-secondary text-white text-sm font-display font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center border-l border-white/10">
                <div className="flex flex-col items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  CE
                </div>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <div className="flex flex-col items-center gap-1">
                  <Award className="w-4 h-4 text-primary" />
                  CE+
                </div>
              </div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                <div className="p-4 text-secondary font-medium">{row.feature}</div>
                <div className="p-4 flex justify-center border-l border-border">
                  {row.ce
                    ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                    : <span className="w-5 h-5 flex items-center justify-center text-muted-foreground/30">—</span>}
                </div>
                <div className="p-4 flex justify-center border-l border-border">
                  {row.ceplus
                    ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                    : <span className="w-5 h-5 flex items-center justify-center text-muted-foreground/30">—</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How we do it</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              From gap analysis to certificate — we handle it all
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              You don't need to become a security expert. We guide you through every step and carry out the technical work ourselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-muted/40 rounded-2xl border border-border p-6 relative"
              >
                <span className="font-display font-bold text-4xl text-primary/15 absolute top-4 right-5">{step.num}</span>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-medium">{step.time}</span>
                </div>
                <h3 className="font-display font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-24 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Common questions</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BadgeCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to get your Cyber Essentials certificate?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get in touch for a free scoping conversation. We'll tell you what's involved, how long it'll take, and give you a fixed-price quote. No obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-bold text-base px-10 group">
                  Start the conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services/cyber-security">
                <Button size="lg" variant="outline" className="font-bold text-base px-10 border-white/30 text-white hover:bg-white/10">
                  Back to Cyber Security
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Certified Cyber Essentials provider · NCSC scheme · UK-based team
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
