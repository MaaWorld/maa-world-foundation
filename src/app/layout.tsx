import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Import Footer here
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maa World Foundation | Education for Everyone & Everywhere",
  description:
    "By 2026, we aim to provide free, high-quality education to over 500 million students worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-white text-slate-900 selection:bg-blue-500/10 selection:text-blue-600">
        {/* GLOBAL NAVIGATION LAYER */}
        <Navbar />

        {/* MAIN ROUTED PAGES */}
        <main className="flex-1">{children}</main>

        {/* GLOBAL FOOTER LAYER */}
        <Footer />
      </body>
    </html>
  );
}
