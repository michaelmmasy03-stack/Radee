import React, { useState } from 'react';
import { MenuItem, Category } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Green Glow',
    description: 'Kale, cucumber, green apple, celery, lemon, and ginger.',
    price: 9.50,
    category: 'Cold Pressed',
    image: 'https://images.unsplash.com/photo-1610970882739-449558ad0c7b?q=80&w=600',
    benefits: ['Detoxifying', 'Energy Boost', 'Skin Glow'],
    isSpecial: true
  },
  {
    id: '2',
    name: 'Sunset Citrus',
    description: 'Orange, turmeric, carrot, and black pepper.',
    price: 8.50,
    category: 'Cold Pressed',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600',
    benefits: ['Immune Support', 'Anti-inflammatory']
  },
  {
    id: '3',
    name: 'Berry Blast',
    description: 'Açai, blueberries, banana, coconut milk, and agave.',
    price: 11.00,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=600',
    benefits: ['Antioxidant Rich', 'Muscle Recovery']
  },
  {
    id: '4',
    name: 'Ginger Shot',
    description: 'Pure ginger root, lemon, and cayenne.',
    price: 4.50,
    category: 'Wellness Shots',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=600',
    benefits: ['Metabolism', 'Immunity']
  },
  {
    id: '5',
    name: 'Vanilla Protein',
    description: 'Plant protein, almond butter, dates, and sea salt.',
    price: 12.00,
    category: 'Protein Shakes',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=600',
    benefits: ['High Protein', 'Post-Workout']
  }
];

const CATEGORIES: Category[] = ['Cold Pressed', 'Smoothies', 'Wellness Shots', 'Protein Shakes'];

export const JuiceMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight">Our Menu</h2>
          <p className="text-stone-400 max-w-md">Every bottle is pressed with love using the finest seasonal produce.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all",
              activeCategory === 'All' ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-500 hover:bg-stone-200"
            )}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all",
                activeCategory === cat ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-500 hover:bg-stone-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.isSpecial && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3 rounded-full">
                    Seasonal
                  </div>
                )}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-xl"
                  >
                    <ShoppingBag size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-medium text-2xl">{item.name}</h3>
                  <span className="font-mono text-emerald-600 font-medium">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.benefits?.map(benefit => (
                    <span key={benefit} className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
