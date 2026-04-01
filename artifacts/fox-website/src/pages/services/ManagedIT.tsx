import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Monitor,
  Server,
  Users,
  Clock,
  Headphones,
  Shield,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: <Headphones className="w-5 h-5 text-primary" />,
    title: "UK-based helpdesk",
    description: "Real people, real answers. No offshore call centres, no chatbots.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Fast response times",
    description: "We pick up fast. We fix fast. Your downtime is our priority.",
  },
  {
    icon: <Monitor className="w-5 h-5 text-primary" />,
    title: "Remote & on-site support",
    description: "Most things fixed remotely in minutes. When you need us on-site, we're there.",
  },
  {
    icon: <Server className="w-5 h-5 text-primary" />,
    title: "Infrastructure management",
    description: "Servers, networks, cloud — managed, monitored, and maintained.",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Proactive monitoring",
    description: "We catch problems before they become disasters. 24/7 monitoring of your key systems.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-primary" />,
    title: "Software & hardware",
    description: "Licencing, procurement, setup, and ongoing management. All handled.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ManagedIT() {
  return (
    <div>
      <ServicePageHero
        subtitle="Managed IT Support"
        title="Your IT department, done properly."
        description="We become your IT department. Fast response, plain English, no jargon. Whether you're five people or fifty, we've got you — and we'll treat your business like it's our own."
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
              What's included
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our managed IT service is a proper partnership, not just a helpdesk number.
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

      {/* The Fox Difference */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">
                Not just a helpdesk. Your IT team.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most IT companies will give you a helpdesk number and a ticket reference. We give you a relationship. You'll know who's looking after your systems, and they'll know your business inside out.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                That means when something goes wrong — and at some point, something always does — we already understand your setup, your priorities, and what needs fixing first.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated account manager who knows your setup",
                  "Monthly reports so you know what's going on",
                  "No surprise charges — fixed monthly pricing",
                  "Flexible contracts — we earn your loyalty, not demand it",
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-secondary rounded-2xl p-8 text-white">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-3">Who this is for</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Small and medium businesses who want reliable IT without the overhead of an in-house team. If you're tired of IT being a headache, we're the fix.
                </p>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-white/70 text-sm">Call us: 01234 567890</span>
                  </div>
                  <Link href="/contact">
                    <Button className="w-full font-semibold group" data-testid="managed-it-cta">
                      Get a quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
