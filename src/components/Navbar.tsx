import React from 'react';
import { useAuth } from '../context/AuthContext';
import { loginWithGoogle, auth } from '../lib/firebase';
import { LogOut, User as UserIcon, Shield, CupSoda, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  const { user, profile, loading } = useAuth();

  return (
    <nav className="border-b border-stone-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-serif font-bold italic shadow-lg shadow-emerald-100">
               R
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold tracking-tight leading-none">radee</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-600">juice co.</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest">Menu</a>
            <a href="#about" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest">Our Story</a>
            <a href="#locations" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest">Locations</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></span>
            </button>

            {loading ? (
              <div className="animate-pulse w-8 h-8 rounded-full bg-stone-100" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col items-end mr-1">
                  <span className="text-sm font-medium text-stone-900">{profile?.displayName}</span>
                  <div className="flex items-center gap-1">
                    {profile?.role === 'admin' ? (
                      <Shield size={10} className="text-amber-600" />
                    ) : null}
                    <span className="text-[10px] uppercase font-bold tracking-tighter text-emerald-600">
                      {profile?.loyaltyPoints || 0} pts
                    </span>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center transition-transform hover:scale-105">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon size={18} className="text-stone-400" />
                    )}
                  </button>
                  
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-stone-100 rounded-xl shadow-xl shadow-stone-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                    <div className="p-3 border-b border-stone-50 bg-stone-50/50">
                       <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">Loyalty Club</p>
                       <p className="text-sm font-medium text-stone-900 truncate">{user.email}</p>
                    </div>
                    <button 
                      onClick={() => auth.signOut()}
                      className="w-full h-11 flex items-center gap-2 px-4 text-sm text-stone-600 hover:bg-stone-50 hover:text-red-500 transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => loginWithGoogle()}
                className="h-10 px-5 bg-emerald-600 text-white rounded-full text-sm font-medium transition-all hover:bg-emerald-700 shadow-md shadow-emerald-100"
              >
                Join Rewards
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
