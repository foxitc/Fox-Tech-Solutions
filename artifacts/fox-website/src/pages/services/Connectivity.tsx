import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, Zap, Activity, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Broadband",
    description:
      "Fast, reliable business broadband that won't let you down at the wrong moment. We find the right provider for your location and budget, handle the order, and manage the install. Ongoing support included — if it goes wrong, you call us, not a national helpline.",
    features: [
      "Provider-agnostic — we find the best deal for you",
      "Full installation management",
      "Ongoing technical support",
      "Suitable for SMBs and home offices",
    ],
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Leased Line",
    description:
      "A dedicated leased line gives you symmetrical, uncontended bandwidth — meaning the speed you pay for is the speed you get. Ideal for businesses with heavy data requirements, multiple users, cloud-heavy operations, or anyone who simply can't afford for their internet to be slow or flaky.",
    features: [
      "Guaranteed symmetrical speeds",
      "SLA-backed uptime",
      "Dedicated connection — not shared",
      "Full installation and ongoing support",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Connectivity() {
  return (
    <div>
      <ServicePageHero
        subtitle="Connectivity"
        title="Fast, reliable connectivity. Sorted."
        description="Leased lines and broadband — we find the right connection for your business, manage everything from order to install, and support you ongoing. No waiting on hold with national providers."
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
              Choose your connection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure what you need? We'll help you figure it out. No sales pressure — just honest advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all" data-testid={`connectivity-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-secondary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
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
            className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display font-bold text-xl text-secondary mb-3">Not sure which you need?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Tell us about your setup and we'll recommend the right option. No jargon, no pressure — just honest advice.
            </p>
            <Link href="/contact">
              <Button className="font-semibold group" data-testid="connectivity-cta">
                Talk to us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
