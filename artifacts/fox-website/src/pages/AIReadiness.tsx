import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Database,
  Users,
  Cpu,
  ClipboardList,
  RotateCcw,
  Send,
  Phone,
  Mail,
  Building2,
  AlertCircle,
  Zap,
  TrendingUp,
  Target,
  Clock,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Quiz Data ─────────────────────────────────────────────────── */

interface Question {
  id: number;
  category: string;
  categoryIcon: React.ReactNode;
  question: string;
  options: { label: string; points: number }[];
}

const categories = [
  { id: "data", label: "Data & Information", icon: <Database className="w-4 h-4" />, colour: "text-blue-600 bg-blue-50 border-blue-100" },
  { id: "process", label: "Processes & Operations", icon: <ClipboardList className="w-4 h-4" />, colour: "text-orange-600 bg-orange-50 border-orange-100" },
  { id: "people", label: "People & Culture", icon: <Users className="w-4 h-4" />, colour: "text-purple-600 bg-purple-50 border-purple-100" },
  { id: "tech", label: "Technology Foundation", icon: <Cpu className="w-4 h-4" />, colour: "text-green-600 bg-green-50 border-green-100" },
];

const questions: Question[] = [
  // ─── Data & Information (5 questions, max 15 pts) ───────────────
  {
    id: 1, category: "data",
    categoryIcon: <Database className="w-4 h-4" />,
    question: "How would you describe the state of your business data overall?",
    options: [
      { label: "It's all over the place — spreadsheets, emails, paper records, no real system", points: 0 },
      { label: "Mostly in one or two systems but often inconsistent or out of date", points: 1 },
      { label: "In a proper CRM, ERP, or database — reasonably organised", points: 2 },
      { label: "Clean, structured, well-maintained, and accessible across the team", points: 3 },
    ],
  },
  {
    id: 2, category: "data",
    categoryIcon: <Database className="w-4 h-4" />,
    question: "Can you pull business performance reports quickly when you need them?",
    options: [
      { label: "No — gathering numbers takes hours and they're often wrong", points: 0 },
      { label: "Sometimes — some things are easy, others take a lot of effort", points: 1 },
      { label: "Yes — most metrics are reportable, though not always real-time", points: 2 },
      { label: "Yes — dashboards and real-time data are available at a glance", points: 3 },
    ],
  },
  {
    id: 3, category: "data",
    categoryIcon: <Database className="w-4 h-4" />,
    question: "Where is most of your business data physically stored?",
    options: [
      { label: "Local PCs, USB drives, or an on-site server", points: 0 },
      { label: "A mix — some in cloud apps, some still stored locally", points: 1 },
      { label: "Mostly in cloud platforms like Microsoft 365 or Google Workspace", points: 2 },
      { label: "Fully in the cloud with proper access controls and governance in place", points: 3 },
    ],
  },
  {
    id: 4, category: "data",
    categoryIcon: <Database className="w-4 h-4" />,
    question: "How confident are you in the accuracy of your business data?",
    options: [
      { label: "Not at all — data is often incomplete, duplicated, or out of date", points: 0 },
      { label: "Somewhat — we know which data to trust and which not to", points: 1 },
      { label: "Fairly confident — some validation processes are in place", points: 2 },
      { label: "Very confident — data quality is managed and regularly audited", points: 3 },
    ],
  },
  {
    id: 5, category: "data",
    categoryIcon: <Database className="w-4 h-4" />,
    question: "Do you collect customer and operational data in a structured, consistent way?",
    options: [
      { label: "Not really — different people record things in different ways", points: 0 },
      { label: "To some extent — there are conventions but they're not always followed", points: 1 },
      { label: "Mostly — we have standard fields and formats in our core system", points: 2 },
      { label: "Yes — data entry is consistent and validated at the point of capture", points: 3 },
    ],
  },

  // ─── Process & Operations (5 questions, max 15 pts) ────────────
  {
    id: 6, category: "process",
    categoryIcon: <ClipboardList className="w-4 h-4" />,
    question: "How well-documented are your key business processes?",
    options: [
      { label: "Mostly in people's heads — very little is written down", points: 0 },
      { label: "Some procedures exist but they're not consistently followed", points: 1 },
      { label: "Key processes are documented and generally followed by the team", points: 2 },
      { label: "Fully documented, measured with KPIs, and regularly reviewed", points: 3 },
    ],
  },
  {
    id: 7, category: "process",
    categoryIcon: <ClipboardList className="w-4 h-4" />,
    question: "How much time does your team spend on repetitive manual tasks each week?",
    options: [
      { label: "Most of our work is manual — re-entering data, copy/pasting, chasing people", points: 1 },
      { label: "Several hours per person per week on tasks that feel like they could be automated", points: 2 },
      { label: "A handful of specific tasks are still manual but most things flow well", points: 3 },
      { label: "Not much — we are already well-automated and streamlined", points: 3 },
    ],
  },
  {
    id: 8, category: "process",
    categoryIcon: <ClipboardList className="w-4 h-4" />,
    question: "If you had to describe one of your core processes step-by-step to a stranger, how easy would that be?",
    options: [
      { label: "Very hard — it varies by person and situation, hard to define clearly", points: 0 },
      { label: "Tricky — there's a general flow but lots of exceptions and judgement calls", points: 1 },
      { label: "Fairly easy — there's a clear structure even if some judgement is involved", points: 2 },
      { label: "Very easy — our processes are well-defined and consistently repeatable", points: 3 },
    ],
  },
  {
    id: 9, category: "process",
    categoryIcon: <ClipboardList className="w-4 h-4" />,
    question: "Do you have visibility of where work is in your workflows at any given moment?",
    options: [
      { label: "No — we often chase each other to find out where things are up to", points: 0 },
      { label: "Partially — for some things but not everything", points: 1 },
      { label: "Mostly — we have a project tool or CRM that gives a reasonable view", points: 2 },
      { label: "Completely — everything is tracked in real time and visible to the team", points: 3 },
    ],
  },
  {
    id: 10, category: "process",
    categoryIcon: <ClipboardList className="w-4 h-4" />,
    question: "Have you identified specific bottlenecks or inefficiencies you'd like to address?",
    options: [
      { label: "Not really — we haven't thought about it in structured terms", points: 0 },
      { label: "We have a general sense of where things slow down", points: 1 },
      { label: "Yes — we can name specific problems we'd like to solve", points: 2 },
      { label: "Yes — and we've tried to fix them but need better tools to do it properly", points: 3 },
    ],
  },

  // ─── People & Culture (5 questions, max 15 pts) ─────────────────
  {
    id: 11, category: "people",
    categoryIcon: <Users className="w-4 h-4" />,
    question: "How does your leadership team feel about exploring AI in the business?",
    options: [
      { label: "Sceptical — not convinced it's relevant to a business like ours", points: 0 },
      { label: "Curious but cautious — open to learning, not ready to commit", points: 1 },
      { label: "Supportive — keen to explore and willing to invest if the case is clear", points: 2 },
      { label: "Enthusiastic — actively looking for the right AI opportunities to pursue", points: 3 },
    ],
  },
  {
    id: 12, category: "people",
    categoryIcon: <Users className="w-4 h-4" />,
    question: "How do your staff generally react to new technology or process changes?",
    options: [
      { label: "Resistant — change is slow and often meets pushback", points: 0 },
      { label: "Mixed — some embrace change, others take time or push back", points: 1 },
      { label: "Generally positive — staff adapt well with proper communication and training", points: 2 },
      { label: "Very positive — the team is keen to try new tools and ways of working", points: 3 },
    ],
  },
  {
    id: 13, category: "people",
    categoryIcon: <Users className="w-4 h-4" />,
    question: "Are any of your staff already using AI tools in their work (e.g. ChatGPT, Copilot, Gemini)?",
    options: [
      { label: "No — and we'd prefer they don't until we have a proper policy in place", points: 1 },
      { label: "Not to our knowledge — it hasn't come up", points: 0 },
      { label: "A few individuals are experimenting informally", points: 2 },
      { label: "Yes — several people use AI tools regularly, though without a formal approach", points: 3 },
    ],
  },
  {
    id: 14, category: "people",
    categoryIcon: <Users className="w-4 h-4" />,
    question: "Do you have budget allocated for technology improvement or AI exploration?",
    options: [
      { label: "No specific budget — any investment would need to be justified from scratch", points: 0 },
      { label: "Informal budget — we could find money if the right opportunity came up", points: 1 },
      { label: "A technology improvement budget exists but isn't specifically for AI", points: 2 },
      { label: "Yes — we have set aside budget for AI exploration or implementation", points: 3 },
    ],
  },
  {
    id: 15, category: "people",
    categoryIcon: <Users className="w-4 h-4" />,
    question: "How aware is your team of what AI can and cannot realistically do for a business like yours?",
    options: [
      { label: "Not very — most people have only a vague idea from general media coverage", points: 0 },
      { label: "Somewhat — leadership has done some reading but the team is largely uninformed", points: 1 },
      { label: "Reasonably — we understand the broad possibilities and some limitations", points: 2 },
      { label: "Well-informed — we've assessed specific tools and understand the practical landscape", points: 3 },
    ],
  },

  // ─── Technology Foundation (5 questions, max 15 pts) ───────────
  {
    id: 16, category: "tech",
    categoryIcon: <Cpu className="w-4 h-4" />,
    question: "Which productivity platform does your business primarily use?",
    options: [
      { label: "None of the major cloud platforms — mostly local software and email", points: 0 },
      { label: "Google Workspace (Gmail, Drive, Docs, Sheets)", points: 1 },
      { label: "Microsoft 365 Business Basic or Standard", points: 2 },
      { label: "Microsoft 365 Business Premium or Enterprise — including Copilot or Defender", points: 3 },
    ],
  },
  {
    id: 17, category: "tech",
    categoryIcon: <Cpu className="w-4 h-4" />,
    question: "Are your business devices, software, and operating systems generally kept up to date?",
    options: [
      { label: "No — updates are patchy and we have devices running old software", points: 0 },
      { label: "Mostly — we patch when we can but it's not systematic", points: 1 },
      { label: "Yes — we have an IT provider who manages patching and updates", points: 2 },
      { label: "Yes — and we have compliance reporting to prove it at any point", points: 3 },
    ],
  },
  {
    id: 18, category: "tech",
    categoryIcon: <Cpu className="w-4 h-4" />,
    question: "Do you use a CRM (Customer Relationship Management) system?",
    options: [
      { label: "No — customer information is in spreadsheets or just in people's heads", points: 0 },
      { label: "We have something basic that isn't used very consistently", points: 1 },
      { label: "Yes — we use a CRM and most of the team uses it regularly", points: 2 },
      { label: "Yes — our CRM is central to our operations and well-maintained", points: 3 },
    ],
  },
  {
    id: 19, category: "tech",
    categoryIcon: <Cpu className="w-4 h-4" />,
    question: "How would you describe your current cyber security posture?",
    options: [
      { label: "Basic — antivirus on PCs but not much else in place", points: 0 },
      { label: "Moderate — some controls but no formal policy or certification", points: 1 },
      { label: "Good — MFA enabled, email security, regular patching and backups", points: 2 },
      { label: "Strong — Cyber Essentials certified or equivalent, managed security in place", points: 3 },
    ],
  },
  {
    id: 20, category: "tech",
    categoryIcon: <Cpu className="w-4 h-4" />,
    question: "Do you currently use any automation tools (Power Automate, Zapier, Make, or similar)?",
    options: [
      { label: "No — everything is done manually", points: 0 },
      { label: "No, but we're interested in exploring automation", points: 1 },
      { label: "We have a few automations set up, though not systematically", points: 2 },
      { label: "Yes — automation is already part of how we work", points: 3 },
    ],
  },
];

const MAX_SCORE = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.points)), 0);

function getResult(score: number) {
  const pct = Math.round((score / MAX_SCORE) * 100);
  if (pct <= 25) return {
    level: "Building Blocks",
    colour: "text-slate-700",
    ring: "stroke-slate-400",
    bg: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-700",
    summary: "Your business has strong AI potential, but the foundations need strengthening first. The good news: fixing the basics will pay dividends well before AI enters the picture.",
    bullets: [
      "Prioritise data organisation — clean, structured data is the prerequisite for everything AI-related",
      "Document your key processes before trying to automate them",
      "Get onto Microsoft 365 and enable MFA as a starting point",
      "Book an AI Readiness Audit — we will help you build a practical roadmap from where you are now",
    ],
  };
  if (pct <= 50) return {
    level: "Getting There",
    colour: "text-orange-700",
    ring: "stroke-orange-500",
    bg: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    summary: "You have meaningful foundations in place. There are targeted quick wins available right now, and a clear path to more transformative AI adoption over the next 12 months.",
    bullets: [
      "Microsoft Copilot could be available to you now — focus on the areas where your data is cleanest",
      "Identify your highest-volume manual processes and prioritise those for automation",
      "Invest in data quality in your core system — it will multiply the value of any AI you adopt",
      "An AI Readiness Audit will pinpoint the 2–3 areas with the strongest near-term ROI",
    ],
  };
  if (pct <= 75) return {
    level: "AI-Ready",
    colour: "text-primary",
    ring: "stroke-primary",
    bg: "bg-orange-50/60 border-orange-200",
    badge: "bg-orange-100 text-primary",
    summary: "You have solid foundations and are well-positioned for meaningful AI adoption. The right tools deployed thoughtfully could deliver significant time and cost savings within months.",
    bullets: [
      "Microsoft Copilot deployment is a strong immediate opportunity — your data and processes are ready",
      "Workflow automation across your core processes could save dozens of hours per week",
      "Consider an AI Readiness Audit to identify the highest-value use cases specific to your sector",
      "A formal AI policy and staff training programme will accelerate safe, confident adoption",
    ],
  };
  return {
    level: "AI-Forward",
    colour: "text-green-700",
    ring: "stroke-green-500",
    bg: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    summary: "You are in the top tier of AI-readiness for UK SMBs. You have the data, processes, tech, and culture to deploy AI at scale and see significant return on investment.",
    bullets: [
      "You are ready for a comprehensive AI strategy — not just tools, but integrated capability",
      "Explore Copilot Studio and custom AI app builds for your most complex workflows",
      "Consider an AI governance framework to manage risk and maintain competitive advantage",
      "An AI Readiness Audit will map your specific landscape and prioritise highest-value opportunities",
    ],
  };
}

function getCategoryScore(answers: Record<number, number>, cat: string) {
  const catQuestions = questions.filter(q => q.category === cat);
  const scored = catQuestions.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
  const max = catQuestions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.points)), 0);
  return { scored, max, pct: Math.round((scored / max) * 100) };
}

/* ─── Score Ring ────────────────────────────────────────────────── */

function ScoreRing({ score, max, ringClass }: { score: number; max: number; ringClass: string }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const pct = score / max;
  const dash = circ * pct;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e2e8f0" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          className={ringClass}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display font-bold text-3xl text-secondary">{score}</span>
        <span className="text-xs text-muted-foreground">/ {max}</span>
      </div>
    </div>
  );
}

/* ─── Quiz Component ────────────────────────────────────────────── */

function Quiz({ onComplete }: { onComplete: (answers: Record<number, number>, score: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const catColour = categories.find(c => c.id === q.category)?.colour ?? "";

  function choose(points: number, optIdx: number) {
    setSelected(optIdx);
    setTimeout(() => {
      const newAnswers = { ...answers, [q.id]: points };
      if (current < questions.length - 1) {
        setDirection(1);
        setAnswers(newAnswers);
        setSelected(null);
        setCurrent(c => c + 1);
      } else {
        const total = Object.values(newAnswers).reduce((a, b) => a + b, 0);
        onComplete(newAnswers, total);
      }
    }, 380);
  }

  function goBack() {
    if (current === 0) return;
    setDirection(-1);
    setSelected(null);
    setCurrent(c => c - 1);
  }

  const catInfo = categories.find(c => c.id === q.category)!;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Question {current + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="flex gap-1 mt-3">
          {categories.map((cat, ci) => {
            const catQs = questions.filter(qq => qq.category === cat.id);
            const firstIdx = questions.findIndex(qq => qq.category === cat.id);
            const isActive = cat.id === q.category;
            const isDone = current >= firstIdx + catQs.length;
            return (
              <div key={ci} className={`flex-1 flex items-center gap-1 text-xs px-2 py-1 rounded-md border transition-all ${
                isActive ? cat.colour : isDone ? "bg-green-50 border-green-200 text-green-700" : "bg-muted border-transparent text-muted-foreground"
              }`}>
                {isDone ? <CheckCircle2 className="w-3 h-3 flex-shrink-0" /> : cat.icon}
                <span className="hidden sm:block truncate">{cat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.3 }}
        >
          <Badge variant="outline" className={`mb-4 gap-1.5 ${catInfo.colour}`}>
            {catInfo.icon} {catInfo.label}
          </Badge>
          <h3 className="font-display font-bold text-xl text-secondary mb-6 leading-snug">
            {q.question}
          </h3>
          <div className="space-y-3">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => choose(opt.points, oi)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-sm leading-relaxed ${
                  selected === oi
                    ? "border-primary bg-primary/5 text-secondary font-medium"
                    : "border-border bg-background hover:border-primary/50 hover:bg-muted/50 text-foreground"
                }`}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 flex-shrink-0 ${
                  selected === oi ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + oi)}
                </span>
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-8">
        <Button variant="ghost" size="sm" onClick={goBack} disabled={current === 0} className="text-muted-foreground">
          ← Back
        </Button>
        <span className="text-xs text-muted-foreground">Click an answer to continue</span>
      </div>
    </div>
  );
}

/* ─── Results Component ─────────────────────────────────────────── */

function Results({ answers, score, onReset }: { answers: Record<number, number>; score: number; onReset: () => void }) {
  const result = getResult(score);
  const pct = Math.round((score / MAX_SCORE) * 100);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {/* Score header */}
      <div className={`rounded-2xl border-2 p-8 mb-8 ${result.bg}`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <ScoreRing score={score} max={MAX_SCORE} ringClass={result.ring} />
          <div className="flex-1 text-center md:text-left">
            <Badge className={`mb-3 ${result.badge}`}>{pct}% AI Readiness Score</Badge>
            <h3 className={`font-display font-bold text-2xl mb-3 ${result.colour}`}>{result.level}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{result.summary}</p>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => {
          const { scored, max, pct: catPct } = getCategoryScore(answers, cat.id);
          return (
            <div key={cat.id} className="bg-background rounded-xl border border-border p-4 text-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 border ${cat.colour}`}>
                {cat.icon}
              </div>
              <div className="text-xs text-muted-foreground mb-1 leading-tight">{cat.label}</div>
              <div className="font-display font-bold text-lg text-secondary">{scored}<span className="text-xs text-muted-foreground font-normal">/{max}</span></div>
              <div className="h-1.5 bg-muted rounded-full mt-2">
                <div className="h-full bg-primary rounded-full" style={{ width: `${catPct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommendations */}
      <div className="bg-background rounded-2xl border border-border p-6 mb-8">
        <h4 className="font-display font-bold text-secondary mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" /> What we recommend
        </h4>
        <ul className="space-y-3">
          {result.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="#audit-form">
          <Button size="lg" className="w-full sm:w-auto gap-2">
            Book your free AI Readiness Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
        <Button variant="outline" size="lg" onClick={onReset} className="gap-2">
          <RotateCcw className="w-4 h-4" /> Retake the quiz
        </Button>
      </div>
    </motion.div>
  );
}

/* ─── Audit Form ────────────────────────────────────────────────── */

interface AuditFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  size: string;
  platform: string;
  aiUsage: string;
  painPoints: string;
  goal: string;
  barrier: string;
  timeline: string;
  quizScore: string;
}

function AuditForm({ prefillScore }: { prefillScore?: number }) {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "", email: "", phone: "", company: "",
    size: "", platform: "", aiUsage: "",
    painPoints: "", goal: "", barrier: "", timeline: "",
    quizScore: prefillScore !== undefined ? `${prefillScore}/${MAX_SCORE}` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});

  function set(field: keyof AuditFormData, value: string) {
    setFormData(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: "" }));
  }

  function validate() {
    const e: Partial<Record<keyof AuditFormData, string>> = {};
    if (!formData.name.trim()) e.name = "Required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email required";
    if (!formData.company.trim()) e.company = "Required";
    if (!formData.size) e.size = "Required";
    if (!formData.goal) e.goal = "Required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-2xl border border-border p-10 text-center"
      >
        <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-2xl text-secondary mb-3">Audit request received</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Thanks {formData.name.split(" ")[0]}. We'll review your responses and be in touch within one business day to arrange your free AI Readiness Audit call — no preparation needed on your side.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/services/ai">
            <Button variant="outline" className="gap-2">
              <Brain className="w-4 h-4" /> Explore AI Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="gap-2">
              Contact Fox IT <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const inputClass = (field: keyof AuditFormData) =>
    `w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
      errors[field] ? "border-red-400 focus:ring-red-300" : "border-border"
    }`;

  const selectClass = (field: keyof AuditFormData) =>
    `w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all ${
      errors[field] ? "border-red-400" : "border-border"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact details */}
      <div>
        <h4 className="font-display font-bold text-secondary text-base mb-4 flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" /> Your details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Full name *</label>
            <input type="text" value={formData.name} onChange={e => set("name", e.target.value)} placeholder="Todd Smith" className={inputClass("name")} />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Work email *</label>
            <input type="email" value={formData.email} onChange={e => set("email", e.target.value)} placeholder="todd@yourcompany.co.uk" className={inputClass("email")} />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phone number</label>
            <input type="tel" value={formData.phone} onChange={e => set("phone", e.target.value)} placeholder="01234 567890" className={inputClass("phone")} />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Company name *</label>
            <input type="text" value={formData.company} onChange={e => set("company", e.target.value)} placeholder="Your Business Ltd" className={inputClass("company")} />
            {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
          </div>
        </div>
      </div>

      {/* Business profile */}
      <div>
        <h4 className="font-display font-bold text-secondary text-base mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" /> Your business
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Number of employees *</label>
            <select value={formData.size} onChange={e => set("size", e.target.value)} className={selectClass("size")}>
              <option value="">Select size</option>
              <option value="1-5">1–5 (micro business)</option>
              <option value="6-15">6–15 (small business)</option>
              <option value="16-50">16–50 (growing SMB)</option>
              <option value="51-100">51–100</option>
              <option value="101-250">101–250</option>
              <option value="250+">250+</option>
            </select>
            {errors.size && <p className="text-xs text-red-500 mt-1">{errors.size}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Primary productivity platform</label>
            <select value={formData.platform} onChange={e => set("platform", e.target.value)} className={selectClass("platform")}>
              <option value="">Select platform</option>
              <option value="m365-premium">Microsoft 365 Business Premium / E3 / E5</option>
              <option value="m365-standard">Microsoft 365 Business Standard or Basic</option>
              <option value="google">Google Workspace</option>
              <option value="mix">Mix of platforms</option>
              <option value="none">No cloud platform — mostly local software</option>
              <option value="unsure">Not sure</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI context */}
      <div>
        <h4 className="font-display font-bold text-secondary text-base mb-4 flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" /> Your AI position
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Current AI usage in the business</label>
            <select value={formData.aiUsage} onChange={e => set("aiUsage", e.target.value)} className={selectClass("aiUsage")}>
              <option value="">Select one</option>
              <option value="none">None — completely new to AI</option>
              <option value="informal">Some individuals using ChatGPT / Copilot informally</option>
              <option value="trialling">Actively trialling one or two AI tools</option>
              <option value="using">Using AI tools in production across the business</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">What would you most like AI to help with?</label>
            <textarea
              rows={3}
              value={formData.painPoints}
              onChange={e => set("painPoints", e.target.value)}
              placeholder="e.g. reducing admin time, summarising documents, automating invoice processing, creating customer quotes faster, answering customer emails..."
              className={`${inputClass("painPoints")} resize-none`}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Primary goal *</label>
              <select value={formData.goal} onChange={e => set("goal", e.target.value)} className={selectClass("goal")}>
                <option value="">Select goal</option>
                <option value="efficiency">Save time and reduce manual work</option>
                <option value="cost">Reduce operational costs</option>
                <option value="revenue">Grow revenue or improve customer experience</option>
                <option value="decisions">Better data and smarter decisions</option>
                <option value="explore">Explore what's possible — no specific goal yet</option>
              </select>
              {errors.goal && <p className="text-xs text-red-500 mt-1">{errors.goal}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Biggest concern or barrier</label>
              <select value={formData.barrier} onChange={e => set("barrier", e.target.value)} className={selectClass("barrier")}>
                <option value="">Select one</option>
                <option value="knowhow">Don't know where to start</option>
                <option value="data">Data quality or structure</option>
                <option value="budget">Budget constraints</option>
                <option value="security">Security and data privacy concerns</option>
                <option value="staff">Staff buy-in and adoption</option>
                <option value="roi">Unsure of the return on investment</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Implementation timeline</label>
            <select value={formData.timeline} onChange={e => set("timeline", e.target.value)} className={selectClass("timeline")}>
              <option value="">Select timeline</option>
              <option value="asap">As soon as possible</option>
              <option value="3months">Within 3 months</option>
              <option value="6months">3–6 months</option>
              <option value="year">6–12 months</option>
              <option value="exploring">Just exploring at this stage</option>
            </select>
          </div>
          {formData.quizScore && (
            <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary flex-shrink-0" />
              Quiz score attached: <span className="font-semibold text-secondary">{formData.quizScore}</span> — we'll use this to prepare for your audit call.
            </div>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full gap-2">
        <Send className="w-4 h-4" /> Request my free AI Readiness Audit
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We'll review your submission and be in touch within one business day. No hard sell — just a straight conversation about where AI can genuinely help your business.
      </p>
    </form>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function AIReadiness() {
  const [quizState, setQuizState] = useState<"intro" | "quiz" | "results">("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number | undefined>(undefined);

  function startQuiz() { setQuizState("quiz"); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function handleComplete(ans: Record<number, number>, s: number) { setAnswers(ans); setScore(s); setQuizState("results"); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function handleReset() { setAnswers({}); setScore(undefined); setQuizState("intro"); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_95%_53%_/_0.18)_0%,_transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 gap-1.5">
              <Brain className="w-3.5 h-3.5" /> AI Readiness
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Is your business<br />
              <span className="text-primary">ready for AI?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
              20 questions. 5 minutes. An honest picture of where your business stands — and what to do next. Then request a free, no-obligation AI Readiness Audit with one of our team.
            </p>
            <div className="flex flex-wrap gap-4">
              {quizState === "intro" && (
                <Button size="lg" onClick={startQuiz} className="gap-2">
                  Take the free quiz <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              <a href="#audit-form">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                  Skip to audit form <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What you get */}
      {quizState === "intro" && (
        <section className="py-16 bg-muted/40 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <BarChart3 className="w-6 h-6 text-primary" />, title: "Your AI readiness score", desc: "Across 4 key areas: data, processes, people, and technology — with a percentage score for each." },
                { icon: <Target className="w-6 h-6 text-primary" />, title: "Specific recommendations", desc: "Tailored to your score — not generic advice. Practical next steps for where your business actually is." },
                { icon: <Clock className="w-6 h-6 text-primary" />, title: "5 minutes, completely free", desc: "No email required to see your results. Book an audit if you want to go deeper — no obligation." },
              ].map((item, i) => (
                <motion.div
                  key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-background rounded-2xl border border-border p-6 flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-secondary mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quiz / Results section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {quizState === "intro" && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Self-Assessment</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
                The AI Readiness Quiz
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                20 questions across four categories. Answer honestly — the more accurate your answers, the more useful your score.
              </p>
              <Button size="lg" onClick={startQuiz} className="gap-2">
                Start the quiz <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Category preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
                {categories.map((cat, i) => (
                  <div key={i} className={`rounded-xl border p-4 text-center ${cat.colour}`}>
                    <div className="flex justify-center mb-2">{cat.icon}</div>
                    <div className="text-xs font-semibold leading-tight">{cat.label}</div>
                    <div className="text-xs mt-1 opacity-70">5 questions</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {quizState === "quiz" && <Quiz onComplete={handleComplete} />}
          {quizState === "results" && <Results answers={answers} score={score!} onReset={handleReset} />}
        </div>
      </section>

      {/* What the audit covers */}
      <section className="py-16 md:py-20 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free AI Readiness Audit</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
                What the audit covers
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A structured 60-minute call with one of our team. No slides, no sales pitch — just an honest assessment of where AI can genuinely help your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Database className="w-5 h-5 text-primary" />, title: "Data landscape review", points: ["Where your business data lives and how it flows", "Data quality assessment — what AI can and cannot use", "Quick wins for data organisation if needed"] },
                { icon: <ClipboardList className="w-5 h-5 text-primary" />, title: "Process mapping", points: ["Which processes are best suited for AI or automation", "Time and cost estimates for key automation opportunities", "Prioritisation of the highest-ROI starting points"] },
                { icon: <Zap className="w-5 h-5 text-primary" />, title: "Tool recommendations", points: ["Microsoft Copilot readiness and deployment pathway", "Third-party AI tools relevant to your sector", "Build vs. buy assessment for custom requirements"] },
                { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Written roadmap", points: ["A written summary of findings and recommendations", "Phased implementation plan with realistic timelines", "Budget ranges for each recommended initiative"] },
              ].map((item, i) => (
                <motion.div
                  key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeInUp} transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-background rounded-2xl border border-border p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <h3 className="font-display font-bold text-secondary">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-secondary text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="font-display font-bold text-lg mb-1">The honest bit</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  If we think AI isn't the right investment for you right now, we'll say so — and tell you what to focus on first. We'd rather give you a useful assessment than sell you something you're not ready for.
                </p>
              </div>
              <a href="#audit-form" className="flex-shrink-0">
                <Button size="lg" className="gap-2 whitespace-nowrap">
                  Book the audit <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Audit form */}
      <section id="audit-form" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free, no obligation</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
                Request your AI Readiness Audit
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Fill in the form below and we'll be in touch within one business day to arrange your 60-minute audit call. No preparation needed on your side.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} transition={{ delay: 0.1 }}
              className="bg-background rounded-2xl border border-border p-8 shadow-sm"
            >
              <AuditForm prefillScore={score} />
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <a href="tel:01234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 01234 567890
              </a>
              <a href="mailto:hello@fox-it.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> hello@fox-it.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
