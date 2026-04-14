import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wifi, Car, Thermometer, Lock, Zap, Droplets, Package, Wind, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const buildingAmenities = [
  { icon: Thermometer, title: "Heating Included", desc: "Individually controlled heating in every suite — fully included in rent." },
  { icon: Zap, title: "Modern Electrical", desc: "Fully upgraded electrical throughout — new panels, wiring, and fixtures." },
  { icon: Droplets, title: "Water Included", desc: "Water and sewer fully included in monthly rent. No surprise utility bills." },
  { icon: Wifi, title: "Internet Ready", desc: "High-speed internet infrastructure in place. Connect with your preferred provider." },
  { icon: Lock, title: "Secure Entry", desc: "Controlled building access with secure main entrance for tenant safety." },
  { icon: Car, title: "Parking Available", desc: "On-site parking options available — ask us about current availability." },
  { icon: Package, title: "Storage Options", desc: "Additional storage available on-site for select units." },
  { icon: Wind, title: "Ventilation", desc: "Proper ventilation systems throughout — fresh, healthy air in every suite." },
];

const suiteFeatures = [
  "Modern kitchen with updated cabinetry",
  "Refreshed bathroom finishes",
  "New flooring throughout",
  "Large windows with natural light",
  "Generous closet and storage space",
  "Updated lighting fixtures",
  "Freshly painted throughout",
  "New interior doors and hardware",
];

const nearbyPlaces = [
  { category: "Essentials", places: ["Walmart Supercenter — 7 min drive", "FreshCo Grocery — 5 min drive", "Shoppers Drug Mart — 4 min drive", "LCBO — 3 min drive"] },
  { category: "Health & Medical", places: ["Cornwall Community Hospital — 4 min drive", "Medical clinics — nearby", "Pharmacies — walking distance"] },
  { category: "Education", places: ["St. Lawrence College — 8 min drive", "École secondaire publique — nearby", "Elementary schools — close"] },
  { category: "Transit & Access", places: ["Cornwall Transit — at door", "Highway 401 — 5 min drive", "Montreal — 1.5 hr drive", "Ottawa — 1.5 hr drive"] },
];

export default function BuildingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80" alt="Building" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 to-obsidian" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <span className="section-label block mb-4">33 First Street East · Cornwall</span>
            <h1 className="font-display font-light text-platinum-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>The Building</h1>
            <p className="text-lg text-platinum-dark max-w-2xl leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>A fully renovated 13-suite residential building in downtown Cornwall — built to last, managed with care, and designed around the people who call it home.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 px-5 bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <AnimateOnScroll className="md:col-span-3">
              <div className="relative h-80 md:h-[440px] overflow-hidden blue-glow">
                <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85" alt="Exterior" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
                <div className="absolute top-4 left-4"><span className="tag tag-blue">Newly Renovated</span></div>
              </div>
            </AnimateOnScroll>
            <div className="md:col-span-2 flex flex-col gap-4">
              <AnimateOnScroll delay={80} className="flex-1">
                <div className="relative h-52 md:h-full overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80" alt="Suite interior" fill className="object-cover" />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={140} className="flex-1">
                <div className="relative h-52 md:h-full overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80" alt="Kitchen" fill className="object-cover" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll delay={80}>
            <div className="relative h-64 overflow-hidden glass-card mt-4">
              <iframe
                src="https://maps.google.com/maps?layer=c&cbll=45.0173146,-74.7263524&cbp=11,0,0,0,0&output=svembed"
                width="100%" height="100%"
                style={{ border: 0, filter: "brightness(0.8) saturate(0.85)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Street View — 33 First Street East, Cornwall"
                className="absolute inset-0"
              />
              <div className="absolute top-4 left-4 glass-card px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                <span className="text-xs text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>Google Street View · 33 First Street East</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <a href="https://maps.google.com/?q=33+First+Street+East+Cornwall+Ontario" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 glass-card px-3 py-1.5 text-[0.65rem] text-platinum-light hover:text-white transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Open Full View <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 px-5 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="section-label block mb-3">Building Features</span>
                <h2 className="font-display text-5xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Built for <span className="italic">modern living.</span></h2>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {buildingAmenities.map((a, i) => (
              <AnimateOnScroll key={a.title} delay={i * 70}>
                <div className="glass-card p-6 hover-lift h-full">
                  <div className="w-10 h-10 border border-blue/30 bg-blue/10 flex items-center justify-center mb-5">
                    <a.icon size={17} className="text-blue-pale" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-platinum-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{a.title}</h3>
                  <p className="text-xs text-platinum-dark leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{a.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-5 bg-obsidian border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <div className="relative h-[480px] blue-glow">
              <Image src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80" alt="Suite interior" fill className="object-cover" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={130}>
            <span className="section-label block mb-4">Inside Every Suite</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-platinum-light mb-7 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Thoughtfully finished.<br /><span className="italic">Move-in ready.</span></h2>
            <p className="text-sm text-platinum-dark leading-relaxed mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>Every suite at 33 First Street has been professionally updated from top to bottom. No dated finishes, no deferred maintenance — just clean, modern living spaces ready for you.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {suiteFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} className="text-blue-pale mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/units" className="btn-primary">See All 13 Units <ArrowRight size={15} /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 px-5 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="section-label block mb-3">Location</span>
              <h2 className="font-display text-5xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything close. <span className="italic">Nothing missing.</span></h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {nearbyPlaces.map((section, i) => (
              <AnimateOnScroll key={section.category} delay={i * 80}>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-display text-lg font-medium text-platinum-light mb-4 pb-3 border-b border-white/10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{section.category}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {section.places.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        <div className="w-1 h-1 rounded-full bg-blue-pale mt-1.5 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <div className="relative h-72 overflow-hidden glass-card">
              <iframe
                src="https://maps.google.com/maps?q=33+First+Street+East,+Cornwall,+ON&ll=45.0173146,-74.7263524&z=17&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.65) saturate(0.6)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map — 33 First Street East, Cornwall"
                className="absolute inset-0"
              />
              <div className="absolute bottom-4 right-4">
                <a href="https://maps.google.com/?q=33+First+Street+East+Cornwall+Ontario" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 glass-card px-3 py-1.5 text-[0.65rem] text-platinum-light hover:text-white transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Open in Google Maps <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-5 bg-obsidian text-center border-t border-white/5">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl font-light text-platinum-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ready to see it in person?</h2>
          <p className="text-platinum-dark max-w-md mx-auto mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>Book a viewing or apply online. Our team responds within 1 business day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary">Apply Online <ArrowRight size={16} /></Link>
            <Link href="/units" className="btn-outline">View All Units</Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
