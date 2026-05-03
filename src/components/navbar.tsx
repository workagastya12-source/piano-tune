"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Tony" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/96 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="relative w-10 h-10 rounded-xl bg-foreground flex items-center justify-center shadow-md group-hover:shadow-accent/30 transition-shadow duration-300">
              <Music2 className="w-5 h-5 text-background" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Tune In Time
              </span>
              <span className="flex items-center gap-1.5 mt-0.5">
                <span className="block h-px w-4 bg-accent/70 rounded-full" />
                <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                  Piano Tuning & Services
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/8 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a href="tel:0410498560">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-md shadow-accent/20"
              >
                <Phone className="w-3.5 h-3.5" />
                0410 498 560
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-foreground hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/8 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <a href="tel:0410498560">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2">
                  <Phone className="w-4 h-4" /> Call Tony — 0410 498 560
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
