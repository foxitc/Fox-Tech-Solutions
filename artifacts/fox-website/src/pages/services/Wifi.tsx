import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, Wifi as WifiIcon, Search, Ruler, Wrench, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "WiFi Audit",
    description:
      "We survey your existing setup and identify exactly what's wrong — coverage gaps, interference, outdated hardware, or a network that was never designed properly in the first place. You'll get a clear report and honest recommendations.",
  },
  {
    icon: <Ruler className="w-6 h-6 text-primary" />,
    title: "WiFi Design",
    description:
      "Before we install anything, we design the right solution for your space. Access point placement, channel planning, capacity planning — all done properly. No guesswork.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "WiFi Installation",
    description:
      "Professional installation by qualified Unifi engineers. Cabling, mounting, configuration, testing — the whole job. Left clean, working perfectly, and documented.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Wifi() {
  return (
    <div>
      <ServicePageHero
        subtitle="WiFi Solutions"
        title="No dead zones. Qualified Unifi specialists."
        description="We audit what you've got, design what you need, and install it properly. Ubiquiti Unifi certified — because enterprise-grade WiFi shouldn't be a luxury."
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
              WiFi the way it should be
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Most business WiFi is an afterthought. It doesn't have to be. Unifi gives you enterprise-grade performance and visibility without the enterprise-grade price tag.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all" data-testid={`wifi-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
                Why Unifi?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ubiquiti's Unifi platform delivers enterprise-grade networking at a price that makes sense for SMBs. Centralised management, detailed analytics, reliable hardware, and a reputation that speaks for itself.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're qualified Unifi specialists — which means we know how to get the most out of the platform and avoid the common mistakes. A poorly installed Unifi network can be just as frustrating as any other. Done right, it's transformative.
              </p>
              <ul className="space-y-3">
                {[
                  "Qualified Unifi installation engineers",
                  "Full site surveys before any install",
                  "Managed WiFi options available",
                  "Works across offices, warehouses, retail, hospitality",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-white">
              <WifiIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">WiFi not cutting it?</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If your team is complaining about WiFi, it's already costing you in productivity. Let's fix it before it gets worse.
              </p>
              <Link href="/contact">
                <Button className="w-full font-semibold group" data-testid="wifi-cta">
                  Book a WiFi audit
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
