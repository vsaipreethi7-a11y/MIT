import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/hero-spices.jpg";
import logo from "@/assets/mit-logo.png";
import exportsImg from "@/assets/exports.jpg";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-semibold text-gradient-gold">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function Home() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-dark backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Global Indian Exporter
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-navy">
              The Essence of <span className="text-gradient-gold">India</span>,
              <br /> Delivered to the World.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Mars International Trading Company exports premium South Indian spices, herbal powders,
              natural supplements and industrial commodities — built on tradition, certified for the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Get Quote Now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/products" className="btn-outline-gold">Explore Products</Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="20+" label="Countries" />
              <Stat value="50+" label="Products" />
              <Stat value="100%" label="Quality" />
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-navy)]">
              <img src={hero} alt="Premium Indian spices on world map" className="h-full w-full object-cover" width={1920} height={1080} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 hidden md:flex items-center gap-3 float-slow">
              <img src={logo} alt="MIT" className="h-14 w-14" />
              <div>
                <div className="font-display text-lg text-navy">Authentic. Pure. Global.</div>
                <div className="text-xs text-muted-foreground">Since farms to ports worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Welcome"
          title="A Trusted Name in Premium Indian Exports"
          subtitle="Rooted in tradition and driven by global standards, we bring the richness of Indian farms and heritage to customers across the world — with an unwavering commitment to quality, sustainability and authenticity."
        />
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Quality Assured", text: "Carefully sourced, hygienically processed and rigorously tested." },
            { icon: Globe2, title: "Global Reach", text: "Reliable exports across Asia, the Middle East, Europe and beyond." },
            { icon: Leaf, title: "Authentic & Natural", text: "Traditional methods preserved with modern processing standards." },
            { icon: Truck, title: "On-Time Delivery", text: "Dependable supply chain with transparent communication." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Icon className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading eyebrow="Product Range" title="Our Signature Exports" subtitle="A curated selection from our portfolio of spices, herbal powders, natural & industrial products." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} to="/products" className="product-card group">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dark">{p.category}</div>
                <div className="mt-1 font-display text-xl text-navy">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-navy">View All Products <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div className="glass rounded-3xl p-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark">Our Vision</span>
            <h3 className="mt-3 font-display text-3xl text-navy">A globally recognised export house from India.</h3>
            <p className="mt-4 text-muted-foreground">
              Delivering authentic Indian products to the world while upholding the highest standards
              of quality and integrity at every step.
            </p>
          </div>
          <div className="glass rounded-3xl p-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark">Our Mission</span>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><Award className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> Promote Indian agricultural and herbal products worldwide.</li>
              <li className="flex gap-3"><Award className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> Ensure consistent quality at competitive global pricing.</li>
              <li className="flex gap-3"><Award className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> Build long-term partnerships with international clients.</li>
              <li className="flex gap-3"><Award className="mt-0.5 h-5 w-5 text-gold-dark shrink-0" /> Expand into new global markets with integrity and reliability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="relative mt-20 overflow-hidden">
        <img src={exportsImg} alt="Cargo ship at sunset" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.235 0.075 264 / 0.92), oklch(0.235 0.075 264 / 0.7))" }} />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center text-cream">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-light">Global Reach</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Connecting Indian Heritage to Global Markets.</h2>
          <p className="mt-5 mx-auto max-w-2xl text-cream/80">
            We serve clients across Asia, the Middle East, Europe and emerging international markets —
            building partnerships rooted in trust, quality, and dependable delivery.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="20+" label="Countries Served" />
            <Stat value="500+" label="Tonnes Shipped" />
            <Stat value="120+" label="B2B Clients" />
            <Stat value="15+" label="Years Combined Expertise" />
          </div>
          <div className="mt-10">
            <Link to="/contact" className="btn-gold">Partner With Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
