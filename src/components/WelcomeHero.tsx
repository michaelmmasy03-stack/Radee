import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Zap, Heart, ArrowRight } from 'lucide-react';

export const WelcomeHero: React.FC = () => {
  return (
    <div className="py-12 md:py-24 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-8">
          <Leaf size={12} />
          100% Organic & Cold-Pressed
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight text-stone-900 mb-8">
          Your daily dose of <br />
          <span className="italic text-emerald-600">vibrant energy.</span>
        </h1>
        
        <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto mb-12">
          Experience the power of nature with our hand-crafted, nutrient-dense 
          juices and smoothies. Freshly pressed to fuel your glow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-10 bg-emerald-600 text-white rounded-2xl flex items-center gap-2 font-medium transition-all hover:bg-emerald-700 shadow-2xl shadow-emerald-200"
          >
            Explore the Menu
            <ArrowRight size={18} />
          </motion.a>
          
          <button className="text-stone-500 font-medium hover:text-stone-900 transition-colors">
            Our Story
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-stone-100">
          <Feature anchor="organic" icon={<Leaf size={20} />} title="Pure Organic" desc="Sourced from local certified organic farms." />
          <Feature anchor="energy" icon={<Zap size={20} />} title="Natural Boost" desc="Clean energy without the mid-day crash." />
          <Feature anchor="health" icon={<Heart size={20} />} title="Immune Support" desc="Packed with vitamins and antioxidants." />
        </div>
      </motion.div>
    </div>
  );
};

const Feature = ({ icon, title, desc, anchor }: { icon: React.ReactNode, title: string, desc: string, anchor: string }) => (
  <div className="text-left group cursor-default">
    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="font-serif font-medium text-xl mb-2">{title}</h3>
    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
  </div>
);
