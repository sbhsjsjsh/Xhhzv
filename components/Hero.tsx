"use client";

import { useState } from 'react';
import { Search, MapPin, Home } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Pune Cityscape"
          fill
          className="object-cover brightness-[0.4]"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
          Find Your Dream Home in <span className="text-amber-400 italic">Pune</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto">
          Discover the perfect flat to buy or rent in top localities of Pune like Baner, Wakad, Hinjewadi, and Koregaon Park.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-neutral-200">
            <button
              onClick={() => setActiveTab('buy')}
              className={`pb-3 px-4 font-medium text-lg transition-colors border-b-2 ${
                activeTab === 'buy'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`pb-3 px-4 font-medium text-lg transition-colors border-b-2 ${
                activeTab === 'rent'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Rent
            </button>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter locality (e.g., Baner, Viman Nagar)"
              />
            </div>
            
            <div className="md:w-48 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="h-5 w-5 text-neutral-400" />
              </div>
              <select className="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none appearance-none bg-white transition-all text-slate-700">
                <option value="">Property Type</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk+">4 BHK +</option>
              </select>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 py-4 px-8 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
