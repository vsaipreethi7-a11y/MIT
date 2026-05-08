import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "@/assets/mit-logo.png";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Our Brand & Values — Mars International Trading Company" },
      { name: "description", content: "The MIT brand: rooted in Indian heritage, refined for global trade — symbolising trust, quality and global reach." },
    ],
  }),
  component: Brand,
});

const VALUES = [
  { 
    title: "Integrity", 
    desc: "Honest, transparent business practices.",
  },
  { 
    title: "Quality", 
    desc: "Never compromise on product standards.",
  },
  { 
    title: "Commitment", 
    desc: "We deliver what we promise, on time.",
  },
  { 
    title: "Customer Focus", 
    desc: "Your satisfaction is our priority.",
  }
];

function Brand() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Our Brand Identity" title="A Mark of Trust, Heritage & Global Reach." />
      
      {/* Brand Story Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 grid gap-12 md:grid-cols-2 md:items-center bg-card border border-border p-8 rounded-3xl shadow-[var(--shadow-soft)]"
      >
        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: "var(--gradient-gold)", opacity: 0.25 }} />
          <img src={logo} alt="MIT logo" className="h-80 w-80 object-contain float-slow drop-shadow-xl" />
        </div>
        <div>
          <h3 className="font-display text-3xl text-navy">The Story Behind the MIT Mark</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            Our identity blends three powerful symbols — the <strong>globe</strong> representing our worldwide reach,
            the <strong>green leaf</strong> reflecting our commitment to natural and sustainable sourcing,
            and the <strong>cargo ship</strong> on golden waves embodying our promise of dependable global delivery.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <BrandSwatch label="Heritage Navy" hex="#0E1B3A" cssVar="var(--navy)" />
            <BrandSwatch label="Imperial Gold" hex="#C9A24A" cssVar="var(--gold)" />
            <BrandSwatch label="Light Gold" hex="#E2C781" cssVar="var(--gold-light)" />
            <BrandSwatch label="Leaf Green" hex="#3FA958" cssVar="var(--leaf)" />
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <div className="mt-32">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-gold-dark mb-4">OUR VALUES</div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">Built on Integrity, Driven by Quality.</h2>
          <div className="mt-6 flex justify-center">
            <div className="h-0.5 w-16 bg-gold-dark rounded-full"></div>
          </div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((val, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white border border-border/60 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto h-16 w-16 rounded-full" style={{ background: "linear-gradient(135deg, #E2C781, #C9A24A)" }}></div>
              <h3 className="mt-6 font-display text-xl text-navy">{val.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-24 flex justify-center items-center gap-4"
      >
        <Link to="/contact" className="px-8 py-3.5 bg-gradient-to-r from-[#E2C781] to-[#C9A24A] text-navy font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
          Work With Us
        </Link>
      </motion.div>
    </div>
  );
}

function BrandSwatch({ label, hex, cssVar }: { label: string; hex: string; cssVar: string }) {
  return (
    <div className="rounded-xl border border-border p-3 bg-white/50 backdrop-blur-sm">
      <div className="h-14 w-full rounded-lg shadow-inner" style={{ background: cssVar }} />
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="font-semibold text-navy">{label}</span>
        <span className="text-muted-foreground">{hex}</span>
      </div>
    </div>
  );
}
