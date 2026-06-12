"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden font-body py-10 lg:py-20 border-b border-slate-100">
      
      {/* BACKGROUND DECORATION - Minimalist & Trustworthy */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-50/50" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-slate-50/70 blur-3xl" />
        {/* Clean grid background line tracking */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1. Left Text Content (Column 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-foundation-brand font-medium tracking-tight text-sm shadow-inner">
              <Users className="w-4 h-4" />
              <span>Vision 2026: The Global Goal</span>
            </div>

            {/* High Impact Headline */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-slate-950 leading-[1.05]">
              Free Education.<br />
              <span className="text-foundation-brand">For Everyone. Everywhere.</span>
            </h1>

            {/* Structured Description */}
            <div className="max-w-2xl space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                We believe education is the spark that unlocks dreams. No matter where you come from or what challenges you face, if you have the will to learn, we are here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center pt-2">
                <div className="flex items-center gap-3 text-foundation-brand">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-tight text-slate-900">K-12 & Adult Literacy</span>
                </div>
                <div className="flex items-center gap-3 text-foundation-rose">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-tight text-slate-900">Women & Girls Growth (Aashayen)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto pt-4">
              <Link
                href="/programs/learn-first"
                className="px-10 py-4 bg-foundation-brand hover:bg-blue-700 text-white font-semibold rounded-xl text-center shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Join our Mission
              </Link>
              <Link
                href="/programs/programmers"
                className="px-10 py-4 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium rounded-xl text-center shadow-sm transition-all"
              >
                Technical Collaboration (Chhirolya Tech)
              </Link>
            </div>
          </div>

          {/* 2. Right Impact Card (Column 8-12) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md p-10 bg-white rounded-3xl border-4 border-slate-100 shadow-2xl space-y-6 transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-100 bg-amber-50 text-amber-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  GLOBAL TARGET
                </div>
                <div className="text-3xl font-heading font-extrabold text-slate-950">2026</div>
              </div>

              {/* Main Number */}
              <div className="space-y-1">
                <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">Students Targeted Worldwide</div>
                <div className="text-6xl md:text-7xl font-heading font-extrabold text-foundation-brand leading-none">
                  500M+
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                Providing free, high-quality education globally by breaking down geographical and socio-economic barriers. Learn Together, Grow Together 🤗
              </p>

              {/* Location Badge Placeholder */}
              <div className="flex items-center gap-3 pt-2 text-sm text-slate-500">
                <div className="w-10 h-7 bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center font-bold text-slate-400 text-xs font-mono">IND</div>
                <span>Global Scale Infrastructure Framework</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}