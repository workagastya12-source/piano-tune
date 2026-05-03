"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceTypes = [
  "Piano Tuning",
  "Repairs & Regulation",
  "Restoration",
  "Pre-Purchase Inspection",
  "Voicing",
  "Pitch Raise",
  "Not Sure — Need Advice",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", pianoType: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Get in Touch</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book a Service
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Call Tony directly for the fastest response, or fill in the form and he'll be in touch within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "0410 498 560", href: "tel:0410498560", sub: "Best way to reach Tony" },
              { icon: Mail, label: "Email", value: "atuneintime@people.net.au", href: "mailto:atuneintime@people.net.au", sub: "Replies within a few hours" },
              { icon: MapPin, label: "Address", value: "16 Faheys Rd, Albany Creek QLD 4035", href: null, sub: "Mobile service — Tony comes to you" },
              { icon: Clock, label: "Hours", value: "Mon–Fri: 8am – 6pm", href: null, sub: "Sat: 9am – 3pm · Flexible on request" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 p-5 bg-background rounded-2xl border border-border hover:border-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <c.icon className="w-4 h-4 text-foreground/50 group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-sm text-foreground hover:text-accent transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-semibold text-sm text-foreground">{c.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border bg-background h-44 flex items-center justify-center">
              <iframe
                title="A Tune In Time location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d152.9600!3d-27.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150000000000%3A0x0!2s16+Faheys+Rd%2C+Albany+Creek+QLD+4035!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border border-border shadow-sm bg-background">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-14">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Tony will be in touch within a few hours. For urgent enquiries, call directly.
                    </p>
                    <a href="tel:0410498560">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                        <Phone className="w-4 h-4" /> Call 0410 498 560
                      </Button>
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      Bookings & Enquiries
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Your Name *</label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Phone *</label>
                          <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                            placeholder="04xx xxx xxx"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Service Needed *</label>
                          <select name="service" required value={form.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                            <option value="">Select a service…</option>
                            {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Piano Type</label>
                          <input type="text" name="pianoType" value={form.pianoType} onChange={handleChange}
                            placeholder="e.g. Yamaha upright, Kawai grand"
                            className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Message</label>
                        <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                          placeholder="Tell Tony about your piano and what it needs…"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none" />
                      </div>

                      <Button type="submit" size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 py-6 text-base shadow-lg shadow-accent/15">
                        <Send className="w-5 h-5" />
                        Send Enquiry
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Prefer to call?{" "}
                        <a href="tel:0410498560" className="text-accent font-semibold hover:underline">0410 498 560</a>
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
