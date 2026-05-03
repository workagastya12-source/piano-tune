import { Phone, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(0,0%,5%) 0%, hsl(0,0%,10%) 60%, hsl(30,10%,12%) 100%)" }}
    >
      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07] bg-accent blur-3xl pointer-events-none" />

      {/* Decorative piano keys top */}
      <div className="absolute top-0 left-0 right-0 flex gap-px h-1.5 opacity-20 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div key={i} className={`flex-1 ${[1,4,6,9,11,13,16,18,21,23,25].includes(i % 14) ? "bg-white/30" : "bg-white/60"}`} />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Ready to Book?</p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Give Your Piano the Attention It Deserves
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          A well-tuned piano is a joy to play and a pleasure to hear. Call Tony today
          for a free chat about what your instrument needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0410498560">
            <Button size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-10 py-6 shadow-2xl shadow-accent/20 gap-2">
              <Phone className="w-5 h-5" />
              Call Tony — 0410 498 560
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/8 font-semibold text-base px-10 py-6 gap-2">
              <Music2 className="w-5 h-5" />
              Book Online
            </Button>
          </a>
        </div>

        <p className="text-white/25 text-xs mt-8">
          Serving Albany Creek · Aspley · Chermside · Everton Park · Bridgeman Downs · and all Brisbane suburbs
        </p>
      </div>
    </section>
  );
}
