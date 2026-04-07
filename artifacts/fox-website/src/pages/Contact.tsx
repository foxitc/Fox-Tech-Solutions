import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Contact Fox
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Let's talk.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              No sales pitch. No pressure. Just a conversation about your IT and whether Fox is the right fit. Fill in the form below or give us a call directly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-6">Get in touch directly</h2>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-0.5">Call us</p>
                  <a href="tel:03300581877" className="text-muted-foreground hover:text-primary transition-colors" data-testid="contact-phone">
                    03300 581 877
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-0.5">Email us</p>
                  <a href="mailto:hello@foxitc.co.uk" className="text-muted-foreground hover:text-primary transition-colors" data-testid="contact-email">
                    hello@foxitc.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-0.5">Find us</p>
                  <p className="text-muted-foreground">
                    United Kingdom
                    {/* TODO: Replace with real address */}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-0.5">Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Mon–Fri: 8am – 6pm<br />
                    Out of hours support available for managed clients
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Odoo form embed */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display font-bold text-2xl text-secondary mb-6">Send us a message</h2>
              <div className="rounded-2xl border border-border overflow-hidden bg-card" data-testid="contact-form-container">
                {/*
                  TODO: Replace the src below with your actual Odoo contact form URL.
                  Example: src="https://your-odoo-domain.com/contactus"
                  The form will embed directly from your Odoo instance.
                */}
                <iframe
                  src="https://odoo.example.com/contactus"
                  title="Contact Fox ITC"
                  className="w-full"
                  style={{ height: "640px", border: "none" }}
                  data-testid="odoo-contact-iframe"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                This form is powered by Odoo. Your data is handled securely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
