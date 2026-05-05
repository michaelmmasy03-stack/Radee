/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { WelcomeHero } from './components/WelcomeHero';
import { JuiceMenu } from './components/JuiceMenu';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

function AppContent() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-emerald-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WelcomeHero />
        
        <JuiceMenu />

        {/* Our Story / About Section */}
        <section id="about" className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=2000" 
                 alt="Juice production" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-600 rounded-full flex items-center justify-center p-8 text-white text-center">
              <p className="font-serif italic text-lg decoration-none">Est. 2024 in the heart of the city.</p>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-emerald-600">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium tracking-tight">Radically simple. <br/>Unexpectedly deep.</h2>
            <p className="text-stone-500 leading-relaxed text-lg">
              At radee juice, we believe that wellness shouldn't be complicated. 
              Our mission is to bring you the highest quality nutrients in their 
              most pure and delicious form. 
            </p>
            <p className="text-stone-500 leading-relaxed text-lg">
              We work directly with local growers to ensure that every fruit 
              and vegetable that enters our kitchen is at its peak of freshness. 
              Cold-pressed means no heat, no oxidation, and no compromise.
            </p>
            <div className="pt-4">
              <button className="h-14 px-8 border border-stone-200 rounded-2xl font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </section>

        {/* Contact / Locations */}
        <section id="locations" className="py-24 border-t border-stone-100">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                 <MapPin size={24} />
               </div>
               <h3 className="font-serif font-medium text-2xl">Visit Us</h3>
               <p className="text-stone-500">123 Wellness Way<br/>Brighton, BN1 1AA</p>
             </div>

             <div className="space-y-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                 <Clock size={24} />
               </div>
               <h3 className="font-serif font-medium text-2xl">Hours</h3>
               <p className="text-stone-500">Mon - Fri: 7am - 7pm<br/>Sat - Sun: 9am - 6pm</p>
             </div>

             <div className="space-y-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                 <Phone size={24} />
               </div>
               <h3 className="font-serif font-medium text-2xl">Say Hello</h3>
               <p className="text-stone-500 underline underline-offset-4">hello@radeejuice.com<br/>+44 (0) 123 456 7890</p>
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-stone-900 py-20 mt-20 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-serif font-bold italic">R</div>
              <span className="text-xl font-serif font-semibold tracking-tight">radee juice</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Fueling your daily glow with radical transparency and organic energy.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-stone-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-500">Shop</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="hover:text-white cursor-pointer transition-colors">Juices</li>
                <li className="hover:text-white cursor-pointer transition-colors">Smoothies</li>
                <li className="hover:text-white cursor-pointer transition-colors">Bowls</li>
                <li className="hover:text-white cursor-pointer transition-colors">Merch</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-500">Support</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-white cursor-pointer transition-colors">Delivery</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-stone-800 text-stone-500 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Radee Juice Co. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
