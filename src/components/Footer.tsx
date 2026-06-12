import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Organization",
      links: [
        { name: "About Our Vision", href: "/about" },
        { name: "Join Us / Volunteer", href: "/contribute" },
        { name: "Contact Support", href: "/contact" },
      ],
    },
    {
      title: "Our Core Pillars",
      links: [
        { name: "Learn First Program", href: "/programs/learn-first" },
        { name: "Programmers WorldWide", href: "/programs/programmers" },
        { name: "Aashayen Community", href: "/programs/aashayen" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-body">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="font-heading font-extrabold text-2xl text-white tracking-tight block"
            >
              Maa World
              <span className="text-foundation-brand"> Foundation</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Learn Together, Grow Together. Providing free, high-quality
              education to over 500 million students globally by 2026.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono">
              Empowering Minds • Transforming Futures
            </div>
          </div>

          {/* Navigation Columns Links */}
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors block duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal / Collaboration Bar */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p>© {currentYear} Maa World Foundation. All rights reserved.</p>
            <p className="mt-0.5 text-slate-600">
              Education for Everyone & Everywhere 🌍
            </p>
          </div>

          <div className="flex items-center gap-2 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-md">
            <span className="text-slate-500">
              In Technical Collaboration with
            </span>
            <span className="font-heading font-semibold text-slate-300 tracking-tight">
              Chhirolya Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
