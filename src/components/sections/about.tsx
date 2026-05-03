import Image from "next/image";
import { Phone, CheckCircle2, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const qualities = [
  "Fully qualified piano technician with 20+ years hands-on experience",
  "Services all brands — Yamaha, Kawai, Steinway, Bösendorfer, and more",
  "Mobile service — Tony comes to your home, school, or studio",
  "Honest, upfront pricing with no hidden call-out fees",
  "Meticulous attention to detail on every single job",
  "Passionate about music and the instruments that make it",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-accent/20 pointer-events-none" />
            
            {/* Real Photo Replacement */}
            <div className="relative rounded-3xl overflow-hidden bg-secondary border border-border aspect-[4/5] flex flex-col shadow-2xl">
              <Image 
                src="/Tony.png" 
                alt="Tony - A Tune In Time Piano Technician"
                fill
                className="object-cover"
                priority
              />
              
              {/* Branding Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <p className="text-white text-sm font-medium">Tony — A Tune In Time</p>
                <p className="text-xs text-white/80 mt-1">Albany Creek, Brisbane</p>
              </div>

              {/* Gold accent bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-foreground text-background rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-playfair)" }}>20+</p>
              <p className="text-xs text-background/70 mt-0.5">Years of Excellence</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Meet Your Technician</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hi, I'm Tony.
              <br />
              <span className="text-muted-foreground text-3xl">I Love Pianos.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                For over two decades, I've been bringing pianos back to their best — one
                instrument at a time. What started as a passion for music grew into a
                career built on precision, patience, and genuine care for every piano I touch.
              </p>
              <p>
                I work across Albany Creek, Brisbane, and the surrounding suburbs, coming
                directly to your home, school, or studio. No workshop drop-offs, no waiting
                weeks — just expert service at your convenience.
              </p>
              <p>
                Whether it's a quick annual tune, a tricky repair, or a full restoration of
                a family heirloom, I treat every piano as if it were my own. Because I know
                how much these instruments mean to the people who own them.
              </p>
            </div>

            {/* Qualities checklist */}
            <ul className="space-y-2.5 mb-8">
              {qualities.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {q}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0410498560">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 px-7">
                  <Phone className="w-4 h-4" /> Call Tony Now
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-border hover:border-accent/50 gap-2 px-7">
                  <Music2 className="w-4 h-4" /> Book a Service
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
