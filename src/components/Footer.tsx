import React from "react";
import Link from "next/link";
// Sirf Mail aur ArrowUpRight import kar rahe hain jo standard hain
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Organization Core",
      links: [
        { name: "About Our Vision", href: "/about" },
        { name: "Join Us / Volunteer", href: "/contribute" },
        { name: "Contact Support", href: "/contact" },
      ],
    },
    {
      title: "Active Frameworks",
      links: [
        { name: "Learn First Track", href: "/programs/learn-first" },
        { name: "Programmers WorldWide", href: "/programs/programmers" },
        { name: "Aashayen Community", href: "/programs/aashayen" },
      ],
    },
  ];

  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-slate-900 font-body relative overflow-hidden">
      {/* Top Main Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand Vector Block */}
          <div className="md:col-span-6 space-y-6">
            <Link
              href="/"
              className="font-heading font-extrabold text-2xl text-white tracking-tight block"
            >
              Maa World
              <span className="text-foundation-brand"> Foundation</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Democratizing micro-learning modules and scaling structural
              technical pipelines. Empowering over 500 million minds worldwide
              by 2026 without geo-political or socio-economic filters.
            </p>

            {/* Safe Direct SVG Social Links Grid */}
            <div className="flex items-center gap-3 pt-2">
              {/* GitHub SVG */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-900 bg-slate-950/60 text-slate-500 transition-all duration-300 hover:text-white hover:border-slate-400 hover:bg-slate-900 shadow-inner"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-900 bg-slate-950/60 text-slate-500 transition-all duration-300 hover:text-blue-400 hover:border-blue-900/60 hover:bg-blue-950/30 shadow-inner"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-900 bg-slate-950/60 text-slate-500 transition-all duration-300 hover:text-rose-400 hover:border-rose-900/60 hover:bg-rose-950/30 shadow-inner"
                title="Instagram"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Email Icon via Standard Lucide Mail */}
              <a
                href="mailto:info@maaworldfoundation.org"
                className="p-2.5 rounded-xl border border-slate-900 bg-slate-950/60 text-slate-500 transition-all duration-300 hover:text-emerald-400 hover:border-emerald-900/60 hover:bg-emerald-950/30 shadow-inner"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Dynamic Link Menus */}
          {sections.map((section, idx) => (
            <div key={idx} className="md:col-span-3 space-y-4">
              <h3 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group duration-200"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-700 group-hover:text-foundation-brand opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>
              © {currentYear} MAA WORLD FOUNDATION. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>CORE NODE: 1.0.0-PROD</span>
            <span className="text-slate-700">|</span>
            <span>GLOBAL INFRASTRUCTURE</span>
          </div>
        </div>
      </div>

      {/* Massive Cinematic Text Bottom Banner */}
      <div className="w-full border-t border-slate-900/60 bg-gradient-to-b from-transparent to-slate-950/80 px-4 py-8 select-none text-center relative z-10">
        <h2 className="font-heading font-black text-[7vw] sm:text-[4.5vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 leading-none uppercase pointer-events-none">
          Chhirolya Technologies{" "}
          <span className="text-slate-900/40 font-light">×</span> Maa World
          Foundation
        </h2>
      </div>
    </footer>
  );
}
