import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  FileSearch,
  ShieldCheck,
  Puzzle,
  BarChart3,
  RefreshCw,
  MessageSquare,
  Users,
  Lock,
  Lightbulb,
  ChevronDown,
  Workflow,
  Cpu,
  BookOpen,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Services ─────────────────────────────────────────────────── */

const aiServices = [
  {
    icon: <ClipboardList className="w-7 h-7 text-primary" />,
    tag: "Start here",
    title: "AI Readiness Audit",
    badge: "Recommended first step",
    intro: "Before investing in any AI tool or platform, you need to understand where your business actually is — your data maturity, your process quality, your team's readiness, and the gaps that would stop AI delivering value. That's what our AI Readiness Audit does.",
    sections: [
      {
        heading: "What we assess",
        points: [
          "Data quality and accessibility — AI is only as good as its inputs",
          "Current process documentation — you can't automate what isn't defined",
          "Existing Microsoft 365 and cloud tool usage",
          "Staff digital literacy and change readiness",
          "Security and compliance posture for AI workloads",
          "Quick wins vs longer-term strategic opportunities",
        ],
      },
      {
        heading: "What you get",
        points: [
          "Written AI Readiness Report with scored maturity rating",
          "Prioritised list of AI opportunities — ranked by impact and effort",
          "Honest assessment of risks and what needs fixing first",
          "A roadmap you can actually act on",
        ],
      },
    ],
    callout: "Most businesses who go straight to buying AI tools waste money. The audit costs a fraction of a failed AI project and takes two weeks, not months.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-primary" />,
    tag: "Microsoft AI",
    title: "Microsoft Copilot Deployment",
    badge: "M365 AI assistant",
    intro: "Microsoft 365 Copilot is the most accessible AI platform for UK SMBs — it's built directly into the tools your team already uses (Word, Excel, Outlook, Teams, SharePoint). But deploying it well is not just a matter of turning it on.",
    sections: [
      {
        heading: "What Copilot actually does",
        points: [
          "Draft and rewrite emails and documents from prompts",
          "Summarise long email threads and meeting recordings",
          "Generate first drafts in Word based on your brief",
          "Analyse data and suggest charts in Excel",
          "Create PowerPoint presentations from a Word document",
          "Answer questions from your company SharePoint and Teams data",
        ],
      },
      {
        heading: "What Fox ITC includes",
        points: [
          "Licence procurement and activation (via CSP)",
          "Data governance review — prevent Copilot surfacing things it shouldn't",
          "SharePoint and OneDrive permissions audit (critical pre-requisite)",
          "Teams and Microsoft 365 Groups configuration",
          "Staff training and prompting guides",
          "Ongoing Copilot performance and adoption reporting",
        ],
      },
    ],
    callout: "The biggest risk with Copilot is deploying it before your permissions are clean. If your SharePoint has overly permissive sharing, Copilot can surface confidential documents to the wrong people. We fix that first.",
  },
  {
    icon: <Workflow className="w-7 h-7 text-primary" />,
    tag: "Automation",
    title: "AI Workflow Automation",
    badge: "Eliminate repetitive work",
    intro: "Most businesses are drowning in repetitive, low-value tasks that a properly built automation could handle in seconds. Approvals waiting on email. Data copied between systems. Reports generated manually. Reminders that depend on someone remembering. AI automation changes all of that.",
    sections: [
      {
        heading: "What we automate",
        points: [
          "Approval workflows — purchase requests, leave, sign-off chains",
          "Document processing — extract data from invoices, forms, PDFs",
          "CRM and helpdesk updates from email or form submissions",
          "Scheduling, reminders and follow-up sequences",
          "Reporting from multiple data sources into a single dashboard",
          "Customer onboarding and communication sequences",
        ],
      },
      {
        heading: "The tools we use",
        points: [
          "Microsoft Power Automate (included with your M365 licence)",
          "AI Builder — extract data from documents automatically",
          "Make (formerly Integromat) for complex multi-system flows",
          "Custom API integrations between your line-of-business systems",
          "Webhook-based triggers from web forms and e-commerce systems",
        ],
      },
    ],
    callout: "We start with your highest-value, lowest-complexity automations first — things that pay for themselves quickly — then build from there.",
  },
  {
    icon: <Puzzle className="w-7 h-7 text-primary" />,
    tag: "Custom builds",
    title: "Small Business App Builds",
    badge: "No more spreadsheet hell",
    intro: "Many small businesses are running processes on spreadsheets that should be proper applications — job tracking, customer pipelines, stock management, booking systems, internal dashboards. We build lightweight, practical apps that solve the specific problem, not a generic SaaS platform that's 80% features you'll never use.",
    sections: [
      {
        heading: "What we build",
        points: [
          "Internal business apps — job sheets, quote builders, dashboards",
          "Customer-facing portals — booking, status tracking, document sharing",
          "AI-powered forms — smart intake forms that route and process automatically",
          "Reporting dashboards pulling from your existing data sources",
          "Simple chatbots for customer FAQ and lead capture",
          "Integration layers between tools that don't natively connect",
        ],
      },
      {
        heading: "How we approach it",
        points: [
          "We start with a brief and a clear scope — no open-ended briefs",
          "Low-code where possible (faster, cheaper, more maintainable)",
          "You own the code and the platform — no vendor lock-in to us",
          "Handover training so your team can maintain and extend it",
          "Ongoing support available as part of your Fox ITC package",
        ],
      },
    ],
    callout: "These aren't enterprise development projects. They're focused, practical tools built in weeks — not months — to solve a specific problem you actually have right now.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    tag: "Risk & compliance",
    title: "AI Compliance & Governance",
    badge: "Use AI safely",
    intro: "AI introduces new risks that most businesses aren't thinking about yet — data leakage to third-party AI providers, GDPR implications of training on personal data, staff using unapproved tools with company data. We help you put the right policies in place before something goes wrong.",
    sections: [
      {
        heading: "What we cover",
        points: [
          "AI Acceptable Use Policy — what staff can and can't use AI for",
          "Data classification — what data can be processed by which AI tools",
          "GDPR assessment for AI tools handling personal data",
          "Vendor risk assessment — is that AI tool actually safe to use?",
          "Shadow AI audit — identifying what your team is already using",
          "Staff guidance and training on safe AI use",
        ],
      },
      {
        heading: "Why this matters now",
        points: [
          "Staff are already using consumer AI tools with company data",
          "Many free AI tools train on your inputs — including confidential ones",
          "The EU AI Act and ICO guidance are evolving rapidly",
          "A data breach via an AI tool carries the same GDPR penalties as any other",
          "Clients and insurers are starting to ask about AI governance",
        ],
      },
    ],
    callout: "The businesses who get this right now will have a significant advantage when clients and regulators start asking harder questions. The ones who don't will be scrambling to fix it.",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-primary" />,
    tag: "Strategy",
    title: "AI Tool Vetting & Adoption",
    badge: "Cut through the noise",
    intro: "Every week there's a new AI tool claiming to transform your business. Most of them aren't right for you, some of them are actively risky, and a few of them are genuinely useful. We cut through the noise — assessing, testing, and safely rolling out the tools that actually make sense.",
    sections: [
      {
        heading: "What we do",
        points: [
          "Tool assessment against your specific use case and data requirements",
          "Security and privacy review — where does your data actually go?",
          "Pilot deployment with a small group before wider rollout",
          "Staff training and change management support",
          "Integration with your existing tools and workflows",
          "Ongoing review — what's working, what's not, what's changed",
        ],
      },
      {
        heading: "Tools we've assessed and deployed",
        points: [
          "Microsoft Copilot for M365",
          "GitHub Copilot for development teams",
          "AI transcription and meeting summary tools",
          "AI-assisted customer service and chat tools",
          "Document AI and intelligent data extraction",
          "Marketing and content AI tools with appropriate guardrails",
        ],
      },
    ],
    callout: "You don't need to be an AI expert. You need an IT partner who's done the work so you don't have to — and who'll tell you honestly when something isn't worth it.",
  },
];

/* ─── Process ─────────────────────────────────────────────────────*/

const process = [
  {
    step: "01",
    icon: <FileSearch className="w-6 h-6 text-primary" />,
    title: "Assess",
    desc: "We start with the AI Readiness Audit — understanding where you are, what you have, and what's realistic. No assumptions, no generic templates.",
  },
  {
    step: "02",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Plan",
    desc: "We build a prioritised roadmap with clear outcomes, realistic timelines, and honest costings. Quick wins first, strategic projects second.",
  },
  {
    step: "03",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Build",
    desc: "We implement — whether that's deploying Copilot, building a workflow automation, or developing a small custom app. Always with governance built in.",
  },
  {
    step: "04",
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Train",
    desc: "We train your team to actually use what we've built. Adoption is where most AI projects fail. We don't let that happen.",
  },
  {
    step: "05",
    icon: <RefreshCw className="w-6 h-6 text-primary" />,
    title: "Iterate",
    desc: "AI isn't a one-off project. We monitor, optimise, and expand as the technology develops and your business changes.",
  },
];

/* ─── Honest section ──────────────────────────────────────────── */

const honestPoints = [
  { title: "AI won't fix a broken process", desc: "If a process is chaotic manually, automation makes it chaotically fast. We help you get the process right before we automate it." },
  { title: "Your data quality matters", desc: "AI tools are only as good as the data they work with. Poor data = poor output. We assess this in the audit." },
  { title: "Most businesses don't need custom AI models", desc: "Off-the-shelf tools like Copilot are sufficient for the vast majority of SMB use cases. We won't upsell you complexity you don't need." },
  { title: "Adoption is the hard part", desc: "Getting staff to actually use AI tools consistently is harder than the technology. We plan for this from day one." },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function AI() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div>
      <ServicePageHero
        subtitle="AI Services"
        title="AI for the real world, not the hype."
        description="Practical AI that saves your team time, automates the repetitive, and builds tools your business actually needs. No buzzwords, no over-engineered solutions — just AI that works."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "72%", label: "of UK SMBs say AI will be critical to competitiveness by 2026" },
              { value: "40%", label: "of business tasks could be partially automated with current AI tools" },
              { value: "£10k+", label: "average annual cost of manual work that automation can eliminate for a 10-person team" },
              { value: "3hrs", label: "average time staff save per week with well-deployed AI tools" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest framing */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The honest version</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">AI is genuinely useful. It's also genuinely overhyped.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our job is to help you get the real value out of AI — not to sell you something because it's fashionable. Here are four things we'll always tell you straight.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {honestPoints.map((pt, i) => (
              <motion.div key={pt.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-secondary mb-1">{pt.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What we offer</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">Six ways Fox ITC delivers AI value</h2>
            <p className="text-muted-foreground leading-relaxed">
              We work with businesses at every stage — from "we haven't started yet" through to "we need something built." Click any service to expand the full detail.
            </p>
          </motion.div>

          <div className="space-y-4">
            {aiServices.map((svc, i) => (
              <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`bg-background border rounded-2xl overflow-hidden transition-all duration-200 ${openService === i ? "border-primary/50 shadow-lg" : "border-border hover:border-primary/30"}`}>
                <button className="w-full text-left p-7 flex items-start gap-5" onClick={() => setOpenService(openService === i ? null : i)}>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">{svc.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{svc.tag}</span>
                      {svc.badge && <span className="text-xs font-semibold bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full">{svc.badge}</span>}
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed line-clamp-2">{svc.intro}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-primary mt-2 flex-shrink-0 transition-transform ${openService === i ? "rotate-180" : ""}`} />
                </button>

                {openService === i && (
                  <div className="px-7 pb-7">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{svc.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                      {svc.sections.map((sec) => (
                        <div key={sec.heading}>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">{sec.heading}</p>
                          <ul className="space-y-2">
                            {sec.points.map((pt) => (
                              <li key={pt} className="flex items-start gap-2 text-sm text-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 mb-4">
                      <p className="text-sm text-secondary leading-relaxed">
                        <span className="font-bold text-primary">Worth knowing: </span>{svc.callout}
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" className="font-semibold group">
                        Talk to us about this <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                )}
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">Assess. Plan. Build. Train. Iterate.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">AI projects fail when they skip steps. We don't skip steps.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6 relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">{step.icon}</div>
                <div className="font-display font-bold text-4xl text-primary/10 mb-1 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-secondary text-base mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Not sure where to start? Start with the audit.</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The AI Readiness Audit is designed for businesses who want to take AI seriously without wasting money on the wrong things. Two weeks, a clear report, and a roadmap you can actually act on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-readiness">
                <Button size="lg" className="font-bold px-10 group" data-testid="ai-cta">
                  Take the free AI Readiness Quiz <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-bold px-10 border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Speak to the team
                </Button>
              </Link>
            </div>
            <ul className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
              {["No jargon — plain English always", "Honest advice, not upsells", "East Midlands-based team"].map((p) => (
                <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
