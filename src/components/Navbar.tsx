"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Learn First", href: "/programs/learn-first" },
    { name: "Programmers WW", href: "/programs/programmers" },
    { name: "Aashayen", href: "/programs/aashayen" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-heading font-extrabold text-xl text-white tracking-tight block"
            >
              Maa World
              <span className="text-foundation-brand"> Foundation</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contribute"
              className="px-5 py-2 bg-foundation-brand hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              Join Us
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-slate-900 bg-background shadow-2xl`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-slate-900 px-3">
            <Link
              href="/contribute"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-foundation-brand text-white font-medium rounded-lg shadow-sm"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
