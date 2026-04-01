import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServicePageHero from "@/components/ServicePageHero";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { SiVodafone } from "react-icons/si";

const networks = [
  {
    name: "O2",
    description: "Great coverage, strong business benefits, and some of the best business tariffs available. O2 is our go-to recommendation for most SMBs.",
    strengths: ["Excellent business support", "Strong rural coverage", "Flexible tariff options"],
  },
  {
    name: "Vodafone",
    description: "Vodafone's business network is built for reliability. Particularly strong for international usage and businesses with heavy data requirements.",
    strengths: ["Best in class for international roaming", "Excellent data speeds", "Strong SLA options"],
  },
  {
    name: "EE",
    description: "The UK's largest 4G and 5G network. EE is hard to beat on speed and coverage, particularly in urban areas.",
    strengths: ["Fastest UK mobile network", "Widest 5G coverage", "Excellent call quality"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Mobile() {
  return (
    <div>
      <ServicePageHero
        subtitle="Business Mobile"
        title="Business mobile sorted. No faff."
        description="O2, Vodafone, EE — we work across all the major networks. We'll find the right deal for your business, sort the contracts, and handle everything from order to delivery. You just make the calls."
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
              The networks we work with
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not tied to one network. We work across all the major providers and find what's right for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {networks.map((network, i) => (
              <motion.div
                key={network.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-md transition-all text-center" data-testid={`mobile-network-${network.name.toLowerCase()}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {network.name === "O2" && <Phone className="w-8 h-8 text-primary" />}
                      {network.name === "Vodafone" && <SiVodafone className="w-8 h-8 text-primary" />}
                      {network.name === "EE" && <Phone className="w-8 h-8 text-primary" />}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-secondary mb-3">{network.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{network.description}</p>
                    <ul className="space-y-2 text-left">
                      {network.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Fox for mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="font-display font-bold text-3xl text-secondary mb-5">
                Why manage mobile through Fox?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you manage mobile through Fox, you get one point of contact for your entire business — IT support, connectivity, and mobile all through the same team. No more calling multiple companies when something goes wrong.
              </p>
              <ul className="space-y-3">
                {[
                  "Competitive tariffs across all major networks",
                  "Single invoice for all your IT services",
                  "Help with hardware — phones, SIMs, MDM",
                  "Business account management and support",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8 text-white">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl mb-3">Get a mobile quote</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Tell us how many users, what you're paying now, and which network you're on. We'll see if we can do better.
              </p>
              <Link href="/contact">
                <Button className="w-full font-semibold group" data-testid="mobile-cta">
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
