import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  X,
  AlertTriangle,
  Shield,
  Download,
  FileText,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Star,
  Quote,
  TrendingUp,
  Clock,
  Lock,
  Wifi,
  Mail,
  HardDrive,
  Users,
  MonitorSmartphone,
  Key,
  Phone,
  BookOpen,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── IT Health Check Quiz ─────────────────────────────────────── */

interface Question {
  id: number;
  icon: React.ReactNode;
  category: string;
  question: string;
  answers: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    icon: <HardDrive className="w-5 h-5" />,
    category: "Backups",
    question: "How often are your business files and data backed up?",
    answers: [
      { label: "Automatically, every day — and we test restores regularly", score: 3 },
      { label: "We back up, but not sure how often or when it was last tested", score: 1 },
      { label: "Occasionally, when someone remembers", score: 0 },
      { label: "We don't really have a backup process", score: 0 },
    ],
  },
  {
    id: 2,
    icon: <MonitorSmartphone className="w-5 h-5" />,
    category: "Updates & Patching",
    question: "How are software and Windows updates handled on your computers?",
    answers: [
      { label: "Managed centrally — updates are tested and applied automatically", score: 3 },
      { label: "Computers prompt staff to update — most do it eventually", score: 1 },
      { label: "We tend to click 'Remind me later' to avoid disruption", score: 0 },
      { label: "We're not sure — nobody really manages this", score: 0 },
    ],
  },
  {
    id: 3,
    icon: <Shield className="w-5 h-5" />,
    category: "Endpoint Security",
    question: "What security software is running on your business devices?",
    answers: [
      { label: "Managed endpoint protection (EDR) — monitored centrally", score: 3 },
      { label: "Standard antivirus on most machines", score: 1 },
      { label: "Windows Defender (whatever came with the PC)", score: 1 },
      { label: "Not sure — it varies across our devices", score: 0 },
    ],
  },
  {
    id: 4,
    icon: <Key className="w-5 h-5" />,
    category: "Passwords & MFA",
    question: "How does your team manage passwords and account access?",
    answers: [
      { label: "Password manager + multi-factor authentication on all key accounts", score: 3 },
      { label: "MFA on some accounts but not all", score: 2 },
      { label: "Strong passwords encouraged but no system in place", score: 1 },
      { label: "People choose their own passwords — some are reused", score: 0 },
    ],
  },
  {
    id: 5,
    icon: <Mail className="w-5 h-5" />,
    category: "Email Security",
    question: "How is your business email protected against phishing and spam?",
    answers: [
      { label: "Dedicated email security solution (e.g. Hornet, Defender) — not just basic spam filtering", score: 3 },
      { label: "Standard Microsoft 365 / Google Workspace spam filter only", score: 1 },
      { label: "Whatever came as default — we haven't configured anything extra", score: 0 },
      { label: "Not sure what's in place", score: 0 },
    ],
  },
  {
    id: 6,
    icon: <Users className="w-5 h-5" />,
    category: "Staff Awareness",
    question: "How cyber-aware is your team?",
    answers: [
      { label: "Regular training and simulated phishing exercises — staff know what to look for", score: 3 },
      { label: "We've done some training but it's been a while", score: 1 },
      { label: "Occasional reminders in team meetings", score: 0 },
      { label: "No formal training — we trust people to use common sense", score: 0 },
    ],
  },
  {
    id: 7,
    icon: <Lock className="w-5 h-5" />,
    category: "Access Control",
    question: "When a member of staff leaves, what happens to their accounts?",
    answers: [
      { label: "Immediately disabled — we have a documented offboarding process", score: 3 },
      { label: "Usually sorted within a day or two", score: 2 },
      { label: "Eventually gets done — whenever we remember", score: 0 },
      { label: "We're not sure accounts are always removed", score: 0 },
    ],
  },
  {
    id: 8,
    icon: <Wifi className="w-5 h-5" />,
    category: "Network Security",
    question: "How is your office network and internet connection managed?",
    answers: [
      { label: "Business-grade firewall, separate guest WiFi, monitored centrally", score: 3 },
      { label: "Business broadband with a router from the ISP", score: 1 },
      { label: "Shared WiFi for staff and visitors — single password", score: 0 },
      { label: "Not sure what's in place", score: 0 },
    ],
  },
  {
    id: 9,
    icon: <Clock className="w-5 h-5" />,
    category: "IT Support",
    question: "What happens when something goes wrong with your IT?",
    answers: [
      { label: "We have a managed IT provider — issues are logged and resolved quickly", score: 3 },
      { label: "We have an IT contact but response times vary", score: 1 },
      { label: "The 'tech-savvy' person in the office sorts things out", score: 0 },
      { label: "We figure it out ourselves or search Google", score: 0 },
    ],
  },
  {
    id: 10,
    icon: <TrendingUp className="w-5 h-5" />,
    category: "Business Continuity",
    question: "If your office IT failed completely right now, how long would it take to recover?",
    answers: [
      { label: "Hours — we have a documented plan and tested recovery process", score: 3 },
      { label: "A day or two — we could piece it back together", score: 2 },
      { label: "Days to weeks — it would be a real crisis", score: 0 },
      { label: "We haven't really thought about this", score: 0 },
    ],
  },
];

const MAX_SCORE = questions.reduce((sum, q) => sum + Math.max(...q.answers.map((a) => a.score)), 0);

function getResult(score: number) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct >= 80) return {
    label: "Strong", colour: "text-green-600", bg: "bg-green-50", border: "border-green-200",
    icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
    headline: "Your IT is in good shape — but there's always room to tighten things up.",
    summary: "You're clearly thinking about IT and security seriously. The areas below highlight where small improvements could close the remaining gaps. A quick conversation with Fox can confirm you've got everything covered.",
  };
  if (pct >= 50) return {
    label: "At Risk", colour: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200",
    icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
    headline: "There are some real gaps here — and gaps are what attackers look for.",
    summary: "You're not in a terrible place, but the vulnerabilities flagged below are exactly the kinds of things that cause data breaches, ransomware infections and costly downtime. Most can be fixed quickly with the right support.",
  };
  return {
    label: "High Risk", colour: "text-red-600", bg: "bg-red-50", border: "border-red-200",
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    headline: "Your business is significantly exposed — this needs addressing.",
    summary: "The results suggest your IT and security foundations need urgent attention. The good news? These issues are fixable, and Fox has helped businesses in exactly this position get properly protected quickly and affordably.",
  };
}

function HealthCheck() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const totalScore = Object.values(answers).reduce((s, v) => s + v, 0);
  const result = getResult(totalScore);

  function choose(score: number, idx: number) {
    setSelected(idx);
    setTimeout(() => {
      const next = { ...answers, [current]: score };
      setAnswers(next);
      if (current + 1 < questions.length) {
        setDirection(1);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 400);
  }

  function reset() {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setShowResult(false);
  }

  function prev() {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
      setSelected(null);
    }
  }

  const weakAreas = questions
    .filter((q, i) => (answers[i] ?? 0) < 2)
    .map((q) => q.category);

  if (showResult) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        {/* Score ring */}
        <div className="text-center mb-8">
          <div className={`inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border-2 ${result.border} ${result.bg}`}>
            {result.icon}
            <p className={`font-display font-bold text-3xl ${result.colour}`}>{totalScore} / {MAX_SCORE}</p>
            <Badge className={`${result.colour} bg-transparent border border-current text-sm font-bold px-4 py-1`}>{result.label}</Badge>
          </div>
        </div>

        <h3 className="font-display font-bold text-xl text-secondary text-center mb-2">{result.headline}</h3>
        <p className="text-muted-foreground text-sm text-center mb-6 max-w-xl mx-auto">{result.summary}</p>

        {weakAreas.length > 0 && (
          <div className="bg-muted/50 rounded-xl p-5 mb-6 border border-border">
            <p className="font-semibold text-secondary text-sm mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Areas to address:
            </p>
            <div className="flex flex-wrap gap-2">
              {weakAreas.map((area) => (
                <span key={area} className="text-xs bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 rounded-full font-medium">{area}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="flex-1">
            <Button className="w-full font-semibold group" size="lg">
              Get a free IT consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" onClick={reset} className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Retake
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          No email required. No spam. Just straight advice when you're ready.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground font-medium">Question {current + 1} of {questions.length}</span>
          <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.25 }}
        >
          {/* Category badge + question */}
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {q.icon} {q.category}
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-secondary mb-5 leading-snug">{q.question}</h3>

          <div className="space-y-3">
            {q.answers.map((ans, idx) => (
              <button
                key={idx}
                onClick={() => choose(ans.score, idx)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-150 text-sm font-medium leading-snug
                  ${selected === idx
                    ? "border-primary bg-primary text-white shadow-lg scale-[1.01]"
                    : "border-border bg-background text-secondary hover:border-primary/50 hover:bg-primary/5"
                  }`}
              >
                {ans.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <Button variant="ghost" size="sm" onClick={prev} disabled={current === 0} className="gap-1.5">
          <ChevronLeft className="w-4 h-4" /> Back
        </Button>
        <span className="text-xs text-muted-foreground self-center">Select an answer to continue</span>
      </div>
    </div>
  );
}

/* ─── Free Guides ───────────────────────────────────────────────── */

const guides = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "The SMB Cyber Security Checklist",
    desc: "12 practical steps every UK small business should have in place to avoid the most common cyberattacks — written in plain English, not jargon.",
    pages: "8 pages",
    tag: "Cyber Security",
    colour: "bg-blue-50 border-blue-100",
    file: "/guides/smb-cyber-security-checklist.pdf",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "10 Questions to Ask Any IT Support Company",
    desc: "Before you sign a contract with an MSP, ask these. We're confident in our own answers — and think you should be confident in theirs too.",
    pages: "4 pages",
    tag: "Buying IT Support",
    colour: "bg-orange-50 border-orange-100",
    file: "/guides/10-questions-for-it-support.pdf",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "GDPR & IT: What UK Businesses Must Have in Place",
    desc: "A practical guide to the IT-side of GDPR compliance — data storage, access controls, breach response and what you're legally obligated to have documented.",
    pages: "10 pages",
    tag: "Compliance",
    colour: "bg-purple-50 border-purple-100",
    file: "/guides/gdpr-it-guide.pdf",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    title: "What To Do If You've Been Hacked",
    desc: "Step-by-step response guide for UK businesses. Who to call, what to do first, what not to do — and how to reduce the damage. Print it and keep it somewhere safe.",
    pages: "6 pages",
    tag: "Incident Response",
    colour: "bg-red-50 border-red-100",
    file: "/guides/what-to-do-if-hacked.pdf",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Choosing the Right Microsoft 365 Plan",
    desc: "Basic, Standard or Premium? We break down exactly what's in each plan, who each one is for, and the security features most businesses don't realise they're missing.",
    pages: "5 pages",
    tag: "Microsoft 365",
    colour: "bg-green-50 border-green-100",
    file: "/guides/choosing-microsoft-365-plan.pdf",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "The IT Buyer's Glossary",
    desc: "MSP, RMM, EDR, SOC, MFA, MDM... IT companies love acronyms. This glossary explains 40 common terms in plain English so you can have informed conversations.",
    pages: "7 pages",
    tag: "Reference",
    colour: "bg-slate-50 border-slate-100",
    file: "/guides/it-buyers-glossary.pdf",
  },
];

/* ─── Testimonials ──────────────────────────────────────────────── */

const testimonials = [
  {
    name: "Rebecca T.",
    role: "Operations Manager",
    company: "Creative agency, Nottingham",
    stars: 5,
    quote: "Would highly recommend Fox ITC. They've become an extension of our office and we're so well looked after. Response times are next level — issues are sorted before they become problems.",
  },
  {
    name: "James W.",
    role: "Managing Director",
    company: "Professional services firm, Leicester",
    stars: 5,
    quote: "We moved from a larger IT company to Fox and the difference is night and day. We actually get to speak to the same people every time. No call centres, no ticket queues — just proper support.",
  },
  {
    name: "Sarah M.",
    role: "Practice Manager",
    company: "Healthcare practice, Derby",
    stars: 5,
    quote: "Fox sorted our Cyber Essentials certification in a matter of weeks. Todd walked us through everything in plain English. We finally feel like our data is protected properly.",
  },
];

/* ─── Security stats ────────────────────────────────────────────── */

const stats = [
  { value: "82%", label: "of UK cyberattacks target small businesses", source: "NCSC Annual Review 2024" },
  { value: "£3,230", label: "average cost of a single cyberattack on a UK SMB", source: "Cyber Security Breaches Survey" },
  { value: "4.6 days", label: "average downtime following a ransomware attack", source: "Coveware Q4 2024" },
  { value: "95%", label: "of breaches involve human error — training matters", source: "IBM Security Report 2024" },
];

/* ─── Technology partners ───────────────────────────────────────── */

const partners = [
  { name: "Microsoft", description: "Microsoft Partner" },
  { name: "Hornet Security", description: "Email & Security" },
  { name: "Ubiquiti / Unifi", description: "WiFi Solutions" },
  { name: "O2 Business", description: "Mobile Networks" },
  { name: "Vodafone Business", description: "Mobile Networks" },
  { name: "EE Business", description: "Mobile Networks" },
  { name: "Cyber Essentials", description: "Certified Provider" },
  { name: "Veeam", description: "Backup & Recovery" },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Resources() {
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
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free Resources</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Tools, guides and straight talk — all free.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              We believe in giving value before asking for anything in return. Use our free IT health check, download our guides and see where your business actually stands.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#health-check">
                <Button size="lg" className="font-bold text-base px-8 group">
                  Take the IT health check
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#guides">
                <Button size="lg" variant="outline" className="font-bold text-base px-8 border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <Download className="mr-2 w-4 h-4" />
                  Free guides
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security stats bar */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-white mb-1">{stat.value}</p>
                <p className="text-white/80 text-sm leading-snug mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs">{stat.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Health Check */}
      <section id="health-check" className="py-20 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free tool</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">
                Free IT Health Check
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                10 questions. 3 minutes. A clear picture of where your business is exposed.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most businesses assume their IT and security is fine — until something goes wrong. This health check covers backups, patching, email security, access control and more. No jargon, no fluff.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "No email required to get your results",
                  "Plain-English explanation of any weak spots",
                  "Free follow-up consultation if you want one",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* Trust score visual */}
              <div className="bg-muted/50 rounded-2xl p-5 border border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">What we check</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Backups", "Patching", "Endpoint security", "Passwords & MFA", "Email security", "Staff awareness", "Access control", "Network", "IT support", "Business continuity"].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: quiz */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-background border-2 border-border rounded-2xl p-7 shadow-xl" data-testid="health-check-quiz">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-secondary">IT Health Check</p>
                    <p className="text-xs text-muted-foreground">Free · No registration</p>
                  </div>
                </div>
                <HealthCheck />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free guides */}
      <section id="guides" className="py-20 md:py-24 bg-muted/40 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free downloads</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              Guides written by IT people who speak human.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No fluff, no data harvesting, no hard sell. Download what's useful and use it however you like.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background rounded-2xl border border-border p-6 flex flex-col group hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                data-testid={`guide-card-${i}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${guide.colour}`}>
                  {guide.icon}
                </div>
                <Badge variant="outline" className="w-fit text-xs mb-3 text-muted-foreground">{guide.tag}</Badge>
                <h3 className="font-display font-bold text-secondary text-base mb-2 leading-snug group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5">{guide.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{guide.pages}</span>
                  <a
                    href={guide.file}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary hover:bg-primary/10 rounded-md px-2.5 py-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What clients say</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">
              Don't take our word for it.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-muted/40 rounded-2xl p-7 border border-border flex flex-col"
                data-testid={`testimonial-${i}`}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground text-sm leading-relaxed flex-grow mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="flex mb-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="font-semibold text-secondary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Technology partners</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-3">
              The tools we use. The vendors we trust.
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              We only work with proven technology. No cutting corners, no budget tools that leave you exposed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-background border border-border rounded-xl p-5 text-center hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display font-bold text-primary text-sm">{partner.name[0]}</span>
                </div>
                <p className="font-semibold text-secondary text-xs leading-tight mb-1">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Fox ITC is a certified Cyber Essentials provider. Microsoft licencing supplied via CSP. All vendor relationships maintained to certified/partner level.
          </p>
        </div>
      </section>

      {/* ROI callout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-3xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_95%_53%_/_0.2)_0%,_transparent_60%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The real cost of poor IT</p>
                <h2 className="font-display font-bold text-3xl text-white mb-4 leading-tight">
                  Still thinking break-fix is cheaper?
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  A single four-hour outage affecting 10 staff costs your business £1,000–£1,600 in lost productivity alone — before any IT repair bill. Fox Professional starts at £50/user/month.
                </p>
                <Link href="/pricing">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold group">
                    See pricing
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Lost productivity", value: "£1,600", sub: "4-hr outage, 10 staff" },
                  { label: "Emergency call-out", value: "£150/hr", sub: "UK average break-fix" },
                  { label: "Avg ransomware recovery", value: "£18,500", sub: "UK SMB, 2024" },
                  { label: "Fox Professional", value: "£500/mo", sub: "10 users, all-inclusive" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-xl text-primary mb-1">{s.value}</p>
                    <p className="text-xs text-white/80 font-semibold mb-0.5">{s.label}</p>
                    <p className="text-xs text-white/40">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-5">
              Ready for a proper conversation?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the health check, grab a guide, then give us a call. No hard sell — just straight advice from people who know IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-bold text-base px-10 group">
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:01234567890">
                <Button size="lg" variant="outline" className="font-bold text-base px-10 group">
                  <Phone className="mr-2 w-4 h-4" />
                  Call: 01234 567890
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
