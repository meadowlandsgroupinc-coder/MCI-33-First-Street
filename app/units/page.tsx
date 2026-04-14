import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Bath, Maximize2, CheckCircle2, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const units = [
  { id:"101", type:"1 Bedroom", floor:"1st Floor", beds:1, baths:1, sqft:"580 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", features:["Ground floor — easy access","Open concept living/kitchen","Updated kitchen with new cabinetry","Modern bathroom","Large windows — natural light"] },
  { id:"102", type:"1 Bedroom", floor:"1st Floor", beds:1, baths:1, sqft:"595 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", features:["Ground floor unit","Refreshed kitchen and bath","New flooring throughout","Generous closet space","Updated fixtures"] },
  { id:"103", type:"2 Bedroom", floor:"1st Floor", beds:2, baths:1, sqft:"800 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", features:["Two generous bedrooms","Open concept living area","Full updated bathroom","Modern kitchen cabinetry","Large windows throughout"] },
  { id:"104", type:"2 Bedroom", floor:"1st Floor", beds:2, baths:1, sqft:"820 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80", features:["Spacious 2-bedroom layout","Freshly painted throughout","Updated kitchen and bath","New interior doors & hardware","Ample in-suite storage"] },
  { id:"201", type:"1 Bedroom", floor:"2nd Floor", beds:1, baths:1, sqft:"580 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80", features:["Second floor — elevated views","Modern kitchen update","Refreshed bathroom","New flooring","Natural light — east exposure"] },
  { id:"202", type:"1 Bedroom", floor:"2nd Floor", beds:1, baths:1, sqft:"590 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", features:["Quiet interior-facing unit","Updated kitchen & bath","New flooring throughout","Generous closet storage","Updated lighting"] },
  { id:"203", type:"2 Bedroom", floor:"2nd Floor", beds:2, baths:1, sqft:"810 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", features:["Two well-proportioned bedrooms","Open living & dining area","Updated kitchen with storage","Full bathroom","Second floor privacy"] },
  { id:"204", type:"2 Bedroom", floor:"2nd Floor", beds:2, baths:1, sqft:"830 sq ft", status:"Available", statusTag:"tag-green", available:"Immediately", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", features:["Largest 2BR on the floor","Oversized living room","Modern kitchen","Updated bathroom","Bright natural light — south facing"] },
  { id:"205", type:"1 Bedroom", floor:"2nd Floor", beds:1, baths:1, sqft:"600 sq ft", status:"Coming Soon", statusTag:"tag-gold", available:"Spring 2026", image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80", features:["Corner unit — extra windows","Bright & airy layout","Updated finishes","Modern kitchen","Good closet storage"] },
  { id:"301", type:"1 Bedroom", floor:"3rd Floor", beds:1, baths:1, sqft:"580 sq ft", status:"Coming Soon", statusTag:"tag-gold", available:"Spring 2026", image:"https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80", features:["Top floor — quiet & private","Elevated views","Updated kitchen and bath","New flooring","Maximum natural light"] },
  { id:"302", type:"1 Bedroom", floor:"3rd Floor", beds:1, baths:1, sqft:"585 sq ft", status:"Coming Soon", statusTag:"tag-gold", available:"Spring 2026", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", features:["Top floor privacy","Compact & efficient layout","Updated finishes throughout","Modern kitchen","Good natural light"] },
  { id:"303", type:"2 Bedroom", floor:"3rd Floor", beds:2, baths:1, sqft:"815 sq ft", status:"Coming Soon", statusTag:"tag-gold", available:"Spring 2026", image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", features:["Top floor 2-bedroom","Quiet and private","Updated kitchen & bath","Open living area","Bright — panoramic exposure"] },
  { id:"304", type:"2 Bedroom", floor:"3rd Floor", beds:2, baths:1, sqft:"840 sq ft", status:"Coming Soon", statusTag:"tag-gold", available:"Spring 2026", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", features:["Largest suite in the building","Two spacious bedrooms","Top floor views","Full modern kitchen","Premium finish throughout"] },
];

const available = units.filter((u) => u.status === "Available").length;
const comingSoon = units.filter((u) => u.status === "Coming Soon").length;

const whatIsIncluded = ["Heat included in rent","Water & sewer included","On-site property management","24-hour maintenance contact","Building snow removal","Garbage & recycling service"];

export default function UnitsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80" alt="Units" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 to-obsidian" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <span className="section-label block mb-4">33 First Street East · Cornwall</span>
            <h1 className="font-display font-light text-platinum-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              All 13<br /><span className="italic">Apartments</span>
            </h1>
            <p className="text-lg text-platinum-dark max-w-2xl leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>1-bedroom and 2-bedroom suites across three floors. Heat and water included. Professionally managed by Meadowlands Group Inc.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2"><div className="dot-available" /><span className="text-sm text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}><strong>{available}</strong> Available Now</span></div>
              <div className="flex items-center gap-2"><div className="dot-soon" /><span className="text-sm text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}><strong>{comingSoon}</strong> Coming Soon</span></div>
              <span className="text-sm text-platinum-dark hidden sm:inline" style={{ fontFamily: "'Outfit', sans-serif" }}>· 13 total suites · 3 floors</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 px-5 bg-obsidian">
        <div className="max-w-6xl mx-auto flex flex-col gap-7">
          {units.map((unit, i) => (
            <AnimateOnScroll key={unit.id} delay={Math.min(i * 45, 350)}>
              <div className="glass-card overflow-hidden hover-lift">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className={`relative h-56 md:h-auto md:col-span-2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image src={unit.image} alt={`Unit ${unit.id}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className={`tag ${unit.statusTag}`}>{unit.status}</span>
                      <span className="tag tag-platinum">{unit.floor}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="font-display text-2xl font-medium text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Unit {unit.id}</span>
                    </div>
                  </div>
                  <div className={`p-6 md:p-9 flex flex-col justify-center md:col-span-3 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="section-label">{unit.floor}</span>
                      <span className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>· {unit.status === "Available" ? "Move-in: " : "Available: "}{unit.available}</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-platinum-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{unit.type}</h2>
                    <div className="flex flex-wrap items-center gap-5 mb-4">
                      <span className="flex items-center gap-1.5 text-sm text-platinum-dark"><Bed size={13} className="text-blue" /><span style={{ fontFamily: "'Outfit', sans-serif" }}>{unit.beds} Bed</span></span>
                      <span className="flex items-center gap-1.5 text-sm text-platinum-dark"><Bath size={13} className="text-blue" /><span style={{ fontFamily: "'Outfit', sans-serif" }}>{unit.baths} Bath</span></span>
                      <span className="flex items-center gap-1.5 text-sm text-platinum-dark"><Maximize2 size={13} className="text-blue" /><span style={{ fontFamily: "'Outfit', sans-serif" }}>{unit.sqft}</span></span>
                    </div>
                    <div className="divider-platinum mb-4" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {unit.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 size={11} className="text-blue-pale mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="tag tag-blue text-[0.58rem]">Heat Included</span>
                      <span className="tag tag-blue text-[0.58rem]">Water Included</span>
                      <span className="tag tag-platinum text-[0.58rem]">Parking Available</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/apply?unit=${unit.id}`} className="btn-primary text-[0.75rem] py-3 px-5">
                        {unit.status === "Available" ? "Apply Now" : "Join Waitlist"} <ArrowRight size={13} />
                      </Link>
                      <a href="tel:+19059951234" className="btn-outline text-[0.75rem] py-3 px-5 flex items-center gap-2"><Phone size={13} />Call to Inquire</a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 bg-navy border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="section-label block mb-3">What&apos;s Included</span>
              <h2 className="font-display text-4xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>No surprises. <span className="italic">Just value.</span></h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {whatIsIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-blue/30 bg-blue/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-blue-pale" />
                    </div>
                    <span className="text-sm text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="divider-platinum mt-10 mb-8" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="text-sm text-platinum-dark max-w-md leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>Tenant pays: hydro (electricity). Heat, water, and management are all included in your monthly rent.</p>
                <Link href="/apply" className="btn-primary flex-shrink-0">Apply Online <ArrowRight size={15} /></Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-5 bg-obsidian border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="section-label block mb-3">Common Questions</span>
              <h2 className="font-display text-4xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What renters ask us</h2>
            </div>
          </AnimateOnScroll>
          <div className="flex flex-col gap-4">
            {[
              { q: "What is required to apply?", a: "A completed inquiry form, government-issued ID, proof of income (pay stubs, employment letter, or bank statements), and two references. We conduct a standard credit check." },
              { q: "Is there a lease term?", a: "We offer 12-month lease terms. After the initial term, leases convert to month-to-month in accordance with Ontario's Residential Tenancies Act." },
              { q: "How is maintenance handled?", a: "Maintenance requests are handled by Meadowlands Group's on-call team. Urgent issues addressed within 24 hours; non-urgent within 3–5 business days." },
              { q: "Are pets allowed?", a: "Requests are considered on a case-by-case basis. Indicate your pet situation on the inquiry form and we will review with our management team." },
              { q: "Is hydro (electricity) included?", a: "Electricity is the tenant's responsibility. Heat and water are fully included in your monthly rent." },
              { q: "Can I schedule a viewing before applying?", a: "Absolutely. Submit the inquiry form or call (905) 995-1234 and we will arrange an in-person or virtual viewing at your convenience." },
              { q: "What is first and last month?", a: "A first and last month's rent deposit is required upon lease signing, as per Ontario's Residential Tenancies Act." },
            ].map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 50}>
                <div className="glass-card p-6">
                  <p className="font-display text-lg font-medium text-platinum-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{faq.q}</p>
                  <p className="text-sm text-platinum-dark leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={100}>
            <div className="text-center mt-10">
              <p className="text-platinum-dark text-sm mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>Have a question not answered above?</p>
              <Link href="/apply" className="btn-primary">Contact Our Leasing Team <ArrowRight size={15} /></Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
