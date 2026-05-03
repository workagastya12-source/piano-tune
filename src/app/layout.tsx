import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "A Tune In Time | Piano Tuning & Services — Albany Creek, Brisbane",
  description:
    "Professional piano tuning, repairs, and restoration by Tony — serving Albany Creek, Brisbane and surrounds. 20+ years experience. Call 0410 498 560.",
  keywords: "piano tuner Brisbane, piano tuning Albany Creek, piano repair Brisbane, piano restoration Queensland, Tony piano tuner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
