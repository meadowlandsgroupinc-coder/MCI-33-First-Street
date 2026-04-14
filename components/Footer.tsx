import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="bg-navy py-14 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-2">Ready to make your move?</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your new home is waiting.</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/units" className="btn-primary">View Apartments <ArrowRight size={15} /></Link>
            <Link href="/apply" className="btn-outline">Apply Now</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl font-semibold text-platinum-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>33 First Street</p>
          <p className="text-[0.62rem] tracking-[0.22em] text-platinum-dark uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Cornwall, Ontario</p>
          <p className="text-sm text-platinum-dark leading-relaxed mb-7" style={{ fontFamily: "'Outfit', sans-serif" }}>Premium apartment living in the heart of downtown Cornwall. Professionally managed by Meadowlands Group Inc.</p>
          <div className="divider-platinum mb-6" />
          <div className="flex flex-col gap-3">
            <a href="tel:+19059951234" className="flex items-center gap-3 text-sm text-platinum-dark hover:text-platinum-light transition-colors group" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <Phone size={13} className="text-blue group-hover:text-blue-light transition-colors" />(905) 995-1234
            </a>
            <a href="mailto:mirzacapitalinvestments@gmail.com" className="flex items-center gap-3 text-sm text-platinum-dark hover:text-platinum-light transition-colors group" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <Mail size={13} className="text-blue group-hover:text-blue-light transition-colors" />mirzacapitalinvestments@gmail.com
            </a>
            <a href="https://maps.google.com/?q=33+First+Street+East+Cornwall+Ontario" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-platinum-dark hover:text-platinum-light transition-colors group" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <MapPin size={13} className="text-blue group-hover:text-blue-light transition-colors mt-0.5" />
              <span>33 First Street East<br />Cornwall, ON K6H 1K5</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] text-blue-pale uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[{ label: "The Building", href: "/building" }, { label: "All 13 Apartments", href: "/units" }, { label: "Apply Online", href: "/apply" }].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-platinum-dark hover:text-platinum-light transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] text-blue-pale uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Location</h4>
          <p className="text-sm text-platinum-dark leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Located in the heart of downtown Cornwall — steps from the St. Lawrence River, shops, restaurants, and transit on First Street.</p>
          <a href="https://maps.google.com/?q=33+First+Street+East+Cornwall+Ontario" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-blue-pale hover:text-blue-light transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get Directions <ExternalLink size={11} />
          </a>
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-platinum-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Managed by</p>
            <p className="text-sm text-platinum-dark font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>Meadowlands Group Inc.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>© {new Date().getFullYear()} 33 First Street · Managed by Meadowlands Group Inc.</p>
          <p className="text-xs text-platinum-dark/50" style={{ fontFamily: "'Outfit', sans-serif" }}>Cornwall, Ontario · Canada</p>
        </div>
      </div>
    </footer>
  );
}
