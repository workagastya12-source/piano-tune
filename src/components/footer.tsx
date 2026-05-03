import Link from "next/link";
import { Phone, Mail, MapPin, Music2, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Music2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  A Tune In Time
                </p>
                <p className="text-background/50 text-xs tracking-widest uppercase">Piano Tuning & Services</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Professional piano tuning, repairs, and restoration. Serving Albany Creek, Brisbane and surrounds with care and expertise.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
              <span className="text-background/60 text-xs ml-2">5-Star Rated</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-accent mb-5">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-background/70">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Tony" },
                { href: "#testimonials", label: "Customer Reviews" },
                { href: "#contact", label: "Book a Tuning" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-accent mb-5">Contact Tony</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:0410498560" className="hover:text-accent transition-colors font-medium">0410 498 560</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:atuneintime@people.net.au" className="hover:text-accent transition-colors break-all">
                  atuneintime@people.net.au
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>16 Faheys Rd, Albany Creek QLD 4035</span>
              </li>
            </ul>
            <div className="mt-5 text-xs text-background/40">
              <p>Mon–Fri: 8am – 6pm · Sat: 9am – 3pm</p>
            </div>
          </div>
        </div>

        {/* Piano keys decorative bar */}
        <div className="mt-12 flex gap-px overflow-hidden rounded-sm opacity-20">
          {[...Array(28)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${[1,4,6,9,11,13,16,18,21,23,25].includes(i % 14) ? "bg-background/30 h-5" : "bg-background h-8"}`}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/30">
          <p>© {new Date().getFullYear()} A Tune In Time. All rights reserved.</p>
          <p>Albany Creek · Brisbane · QLD, Australia</p>
        </div>
      </div>
    </footer>
  );
}
