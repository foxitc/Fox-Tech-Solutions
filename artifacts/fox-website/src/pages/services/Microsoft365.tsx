import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Lock,
  Settings,
  BarChart3,
  Users,
  MessageSquare,
  FolderOpen,
  Mail,
  Monitor,
  Cloud,
  Shield,
  Smartphone,
  BookOpen,
  Video,
  PhoneCall,
  DatabaseZap,
  UserCog,
  ChevronDown,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── M365 Product tiles ───────────────────────────────────────── */

const products = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Exchange Online & Outlook",
    tag: "Email & Calendar",
    desc: "Microsoft's enterprise email platform. 50–100 GB mailboxes per user, shared calendars, business email on your own domain, and Outlook across desktop, web, and mobile. Exchange is what powers every email your business sends — and when it's managed properly, it's rock solid.",
    points: ["Custom domain email", "50 GB+ mailbox per user", "Shared calendars & rooms", "Full Outlook desktop + mobile app"],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Microsoft Teams",
    tag: "Collaboration & Calls",
    desc: "Chat, video meetings, file sharing, and phone calls — all in one place. Teams is the hub of the modern workplace and when it's configured properly (channels, permissions, storage, calling) it genuinely transforms how businesses communicate. When it's not set up right, it's chaos. We set it up right.",
    points: ["Internal chat & channels", "HD video meetings", "Teams Phone — replace your old phone system", "Integration with all M365 apps"],
  },
  {
    icon: <FolderOpen className="w-6 h-6 text-primary" />,
    title: "SharePoint Online",
    tag: "Document management",
    desc: "Your company intranet and document storage system. SharePoint is where your shared files live — and it's one of the most powerful and most misconfigured products in the M365 stack. Poor permission structure means everyone can access everything (or nobody can access anything). We design it properly.",
    points: ["Company intranet & document hub", "Department-level sites", "Granular permission management", "Version history & recovery"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "OneDrive for Business",
    tag: "Personal cloud storage",
    desc: "1 TB personal cloud storage per user, synced across all devices. OneDrive is where individuals store and access their own files — from any device, anywhere. Properly configured with backup policies and known folder move, it's the end of 'I left that file on the office PC'.",
    points: ["1 TB storage per user", "Files accessible from any device", "Known Folder Move — automatic desktop backup", "Offline access sync"],
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Office Apps",
    tag: "Productivity suite",
    desc: "Word, Excel, PowerPoint, Outlook, OneNote, Access. Available as full desktop installs (Business Standard and above), web versions, and mobile apps. Up to 5 devices per user — so laptop, home PC, and phone are all covered on a single licence.",
    points: ["Word, Excel, PowerPoint, Outlook", "Up to 5 devices per user licence", "Web + mobile + desktop versions", "Always on the latest version — no upgrade fees"],
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Microsoft Defender (Business)",
    tag: "Endpoint security",
    desc: "Included in Business Premium and Enterprise plans, Defender for Business is a proper endpoint detection and response (EDR) tool — not just antivirus. It monitors devices for threats, provides automated investigation and remediation, and feeds into a central security dashboard. Managed by us, invisible to your team.",
    points: ["Endpoint detection & response (EDR)", "Automated threat investigation", "Vulnerability management", "Included in Business Premium+"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Intune (Mobile Device Management)",
    tag: "Device management",
    desc: "Intune lets you manage and secure company devices and personal devices used for work (BYOD) from a central console. Push apps, enforce security policies, remotely wipe a lost device. Included in Business Premium — and most businesses who have it aren't using it.",
    points: ["Company device management", "BYOD policy enforcement", "Remote wipe lost or stolen devices", "App deployment & configuration"],
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
    title: "Teams Phone",
    tag: "Cloud telephony",
    desc: "Replace your traditional phone system with Teams Phone. Make and receive calls from your business number through Teams on any device — desk, laptop, or mobile. Requires a Phone System licence (add-on) or is included in some E3/E5 plans. We handle the migration and number porting.",
    points: ["Business number via Teams", "Works on any device", "Auto-attendant & call queues", "Number porting from old system"],
  },
  {
    icon: <DatabaseZap className="w-6 h-6 text-primary" />,
    title: "Power Automate & Power Apps",
    tag: "Automation & apps",
    desc: "Often overlooked, Power Automate lets your team build automated workflows without code — approval chains, automatic filing, notifications, data processing. Power Apps lets you build simple custom business apps. Most Business Standard+ users have these tools and don't realise it.",
    points: ["Workflow automation without code", "Integration with 400+ services", "Custom form & app building", "Included from Business Standard"],
  },
];

/* ─── M365 Plan comparison ─────────────────────────────────────── */

interface PlanDef {
  name: string;
  price: string;
  tag: string;
  highlight?: boolean;
  userCap: string;
  features: Record<string, boolean | string>;
}

const plans: PlanDef[] = [
  {
    name: "Business Basic",
    price: "£4.60",
    tag: "per user / month",
    userCap: "Up to 300 users",
    features: {
      "Web & mobile Office apps": true,
      "Desktop Office apps (Word, Excel etc.)": false,
      "Exchange email (50 GB mailbox)": true,
      "Teams (chat & video meetings)": true,
      "SharePoint & OneDrive (1 TB)": true,
      "Teams Phone (add-on available)": "Add-on",
      "Microsoft Defender for Business": false,
      "Intune (device management)": false,
      "Azure AD Premium P1": false,
      "Azure Information Protection P1": false,
      "Entra ID / Conditional Access": false,
    },
  },
  {
    name: "Business Standard",
    price: "£9.40",
    tag: "per user / month",
    highlight: true,
    userCap: "Up to 300 users",
    features: {
      "Web & mobile Office apps": true,
      "Desktop Office apps (Word, Excel etc.)": true,
      "Exchange email (50 GB mailbox)": true,
      "Teams (chat & video meetings)": true,
      "SharePoint & OneDrive (1 TB)": true,
      "Teams Phone (add-on available)": "Add-on",
      "Microsoft Defender for Business": false,
      "Intune (device management)": false,
      "Azure AD Premium P1": false,
      "Azure Information Protection P1": false,
      "Entra ID / Conditional Access": false,
    },
  },
  {
    name: "Business Premium",
    price: "£16.90",
    tag: "per user / month",
    userCap: "Up to 300 users",
    features: {
      "Web & mobile Office apps": true,
      "Desktop Office apps (Word, Excel etc.)": true,
      "Exchange email (50 GB mailbox)": true,
      "Teams (chat & video meetings)": true,
      "SharePoint & OneDrive (1 TB)": true,
      "Teams Phone (add-on available)": "Add-on",
      "Microsoft Defender for Business": true,
      "Intune (device management)": true,
      "Azure AD Premium P1": true,
      "Azure Information Protection P1": true,
      "Entra ID / Conditional Access": true,
    },
  },
  {
    name: "M365 E3",
    price: "£29.00",
    tag: "per user / month",
    userCap: "Unlimited users",
    features: {
      "Web & mobile Office apps": true,
      "Desktop Office apps (Word, Excel etc.)": true,
      "Exchange email (50 GB mailbox)": "100 GB",
      "Teams (chat & video meetings)": true,
      "SharePoint & OneDrive (1 TB)": "Unlimited",
      "Teams Phone (add-on available)": "Add-on",
      "Microsoft Defender for Business": "Defender P1",
      "Intune (device management)": true,
      "Azure AD Premium P1": "P2",
      "Azure Information Protection P1": "P2",
      "Entra ID / Conditional Access": true,
    },
  },
  {
    name: "M365 E5",
    price: "£47.10",
    tag: "per user / month",
    userCap: "Unlimited users",
    features: {
      "Web & mobile Office apps": true,
      "Desktop Office apps (Word, Excel etc.)": true,
      "Exchange email (50 GB mailbox)": "100 GB",
      "Teams (chat & video meetings)": true,
      "SharePoint & OneDrive (1 TB)": "Unlimited",
      "Teams Phone (add-on available)": "Included",
      "Microsoft Defender for Business": "Defender P2",
      "Intune (device management)": true,
      "Azure AD Premium P1": "P2",
      "Azure Information Protection P1": "P2",
      "Entra ID / Conditional Access": true,
    },
  },
];

const planFeatureRows = [
  "Web & mobile Office apps",
  "Desktop Office apps (Word, Excel etc.)",
  "Exchange email (50 GB mailbox)",
  "Teams (chat & video meetings)",
  "SharePoint & OneDrive (1 TB)",
  "Teams Phone (add-on available)",
  "Microsoft Defender for Business",
  "Intune (device management)",
  "Azure AD Premium P1",
  "Azure Information Protection P1",
  "Entra ID / Conditional Access",
];

function FeatureCell({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-xs font-semibold text-primary">{val}</span>;
}

/* ─── Page ─────────────────────────────────────────────────────── */

export default function Microsoft365() {
  const [openProduct, setOpenProduct] = useState<number | null>(null);

  return (
    <div>
      <ServicePageHero
        subtitle="Microsoft 365"
        title="M365 done right, not just done."
        description="Set up right, secured properly, and managed ongoing. The right licence for every role, every feature turned on and configured, every security setting locked down. Because getting Microsoft 365 wrong is surprisingly easy — and expensive."
      />

      {/* Products intro */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The M365 stack</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">What's in Microsoft 365 — and what it actually does</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most businesses pay for Microsoft 365 and use about 20% of it. The rest — Defender, Intune, SharePoint, Power Automate, Teams Phone — sits unused because nobody set it up. We change that.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Below is every major product in the M365 suite. Click through to see what each one does and why it matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`bg-background border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${openProduct === i ? "border-primary/50 shadow-lg" : "border-border hover:border-primary/30 hover:shadow-md"}`}
                onClick={() => setOpenProduct(openProduct === i ? null : i)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{p.icon}</div>
                      <div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.tag}</span>
                        <h3 className="font-display font-bold text-base text-secondary mt-1 leading-snug">{p.title}</h3>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${openProduct === i ? "rotate-180" : ""}`} />
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
                {openProduct === i && (
                  <div className="px-6 pb-6 border-t border-border/50 pt-4">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                    <ul className="space-y-1.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan comparison */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Which plan?</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">Microsoft 365 plan comparison</h2>
            <p className="text-muted-foreground max-w-2xl mb-2">
              Prices shown are indicative annual commitment rates, excluding VAT, per user per month. Fox IT supplies Microsoft 365 licences via CSP (Giacom) — often with better pricing than buying direct.
            </p>
            <p className="text-xs text-muted-foreground">
              * E3 and E5 do not include Teams as a bundled product in the UK (Microsoft regional unbundling). Teams is available as a separate add-on. Prices correct as of 2025 — contact us for a formal quote.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 font-semibold text-secondary bg-muted/60 min-w-[220px]">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className={`p-5 text-center min-w-[150px] ${plan.highlight ? "bg-primary/10" : "bg-muted/60"}`}>
                      <div className="font-display font-bold text-secondary text-sm mb-1">{plan.name}</div>
                      <div className={`text-2xl font-bold mb-0.5 ${plan.highlight ? "text-primary" : "text-secondary"}`}>{plan.price}</div>
                      <div className="text-xs text-muted-foreground">{plan.tag}</div>
                      <div className="text-xs text-muted-foreground mt-1">{plan.userCap}</div>
                      {plan.highlight && <div className="mt-2 inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">Most popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planFeatureRows.map((feature, ri) => (
                  <tr key={feature} className={`border-b border-border/50 ${ri % 2 === 0 ? "bg-background" : "bg-muted/10"}`}>
                    <td className="p-4 text-foreground text-xs font-medium">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className={`p-4 text-center ${plan.highlight ? "bg-primary/5" : ""}`}>
                        <FeatureCell val={plan.features[feature]} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-border">
                  <td className="p-4">
                    <Link href="/contact"><Button size="sm" variant="outline" className="text-xs">Ask us which plan suits you</Button></Link>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`p-4 text-center ${plan.highlight ? "bg-primary/5" : ""}`}>
                      <Link href="/contact">
                        <Button size="sm" variant={plan.highlight ? "default" : "outline"} className="text-xs font-semibold">Get a quote</Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Fox for M365 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Fox IT + Microsoft 365</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">The hidden cost of getting M365 wrong</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Microsoft 365 is deceptively complex. It's easy to spin up — which means it's equally easy to spin up with the wrong licences, weak security settings, and a permission structure nobody understands six months later.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We see it constantly: businesses paying for Business Premium licences but using them like Basic. SharePoint set up with everyone having full access to everything. MFA not enabled because "it's annoying." Intune and Defender untouched.
              </p>
              <ul className="space-y-3">
                {[
                  "M365 audit — find out what's actually configured",
                  "Licence right-sizing — stop overpaying for what you don't use",
                  "Security hardening — MFA, Conditional Access, DLP, Defender",
                  "Migration support — from Google Workspace or on-premise",
                  "Ongoing management — we don't set up and disappear",
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
                <Settings className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-3">Microsoft 365 via Fox IT</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  We're a Microsoft CSP partner — supplying licences directly, at competitive pricing, with full management included. One invoice. One team. No Microsoft support queues.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {["Licences supplied via CSP (Giacom)", "Setup and migration included", "Security configuration as standard", "Ongoing monitoring and management"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full font-semibold group" data-testid="m365-cta">
                    Talk to us about M365 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
