import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/TeamCard";
import { ArrowRight, CheckCircle2, HeartHandshake, Zap, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Todd",
    role: "Co-Founder & Managing Director",
    bio: "Todd's been in IT since before WiFi was a thing. He's the one who answers the phone on a Saturday morning without complaining. Probably. He's the backbone of Fox — built the business from nothing and still personally oversees every client relationship.",
    initials: "T",
  },
  {
    name: "Fabio",
    role: "Co-Founder & Technical Director",
    bio: "Fabio has a talent for making the complex simple. Whether it's designing a network from scratch or explaining cyber risk to a board, he does it without the waffle. He's been doing this a long time and still loves it.",
    initials: "F",
  },
  {
    name: "Sarah",
    role: "Client Success Manager",
    bio: "Sarah is the reason our clients feel properly looked after. She keeps everything running smoothly, makes sure nobody waits around, and is genuinely the kind of person who makes Mondays better.",
    initials: "S",
  },
  {
    name: "James",
    role: "Senior IT Engineer",
    bio: "James is the quiet one who gets everything done. Behind the scenes, he's the reason your infrastructure doesn't keep you up at night. Patient, precise, and brilliant when things go sideways.",
    initials: "J",
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
              About Fox
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              We built Fox because IT support deserved better.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              It started with a simple frustration: IT support that was impersonal, slow, and spoke to you like you were an idiot. So we did something about it.
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
              {/* TODO: Replace the placeholder text below with your real founding story */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fox was founded with one simple idea — IT support should feel like talking to a mate, not a call centre. We're a small, expert team based in the UK, and we work with businesses across [your region], genuinely caring about getting it right every time.
                </p>
                <p>
                  No tickets lost in a queue. No "have you tried turning it off and on again" nonsense. Just straight-talking, fast, reliable IT from people who actually know what they're doing.
                </p>
                <p>
                  We started because Todd and Fabio had seen too many businesses let down by IT providers who were great at sales and poor at delivery. Fox is the antidote to that.
                </p>
                <p>
                  Since [founding year], we've supported businesses of all shapes and sizes — from five-person startups to established companies with multi-site operations. The approach doesn't change: know your clients, respond fast, and always tell the truth.
                </p>
              </div>
              {/* End of placeholder text */}
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
                    "UK-based team, UK-based support",
                    "Available when you need us — not just 9 to 5",
                    "No long-term lock-in contracts",
                    "Qualified across Microsoft, Unifi, Cyber Essentials and more",
                    "Small enough to care, experienced enough to deliver",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-primary rounded-2xl p-8">
                <blockquote className="text-white font-display font-bold text-xl leading-snug mb-4">
                  "We treat your business like it's our own. Because that's the only way to do it properly."
                </blockquote>
                <p className="text-white/70 text-sm">— Todd &amp; Fabio, Founders</p>
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
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The team</p>
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
            {/* TODO: Replace placeholder team photos by editing TeamCard.tsx */}
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
              No hard sell. No jargon. Just two people talking about whether Fox is the right fit for you.
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
