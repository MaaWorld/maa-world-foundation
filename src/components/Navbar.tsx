"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Learn First", href: "/programs/learn-first" },
    { name: "Programmers WW", href: "/programs/programmers" },
    { name: "Aashayen", href: "/programs/aashayen" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-heading font-extrabold text-xl text-foundation-blue tracking-tight"
            >
              Maa World
              <span className="text-foundation-brand"> Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-foundation-brand transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contribute"
              className="px-5 py-2 bg-foundation-brand hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay/Dropdown */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-slate-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-5 duration-200`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-foundation-brand hover:bg-slate-50 transition-all"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-slate-100 px-3">
            <Link
              href="/contribute"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-foundation-brand hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
