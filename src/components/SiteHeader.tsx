import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mit-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/exports", label: "Exports" },
  { to: "/certificates", label: "Certificates" },
  { to: "/career", label: "Career" },
  { to: "/brand", label: "Brand" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Mars International Trading" className="h-20 w-20 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-navy">Mars International</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-dark">Trading Company</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition hover:text-navy"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-navy bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden btn-gold lg:inline-flex !py-2.5 !px-5 text-sm">Get Quote</Link>
        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur">
          <div className="flex flex-col p-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-navy">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-3 justify-center">Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
