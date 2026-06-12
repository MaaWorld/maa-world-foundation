import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// 1. Headings & Hero Sections Font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// 2. Primary Body & UI Text Font
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 3. Technical/Code Font (For Programmers Section)
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maa World Foundation | Education for Everyone & Everywhere",
  description: "By 2026, we aim to provide free, high-quality education to over 500 million students worldwide. Empowering kids, tech professionals, and women globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-white text-slate-900 selection:bg-blue-500/10 selection:text-blue-600">
        
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-heading font-extrabold text-xl text-foundation-blue tracking-tight">
              Maa World<span className="text-foundation-brand"> Foundation</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link href="/about" className="hover:text-foundation-brand transition-colors">About Us</Link>
              <Link href="/programs/learn-first" className="hover:text-foundation-brand transition-colors">Learn First</Link>
              <Link href="/programs/programmers" className="hover:text-foundation-brand transition-colors">Programmers WW</Link>
              <Link href="/programs/aashayen" className="hover:text-foundation-brand transition-colors">Aashayen</Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link 
                href="/contribute" 
                className="px-4 py-2 bg-foundation-brand hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all"
              >
                Join Us
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-slate-100 bg-slate-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-heading font-bold text-slate-900">Maa World Foundation</p>
              <p className="mt-1 text-xs text-slate-500">Education for Everyone & Everywhere 🌍</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <p>© 2026 Maa World Foundation. All rights reserved.</p>
              <p className="text-xs text-slate-400 hidden md:block">In Collaboration with Chhirolya Technologies</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}