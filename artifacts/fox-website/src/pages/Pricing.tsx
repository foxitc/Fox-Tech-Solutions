import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Minus,
  Phone,
  HelpCircle,
  Shield,
  Zap,
  Star,
  Users,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "IT support, done properly.",
    description:
      "Everything you need to keep your business running smoothly. Reliable helpdesk, monitoring, and maintenance — no surprises.",
    monthlyPrice: 45,
    annualPrice: 38,
    colour: "border-border",
    headerBg: "bg-muted/40",
    icon: <Zap className="w-6 h-6 text-primary" />,
    highlight: false,
    cta: "Get started",
    badge: null,
    idealFor: "5–20 users",
    support: "Mon–Fri, 8am–6pm",
    responseTime: "4 hours (critical)",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Security and support, complete.",
    description:
      "Full managed IT plus the security tools growing businesses actually need. Our most popular plan — and for good reason.",
    monthlyPrice: 69,
    annualPrice: 59,
    colour: "border-primary",
    headerBg: "bg-secondary",
    icon: <Shield className="w-6 h-6 text-primary" />,
    highlight: true,
    cta: "Most popular",
    badge: "Best value",
    idealFor: "10–100 users",
    support: "Mon–Fri, 7am–8pm",
    responseTime: "2 hours (critical)",
  },
  {
    id: "complete",
    name: "Complete",
    tagline: "Your full IT department.",
    description:
      "Everything in Professional, plus 24/7 cover, advanced threat protection, and a dedicated account manager who actually knows your business.",
    monthlyPrice: 99,
    annualPrice: 85,
    colour: "border-border",
    headerBg: "bg-muted/40",
    icon: <Star className="w-6 h-6 text-primary" />,
    highlight: false,
    cta: "Talk to us",
    badge: null,
    idealFor: "25+ users",
    support: "24/7/365",
    responseTime: "1 hour (critical)",
  },
];

type FeatureValue = boolean | string | null;

interface FeatureRow {
  feature: string;
  tooltip?: string;
  foundation: FeatureValue;
  professional: FeatureValue;
  complete: FeatureValue;
  section?: string;
}

const featureRows: FeatureRow[] = [
  // Support
  { section: "Support", feature: "UK-based helpdesk", foundation: true, professional: true, complete: true },
  { feature: "Support hours", foundation: "Mon–Fri, 8am–6pm", professional: "Mon–Fri, 7am–8pm", complete: "24/7/365" },
  { feature: "Critical response SLA", foundation: "4 hours", professional: "2 hours", complete: "1 hour" },
  { feature: "Remote support (unlimited)", foundation: true, professional: true, complete: true },
  { feature: "On-site support", foundation: "Chargeable", professional: true, complete: "Priority" },
  { feature: "Named account manager", foundation: false, professional: "Quarterly reviews", complete: "Monthly reviews" },
  { feature: "vCIO / IT strategy sessions", foundation: false, professional: false, complete: true },

  // Monitoring & Maintenance
  { section: "Monitoring & Maintenance", feature: "24/7 remote monitoring (RMM)", foundation: true, professional: true, complete: true },
  { feature: "Windows patch management", foundation: true, professional: true, complete: true },
  { feature: "Third-party app patching", foundation: false, professional: true, complete: true },
  { feature: "Asset & inventory tracking", foundation: false, professional: true, complete: true },
  { feature: "IT asset lifecycle planning", foundation: false, professional: false, complete: true },

  // Microsoft 365
  { section: "Microsoft 365", feature: "M365 user management (starters/leavers)", foundation: true, professional: true, complete: true },
  { feature: "Full M365 admin (Teams, SharePoint, OneDrive)", foundation: false, professional: true, complete: true },
  { feature: "M365 cloud backup (email, OneDrive, SharePoint)", foundation: false, professional: true, complete: true },
  { feature: "M365 licence supply (add-on)", foundation: true, professional: true, complete: true },

  // Security
  { section: "Cyber Security", feature: "Antivirus & anti-malware", foundation: true, professional: true, complete: true },
  { feature: "Endpoint Detection & Response (EDR)", foundation: false, professional: true, complete: true },
  { feature: "Email security & anti-spam (Hornet Security)", foundation: false, professional: true, complete: true },
  { feature: "DNS filtering (block malicious sites)", foundation: false, professional: true, complete: true },
  { feature: "Dark web monitoring", foundation: false, professional: true, complete: true },
  { feature: "Managed Detection & Response (MDR/SOC)", foundation: false, professional: false, complete: true },
  { feature: "Simulated phishing campaigns", foundation: false, professional: "Add-on", complete: true },
  { feature: "Cyber Essentials certification support", foundation: false, professional: "Guidance", complete: "Full support" },
  { feature: "Cyber awareness training", foundation: false, professional: "Add-on", complete: true },

  // Continuity
  { section: "Continuity & Compliance", feature: "Disaster recovery planning", foundation: false, professional: false, complete: true },
  { feature: "Documented DR plan & annual test", foundation: false, professional: false, complete: true },
  { feature: "Compliance reporting", foundation: false, professional: false, complete: true },
];

const faqs = [
  {
    q: "Are these prices per user or per month?",
    a: "Per user, per month, excluding VAT. So a 20-person business on Professional would be 20 × £69 = £1,380/month (or £1,180/month on the annual plan). We'll give you a tailored quote once we understand your setup.",
  },
  {
    q: "Is there a minimum number of users?",
    a: "We work with businesses from 5 users upwards. There's no upper limit — and the more users, the more we can discuss volume pricing.",
  },
  {
    q: "What's the contract length?",
    a: "We offer 12-month contracts as standard. No 3-year lock-ins — we earn your business every year. Monthly rolling options are available for the right circumstances — just ask.",
  },
  {
    q: "Does the price include Microsoft 365 licences?",
    a: "Microsoft 365 licences are available as an add-on at competitive prices. We'll quote them separately so you can see exactly what you're paying for. Many clients prefer us to manage their licencing as part of a single monthly invoice.",
  },
  {
    q: "What happens if I need support outside business hours on Foundation or Professional?",
    a: "Foundation and Professional include business-hours helpdesk. Out-of-hours emergency support is available as a chargeable add-on, or you can upgrade to Complete for full 24/7 cover. We'll always let you know your options honestly.",
  },
  {
    q: "Can I upgrade between plans?",
    a: "Absolutely. As your business grows, your IT needs change. Moving between plans is straightforward — just talk to your account manager and we'll handle the rest.",
  },
  {
    q: "What if I'm not sure which plan I need?",
    a: "Honestly? Most businesses aren't sure, and that's fine. Get in touch and we'll have a proper conversation about your setup, your risks, and what makes sense. No hard sell — just straight advice.",
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  if (value === null) return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-muted-foreground text-center block">{value}</span>;
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [users, setUsers] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = Array.from(
    new Set(featureRows.filter((r) => r.section).map((r) => r.section))
  ) as string[];

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_95%_53%_/_0.15)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Managed IT Pricing</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Transparent pricing. No nasty surprises.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Three clear plans. All-inclusive monthly pricing per user. We'll tell you exactly what you're getting — and exactly what you're not.
            </p>

            {/* Annual toggle */}
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-5 py-2.5">
              <span className={`text-sm font-medium ${!annual ? "text-white" : "text-white/50"}`}>Monthly</span>
              <Switch
                checked={annual}
                onCheckedChange={setAnnual}
                data-testid="billing-toggle"
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm font-medium ${annual ? "text-white" : "text-white/50"}`}>
                Annual
              </span>
              {annual && (
                <Badge className="bg-primary text-white text-xs border-0 ml-1">Save up to 15%</Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl border-2 ${tier.colour} overflow-hidden flex flex-col ${tier.highlight ? "shadow-xl scale-[1.02]" : ""}`}
                data-testid={`pricing-card-${tier.id}`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white border-0 text-xs font-bold px-3 py-1">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className={`${tier.headerBg} p-7 ${tier.highlight ? "bg-secondary" : ""}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tier.highlight ? "bg-primary/20" : "bg-primary/10"}`}>
                    {tier.icon}
                  </div>
                  <h3 className={`font-display font-bold text-2xl mb-1 ${tier.highlight ? "text-white" : "text-secondary"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-5 ${tier.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {tier.tagline}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`font-display font-bold text-4xl ${tier.highlight ? "text-white" : "text-secondary"}`}>
                      £{annual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-2 ${tier.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                      /user/month
                    </span>
                  </div>
                  <p className={`text-xs ${tier.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                    ex. VAT · {annual ? "billed annually" : "billed monthly"}
                  </p>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {[
                      { label: "Ideal for", value: tier.idealFor },
                      { label: "Support hours", value: tier.support },
                      { label: "Critical response", value: tier.responseTime },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          <span className="font-medium">{item.label}:</span> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className={`w-full font-semibold group ${tier.highlight ? "" : "variant-outline"}`}
                      variant={tier.highlight ? "default" : "outline"}
                      data-testid={`pricing-cta-${tier.id}`}
                    >
                      {tier.highlight ? tier.cta : "Get a quote"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-sm text-muted-foreground"
          >
            All prices exclude VAT. Minimum 5 users. Volume discounts available for 20+ users.{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Get a tailored quote.
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Cost estimator */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Quick estimate</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary">
                How many users do you have?
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">Slide to get a ballpark figure. Proper quotes are always tailored.</p>
            </div>

            <div className="bg-background rounded-2xl border border-border p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-secondary">Number of users</label>
                  <span className="font-display font-bold text-2xl text-primary">{users}</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full accent-primary h-2 cursor-pointer"
                  data-testid="user-count-slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5</span>
                  <span>100+</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tiers.map((tier) => {
                  const price = annual ? tier.annualPrice : tier.monthlyPrice;
                  const total = price * users;
                  return (
                    <div
                      key={tier.id}
                      className={`rounded-xl p-4 text-center border ${tier.highlight ? "border-primary bg-primary/5" : "border-border bg-muted/50"}`}
                      data-testid={`estimate-${tier.id}`}
                    >
                      <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>
                        {tier.name}
                      </p>
                      <p className="font-display font-bold text-xl text-secondary">
                        £{total.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">per month</p>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Estimates ex. VAT. Volume discounts apply at 20+ users. M365 licences not included.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full feature comparison table */}
      <section className="py-16 md:py-24 bg-background overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Full breakdown</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">
              Compare everything
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              No small print. No asterisks. Here's exactly what's in each plan.
            </p>
          </motion.div>

          <div className="min-w-[640px]">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-2 mb-4 sticky top-20 bg-background z-10 pb-2 border-b border-border">
              <div />
              {tiers.map((tier) => (
                <div key={tier.id} className={`text-center py-3 px-2 rounded-xl ${tier.highlight ? "bg-primary text-white" : "bg-muted/60"}`}>
                  <p className={`font-display font-bold text-base ${tier.highlight ? "text-white" : "text-secondary"}`}>{tier.name}</p>
                  <p className={`text-xs mt-0.5 ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                    £{annual ? tier.annualPrice : tier.monthlyPrice}/user/mo
                  </p>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {sections.map((section) => {
              const rows = featureRows.filter(
                (r) => r.section === section || (!r.section && featureRows.findIndex((fr) => fr === r) > featureRows.findIndex((fr) => fr.section === section))
              );
              const sectionRows = featureRows.filter((r) => {
                const sectionIdx = featureRows.findIndex((fr) => fr.section === section);
                const nextSectionIdx = featureRows.findIndex((fr, i) => i > sectionIdx && fr.section && fr.section !== section);
                const rowIdx = featureRows.indexOf(r);
                return rowIdx >= sectionIdx && (nextSectionIdx === -1 || rowIdx < nextSectionIdx);
              });

              return (
                <div key={section} className="mb-2">
                  <div className="grid grid-cols-4 gap-2 py-2 px-3 bg-muted/40 rounded-lg mb-1">
                    <span className="font-display font-bold text-sm text-secondary col-span-4">{section}</span>
                  </div>
                  {sectionRows.filter((r) => !r.section).map((row, j) => (
                    <div
                      key={j}
                      className="grid grid-cols-4 gap-2 py-3 px-3 border-b border-border/50 hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm text-foreground">{row.feature}</span>
                        {row.tooltip && (
                          <HelpCircle className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" title={row.tooltip} />
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        <FeatureCell value={row.foundation} />
                      </div>
                      <div className="flex items-center justify-center">
                        <FeatureCell value={row.professional} />
                      </div>
                      <div className="flex items-center justify-center">
                        <FeatureCell value={row.complete} />
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Optional extras</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary">
                Add-ons & extras
              </h2>
              <p className="text-muted-foreground mt-2">Build the right solution for your business.</p>
            </div>

            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              {[
                { name: "Microsoft 365 Business Basic", price: "From £5/user/mo", note: "Email, Teams, OneDrive" },
                { name: "Microsoft 365 Business Premium", price: "From £18/user/mo", note: "Full Office apps + advanced security" },
                { name: "Cyber Essentials certification", price: "From £500 + monthly support", note: "Government-backed certification" },
                { name: "Simulated phishing campaigns", price: "From £25/user/mo", note: "Test your team before the hackers do" },
                { name: "Cyber awareness training", price: "From £8/user/mo", note: "Engaging, practical staff training" },
                { name: "Managed WiFi (Unifi)", price: "From £65/site/mo", note: "Monitoring, management & support" },
                { name: "Out-of-hours emergency cover", price: "From £15/user/mo", note: "For Foundation & Professional plans" },
                { name: "Additional on-site visits", price: "From £200/visit", note: "Available for all plans" },
              ].map((addon, i) => (
                <div
                  key={addon.name}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-2 ${i < 7 ? "border-b border-border" : ""}`}
                >
                  <div>
                    <p className="font-semibold text-sm text-secondary">{addon.name}</p>
                    <p className="text-xs text-muted-foreground">{addon.note}</p>
                  </div>
                  <div className="font-display font-bold text-sm text-primary whitespace-nowrap">{addon.price}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              All add-on prices are indicative. Get a tailored quote for your exact requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why monthly pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The maths</p>
              <h2 className="font-display font-bold text-3xl text-secondary mb-5">
                Why managed IT always beats break-fix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Break-fix IT at £100–£150/hour looks cheaper until something goes wrong. The real cost isn't the call-out fee — it's the downtime while you're waiting.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At average UK employment costs of £25–£40/hour, a four-hour outage affecting 10 staff costs your business £1,000–£1,600 in lost productivity. That's before anyone's picked up a screwdriver.
              </p>
              <ul className="space-y-3">
                {[
                  "Predictable monthly cost — budget with confidence",
                  "Problems fixed before they become disasters",
                  "No emergency call-out rates",
                  "Security maintained, patches applied, risks managed",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Average downtime cost", value: "£1,600", sub: "4hr outage, 10 staff" },
                { label: "Break-fix call-out rate", value: "£150/hr", sub: "UK average" },
                { label: "Fox Professional plan", value: "£69", sub: "per user per month" },
                { label: "Client retention rate", value: "98%", sub: "because it works" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/50 rounded-2xl p-5 border border-border">
                  <p className="font-display font-bold text-2xl text-primary mb-1">{stat.value}</p>
                  <p className="text-xs font-semibold text-secondary mb-0.5">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="font-display font-bold text-3xl text-secondary">Pricing questions, answered.</h2>
              <p className="text-muted-foreground mt-2">Still got questions? Just call us.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-background rounded-xl border border-border overflow-hidden"
                  data-testid={`faq-item-${i}`}
                >
                  <button
                    className="w-full text-left flex items-center justify-between p-5 gap-4 hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-secondary text-sm leading-snug">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(25_95%_53%_/_0.15)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Not sure which plan is right for you?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Most businesses aren't, and that's completely fine. Let's have a proper conversation. We'll tell you what you need — and what you don't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-bold text-base px-10 group" data-testid="pricing-final-cta">
                  Get a tailored quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:01234567890">
                <Button size="lg" variant="outline" className="font-bold text-base px-10 border-white/20 text-white hover:bg-white/10 hover:text-white group">
                  <Phone className="mr-2 w-4 h-4" />
                  Call us: 01234 567890
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
