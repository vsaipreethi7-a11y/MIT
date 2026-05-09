import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/products")({
  component: Products,
});

const CATS = ["All", "Spices", "Herbal", "Agro", "Industrial"] as const;

function Products() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Our Catalogue" title="Premium Products, Export-Ready." subtitle="From traditional South Indian podis to herbal powders and industrial granite — every product is sourced, processed and packed to international standards." />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? "btn-gold !py-2" : "border border-border text-foreground/70 hover:border-gold hover:text-navy"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map(p => (
          <article key={p.slug} className="product-card group flex flex-col">
            <div className="aspect-square overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dark">{p.category}</div>
              <h3 className="mt-1 font-display text-xl text-navy">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.short}</p>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                {p.features.slice(0, 2).map(f => <li key={f}>• {f}</li>)}
              </ul>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-dark">
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Detailed descriptions */}
      <section className="mt-24">
        <SectionHeading eyebrow="Product Details" title="Crafted with Care, Backed by Quality." align="center" />
        <div className="mt-12 space-y-10">
          {PRODUCTS.map((p, i) => (
            <div key={p.slug} className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={p.image} alt={p.name} loading="lazy" className="rounded-2xl shadow-[var(--shadow-soft)]" />
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold-dark">{p.category}</span>
                <h3 className="mt-2 font-display text-3xl text-navy">{p.name}</h3>
                <div className="gold-divider mt-3" />
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {p.features.map(f => <li key={f}>✓ {f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
