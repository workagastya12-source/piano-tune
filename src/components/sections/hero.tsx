"use client";

import { Phone, CalendarDays, ChevronDown, Star, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep ebony gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(160deg, hsl(0,0%,5%) 0%, hsl(0,0%,10%) 50%, hsl(30,10%,12%) 100%)",
        }}
      />

      {/* Subtle gold glow top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full opacity-[0.06] bg-[hsl(42,85%,52%)] blur-3xl pointer-events-none" />
      {/* Subtle warm glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] bg-[hsl(42,85%,52%)] blur-3xl pointer-events-none" />

      {/* Decorative vertical piano keys — right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 hidden lg:flex flex-col opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 border-b border-white/10 ${[1,3,5,8,10,12,15,17].includes(i % 12) ? "bg-white/5" : ""}`}
          />
        ))}
      </div>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full" preserveAspectRatio="none"
          style={{ color: "hsl(40,20%,97%)" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 w-full">
        <div className="max-w-2xl">

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-7">
            <Badge className="bg-accent/15 text-accent border-accent/30 text-xs font-semibold px-3 py-1">
              ⭐ 5-Star Rated
            </Badge>
            <Badge className="bg-white/8 text-white/80 border-white/15 text-xs font-semibold px-3 py-1">
              Albany Creek & Brisbane
            </Badge>
            <Badge className="bg-white/8 text-white/80 border-white/15 text-xs font-semibold px-3 py-1">
              20+ Years Experience
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Piano
            <br />
            Deserves to{" "}
            <span className="text-shimmer">Sound Perfect.</span>
          </h1>

          <p className="text-lg text-white/65 leading-relaxed mb-9 max-w-xl">
            Tony brings 20+ years of expertise directly to your home. Whether your piano
            needs a routine tune, a complex repair, or a full restoration — every note
            will ring true again.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="tel:0410498560">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 shadow-2xl shadow-accent/25 gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Tony — 0410 498 560
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/25 text-white hover:bg-white/8 font-semibold text-base px-8 py-6 gap-2"
              >
                <CalendarDays className="w-5 h-5" />
                Book a Tuning
              </Button>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-5 text-white/50 text-sm">
            {["Mobile Service — We Come to You", "All Piano Brands & Types", "Genuine Parts & Strings"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Music className="w-3.5 h-3.5 text-accent" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Floating review card */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 bg-white/6 backdrop-blur-md border border-white/12 rounded-2xl p-5 w-60 shadow-2xl">
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
          </div>
          <p className="text-white/80 text-sm leading-relaxed italic mb-3">
            "Tony tuned our old Steinway beautifully. It sounds like a completely different — and much better — instrument."
          </p>
          <p className="text-accent text-xs font-semibold">— Margaret H., Aspley</p>
          <div className="mt-3 pt-3 border-t border-white/10 text-center">
            <p className="text-white/35 text-xs">Trusted across Brisbane for 20+ years</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
