"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Users, BookOpen, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-background text-white overflow-hidden font-body py-16 lg:py-28 border-b border-slate-900">
      {/* GLOWING AMBIENT WATERMARKS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[150px] pointer-events-none" />
        {/* Futuristic Matrix Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-900/60 bg-blue-950/40 text-foundation-brand font-medium tracking-tight text-sm shadow-inner backdrop-blur-md">
              <Users className="w-4 h-4 animate-pulse" />
              <span className="text-blue-300">
                Vision 2026 Strategy Document
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl tracking-tighter text-white leading-[1.05]">
              Free Education.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foundation-brand via-cyan-400 to-foundation-emerald">
                Everyone. Everywhere.
              </span>
            </h1>

            <div className="max-w-2xl space-y-4">
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-body">
                We design high-availability open platforms to anchor mental
                growth networks. No filters based on demographic history—if
                there is a human mind willing to adapt, our stack drops
                resources there for free.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-3 text-foundation-brand">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-semibold text-slate-300">
                    K-12 Base Infrastructure
                  </span>
                </div>
                <div className="flex items-center gap-3 text-foundation-rose">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-semibold text-slate-300">
                    Aashayen Female Accelerators
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link
                href="/programs/learn-first"
                className="px-10 py-4 bg-foundation-brand hover:bg-blue-600 text-white font-semibold rounded-xl text-center shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                Join Mission Vector
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs/programmers"
                className="px-10 py-4 border border-slate-800 bg-slate-900/30 text-slate-300 font-medium rounded-xl text-center backdrop-blur-md hover:bg-slate-900 hover:text-white transition-all"
              >
                Chhirolya Tech Collaboration
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md p-10 bg-foundation-darkcard rounded-3xl border border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-6 transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-foundation-brand/10 rounded-full blur-2xl group-hover:bg-foundation-brand/20 transition-colors" />

              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-900/60 bg-emerald-950/40 text-foundation-emerald text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-foundation-emerald animate-pulse" />
                  MACRO QUANTIFIERS
                </div>
                <div className="text-2xl font-mono text-slate-500 font-bold">
                  2026
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-500 font-mono tracking-wider uppercase">
                  Global Metric Target
                </div>
                <div className="text-6xl font-heading font-extrabold text-white tracking-tight">
                  500M<span className="text-foundation-brand">+</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Aggregating digital learning pipelines to serve massive consumer
                pipelines. Demolishing spatial barriers using modern edge
                systems.
              </p>

              <div className="h-px bg-slate-900" />

              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>IND OPERATIONAL CENTER</span>
                <span className="text-slate-400">GLOBAL NETWORKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
