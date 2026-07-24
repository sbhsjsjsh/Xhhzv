import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Key, Briefcase, Settings, FileText, Banknote } from 'lucide-react';

const SERVICES = [
  {
    title: 'Residential Property Sales',
    slug: 'residential-sales',
    description: 'Find your dream home with our curated list of premium flats, villas, and independent houses across top locations in Pune.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Residential Rentals',
    slug: 'residential-rentals',
    description: 'Whether you are looking for a cozy studio or a luxury penthouse, we help you find the perfect rental property hassle-free.',
    icon: Key,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Commercial Real Estate',
    slug: 'commercial',
    description: 'Premium office spaces, retail shops, and commercial plots to help your business grow in prime business districts.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Property Management',
    slug: 'property-management',
    description: 'End-to-end property management services including tenant screening, rent collection, and regular maintenance.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Legal & Documentation',
    slug: 'legal-documentation',
    description: 'Expert legal assistance for property registration, title verification, drafting agreements, and dispute resolution.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Home Loan Assistance',
    slug: 'home-loans',
    description: 'Get the best interest rates with our partner banks. We assist you through the entire loan approval and disbursement process.',
    icon: Banknote,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2075&auto=format&fit=crop"
            alt="Real Estate Services"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">
            Our <span className="text-amber-400 italic">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your needs. From finding your dream home to managing your investments, we are here to help.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 flex-1 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <Link href={`/service/${service.slug}`} className="text-slate-900 font-bold hover:text-amber-600 transition-colors flex items-center text-sm uppercase tracking-wider w-max">
                        Learn More 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why Choose <span className="text-amber-400">Moon Property</span>?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                With over a decade of experience in the Pune real estate market, we bring unparalleled expertise, transparency, and dedication to every transaction.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Extensive portfolio of verified properties',
                  'Transparent dealing with zero hidden charges',
                  'Dedicated property relationship managers',
                  'End-to-end assistance from site visit to registration'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Office"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-amber-500 text-slate-900 p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-serif font-bold mb-2">15+</div>
                <div className="font-bold uppercase tracking-wider text-sm">Years of Trust & Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
