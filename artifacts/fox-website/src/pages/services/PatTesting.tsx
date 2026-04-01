import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, CheckCircle2, Zap, FileText, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Thorough testing",
    description: "Every item tested to current HSE and IET guidelines. Passed items get a label; failed items get flagged and reported.",
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: "Full reporting",
    description: "A clear report of every item tested — pass, fail, and any recommendations. Digital records kept for your reference.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Minimal disruption",
    description: "We work around your schedule. Quick, efficient, and out of your way. Most jobs are done before your team notices.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Compliance covered",
    description: "Keep your insurance valid and your H&S obligations met. Regular PAT testing is a legal requirement for most businesses.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PatTesting() {
  return (
    <div>
      <ServicePageHero
        subtitle="PAT Testing"
        title="Keep your team safe. Stay compliant."
        description="Fast, professional PAT testing with full documentation and reporting. We make sure your electrical equipment is safe and your compliance is sorted — without disrupting your day."
      />

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
              What's included
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional PAT testing doesn't have to be complicated. We make it easy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-secondary mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="font-display font-bold text-3xl text-secondary mb-5">
                Do you actually need PAT testing?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes. If your business has portable electrical equipment — and almost every business does — you have a legal obligation to maintain it safely. The Health and Safety at Work Act 1974 and the Electricity at Work Regulations 1989 both require that electrical equipment is maintained in a safe condition.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                How often you need to test depends on the type of equipment and environment. We'll advise you on the right schedule.
              </p>
              <ul className="space-y-3">
                {[
                  "All equipment types tested — appliances, IT equipment, extension leads",
                  "Certificates issued on the same day",
                  "Flexible scheduling — evenings and weekends available",
                  "Competitive fixed pricing per item",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white">
              <Zap className="w-10 h-10 text-white mb-4 opacity-80" />
              <h3 className="font-display font-bold text-xl mb-3">Book a PAT test</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Tell us how many items need testing and where you're based. We'll get back to you with a quote and available dates.
              </p>
              <Link href="/contact">
                <Button variant="secondary" className="w-full font-semibold group" data-testid="pat-cta">
                  Get a quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
