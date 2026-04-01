import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, Shield, BadgeCheck, Mail, BookOpen, Target, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: "Cyber Essentials",
    description:
      "Cyber Essentials is the UK Government-backed certification that proves you take cyber security seriously. It protects against the most common cyber threats and — if you work with the public sector — it's often a requirement. We handle the whole process: assessment, gap analysis, remediation, and certification. You get the badge; we do the hard work.",
    badge: "Government-backed",
  },
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Hornet Security",
    description:
      "Email is still the number one route into a business for attackers. Hornet Security gives you enterprise-grade email security without the enterprise-grade complexity. Advanced spam filtering, malware detection, email archiving, and cloud security — all managed by us so you don't have to think about it.",
    badge: "Email & Cloud",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Cyber Training",
    description:
      "Your team is your biggest security asset — or your biggest liability. It depends entirely on what they know. Our cyber awareness training turns your staff from a risk into a defence. Short, engaging, practical sessions that actually stick. No death by PowerPoint.",
    badge: "Staff awareness",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Simulated Phishing",
    description:
      "Test your team before the hackers do. We send realistic, simulated phishing emails and see who clicks. The results are genuinely eye-opening — and they make the case for training better than any presentation ever could. Low risk, high value, and it only takes one click to realise why this matters.",
    badge: "Phishing simulation",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CyberSecurity() {
  return (
    <div>
      <ServicePageHero
        subtitle="Cyber Security"
        title="Cyber attacks don't care how small you are."
        description="We make sure you're protected, certified, and trained — before something goes wrong. Not after. Cyber security doesn't have to be complicated. With Fox, it isn't."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "90%", label: "of breaches start with phishing" },
              { value: "60%", label: "of SMBs close within 6 months of a breach" },
              { value: "£3.1k", label: "average cost of a cyber incident to a small business" },
              { value: "£0", label: "cost of preventing it with the right steps" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-4">
              Our cyber security services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A full suite of protection, from certification to training to email security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all" data-testid={`cyber-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                          {service.badge}
                        </div>
                        <h3 className="font-display font-bold text-xl text-secondary">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Don't wait for a breach to take this seriously.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              The businesses that get hit hardest are the ones who thought it wouldn't happen to them. Let's make sure you're not one of them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-bold px-10 group" data-testid="cyber-cta-btn">
                  Get protected today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <ul className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
              {["Cyber Essentials certified partner", "UK-based team", "Jargon-free advice"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
