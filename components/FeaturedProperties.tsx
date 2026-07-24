"use client";

import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

const PROPERTIES = [
  {
    id: 1,
    title: 'Luxury 3 BHK in Baner',
    location: 'Baner, Pune',
    price: '₹1.85 Cr',
    type: 'Buy',
    beds: 3,
    baths: 3,
    area: '1550 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern 2 BHK Apartment',
    location: 'Wakad, Pune',
    price: '₹25,000 /mo',
    type: 'Rent',
    beds: 2,
    baths: 2,
    area: '950 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Premium 4 BHK Penthouse',
    location: 'Koregaon Park, Pune',
    price: '₹5.50 Cr',
    type: 'Buy',
    beds: 4,
    baths: 5,
    area: '3200 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 4,
    title: 'Cozy 1 BHK Studio',
    location: 'Hinjewadi, Pune',
    price: '₹16,000 /mo',
    type: 'Rent',
    beds: 1,
    baths: 1,
    area: '550 sq.ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Spacious 2.5 BHK Flat',
    location: 'Viman Nagar, Pune',
    price: '₹1.20 Cr',
    type: 'Buy',
    beds: 3,
    baths: 2,
    area: '1150 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'Semi-Furnished 3 BHK',
    location: 'Kharadi, Pune',
    price: '₹40,000 /mo',
    type: 'Rent',
    beds: 3,
    baths: 3,
    area: '1400 sq.ft',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop',
    featured: false,
  }
];

export default function FeaturedProperties() {
  return (
    <section id="buy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore handpicked flats available for sale and rent in the most sought-after neighborhoods of Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
                    property.type === 'Buy' ? 'bg-slate-900 text-amber-400' : 'bg-slate-800 text-white'
                  }`}>
                    For {property.type}
                  </span>
                  {property.featured && (
                    <span className="bg-amber-500 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white drop-shadow-md">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 truncate group-hover:text-amber-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-slate-500 mb-6">
                  <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0 text-amber-500" />
                  <span className="truncate">{property.location}</span>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-slate-100">
                  <div className="flex items-center text-slate-700">
                    <Bed className="h-5 w-5 mr-2 text-slate-400" />
                    <span className="font-semibold">{property.beds}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Bath className="h-5 w-5 mr-2 text-slate-400" />
                    <span className="font-semibold">{property.baths}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Square className="h-5 w-5 mr-2 text-slate-400" />
                    <span className="font-semibold">{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
