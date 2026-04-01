import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, CheckCircle2, Lock, Settings, BarChart3, Users, MessageSquare, FolderOpen, Mail } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-5 h-5 text-primary" />,
    title: "Licencing & setup",
    description: "Right licences for the right people. No overpaying, no gaps. Set up properly from day one.",
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: "Security & compliance",
    description: "Multi-factor authentication, conditional access, data loss prevention. We make sure M365 is actually secure.",
  },
  {
    icon: <MessageSquare className="w-4 h-4 text-primary" />,
    title: "Microsoft Teams",
    description: "Configured for how your business actually works — meetings, calling, collaboration. Done properly.",
  },
  {
    icon: <FolderOpen className="w-4 h-4 text-primary" />,
    title: "SharePoint & OneDrive",
    description: "File storage and sharing that works. Proper structure, proper permissions, proper backups.",
  },
  {
    icon: <Mail className="w-4 h-4 text-primary" />,
    title: "Exchange & Email",
    description: "Business email that doesn't let you down. Migration, setup, ongoing management.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    title: "Ongoing management",
    description: "We don't set it up and disappear. We manage, monitor, and update your M365 environment ongoing.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Microsoft365() {
  return (
    <div>
      <ServicePageHero
        subtitle="Microsoft 365"
        title="M365 done right, not just done."
        description="Set up right, secured properly, and managed ongoing. Licencing, compliance, SharePoint, Teams — we handle the lot. Because getting Microsoft 365 wrong is surprisingly easy, and the consequences are real."
      />

      {/* Features */}
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
              Everything M365, managed properly
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Most businesses are either paying for licences they don't use or using features that aren't set up securely. We fix that.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-secondary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft partner */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">
                The hidden cost of getting M365 wrong
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Microsoft 365 is deceptively complex. It's easy to spin up — which means it's equally easy to spin up with the wrong licences, weak security settings, and a permission structure that nobody understands six months later.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We see it regularly: businesses paying for Business Premium licences but using them like Basic. Or SharePoint set up with everyone having full access to everything. Or MFA not enabled because "it's annoying."
              </p>
              <ul className="space-y-3">
                {[
                  "Microsoft 365 audit — find what's wrong",
                  "Licence right-sizing — save money where possible",
                  "Security hardening — MFA, conditional access, DLP",
                  "Migration support — from Google Workspace or on-premise",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-secondary rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-display font-bold text-white">Microsoft 365</p>
                    <p className="text-white/60 text-sm">Management & Compliance</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Whether you're setting M365 up from scratch or inherited a mess from a previous provider, we'll get it sorted.
                </p>
                <Link href="/contact">
                  <Button className="w-full font-semibold group" data-testid="m365-cta">
                    Talk to us about M365
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
