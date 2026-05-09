import { createFileRoute } from "@tanstack/react-router";
import exportsImg from "@/assets/exports.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/exports")({
  component: Exports,
});

const REGIONS = [
  { r: "Asia", c: ["Singapore", "Malaysia", "Sri Lanka", "Japan"] },
  { r: "Middle East", c: ["UAE", "Saudi Arabia", "Qatar", "Oman"] },
  { r: "Europe", c: ["UK", "Germany", "France", "Netherlands"] },
  { r: "Americas", c: ["USA", "Canada", "Brazil"] },
  { r: "Africa", c: ["South Africa", "Kenya", "Egypt"] },
  { r: "Oceania", c: ["Australia", "New Zealand"] },
];

function Exports() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={exportsImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.235 0.075 264 / 0.92), oklch(0.235 0.075 264 / 0.65))" }} />
        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center text-cream">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-light">Global Exports</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Trusted Across Continents.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/80">
            From the farms of South India to ports across the globe — we deliver authentic Indian products
            with reliability, transparency and care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Where We Ship" title="Markets We Serve" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map(r => (
            <div key={r.r} className="glass rounded-2xl p-6">
              <h3 className="font-display text-2xl text-navy">{r.r}</h3>
              <div className="gold-divider mt-2" />
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                {r.c.map(c => <li key={c} className="rounded-full border border-border bg-secondary px-3 py-1">{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
