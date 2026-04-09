import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/TeamCard";
import { ArrowRight, CheckCircle2, HeartHandshake, Zap, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Ian Mackness",
    role: "Founding Fox",
    bio: "Founder and chief visionary, Ian is the driving force behind Fox ITC. He actively engages with customers and is personally invested in making sure every client relationship is the right one. He's the one who saw a fox in a map of Leicestershire — and ran with it.",
    initials: "IM",
    fact: "Represented England and the Royal Navy in Field Hockey.",
  },
  {
    name: "Mark Hutchinson",
    role: "Head of Tech & The Pack",
    bio: "An experienced Network Engineer who joined the Den in 2019. Mark now heads up the service team and makes sure the pack are supporting customers the way they should be — properly, and without fuss.",
    initials: "MH",
    fact: "His favourite song is Party in the USA. Don't ask.",
  },
  {
    name: "Steven Thornley",
    role: "Pack Member",
    bio: "Steven completed his apprenticeship in 2022 and joined the Den as a 1st Line Support Cub. He's since grown into a field engineer and can now be found visiting customers out on the road.",
    initials: "ST",
    fact: "",
  },
  {
    name: "Lerato Mputle",
    role: "International Fox",
    bio: "Lerato is the latest addition to the Pack, joining in 2025. Based in South Africa, Lerato supports our international customers and brings a global dimension to an already brilliant team.",
    initials: "LM",
    fact: "",
  },
];

const values = [
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    title: "People first",
    description: "Every decision we make starts with people — our clients, our team, and the businesses we support.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "No messing about",
    description: "We respond fast, we fix things properly, and we tell you straight when something's your fault or ours.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Actually accountable",
    description: "We're not hiding behind a ticket system. You know who we are. We know your business. That's the deal.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    title: "Plain English always",
    description: "We hate jargon. You should never feel confused after speaking to us. If you do, call us out.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
            >
              About Fox ITC
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              We didn't choose the Fox. The Fox chose us.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              Founded in 2018 with a simple belief: Leicestershire businesses deserve IT support that puts people first — not technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6">Our story</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-display font-bold text-lg text-secondary mb-2">Behind the name</h3>
                  <p>
                    People often ask if we're Leicester City fans. While our founder Ian is indeed a lifelong Foxes supporter, the truth behind our name is far more serendipitous. Like many entrepreneurs, Ian spent countless hours agonising over the perfect company name and logo — but the answer was right in front of him, literally. While mapping out the Leicestershire region we planned to serve, something remarkable emerged: the geographical boundaries formed the distinctive outline of a fox's head.
                  </p>
                  <p className="mt-3">
                    It was a moment of clarity. The name wasn't just logical and local — it was meant to be.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-secondary mb-2">From military precision to modern innovation</h3>
                  <p>
                    Drawing on his military background in Communications and Weapons Engineering, Ian brought a unique perspective to our visual identity. His expertise with radar systems, satellite, and wireless technology inspired our distinctive logo — seamlessly blending the fox with WiFi signals to create the eye-catching symbol you see today.
                  </p>
                  <p className="mt-3">
                    That same military-grade attention to detail, that ability to see connections others might miss, defines how we approach every client's IT challenges. We don't just provide IT support — we look at your complete business landscape and find the solutions that make technology work for you, not against you.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h3 className="font-display font-bold text-xl text-secondary mb-6">At a glance</h3>
                <ul className="space-y-4">
                  {[
                    "Founded in 2018 in Leicestershire",
                    "Supporting businesses across the UK",
                    "Available when you need us — not just 9 to 5",
                    "No long-term lock-in contracts",
                    "Qualified across Microsoft, Cyber Essentials, networking and more",
                    "Military-grade attention to detail — every time",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-primary rounded-2xl p-8 space-y-6">
                <div>
                  <blockquote className="text-white font-display font-bold text-xl leading-snug mb-3">
                    "We treat your business like it's our own. Because that's the only way to do it properly."
                  </blockquote>
                  <p className="text-white/70 text-sm">— Ian Mackness, Founding Fox</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <blockquote className="text-white/90 font-display font-bold text-lg leading-snug mb-3">
                    "That ability to see connections others might miss — that's what defines how we approach every client's IT challenges."
                  </blockquote>
                  <p className="text-white/70 text-sm">— Ian Mackness, Founding Fox</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How we work</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">
              What we stand for
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-secondary mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The pack</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Meet the people behind Fox
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              People buy from people. We believe that. Here's who you'll be working with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-muted-foreground text-sm italic"
          >
            Real team photos coming soon — these placeholders are ready to swap out whenever you have images to upload.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Let's have a proper conversation.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              No hard sell. No jargon. Just a straight-talking conversation about whether Fox is the right fit for you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-bold text-base px-10 group" data-testid="about-cta-btn">
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
