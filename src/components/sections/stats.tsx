import { Award, MapPin, Piano, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Years Experience", sub: "Trusted since 2004" },
  { icon: Piano, value: "All Types", label: "Pianos Serviced", sub: "Upright, grand & digital" },
  { icon: MapPin, value: "Brisbane", label: "Mobile Service", sub: "We come to your home" },
  { icon: Clock, value: "Same Week", label: "Appointments", sub: "Fast, flexible scheduling" },
];

export function StatsSection() {
  return (
    <section className="bg-secondary border-y border-border py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                <s.icon className="w-5 h-5 text-foreground/50 group-hover:text-accent transition-colors" />
              </div>
              <p
                className="text-2xl sm:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.value}
              </p>
              <p className="text-sm font-semibold text-foreground/80 mt-0.5">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
