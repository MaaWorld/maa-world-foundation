import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Sparkles,
  GraduationCap,
  Globe2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const foundationPillars = [
  {
    step: "01",
    title: "Socio-Economic Equality",
    tagline: "Removing Learning Barriers",
    desc: "We clear historical financial filters and structural boundaries. If a mind has the sincere intent to study, resources flow to them with zero restriction.",
    icon: Globe2,
    glow: "group-hover:border-blue-500/40 group-hover:bg-blue-950/20",
  },
  {
    step: "02",
    title: "Free Strategic Skill Tracks",
    tagline: "Empowering Upcoming Engineers",
    desc: "Partnering with technical engineering spaces to create simplified project labs, documentation pathways, and guidance modules for students from humble backgrounds.",
    icon: GraduationCap,
    glow: "group-hover:border-emerald-500/40 group-hover:bg-emerald-950/20",
  },
  {
    step: "03",
    title: "Aashayen Community",
    tagline: "Nurturing Female Leadership",
    desc: "A dedicated protective ecosystem focusing heavily on independent career mentoring, choosing safe employment tracks, and amplifying core confidence for women.",
    icon: Heart,
    glow: "group-hover:border-rose-500/40 group-hover:bg-rose-950/20",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-200 font-body antialiased selection:bg-blue-500/20 selection:text-blue-400">
      {/* 1. LIGHT ASYMMETRIC HERO HEADER */}
      <section className="relative pt-24 pb-20 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/40 text-slate-400 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                The Story Behind Our Purpose
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter text-white leading-[1.1]">
                Bridging the Gap Between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                  Raw Talent & Real Opportunity.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl pt-2">
                Maa World Foundation functions as an independent, transparent
                social ecosystem. We step onto the field to replace old,
                restrictive charity patterns with active, modern learning
                pathways built purely on care and equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALLIANCE BLOCK: CHHIROLYA FRAMEWORK INTEGRATION */}
      <section className="py-20 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 rounded-3xl border border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900/40 to-slate-950 shadow-inner">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-xs font-bold text-slate-500 tracking-wider block uppercase">
                  Technical Pillars
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Sustained by Chhirolya Technologies.
                </h2>
              </div>

              <div className="lg:col-span-8 text-sm text-slate-400 leading-relaxed space-y-4 border-l border-slate-800 lg:pl-8">
                <p>
                  To make sure that our digital resources, bootcamps, and
                  guidance databases never drop offline,{" "}
                  <strong className="text-white font-semibold">
                    Chhirolya Technologies
                  </strong>{" "}
                  acts as our exclusive systems alignment partner.
                </p>
                <p>
                  Their professional engineering experience helps us manage our
                  platforms fluidly. This means we avoid hefty technical
                  overheads and focus 100% of our attention directly on
                  community welfare, ground setup, and student mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PATHWAYS TIMELINE CONNECTIONS LAYOUT */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-24">
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-400">
              Operational Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              Our Core Strategic Pathways.
            </h2>
          </div>

          {/* Clean Connected Row Steps (Ui Upgrade) */}
          <div className="space-y-6">
            {foundationPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-2xl border border-slate-900 bg-slate-950/20 transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-950/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Counter Layer */}
                  <div className="md:col-span-2 flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-slate-600 tracking-widest">
                      PHASE
                    </span>
                    <span className="text-2xl font-heading font-black text-slate-400 group-hover:text-blue-400 transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  {/* Icon Frame */}
                  <div className="md:col-span-2">
                    <div
                      className={`p-3 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 w-fit transition-colors ${pillar.glow}`}
                    >
                      <PillarIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Core Description Core Block */}
                  <div className="md:col-span-8 space-y-1">
                    <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-tight block">
                      {pillar.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SOLID ENDING ACTION BOX */}
      <section className="border-t border-slate-900 bg-gradient-to-b from-transparent to-slate-950/60 py-24 text-center relative">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Grow With Us. Plan With Us.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Whether you want to discover study parameters, support local village
            child initiatives, or connect with Aashayen mentors—your
            collaboration creates impact.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contribute"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.15)] transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get Involved Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm rounded-xl hover:bg-slate-800 hover:text-white transition-all"
            >
              Return Home Node
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
