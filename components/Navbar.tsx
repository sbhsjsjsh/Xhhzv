"use client";

import Link from 'next/link';
import { Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Buy', href: '/#buy' },
    { name: 'Rent', href: '/#rent' },
    { name: 'Sell', href: '/#sell' },
    { name: 'Services', href: '/service' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Moon className="h-8 w-8 text-amber-500 fill-amber-500" />
              <span className="font-serif font-bold text-2xl text-slate-900 tracking-tight">Moon Property</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-amber-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md">
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-neutral-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md">
                List Property
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
