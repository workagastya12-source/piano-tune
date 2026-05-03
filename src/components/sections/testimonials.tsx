import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Margaret H.",
    location: "Aspley",
    rating: 5,
    text: "Tony tuned our old Steinway beautifully. It sounds like a completely different — and much better — instrument. He was punctual, professional, and clearly passionate about what he does.",
    service: "Piano Tuning",
  },
  {
    name: "David & Karen L.",
    location: "Chermside",
    rating: 5,
    text: "We had a pre-purchase inspection done on a second-hand upright. Tony found several issues the seller hadn't mentioned and saved us from a very expensive mistake. Absolutely worth every cent.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "Sarah M.",
    location: "Everton Park",
    rating: 5,
    text: "My grandmother's piano hadn't been touched in 15 years. Tony did a full restoration and it's now the centrepiece of our living room — and it plays like a dream. Incredible work.",
    service: "Full Restoration",
  },
  {
    name: "James T.",
    location: "Albany Creek",
    rating: 5,
    text: "Tony has been tuning our school's pianos for years. Always reliable, always on time, and the students and teachers notice the difference every single time. Highly recommended.",
    service: "School Service",
  },
  {
    name: "Priya R.",
    location: "Bridgeman Downs",
    rating: 5,
    text: "Several sticky keys and a broken string — Tony fixed everything in one visit. He explained what he was doing throughout and the price was very fair. Will definitely call again.",
    service: "Repairs",
  },
  {
    name: "Colin W.",
    location: "Eatons Hill",
    rating: 5,
    text: "I've used other piano tuners before but Tony is on another level. The voicing he did on our Yamaha grand transformed the tone completely. A true craftsman.",
    service: "Voicing",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">What Clients Say</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted Across Brisbane
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="text-foreground font-bold ml-1">5.0</span>
            <span className="text-muted-foreground text-sm">· 5-Star Rated</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border border-border hover:border-accent/25 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-7">
                <Quote className="w-7 h-7 text-accent/25 mb-4 group-hover:text-accent/40 transition-colors" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-sm text-foreground" style={{ fontFamily: "var(--font-playfair)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium border border-accent/20">
                    {t.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
