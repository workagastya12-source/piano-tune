import { Phone, CalendarDays, Home, Music2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call or Message",
    desc: "Get in touch by phone or the contact form. Tony will discuss your piano's needs and give you an honest quote — no obligation.",
  },
  {
    icon: CalendarDays,
    step: "02",
    title: "Book a Time",
    desc: "Choose a day and time that suits you. Tony offers flexible scheduling including evenings and weekends.",
  },
  {
    icon: Home,
    step: "03",
    title: "Tony Comes to You",
    desc: "No towing, no workshop. Tony arrives at your home with all the tools and parts needed to do the job right.",
  },
  {
    icon: Music2,
    step: "04",
    title: "Play & Enjoy",
    desc: "Your piano is tuned, repaired, or restored to its best. Sit down and play — you'll hear the difference immediately.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">How It Works</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Simple. Convenient. Expert.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative w-20 h-20 rounded-full bg-background border-2 border-border group-hover:border-accent/50 flex items-center justify-center mb-5 shadow-md transition-all duration-300 group-hover:shadow-accent/10">
                <s.icon className="w-7 h-7 text-foreground/40 group-hover:text-accent transition-colors duration-300" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>
              <h3
                className="font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
