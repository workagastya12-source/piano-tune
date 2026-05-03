import { Music2, Wrench, Sparkles, Search, Volume2, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Music2,
    title: "Piano Tuning",
    desc: "Regular tuning keeps your piano at concert pitch (A440) and protects the instrument's long-term health. Tony tunes all upright and grand pianos to the highest standard.",
    detail: "Recommended every 6–12 months",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Repairs & Regulation",
    desc: "Broken strings, sticky keys, worn hammers, faulty pedals — Tony diagnoses and repairs all mechanical issues, restoring your piano's playability and touch.",
    detail: "All brands & ages",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Restoration",
    desc: "Bring a beloved heirloom back to life. Full restorations include restringing, new hammer felts, key recovering, and cabinet refinishing — transforming old pianos into treasures.",
    detail: "Uprights & grands",
    highlight: false,
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspection",
    desc: "Thinking of buying a second-hand piano? Tony's thorough inspection reveals hidden issues before you commit, saving you from costly surprises.",
    detail: "Detailed written report",
    highlight: false,
  },
  {
    icon: Volume2,
    title: "Voicing",
    desc: "Voicing adjusts the tone quality of your piano — softening a harsh, bright sound or brightening a dull, muffled one. A voiced piano is a joy to play.",
    detail: "Tone & touch refinement",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Pitch Raises",
    desc: "Pianos that haven't been tuned in years often need a pitch raise before fine tuning. Tony handles this carefully to avoid undue string stress.",
    detail: "For neglected instruments",
    highlight: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">What Tony Offers</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Complete Piano Care
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            From a simple annual tune to a full restoration — every service is performed
            with the precision and patience your instrument deserves.
          </p>
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-border" />
            <Music2 className="w-4 h-4 text-accent" />
            <div className="h-px w-16 bg-border" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card
              key={s.title}
              className={`group border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.highlight
                  ? "bg-foreground text-background border-foreground shadow-lg"
                  : "bg-card border-border hover:border-accent/30"
              }`}
            >
              <CardContent className="p-7 flex flex-col h-full">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    s.highlight ? "bg-accent/20" : "bg-secondary group-hover:bg-accent/10"
                  } transition-colors`}
                >
                  <s.icon
                    className={`w-5 h-5 ${
                      s.highlight ? "text-accent" : "text-foreground/60 group-hover:text-accent"
                    } transition-colors`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${s.highlight ? "text-white" : "text-foreground"}`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${s.highlight ? "text-white/65" : "text-muted-foreground"}`}>
                  {s.desc}
                </p>
                <div className={`mt-5 pt-4 border-t text-xs font-semibold tracking-wide ${
                  s.highlight ? "border-white/15 text-accent" : "border-border text-accent"
                }`}>
                  {s.detail}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
