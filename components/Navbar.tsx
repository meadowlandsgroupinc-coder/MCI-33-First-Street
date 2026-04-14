"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "The Building", href: "/building" },
  { label: "Apartments", href: "/units" },
  { label: "Apply", href: "/apply" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-obsidian/97 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-wide text-platinum-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>33 First Street</span>
              <span className="text-[0.6rem] tracking-[0.22em] text-platinum-dark uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Cornwall, Ontario</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-[0.75rem] tracking-[0.12em] uppercase font-medium transition-colors duration-300 relative group ${pathname === link.href ? "text-platinum-light" : "text-platinum-dark hover:text-platinum-light"}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-blue transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <a href="tel:+19059951234" className="hidden lg:flex items-center gap-2 text-[0.72rem] text-platinum-dark hover:text-platinum-light transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <Phone size={13} className="text-blue" />(905) 995-1234
            </a>
            <Link href="/apply" className="btn-primary text-[0.72rem] py-3 px-5">Apply Now</Link>
          </nav>

          <button className="md:hidden text-platinum-light p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-obsidian/99 backdrop-blur-lg flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="text-center mb-4">
          <p className="font-display text-3xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>33 First Street</p>
          <p className="text-xs tracking-[0.2em] text-platinum-dark uppercase mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Cornwall, Ontario</p>
        </div>
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href}
            className="font-display text-4xl font-light text-platinum-light hover:text-blue-light transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", transitionDelay: `${i * 55}ms` }}>
            {link.label}
          </Link>
        ))}
        <Link href="/apply" className="btn-primary mt-4">Apply Now</Link>
        <a href="tel:+19059951234" className="flex items-center gap-2 text-sm text-platinum-dark mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <Phone size={14} className="text-blue" />(905) 995-1234
        </a>
      </div>
    </>
  );
}
