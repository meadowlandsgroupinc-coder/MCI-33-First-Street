import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building2, Shield, Star, CheckCircle2, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const highlights = [
  { number: "13", label: "Residential Suites" },
  { number: "DT", label: "Downtown Cornwall" },
  { number: "2025", label: "Newly Renovated" },
  { number: "MGI", label: "Professionally Managed" },
];

const keyFeatures = [
  { icon: Building2, title: "Modern Renovated Suites", desc: "Every unit professionally updated — new finishes, modern kitchens, fresh bathrooms, new flooring throughout." },
  { icon: MapPin, title: "Prime Downtown Location", desc: "Steps from the St. Lawrence River, shopping, dining, and transit on First Street." },
  { icon: Shield, title: "Professionally Managed", desc: "Managed by Meadowlands Group Inc. — responsive, accountable, and owner-operated since 2014." },
  { icon: Star, title: "Heat & Water Included", desc: "No surprises on your monthly costs. Heat and water are fully included in every suite." },
];

const nearbyItems = [
  "St. Lawrence River — 5 min walk",
  "Downtown Cornwall shops — steps away",
  "Cornwall Community Hospital — 4 min drive",
  "St. Lawrence College — 8 min drive",
  "Brookdale Ave shopping — 6 min drive",
  "Highway 401 access — 5 min drive",
  "Cornwall Transit — at your doorstep",
  "Restaurants & cafés — walking distance",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85" alt="33 First Street East Cornwall" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/65 to-obsidian/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/30 to-transparent" />
        </div>

        <div className="absolute top-28 right-5 md:right-10 z-10 hidden sm:block">
          <div className="glass-card px-5 py-3 flex items-center gap-2">
            <MapPin size={13} className="text-blue" />
            <span className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>33 First Street East, Cornwall ON</span>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-7 animate-fade-in" style={{ animationFillMode: "both" }}>
              <div className="h-px w-10 bg-blue" />
              <span className="section-label">Premium Apartments · Cornwall, Ontario</span>
            </div>
            <h1 className="font-display font-light leading-[1.0] text-platinum-light mb-6 animate-fade-up hero-title"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 6rem)", animationFillMode: "both", animationDelay: "120ms" }}>
              Home Reimagined<br />on <span className="italic text-shimmer">First Street.</span>
            </h1>
            <p className="text-base text-platinum-dark leading-relaxed max-w-lg mb-10 animate-fade-up"
              style={{ fontFamily: "'Outfit', sans-serif", animationFillMode: "both", animationDelay: "260ms" }}>
              13 thoughtfully renovated suites in the heart of downtown Cornwall. Modern finishes, heat and water included, professional management, and a location that puts everything within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12" style={{ animationFillMode: "both", animationDelay: "380ms" }}>
              <Link href="/units" className="btn-primary">View All 13 Units <ArrowRight size={16} /></Link>
              <Link href="/apply" className="btn-outline">Apply Online</Link>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationFillMode: "both", animationDelay: "480ms" }}>
              {["Heat & Water Included", "No Hidden Fees", "Professionally Managed"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-blue-pale" />
                  <span className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-light py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
          {highlights.map((h, i) => (
            <AnimateOnScroll key={h.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center md:px-8 py-3">
                <span className="font-display font-light text-5xl md:text-6xl text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{h.number}</span>
                <span className="text-[0.68rem] tracking-[0.15em] text-platinum-dark uppercase mt-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{h.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* BUILDING STREET VIEW */}
      <section className="py-24 px-5 bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="section-label block mb-3">The Building</span>
              <h2 className="font-display text-5xl md:text-6xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A landmark address<br /><span className="italic">in downtown Cornwall.</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="relative h-[420px] md:h-[520px] overflow-hidden mb-4 blue-glow">
              <Image src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=85" alt="33 First Street exterior" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              <div className="absolute bottom-6 left-6 glass-card px-5 py-3">
                <p className="font-display text-lg text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>33 First Street East</p>
                <p className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Cornwall, Ontario K6H 1K5</p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <AnimateOnScroll delay={80} className="md:col-span-2">
              <div className="relative h-64 md:h-72 overflow-hidden glass-card">
                <iframe
                  src="https://maps.google.com/maps?layer=c&cbll=45.0173146,-74.7263524&cbp=11,0,0,0,0&output=svembed"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "brightness(0.85) saturate(0.9)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Street View — 33 First Street East, Cornwall"
                  className="absolute inset-0"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 glass-card px-3 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                  <span className="text-[0.65rem] text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>Street View · First Street East</span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={140}>
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80" alt="Building exterior" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={100}>
            <div className="mt-4 relative h-52 overflow-hidden glass-card">
              <iframe
                src="https://maps.google.com/maps?q=33+First+Street+East,+Cornwall,+ON&ll=45.0173146,-74.7263524&z=17&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) saturate(0.6)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map — 33 First Street East, Cornwall"
                className="absolute inset-0"
              />
              <div className="absolute bottom-3 right-3">
                <a href="https://maps.google.com/?q=33+First+Street+East+Cornwall+Ontario" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 glass-card px-3 py-1.5 text-[0.65rem] text-platinum-light hover:text-white transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Open in Maps <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 px-5 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="section-label block mb-3">Why 33 First</span>
              <h2 className="font-display text-5xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything you need.<br /><span className="italic">Nothing you don&apos;t.</span></h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyFeatures.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 90}>
                <div className="glass-card p-7 hover-lift h-full">
                  <div className="w-11 h-11 border border-blue/30 bg-blue/10 flex items-center justify-center mb-5">
                    <f.icon size={18} className="text-blue-pale" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-platinum-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{f.title}</h3>
                  <p className="text-sm text-platinum-dark leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBOURHOOD */}
      <section className="py-24 px-5 bg-obsidian border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <span className="section-label block mb-4">The Neighbourhood</span>
            <h2 className="font-display text-5xl font-light text-platinum-light mb-7 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Downtown Cornwall<br /><span className="italic">at your doorstep.</span>
            </h2>
            <p className="text-sm text-platinum-dark leading-relaxed mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              33 First Street places you at the centre of Cornwall&apos;s most walkable district — steps from the St. Lawrence River waterfront, close to all essentials, and connected to everything the city offers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {nearbyItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                  <span className="text-sm text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/building" className="btn-outline">Explore the Building <ArrowRight size={15} /></Link>
          </AnimateOnScroll>
          <AnimateOnScroll delay={130}>
            <div className="relative h-[460px] blue-glow">
              <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80" alt="Downtown Cornwall" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
              <div className="absolute bottom-5 left-5 glass-card px-4 py-3">
                <p className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Downtown Cornwall · St. Lawrence Waterfront</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* UNITS CTA */}
      <section className="py-20 px-5 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="section-label block mb-4">Available Now</span>
            <h2 className="font-display text-5xl font-light text-platinum-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>13 suites. <span className="italic">Find yours.</span></h2>
            <p className="text-platinum-dark max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              1-bedroom and 2-bedroom suites across three floors. Heat and water included in all units. Move-in ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/units" className="btn-primary">Browse All 13 Units <ArrowRight size={16} /></Link>
              <Link href="/apply" className="btn-outline">Apply Online</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
