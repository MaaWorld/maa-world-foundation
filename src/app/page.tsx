import React from "react";
import HeroSection from "@/components/Hero";
import {
  ArrowUpRight,
  Code,
  BookOpen,
  Heart,
  Globe2,
  Sparkles,
  Terminal,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const programsList = [
  {
    id: "01",
    title: "Learn First Program",
    tagline: "Global Literacy Infrastructure",
    desc: "Fundamental K-12 education systems optimized for local kids and customized adult literacy bootcamps designed for uneducated men and women.",
    icon: BookOpen,
    accent: "text-blue-400 bg-blue-950/40 border-blue-900/60",
    link: "/programs/learn-first",
  },
  {
    id: "02",
    title: "Programmers WorldWide",
    tagline: "Chhirolya Technologies Engineering Lab",
    desc: "A futuristic tech ecosystem bridging college students with open-source engineering tracks, task clubs, and live production scaling methodologies.",
    icon: Code,
    accent: "text-emerald-400 bg-emerald-950/40 border-emerald-900/60",
    link: "/programs/programmers",
  },
  {
    id: "03",
    title: "Aashayen Community",
    tagline: "Women Leadership & Growth Network",
    desc: "A specialized, safe collective focused on accelerating female representation in high-growth tracks, leadership skills, and basic structural rights.",
    icon: Heart,
    accent: "text-rose-400 bg-rose-950/40 border-rose-900/60",
    link: "/programs/aashayen",
  },
  {
    id: "04",
    title: "Global Outreach Strategy",
    tagline: "Resource Democratization Ecosystem",
    desc: "Removing demographic and socioeconomic filters from education. If there is a human mind willing to expand, our resources drop there for free.",
    icon: Globe2,
    accent: "text-amber-400 bg-amber-950/40 border-amber-900/60",
    link: "/about",
  },
];

const workspaceNodes = [
  {
    title: "The Sandbox Environment",
    subtitle: "Open Source Pipelines",
    description:
      "Deploying high-concurrency microservice containers and open-source infrastructure architecture on GitHub to anchor our free-learning distribution nodes globally.",
    badge: "Tech Track",
    badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-900/50",
    status: "Active Vector",
  },
  {
    title: "Ground Cultivation Centers",
    subtitle: "Physical Learning Hubs",
    description:
      "Transforming regional spatial structures and resources into local active learning nodes, ensuring primary education accessibility even in challenging geographies.",
    badge: "Field Operations",
    badgeColor: "text-blue-400 bg-blue-950/40 border-blue-900/50",
    status: "Live Nodes",
  },
  {
    title: "Aashayen Carrier Hub",
    subtitle: "Independent Leadership Tracks",
    description:
      "A tailored micro-architecture ensuring protective learning tracks, professional mentoring setups, and resource allocation models for women globally.",
    badge: "Empowerment",
    badgeColor: "text-rose-400 bg-rose-950/40 border-rose-900/50",
    status: "Accelerating",
  },
];

export default function Home() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 font-body antialiased selection:bg-blue-500/20 selection:text-foundation-brand">
      {/* 1. CYBER METRIC HERO */}
      <HeroSection />

      {/* 2. CHHIROLYA ALIGNMENT ACCENT BAR */}
      <section className="py-12 border-b border-slate-900 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block font-bold">
                Production Integrity
              </span>
              <p className="text-sm text-slate-400 max-w-xl">
                Maa World Foundation core pipelines are structurally monitored
                and computed in active collaboration with{" "}
                <strong className="text-white font-semibold tracking-tight">
                  Chhirolya Technologies
                </strong>
                .
              </p>
            </div>
            <div className="h-px w-full md:w-24 bg-slate-800 hidden md:block" />
            <div className="text-xs font-mono text-slate-400 bg-foundation-darkcard border border-slate-800 px-4 py-2 rounded-lg shadow-2xl shrink-0">
              High Availability Stack • Open Source Vectors • Mass Scale
              Literacy
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURAL PILLARS ROW MODULE */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-foundation-brand">
                Operational Architecture
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Our Functional Pillars.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl lg:ml-auto">
                Decoupling massive macro-level development tasks into dedicated
                vector operations to monitor speed and performance matrices
                globally.
              </p>
            </div>
          </div>

          {/* Clean Row Layout with Deep Glass Effects */}
          <div className="divide-y divide-slate-900 border-t border-b border-slate-900">
            {programsList.map((prog) => {
              const IconComp = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-12 items-start hover:bg-foundation-darkcard/40 transition-colors px-6 -mx-6 rounded-xl duration-300"
                >
                  <div className="lg:col-span-3 flex items-center gap-5">
                    <span className="font-mono text-sm font-bold text-slate-700 tracking-wider">
                      {prog.id}
                    </span>
                    <div
                      className={`p-3 rounded-xl border ${prog.accent} shrink-0 shadow-lg`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold tracking-tight lg:hidden">
                      {prog.tagline}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-1.5">
                    <span className="font-mono text-xs text-slate-500 font-bold tracking-tight hidden lg:block">
                      {prog.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-foundation-brand transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl pt-1">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <Link
                      href={prog.link}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-400 group-hover:text-white border border-slate-800 bg-slate-900/20 px-4 py-2.5 rounded-lg transition-all shadow-inner hover:border-slate-700"
                    >
                      View Node Vector
                      <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-foundation-brand" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRAND NEW SECTION: THE ECOSYSTEM MATRIX LABS */}
      <section className="py-24 border-t border-slate-900 bg-gradient-to-b from-[#030712] to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout Upper Details */}
          <div className="max-w-3xl mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/40 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-foundation-brand" />
              Dynamic Execution Environments
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Where Mission Meets High-Performance Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              We are building a decoupled ecosystem. Instead of static
              structures, we track and execute operations live—bringing modern
              tech distribution logic to scalable social systems.
            </p>
          </div>

          {/* Clean Horizontal Pipeline Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workspaceNodes.map((node, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-slate-900 bg-foundation-darkcard/30 hover:bg-foundation-darkcard/60 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                {/* Upper Frame */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md border ${node.badgeColor}`}
                    >
                      {node.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-foundation-brand animate-pulse" />
                      {node.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-wide uppercase block">
                      {node.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-foundation-brand transition-colors">
                      {node.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed pt-1">
                    {node.description}
                  </p>
                </div>

                {/* Micro Action Decorative Indicator */}
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                  <span>ENVIRONMENT NODE 0{index + 1}</span>
                  <Terminal className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity text-foundation-brand" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLID CYBER CALL TO ACTION TERMINAL */}
      <section className="bg-gradient-to-b from-background to-slate-950 py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Let's Make Knowledge Fluid Across Universal Margins.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Whether you intend to write containerized open-source architectures
            or accelerate fundamental ground education models—your compute
            footprint changes operations.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contribute"
              className="px-8 py-3.5 bg-foundation-brand hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-[0_0_25px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5"
            >
              Initialize Contribution Track
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 bg-slate-900/60 border border-slate-800 text-slate-300 font-medium text-sm rounded-xl hover:bg-slate-900 hover:text-white transition-all backdrop-blur-md"
            >
              Read Architecture Manifesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
