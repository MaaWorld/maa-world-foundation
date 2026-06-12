import React from "react";
import Hero from "@/components/Hero";
import { BookOpen, Code, Heart, Globe } from "lucide-react";
import Link from "next/link";

// 4 pillars data configuration
const pillars = [
  {
    title: "Learn First Program",
    subtitle: "K-12 & Adult Literacy",
    description:
      "Providing foundational education and mental growth resources for globally local kids up to 12th class, alongside dedicated programs for uneducated men and women.",
    icon: BookOpen,
    href: "/programs/learn-first",
    borderColor: "hover:border-blue-500/30",
    iconColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Programmers WorldWide",
    subtitle: "Chhirolya Technologies Tech Lab",
    description:
      "A collaborative futuristic ecosystem where college students and tech enthusiasts learn advanced engineering, build global products, and drive open-source contributions.",
    icon: Code,
    href: "/programs/programmers",
    borderColor: "hover:border-emerald-500/30",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Aashayen Community",
    subtitle: "Women Empowerment Network",
    description:
      "Specially engineered to assist global women and girls in accelerating their career tracks, safe education rights, independent leadership, and personal growth models.",
    icon: Heart,
    href: "/programs/aashayen",
    borderColor: "hover:border-rose-500/30",
    iconColor: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    title: "Global Outreach",
    subtitle: "Resource Democratization",
    description:
      "Our macro framework ensures that borderless, free, premium education tracks reach every willing mindset, transcending age, background, and geopolitical barriers.",
    icon: Globe,
    href: "/about",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION DISPLAY */}
      <Hero />

      {/* 2. THE 4 PILLARS CORE ARCHITECTURE */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header Layout */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-foundation-brand bg-blue-50 px-3 py-1 rounded-md">
              Framework of Action
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Four Core Pillars
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-body">
              A comprehensive lifecycle structure targeting fundamental
              learning, advanced technology production, community empowerment,
              and borderless resource delivery.
            </p>
          </div>

          {/* Pillars Cards Adaptive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`group bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start ${pillar.borderColor}`}
              >
                {/* Dynamic Metric Icon Component */}
                <div
                  className={`p-4 rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-110 ${pillar.iconColor}`}
                >
                  <pillar.icon className="w-6 h-6" />
                </div>

                {/* Content Alignment Area */}
                <div className="flex-1 flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 group-hover:text-foundation-brand transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Embedded Deep Linking Text */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={pillar.href}
                      className="text-sm font-semibold text-foundation-brand group-hover:text-blue-700 inline-flex items-center gap-1 transition-all"
                    >
                      Learn more details
                      <span className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT BRIEF INTERMEDIATE BANNER */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        {/* Subtle dynamic grid architecture watermark */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h3 className="font-heading font-bold text-slate-400 text-sm uppercase tracking-widest">
            The Macro Target
          </h3>
          <p className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight max-w-3xl leading-snug">
            "By 2026, we aim to provide free, high-quality education to over 500
            million students worldwide."
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-foundation-emerald bg-emerald-950/40 border border-emerald-900/50 px-4 py-2 rounded-full">
            <span className="h-2 w-2 rounded-full bg-foundation-emerald animate-pulse" />
            Executing Global Infrastructure Operations
          </div>
        </div>
      </section>
    </div>
  );
}
