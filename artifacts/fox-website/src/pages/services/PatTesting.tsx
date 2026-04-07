import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  FileText,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  Tag,
  Wrench,
  Building2,
  HelpCircle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ─── What gets tested ─────────────────────────────────────────── */

const equipmentTypes = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "IT & office equipment",
    items: ["Laptops & desktop computers", "Monitors", "Docking stations", "USB hubs & chargers", "Printers & scanners", "Telephone equipment"],
  },
  {
    icon: <Building2 className="w-5 h-5 text-primary" />,
    title: "General office appliances",
    items: ["Kettles & coffee machines", "Microwaves & fridges", "Fans & heaters", "Desk lamps & floor lamps", "Toasters & other kitchen appliances", "Vending machines"],
  },
  {
    icon: <Wrench className="w-5 h-5 text-primary" />,
    title: "Power & cabling",
    items: ["Extension leads", "Multi-socket adaptors", "IEC cables (kettle leads)", "Power tools and handheld equipment", "Battery chargers", "Industrial equipment"],
  },
];

/* ─── Testing frequency guide ──────────────────────────────────── */

const frequencyGuide = [
  { env: "Office environment", equipment: "Computers, printers, desk equipment", freq: "Every 4–5 years", notes: "Low-risk environment, equipment rarely moved" },
  { env: "Office environment", equipment: "Extension leads, power adaptors", freq: "Every 1–2 years", notes: "Higher risk — often moved and stressed" },
  { env: "Educational", equipment: "All portable appliances", freq: "Every 1–2 years", notes: "Higher usage, more frequent recommended" },
  { env: "Industrial / Warehouse", equipment: "All portable appliances", freq: "Annually", notes: "High-risk environment — dust, vibration, moisture" },
  { env: "Construction / Site", equipment: "All site equipment & tools", freq: "Every 3 months", notes: "Highest risk — outdoor, wet conditions" },
  { env: "Hotel / Hospitality", equipment: "All in-room appliances", freq: "Annually", notes: "High rotation of users and frequent movement" },
];

/* ─── What happens during a test ──────────────────────────────────*/

const testProcess = [
  { step: "01", title: "Visual inspection", desc: "Every item is visually checked before any electrical test — damaged cables, cracked plugs, signs of overheating, or incorrect fuse ratings. Many items fail here before we even plug in the tester." },
  { step: "02", title: "Earth continuity test", desc: "For Class I (earthed) equipment, we verify the earth connection is sound. A broken earth means a live case — a serious shock risk." },
  { step: "03", title: "Insulation resistance test", desc: "Checks that the insulation between the live conductors and the equipment casing is intact. Poor insulation can cause electric shock or fire." },
  { step: "04", title: "Load/function test", desc: "Some equipment types require a powered test under load to check operation and detect faults that only appear in use." },
  { step: "05", title: "Pass/fail labelling", desc: "Every item receives a dated label showing pass or fail, who tested it, and when the next test is due. Failed items are clearly labelled and removed from service." },
  { step: "06", title: "Digital report", desc: "A complete digital record of every item tested — asset details, test results, serial numbers, and any remedial actions required. Sent same-day." },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function PatTesting() {
  return (
    <div>
      <ServicePageHero
        subtitle="PAT Testing"
        title="Keep your team safe. Stay compliant."
        description="Professional Portable Appliance Testing for UK businesses — thorough, fast, fully documented, and compliant with HSE and IET guidelines. We test everything, label everything, and leave you with a full digital report on the same day."
      />

      {/* Legal context */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl text-secondary mb-2">Do you actually need PAT testing?</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes — if your business uses portable electrical equipment (and virtually every business does), you have a legal duty of care to maintain it safely.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The Health and Safety at Work Act 1974 and the Electricity at Work Regulations 1989 require that all electrical systems (including portable appliances) are maintained to prevent danger. The IET Code of Practice for In-Service Inspection and Testing sets out how this should be done.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                PAT testing is also typically a condition of Employers' Liability and Public Liability insurance. Failing to test and suffering an electrical incident could invalidate your policy — leaving your business personally liable.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="space-y-3">
                {[
                  { law: "Health & Safety at Work Act 1974", detail: "Employer duty to maintain safe equipment" },
                  { law: "Electricity at Work Regulations 1989", detail: "Electrical systems must be maintained to prevent danger" },
                  { law: "Management of H&S at Work Regs 1999", detail: "Risk assessment must cover electrical equipment" },
                  { law: "Provision and Use of Work Equipment 1998", detail: "Equipment must be maintained in efficient working order" },
                ].map((item) => (
                  <div key={item.law} className="bg-muted/40 border border-border rounded-xl p-4 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary text-sm">{item.law}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What gets tested */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What we test</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">Everything with a plug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">If it plugs into the wall or runs off a battery charger, it needs testing. We cover all equipment categories.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipmentTypes.map((cat, i) => (
              <motion.div key={cat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-muted/40 border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">{cat.icon}</div>
                <h3 className="font-display font-bold text-base text-secondary mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test process */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The process</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">What happens during a PAT test?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Not all PAT testing is equal. Here's exactly how we approach it.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testProcess.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-6">
                <div className="font-display font-bold text-4xl text-primary/15 mb-2 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-base text-secondary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequency guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How often?</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">Recommended testing frequency</h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              The IET Code of Practice doesn't set a fixed interval — it's risk-based, depending on environment and equipment type. Here's what we recommend based on HSE guidance.
            </p>
          </motion.div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60 border-b border-border">
                  <th className="text-left p-4 font-semibold text-secondary text-xs">Environment</th>
                  <th className="text-left p-4 font-semibold text-secondary text-xs">Equipment type</th>
                  <th className="text-left p-4 font-semibold text-secondary text-xs">Frequency</th>
                  <th className="text-left p-4 font-semibold text-secondary text-xs">Notes</th>
                </tr>
              </thead>
              <tbody>
                {frequencyGuide.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}>
                    <td className="p-4 font-medium text-secondary text-xs">{row.env}</td>
                    <td className="p-4 text-muted-foreground text-xs">{row.equipment}</td>
                    <td className="p-4 text-primary font-semibold text-xs">{row.freq}</td>
                    <td className="p-4 text-muted-foreground text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Source: IET Code of Practice for In-Service Inspection and Testing of Electrical Equipment (5th edition). Actual testing intervals should be determined by risk assessment.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <Zap className="w-10 h-10 text-primary mb-5" />
              <h2 className="font-display font-bold text-3xl text-white mb-4">Book your PAT test</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Tell us roughly how many items need testing and where you're based. We'll give you a competitive quote, agree a date, and get it done with minimal disruption to your working day. Certificates issued same-day.
              </p>
              <ul className="space-y-3">
                {[
                  "Competitive fixed pricing per item",
                  "Certificates issued same day",
                  "Flexible scheduling — evenings and weekends available",
                  "Digital records stored and provided to you",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-5">Get a quote</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We need: approximate number of items, your location, and any scheduling requirements. We'll respond same working day.
              </p>
              <Link href="/contact">
                <Button className="w-full font-semibold group mb-3" data-testid="pat-cta">
                  Request a PAT quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:03300581877">
                <Button variant="outline" className="w-full font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Call: 03300 581 877
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
