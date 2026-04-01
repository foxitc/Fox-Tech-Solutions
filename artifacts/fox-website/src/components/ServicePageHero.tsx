import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServicePageHero({ title, subtitle, description }: ServicePageHeroProps) {
  return (
    <section className="bg-secondary text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{subtitle}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-semibold group">
              Talk to us today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
