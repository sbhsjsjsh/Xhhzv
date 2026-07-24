import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Key, Briefcase, Settings, FileText, Banknote, ArrowLeft } from 'lucide-react';

const SERVICES = [
  {
    title: 'Residential Property Sales',
    slug: 'residential-sales',
    description: 'Find your dream home with our curated list of premium flats, villas, and independent houses across top locations in Pune.',
    detailedContent: 'Our residential property sales division focuses on finding you the perfect home in Pune. Whether you are a first-time homebuyer or looking for a luxury villa upgrade, our property experts guide you through the entire process. We offer handpicked listings in premium locations like Baner, Wakad, Koregaon Park, and Viman Nagar, ensuring verified titles and premium amenities.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Residential Rentals',
    slug: 'residential-rentals',
    description: 'Whether you are looking for a cozy studio or a luxury penthouse, we help you find the perfect rental property hassle-free.',
    detailedContent: 'Looking for a flat on rent in Pune? We make the renting process seamless for both tenants and owners. From cozy 1 BHK studios to spacious luxury penthouses, we match you with verified properties. We assist with negotiations, police verification, and preparing registered rent agreements, ensuring a hassle-free move-in experience.',
    icon: Key,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Commercial Real Estate',
    slug: 'commercial',
    description: 'Premium office spaces, retail shops, and commercial plots to help your business grow in prime business districts.',
    detailedContent: 'Set up your business in Pune\'s most sought-after commercial hubs. We specialize in prime office spaces, expansive retail shops, IT park leases, and commercial land acquisitions. Our team provides expert market analysis, ROI projections, and lease negotiation services to secure the best commercial deals for your enterprise.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Property Management',
    slug: 'property-management',
    description: 'End-to-end property management services including tenant screening, rent collection, and regular maintenance.',
    detailedContent: 'For NRIs and out-of-station landlords, our comprehensive property management service takes the stress out of owning real estate. We handle tenant background checks, timely rent collection, regular property inspections, and prompt maintenance repairs, keeping your investment secure and generating consistent returns.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Legal & Documentation',
    slug: 'legal-documentation',
    description: 'Expert legal assistance for property registration, title verification, drafting agreements, and dispute resolution.',
    detailedContent: 'Real estate transactions require meticulous legal oversight. Our in-house legal experts assist you with property title search and verification, drafting of sale deeds, stamp duty calculations, property registration at sub-registrar offices, and resolving property-related legal disputes, ensuring a secure transaction.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Home Loan Assistance',
    slug: 'home-loans',
    description: 'Get the best interest rates with our partner banks. We assist you through the entire loan approval and disbursement process.',
    detailedContent: 'Finance your dream home with ease. We have strategic tie-ups with leading nationalised and private banks in India. Our home loan experts compare interest rates, handle the extensive documentation, and follow up for faster processing and smooth disbursement, ensuring you get the most competitive financing options.',
    icon: Banknote,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
  },
];

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/service" className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                <div className="p-8 md:p-12 text-white">
                  <div className="w-16 h-16 bg-amber-500 text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">{service.title}</h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">About this service</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {service.detailedContent}
              </p>

              <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="relative z-10 max-w-lg">
                  <h3 className="text-3xl font-serif font-bold text-amber-400 mb-3">Ready to get started?</h3>
                  <p className="text-slate-300">
                    Get in touch with our experts to learn more about our {service.title.toLowerCase()} services in Pune.
                  </p>
                </div>
                <div className="relative z-10 w-full md:w-auto flex-shrink-0">
                  <Link href="/#contact" className="inline-block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-lg">
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
