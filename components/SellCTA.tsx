"use client";

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function SellCTA() {
  const benefits = [
    'Reach thousands of potential buyers and tenants',
    'Get professional photography and listing assistance',
    'Dedicated relationship manager',
    'Verified leads only'
  ];

  return (
    <section id="sell" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center z-10 relative text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-400">
                Looking to Sell or Rent Your Flat?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-md">
                List your property on Moon Property and connect with verified buyers and tenants quickly.
              </p>
              
              <ul className="space-y-5 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0" />
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div>
                <button className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] inline-flex items-center">
                  List Your Property Free
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative hidden md:block h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=800&auto=format&fit=crop"
                alt="Modern flat interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
