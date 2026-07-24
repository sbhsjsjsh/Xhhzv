import Link from 'next/link';
import { Moon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Lead Capture Form Section */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl border border-slate-700 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold text-amber-400 mb-4">Find Your Perfect Home</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-md">
                Drop your details and our property experts will get back to you with the best options matching your criteria in Pune.
              </p>
              <div className="flex items-center space-x-6">
                <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-serif font-bold text-white mb-1">5k+</div>
                  <div className="text-sm font-medium text-amber-500 uppercase tracking-wider">Happy Families</div>
                </div>
                <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-serif font-bold text-white mb-1">10k+</div>
                  <div className="text-sm font-medium text-amber-500 uppercase tracking-wider">Properties</div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-6 md:p-8 rounded-2xl shadow-xl space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-1.5 block uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:ring-0 focus:border-amber-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-1.5 block uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:ring-0 focus:border-amber-500 outline-none transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1.5 block uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:ring-0 focus:border-amber-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1.5 block uppercase tracking-wide">I am looking to</label>
                  <select className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:ring-0 focus:border-amber-500 outline-none bg-white transition-colors appearance-none cursor-pointer">
                    <option>Buy a Flat</option>
                    <option>Rent a Flat</option>
                    <option>Sell my Property</option>
                    <option>List for Rent</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-4 px-4 rounded-xl transition-colors shadow-lg hover:shadow-xl mt-2 text-lg">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Moon className="h-8 w-8 text-amber-500 fill-amber-500" />
              <span className="font-serif font-bold text-2xl text-white tracking-tight">Moon Property</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Pune&apos;s most trusted real estate platform. We make finding your perfect home simple, transparent, and enjoyable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#buy" className="hover:text-white transition-colors">Buy Property</Link></li>
              <li><Link href="#rent" className="hover:text-white transition-colors">Rent Property</Link></li>
              <li><Link href="#sell" className="hover:text-white transition-colors">Sell Property</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Post Requirement</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Real Estate News</Link></li>
            </ul>
          </div>

          {/* Top Localities */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Top Localities</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Flats in Baner</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Flats in Wakad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Flats in Hinjewadi</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Flats in Koregaon Park</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Flats in Viman Nagar</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>101, Business Bay, Wellesley Road, Sangamvadi, Pune 411001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>hello@moonproperty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Moon Property. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
