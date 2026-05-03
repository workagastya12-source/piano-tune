"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Music2, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = { role: "bot" | "user"; text: string };
type Step = "piano_type" | "service_needed" | "suburb" | "summary" | "done";

const FLOW: Record<Step, { question: string; options?: string[] }> = {
  piano_type: {
    question: "Hello! 🎹 I'm here to help you book a service with Tony. First — what type of piano do you have?",
    options: ["Upright Piano", "Grand Piano", "Baby Grand", "Digital / Electric", "Not Sure"],
  },
  service_needed: {
    question: "Great choice! What does your piano need?",
    options: ["Tuning", "Repair / Sticky Keys", "Full Restoration", "Pre-Purchase Inspection", "Voicing / Tone", "Not Sure — Need Advice"],
  },
  suburb: {
    question: "Perfect. And roughly where are you located?",
    options: ["Albany Creek / Eatons Hill", "Aspley / Chermside", "Everton Park / Mitchelton", "Bridgeman Downs", "Other Brisbane suburb"],
  },
  summary: { question: "" },
  done: { question: "" },
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("piano_type");
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<{ pianoType?: string; service?: string; suburb?: string }>({});
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      setTimeout(() => {
        setMessages([{ role: "bot", text: FLOW.piano_type.question }]);
      }, 350);
    }
  }, [open, started]);

  const addMsg = (role: "bot" | "user", text: string) =>
    setMessages((p) => [...p, { role, text }]);

  const handleOption = (option: string) => {
    addMsg("user", option);

    if (step === "piano_type") {
      setAnswers((a) => ({ ...a, pianoType: option }));
      setTimeout(() => { addMsg("bot", FLOW.service_needed.question); setStep("service_needed"); }, 500);
    } else if (step === "service_needed") {
      setAnswers((a) => ({ ...a, service: option }));
      setTimeout(() => { addMsg("bot", FLOW.suburb.question); setStep("suburb"); }, 500);
    } else if (step === "suburb") {
      const final = { ...answers, suburb: option };
      setAnswers(final);
      setTimeout(() => {
        const summary = `Thanks! Here's what I've noted:\n\n🎹 Piano: ${final.pianoType}\n🔧 Service: ${final.service}\n📍 Location: ${option}\n\nTony services your area and would love to help. Give him a call or send a message using the form below!`;
        addMsg("bot", summary);
        setStep("summary");
      }, 500);
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    addMsg("user", text);
    setTimeout(() => {
      addMsg("bot", "Thanks for your message! Tony will get back to you shortly. For the fastest response, give him a call on 0410 498 560.");
      setStep("done");
    }, 600);
  };

  const currentOptions =
    step === "piano_type" ? FLOW.piano_type.options :
    step === "service_needed" ? FLOW.service_needed.options :
    step === "suburb" ? FLOW.suburb.options : [];

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!open && (
          <div
            className="bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-bounce"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book a Tuning ♪
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close chat" : "Open chat"}
          className={cn(
            "relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
            open ? "bg-foreground text-background" : "bg-accent text-accent-foreground hover:scale-110"
          )}
        >
          {!open && <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />}
          {open ? <X className="w-6 h-6" /> : <Music2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[370px] flex flex-col rounded-2xl shadow-2xl border border-border overflow-hidden bg-background">
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: "linear-gradient(135deg, hsl(0,0%,8%) 0%, hsl(0,0%,14%) 100%)" }}
          >
            <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Music2 className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                A Tune In Time
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white/50 text-xs">Tony's assistant · Online</p>
              </div>
            </div>
            <a href="tel:0410498560">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold h-8 px-3 gap-1">
                <Phone className="w-3 h-3" /> Call
              </Button>
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64 bg-secondary/20">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex gap-2 items-end", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
                <div className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                  m.role === "bot" ? "bg-foreground text-background" : "bg-accent text-accent-foreground"
                )}>
                  {m.role === "bot" ? <Music2 className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>
                <div className={cn(
                  "max-w-[76%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
                  m.role === "bot"
                    ? "bg-background border border-border text-foreground rounded-bl-sm"
                    : "bg-foreground text-background rounded-br-sm"
                )}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {currentOptions && currentOptions.length > 0 && (
            <div className="px-3 py-2.5 border-t border-border bg-background flex flex-wrap gap-1.5">
              {currentOptions.map((opt) => (
                <button key={opt} onClick={() => handleOption(opt)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-foreground/20 text-foreground/70 hover:bg-foreground hover:text-background transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Post-summary CTAs */}
          {step === "summary" && (
            <div className="px-3 py-3 border-t border-border bg-background flex gap-2">
              <a href="tel:0410498560" className="flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs gap-1.5 h-9">
                  <Phone className="w-3.5 h-3.5" /> Call Tony
                </Button>
              </a>
              <a href="#contact" className="flex-1">
                <Button variant="outline" className="w-full text-xs font-bold h-9 border-foreground/20 hover:bg-foreground hover:text-background">
                  Book Online
                </Button>
              </a>
            </div>
          )}

          {/* Free text input */}
          {step !== "summary" && step !== "done" && (
            <div className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder="Or type your question…"
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-input bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <button onClick={handleSend} disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-30">
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Done state */}
          {step === "done" && (
            <div className="px-3 py-3 border-t border-border bg-background">
              <a href="tel:0410498560">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 h-9 text-xs">
                  <Phone className="w-3.5 h-3.5" /> Call Tony — 0410 498 560
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
