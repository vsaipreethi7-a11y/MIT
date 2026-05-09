import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, ClipboardCheck, Headphones, PackageCheck, Ship, Sprout, ArrowRight, ShieldCheck, Globe2, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  component: Services,
});

const SERVICES = [
  { icon: Sprout, t: "Sourcing & Procurement", d: "Direct partnerships with trusted farmers and processors across South India for consistent quality and fair pricing." },
  { icon: ClipboardCheck, t: "Quality Control", d: "Multi-stage testing for purity, moisture, contaminants and uniformity to meet stringent global standards." },
  { icon: PackageCheck, t: "Custom Packaging", d: "Private-label, retail, bulk, and OEM packaging designed precisely for your brand and target market." },
  { icon: Boxes, t: "Warehousing", d: "Hygienic, climate-controlled storage with FIFO inventory management to ensure peak freshness." },
  { icon: Ship, t: "Export Logistics", d: "End-to-end shipping, documentation, and customs handling — delivering seamlessly from door to door." },
  { icon: Headphones, t: "Dedicated Support", d: "A single, dedicated point of contact for orders, samples, compliance, and ongoing aftercare." },
];

const PROCESS = [
  { step: "01", title: "Consultation & Sampling", desc: "We understand your market requirements and provide exact product samples for approval." },
  { step: "02", title: "Sourcing & Processing", desc: "Upon approval, we source premium raw materials and process them under strict hygienic conditions." },
  { step: "03", title: "Quality Audit & Packing", desc: "Every batch undergoes rigorous quality checks before being packed to your precise specifications." },
  { step: "04", title: "Logistics & Delivery", desc: "We handle all export documentation, customs clearance, and secure ocean/air freight to your destination." },
];

const BENEFITS = [
  { icon: ShieldCheck, title: "Risk-Free Compliance", desc: "We manage all FSSAI, APEDA, and phytosanitary certifications so you don't have to." },
  { icon: Globe2, title: "Global Reach", desc: "Established shipping networks ensuring timely delivery to over 20+ countries." },
  { icon: BarChart3, title: "Scalable Solutions", desc: "From pilot batches to multi-container volumes, we scale with your business growth." },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 overflow-hidden">
      <SectionHeading eyebrow="What We Offer" title="End-to-End Export Services." subtitle="We handle every step of the export journey — so you can focus on growing your business with confidence." />
      
      {/* Services Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map(({ icon: Icon, t, d }) => (
          <motion.div 
            key={t}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="glass group rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-light/10 border border-border/50"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner" style={{ background: "var(--gradient-gold)" }}>
              <Icon className="h-8 w-8 text-navy" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-navy">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* The Export Process */}
      <div className="mt-32 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-border -z-10 hidden lg:block"></div>
        <div className="text-center mb-16">
          <SectionHeading eyebrow="How It Works" title="Our Streamlined Process." />
        </div>
        
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {PROCESS.map((p, i) => (
            <motion.div 
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:border-gold-light/50 transition-colors"
            >
              <div className="absolute -top-6 left-6 bg-navy text-gold-light font-display font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center border-4 border-background">
                {p.step}
              </div>
              <h4 className="mt-6 font-display text-xl text-navy">{p.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="mt-32 bg-navy text-cream rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-dark/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="text-gold-light text-sm font-bold uppercase tracking-widest mb-3">The MIT Advantage</div>
            <h2 className="font-display text-4xl leading-tight">Why partner with Mars International?</h2>
            <p className="mt-4 text-cream/80 text-lg">
              We don't just supply products; we integrate with your supply chain to provide reliable, scalable, and risk-free sourcing solutions.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-gold-light font-semibold hover:text-white transition-colors group">
              Discuss Your Requirements <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div 
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <b.icon className="h-8 w-8 text-gold-light mb-4" />
                <h4 className="font-display text-lg font-medium">{b.title}</h4>
                <p className="mt-2 text-sm text-cream/70">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
