"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="rounded-full w-9 h-9 hover:bg-accent/10"
    >
      {theme === "dark"
        ? <Sun className="h-4 w-4 text-accent" />
        : <Moon className="h-4 w-4 text-foreground/70" />}
    </Button>
  );
}
