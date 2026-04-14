"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const unitOptions = [
  "Unit 101 — 1 Bedroom, 1st Floor",
  "Unit 102 — 1 Bedroom, 1st Floor",
  "Unit 103 — 2 Bedroom, 1st Floor",
  "Unit 104 — 2 Bedroom, 1st Floor",
  "Unit 201 — 1 Bedroom, 2nd Floor",
  "Unit 202 — 1 Bedroom, 2nd Floor",
  "Unit 203 — 2 Bedroom, 2nd Floor",
  "Unit 204 — 2 Bedroom, 2nd Floor",
  "Unit 205 — 1 Bedroom, 2nd Floor",
  "Unit 301 — 1 Bedroom, 3rd Floor",
  "Unit 302 — 1 Bedroom, 3rd Floor",
  "Unit 303 — 2 Bedroom, 3rd Floor",
  "Unit 304 — 2 Bedroom, 3rd Floor",
  "Not sure yet — show me all options",
];

const hearAboutOptions = ["Google Search","Social Media","Referral / Word of Mouth","Facebook Marketplace","Kijiji","Signage / Walk-by","Other"];

function ApplyForm() {
  const searchParams = useSearchParams();
  const unitParam = searchParams.get("unit");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", unit:"", moveDate:"", occupants:"", employed:"", income:"", hear:"", message:"", pets:"No", smoking:"No" });

  useEffect(() => {
    if (unitParam) {
      const match = unitOptions.find((u) => u.includes(`Unit ${unitParam}`));
      if (match) setForm((prev) => ({ ...prev, unit: match }));
    }
  }, [unitParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again or call us directly.");
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "bg-obsidian border border-white/10 text-platinum-light placeholder:text-platinum-dark/40 px-4 py-3 text-sm focus:outline-none focus:border-blue/50 transition-colors w-full";
  const selectClass = "bg-obsidian border border-white/10 text-platinum-light px-4 py-3 text-sm focus:outline-none focus:border-blue/50 transition-colors appearance-none w-full";
  const labelClass = "text-[0.62rem] tracking-[0.15em] text-blue-pale uppercase";

  return (
    <div className="glass-card p-7 md:p-12">
      {submitted ? (
        <div className="flex flex-col items-center text-center py-16 gap-6">
          <div className="w-16 h-16 border border-blue/40 bg-blue/10 flex items-center justify-center">
            <CheckCircle2 size={32} className="text-blue-pale" />
          </div>
          <h2 className="font-display text-3xl font-light text-platinum-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Inquiry Sent</h2>
          <p className="text-platinum-dark max-w-sm leading-relaxed text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Thank you, <strong className="text-platinum-light">{form.firstName}</strong>. We&apos;ve received your inquiry and sent a confirmation to <strong className="text-platinum-light">{form.email}</strong>. Our leasing team will follow up within 1–2 business days.
          </p>
          <div className="glass-card px-6 py-4 mt-2 text-center">
            <p className="text-xs text-platinum-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Questions in the meantime?</p>
            <a href="tel:+19059951234" className="text-sm text-blue-pale hover:text-blue-light transition-colors flex items-center gap-2 justify-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <Phone size={13} />(905) 995-1234
            </a>
          </div>
          <button onClick={() => { setSubmitted(false); setForm({ firstName:"",lastName:"",email:"",phone:"",unit:"",moveDate:"",occupants:"",employed:"",income:"",hear:"",message:"",pets:"No",smoking:"No" }); }} className="btn-outline mt-2">Submit Another Inquiry</button>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-platinum-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Rental Inquiry Form</h2>
          <p className="text-sm text-platinum-dark mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>We respond within 1–2 business days. Fields marked * are required.</p>

          {error && (
            <div className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 px-4 py-3 mb-6">
              <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-300" style={{ fontFamily: "'Outfit', sans-serif" }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>First Name *</label>
                <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Jane" className={inputClass} style={{ fontFamily: "'Outfit', sans-serif" }} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Last Name *</label>
                <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Smith" className={inputClass} style={{ fontFamily: "'Outfit', sans-serif" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Email Address *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" className={inputClass} style={{ fontFamily: "'Outfit', sans-serif" }} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Phone Number *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(613) 000-0000" className={inputClass} style={{ fontFamily: "'Outfit', sans-serif" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Preferred Unit *</label>
                <select name="unit" required value={form.unit} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="" disabled>Select a unit…</option>
                  {unitOptions.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Desired Move-In Date *</label>
                <input type="date" name="moveDate" required value={form.moveDate} onChange={handleChange} className={inputClass} style={{ fontFamily: "'Outfit', sans-serif" }} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Number of Occupants *</label>
                <select name="occupants" required value={form.occupants} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="" disabled>Select…</option>
                  {["1 person","2 people","3 people","4 people","Other"].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Employment Status *</label>
                <select name="employed" required value={form.employed} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="" disabled>Select…</option>
                  {["Employed Full-Time","Employed Part-Time","Self-Employed","Retired","Student","Other"].map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Gross Monthly Income</label>
                <select name="income" value={form.income} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="">Prefer not to say</option>
                  {["Under $2,000/mo","$2,000–$3,000/mo","$3,000–$4,500/mo","$4,500–$6,000/mo","$6,000+/mo"].map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>How Did You Hear About Us?</label>
                <select name="hear" value={form.hear} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="">Select…</option>
                  {hearAboutOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Pets?</label>
                <select name="pets" value={form.pets} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="No">No</option>
                  <option value="Yes — 1 cat">Yes — 1 cat</option>
                  <option value="Yes — 1 dog (small)">Yes — 1 dog (small)</option>
                  <option value="Yes — other">Yes — other (explain below)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Smoker?</label>
                <select name="smoking" value={form.smoking} onChange={handleChange} className={selectClass} style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} style={{ fontFamily: "'Outfit', sans-serif" }}>Additional Notes</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                placeholder="Tell us anything else about your situation, timeline, or questions about the building…"
                className={`${inputClass} resize-none`} style={{ fontFamily: "'Outfit', sans-serif" }} />
            </div>
            <div className="divider-platinum" />
            <p className="text-xs text-platinum-dark leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>By submitting this form you consent to Meadowlands Group Inc. contacting you regarding your rental inquiry. Your information will not be shared with third parties.</p>
            <button type="submit" disabled={loading} className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? <span style={{ fontFamily: "'Outfit', sans-serif" }}>Sending…</span> : <><span>Submit Inquiry</span><Send size={15} /></>}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default function ApplyPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-5 bg-obsidian">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <span className="section-label block mb-4">33 First Street East</span>
            <h1 className="font-display font-light text-platinum-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>Apply to Rent</h1>
            <p className="text-base text-platinum-dark max-w-xl leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>Complete the inquiry below and our leasing team will follow up within 1–2 business days to arrange a viewing and discuss your application.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-20 px-5 bg-obsidian">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <AnimateOnScroll>
              <div className="glass-card p-7 mb-5">
                <h3 className="font-display text-xl font-medium text-platinum-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Leasing Office</h3>
                <div className="flex flex-col gap-5">
                  <a href="tel:+19059951234" className="flex items-start gap-4 group">
                    <div className="w-9 h-9 border border-blue/30 bg-blue/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue/60 transition-colors"><Phone size={14} className="text-blue-pale" /></div>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.15em] text-blue-pale uppercase mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Phone</p>
                      <p className="text-sm text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>(905) 995-1234</p>
                    </div>
                  </a>
                  <a href="mailto:mirzacapitalinvestments@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-9 h-9 border border-blue/30 bg-blue/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue/60 transition-colors"><Mail size={14} className="text-blue-pale" /></div>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.15em] text-blue-pale uppercase mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Email</p>
                      <p className="text-sm text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>mirzacapitalinvestments@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-blue/30 bg-blue/10 flex items-center justify-center flex-shrink-0"><MapPin size={14} className="text-blue-pale" /></div>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.15em] text-blue-pale uppercase mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Address</p>
                      <p className="text-sm text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>33 First Street East<br />Cornwall, ON K6H 1Y3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-blue/30 bg-blue/10 flex items-center justify-center flex-shrink-0"><Clock size={14} className="text-blue-pale" /></div>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.15em] text-blue-pale uppercase mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Response Hours</p>
                      <p className="text-sm text-platinum-light" style={{ fontFamily: "'Outfit', sans-serif" }}>Mon–Fri: 9:00 AM – 6:00 PM</p>
                      <p className="text-xs text-platinum-dark mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>Sat: 10:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-7">
                <h3 className="font-display text-xl font-medium text-platinum-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What Happens Next</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { step:"01", title:"Submit Inquiry", desc:"Complete the form. We review every submission personally." },
                    { step:"02", title:"We Follow Up", desc:"Expect a call or email within 1–2 business days." },
                    { step:"03", title:"Book a Viewing", desc:"In-person or virtual — at your convenience." },
                    { step:"04", title:"Full Application", desc:"References, credit check, and employment verification." },
                    { step:"05", title:"Sign & Move In", desc:"First & last month, sign lease, receive your keys." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4">
                      <span className="font-display text-2xl font-light text-blue/40 flex-shrink-0 w-7" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.step}</span>
                      <div>
                        <p className="text-sm font-medium text-platinum-light mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.title}</p>
                        <p className="text-xs text-platinum-dark leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="divider-platinum mt-7 mb-5" />
                <Link href="/units" className="flex items-center gap-2 text-xs text-blue-pale hover:text-blue-light transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  View all 13 units <ArrowRight size={12} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-3">
            <AnimateOnScroll delay={100}>
              <Suspense fallback={<div className="glass-card p-12 text-center text-platinum-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Loading form…</div>}>
                <ApplyForm />
              </Suspense>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
