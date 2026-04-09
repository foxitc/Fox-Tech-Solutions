import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TeamCard from "@/components/TeamCard";
import {
  ArrowRight,
  Shield,
  Server,
  Wifi,
  Phone,
  CheckCircle2,
  Star,
  Users,
  Clock,
  HeartHandshake,
  Monitor,
  Quote,
  Download,
} from "lucide-react";

const services = [
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Managed IT Support",
    description: "We become your IT department. Fast response, plain English, no jargon.",
    href: "/services/managed-it",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Cyber Security",
    description: "Cyber Essentials, Hornet Security, staff training, simulated phishing. Covered.",
    href: "/services/cyber-security",
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-primary rotate-90" />,
    title: "Connectivity",
    description: "Leased lines and broadband — the right connection, sorted from order to install.",
    href: "/services/connectivity",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Mobile",
    description: "O2, Vodafone, EE — business mobile across all major networks, no faff.",
    href: "/services/mobile",
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Microsoft 365",
    description: "Set up right, secured properly, and managed ongoing. Licencing, compliance, Teams.",
    href: "/services/microsoft-365",
  },
  {
    icon: <Wifi className="w-6 h-6 text-primary" />,
    title: "WiFi",
    description: "Qualified Unifi specialists. Audit, design, install. No dead zones.",
    href: "/services/wifi",
  },
];

const teamMembers: { name: string; role: string; bio: string; initials: string; fact?: string; photo?: string }[] = [
  {
    name: "Ian Mackness",
    role: "Founding Fox",
    bio: "Founder and chief visionary, Ian is the driving force behind Fox ITC. He actively engages with customers and is personally invested in making sure every client relationship is the right one.",
    initials: "IM",
    fact: "Represented England and the Royal Navy in Field Hockey.",
  },
  {
    name: "Mark Hutchinson",
    role: "Head of Tech & The Pack",
    bio: "An experienced Network Engineer who joined the Den in 2019. Mark heads up the service team and makes sure the pack are supporting customers properly, and without fuss.",
    initials: "MH",
    fact: "His favourite song is Party in the USA. Don't ask.",
    photo: "/mark.png",
  },
  {
    name: "Steven Thornley",
    role: "Pack Member",
    bio: "Steven completed his apprenticeship in 2022 and joined the Den as a 1st Line Support Cub. He's since grown into a field engineer visiting customers out on the road.",
    initials: "ST",
    photo: "/steven.png",
  },
  {
    name: "Lerato Mputle",
    role: "International Fox",
    bio: "Lerato joined the Pack in 2025, supporting our international customers from South Africa. A brilliant addition to an already great team.",
    initials: "LM",
  },
];

const stats = [
  { value: "98%", label: "Client retention rate" },
  { value: "< 2hr", label: "Average response time" },
  { value: "15+", label: "Years combined experience" },
  { value: "UK-based", label: "Support, always" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_95%_53%_/_0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(222_47%_20%_/_0.5)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-36 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                UK Managed IT Services
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
            >
              IT that{" "}
              <span className="text-primary">just works.</span>
              <br />
              People who{" "}
              <span className="relative inline-block">
                actually care.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <path
                    d="M0 6 Q75 0 150 4 Q225 8 300 2"
                    stroke="hsl(11 97% 55%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
            >
              We're not your typical IT company. We're Fox — a small, straight-talking team who genuinely care about your business. From managed support to cyber security, we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="font-semibold text-base px-8 group w-full sm:w-auto" data-testid="hero-cta-primary">
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="font-semibold text-base px-8 border-white/20 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto" data-testid="hero-cta-secondary">
                  Meet the team
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-background" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-background border-b border-border py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What we do</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Everything your business needs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From keeping the lights on to protecting you from cyber threats — we handle it all so you can focus on what you do best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={service.href}>
                  <Card className="h-full cursor-pointer border-border hover:border-primary/40 hover:shadow-md transition-all group" data-testid={`service-card-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="font-display font-bold text-lg text-secondary mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold">
                        Learn more
                        <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fox */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Fox</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6 leading-tight">
                We're not another faceless IT company
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We built Fox because we were fed up with IT support that felt like a lottery — log a ticket, wait days, get a response that doesn't help. That's not us. When you call Fox, you get a real person who knows your business and actually fixes things.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: <HeartHandshake className="w-5 h-5 text-primary" />, text: "We care about your business as much as you do" },
                  { icon: <Clock className="w-5 h-5 text-primary" />, text: "Fast response times — no waiting days for a callback" },
                  { icon: <Users className="w-5 h-5 text-primary" />, text: "You'll speak to the same people every time" },
                  { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: "Plain English — we don't hide behind jargon" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="outline" className="font-semibold group border-secondary/30">
                  Our story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(25_95%_53%_/_0.2)_0%,_transparent_70%)]" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <p className="font-display font-bold text-3xl text-white mb-2">People first.</p>
                  <p className="text-white/60 text-sm">Because people buy from people.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Rated 5 stars by our clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team section */}
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
              People buy from people
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're a small team and that's intentional. You'll get to know us. We'll get to know your business. That's how good IT support works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <Button variant="outline" className="font-semibold group">
                More about us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Client stories</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">Don't take our word for it.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rebecca T.", role: "Operations Manager, Creative agency", quote: "Fox ITC have become an extension of our office. Response times are next level — issues sorted before they become problems.", stars: 5 },
              { name: "James W.", role: "Managing Director, Professional services", quote: "We moved from a larger IT company and the difference is night and day. We speak to the same people every time. No call centres, no ticket queues.", stars: 5 },
              { name: "Sarah M.", role: "Practice Manager, Healthcare", quote: "Fox sorted our Cyber Essentials in weeks. Todd walked us through everything in plain English. We finally feel like our data is protected properly.", stars: 5 },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-2xl border border-border p-7 flex flex-col"
              >
                <Quote className="w-7 h-7 text-primary/20 mb-4" />
                <p className="text-foreground text-sm leading-relaxed flex-grow mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="flex mb-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="w-3 h-3 text-primary fill-primary" />)}
                    </div>
                    <p className="font-semibold text-secondary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources teaser */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-3xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(25_95%_53%_/_0.15)_0%,_transparent_60%)]" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free tools & guides</p>
                <h2 className="font-display font-bold text-3xl text-white mb-4">Not ready to call yet? Start here.</h2>
                <p className="text-white/70 leading-relaxed">
                  Take our free IT health check, download our SMB guides or check your cyber security score — no email required, no hard sell. Just useful stuff.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link href="/resources#health-check">
                  <Button size="lg" className="w-full font-bold group">
                    Free IT health check
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/resources#guides">
                  <Button size="lg" variant="outline" className="w-full font-bold border-white/20 text-white hover:bg-white/10 hover:text-white group">
                    <Download className="mr-2 w-4 h-4" />
                    Browse free guides
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to switch to IT support that works?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              No sales pitch. Just a conversation. Let's see if Fox is the right fit for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-bold text-base px-10 group" data-testid="cta-banner-btn">
                Start the conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
