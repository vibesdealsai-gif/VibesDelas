'use client';

import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-600/10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          <div className="relative z-10 flex-1 text-center md:text-left w-full">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-widest">Flash Alert</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Get the Best Deals in Your Inbox
            </h2>
            <p className="text-sm font-bold text-slate-900 leading-tight mb-6 max-w-md">
              Subscribe to Vibes Deals and stay updated with trending products, useful buying guides, and exciting deals. Don't miss our weekly roundup.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md w-full mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-red-500 text-white font-bold text-xs rounded-lg shadow-md hover:bg-red-600 transition-all whitespace-nowrap uppercase"
              >
                Join Newsletter
              </button>
            </form>
          </div>

          {/* 3D Illustration */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 hidden md:flex w-32 h-32 bg-white rounded-[20px] shadow-card border border-slate-100 items-center justify-center transform -rotate-3"
          >
            <div className="absolute inset-2 border border-dashed border-slate-200 rounded-xl"></div>
            <Mail className="w-12 h-12 text-blue-600" />
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full shadow-md border-2 border-white flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
