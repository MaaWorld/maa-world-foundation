import React from "react";
import HeroSection from "@/components/Hero";
import {
  ArrowUpRight,
  BookOpen,
  Code,
  Heart,
  Globe,
  GraduationCap,
  Users2,
  Compass,
} from "lucide-react";
import Link from "next/link";

const programsList = [
  {
    id: "01",
    title: "Learn First Program",
    tagline: "Primary Education & Adult Literacy",
    desc: "Building free fundamental K-12 schooling systems for local children, paired with weekend basic reading and writing bootcamps designed to uplift uneducated men and women in rural sectors.",
    icon: GraduationCap,
    accent: "text-blue-400 bg-blue-950/40 border-blue-900/40",
    link: "/programs/learn-first",
  },
  {
    id: "02",
    title: "Programmers WorldWide",
    tagline: "Empowering Next-Gen Tech Talent",
    desc: "A dedicated initiative by Chhirolya Technologies providing free professional guidance, open-source engineering labs, and skill development for aspiring college students from humble backgrounds.",
    icon: Code,
    accent: "text-emerald-400 bg-emerald-950/40 border-emerald-900/40",
    link: "/programs/programmers",
  },
  {
    id: "03",
    title: "Aashayen Community",
    tagline: "Women Leadership & Welfare Network",
    desc: "A secure and supportive collective focused on accelerating female representation in professional sectors, offering independent career mentoring, safety awareness, and foundational rights.",
    icon: Heart,
    accent: "text-rose-400 bg-rose-950/40 border-rose-900/40",
    link: "/programs/aashayen",
  },
  {
    id: "04",
    title: "Global Outreach Strategy",
    tagline: "Socio-Economic Equality",
    desc: "Demolishing financial filters from learning. If there is an individual with a sincere desire to study and grow, we step in to provide complete learning resources entirely for free.",
    icon: Globe,
    accent: "text-amber-400 bg-amber-950/40 border-amber-900/40",
    link: "/about",
  },
];

const ecosystemCards = [
  {
    title: "Ground-Level Learning Centers",
    subtitle: "Reaching Remote Areas",
    description:
      "We work directly on the ground to transform small, local areas into beautiful active learning spaces. This ensures that even kids in remote regions can get standard primary education.",
    badge: "Community Initiative",
    badgeColor: "text-blue-400 bg-blue-950/40 border-blue-900/50",
  },
  {
    title: "Open Skill Platforms",
    subtitle: "Free Resources for All",
    description:
      "Supported by Chhirolya Technologies, we build simple, easily accessible online repositories and software mentorship toolkits so students don't have to pay heavy course fees.",
    badge: "Tech For Good",
    badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-900/50",
  },
  {
    title: "Aashayen Mentorship Hubs",
    subtitle: "Nurturing Female Careers",
    description:
      "Connecting young female students with established professional mentors who advocate for their career growth, select safe working cities, and guide them at every phase.",
    badge: "Women Welfare",
    badgeColor: "text-rose-400 bg-rose-950/40 border-rose-900/50",
  },
];

export default function Home() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-200 font-body antialiased selection:bg-blue-500/20 selection:text-blue-400">
      {/* 1. COMPASSIONATE HERO HERO SECTION */}
      <HeroSection />

      {/* 2. THE CHHIROLYA COLLABORATION STRIP (Warm & Trustworthy) */}
      <section className="py-12 border-b border-slate-900 bg-slate-950/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-widest uppercase text-blue-400 block font-bold">
                Our Tech & Knowledge Partner
              </span>
              <p className="text-sm text-slate-400 max-w-xl">
                Maa World Foundation's digital portals and digital training
                tracks are fully powered and kept operational in proud
                collaboration with{" "}
                <strong className="text-white font-semibold">
                  Chhirolya Technologies
                </strong>
                .
              </p>
            </div>
            <div className="h-px w-full md:w-20 bg-slate-800 hidden md:block" />
            <div className="text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl shadow-xl shrink-0 flex items-center gap-2">
              <Users2 className="w-3.5 h-3.5 text-blue-400" />
              Empowering Minds • Ground Level Execution • Purely Transparent
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WELFARE PILLARS (Clean, Human, Narrative Rows) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-400">
                What We Care About
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Our Four Core Strategic Programs.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl lg:ml-auto">
                Instead of scattered charity work, we concentrate our efforts
                into dedicated pathways—ranging from root child literacy to
                professional engineering support.
              </p>
            </div>
          </div>

          {/* Elegant Readable Row Layout */}
          <div className="divide-y divide-slate-900 border-t border-b border-slate-900">
            {programsList.map((prog) => {
              const IconComp = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 items-start hover:bg-slate-900/30 transition-colors px-4 -mx-4 rounded-xl duration-200"
                >
                  {/* Left: ID & Soft Glowing Icon Container */}
                  <div className="lg:col-span-3 flex items-center gap-5">
                    <span className="font-mono text-sm font-semibold text-slate-700">
                      {prog.id}
                    </span>
                    <div
                      className={`p-3 rounded-xl border ${prog.accent} shrink-0`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 lg:hidden">
                      {prog.tagline}
                    </span>
                  </div>

                  {/* Middle: Clear Non-Profit Content */}
                  <div className="lg:col-span-6 space-y-1">
                    <span className="text-xs font-medium text-slate-500 hidden lg:block">
                      {prog.tagline}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
                      {prog.desc}
                    </p>
                  </div>

                  {/* Right: Soft Button with Human Touch */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <Link
                      href={prog.link}
                      className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-slate-300 group-hover:text-white border border-slate-800 bg-slate-900/40 px-4 py-2.5 rounded-xl transition-all hover:border-slate-700"
                    >
                      Explore Program
                      <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. REAL-WORLD IMPACT SPACE (Pure Organic Ecosystem) */}
      <section className="py-24 border-t border-slate-900 bg-gradient-to-b from-[#030712] to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/60 text-slate-400 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              How We Create True Difference
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Bridging the Gap Between Intent and Real Welfare
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              We focus heavily on action. Whether it is a local village
              structure or an online software mentorship group, we make sure
              that learning leads to real sustainable growth.
            </p>
          </div>

          {/* Honest Horizontal Structural Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ecosystemCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-900 bg-slate-950/40 hover:bg-slate-900/50 transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md border ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs text-slate-500 font-medium block">
                      {card.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 text-[11px] font-mono text-slate-600">
                  MAA FOUNDATION MODEL • AREA 0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PASSIONATE & GENUINE CALL TO ACTION */}
      <section className="bg-gradient-to-b from-background to-slate-950 py-24 border-t border-slate-900 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Let's Make Education a Gift Every Soul Can Embrace.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Whether you want to contribute software engineering guidelines with
            Chhirolya Tech, provide ground volunteering for rural kids, or
            support female education paths—your heart matters.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contribute"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] transform hover:-translate-y-0.5"
            >
              Get Involved With Us
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm rounded-xl hover:bg-slate-800 hover:text-white transition-all"
            >
              Read Our Vision Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
