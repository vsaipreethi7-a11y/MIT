import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="About Us" title="Bridging Indian Heritage with Global Trade." />
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <img src={about} alt="Indian farmer holding spices" loading="lazy" className="rounded-3xl shadow-[var(--shadow-navy)]" />
          <div>
            <h3 className="font-display text-3xl text-navy">Who We Are</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mars International Trading Company is a dynamic export company based in India, dedicated to
              delivering high-quality agricultural, herbal, and natural products to global markets. We combine
              traditional knowledge with modern standards to bring authentic Indian products to customers worldwide.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Built on the principles of trust, quality and long-term business relationships, we work closely
              with farmers, suppliers and processors to ensure every product meets strict quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 grid gap-10 md:grid-cols-2">
          <div className="glass rounded-3xl p-10">
            <h3 className="font-display text-3xl text-navy">What We Do</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {["Traditional Indian spices and blended podis","Herbal and plant-based powders","Natural supplements & eco-friendly products","Agricultural commodities","Industrial materials including granite"].map(t => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-10">
            <h3 className="font-display text-3xl text-navy">Our Strength</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {["Strong sourcing network from trusted farms","Strict quality control & hygienic processing","Diverse product category capability","Flexible supply tailored to customer needs","Commitment to timely delivery & service"].map(t => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Our Values" title="Built on Integrity, Driven by Quality." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Integrity", d: "Honest, transparent business practices." },
            { t: "Quality", d: "Never compromise on product standards." },
            { t: "Commitment", d: "We deliver what we promise, on time." },
            { t: "Customer Focus", d: "Your satisfaction is our priority." },
          ].map(v => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mx-auto h-12 w-12 rounded-full" style={{ background: "var(--gradient-gold)" }} />
              <h4 className="mt-5 font-display text-xl text-navy">{v.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-gold">Work With Us</Link>
        </div>
      </section>
    </div>
  );
}
