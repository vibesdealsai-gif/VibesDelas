'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Tag, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-white to-blue-50 flex items-center">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 border border-blue-100 uppercase tracking-widest"
            >
              Curated Selections
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-4"
            >
              Discover the <span className="text-blue-600">Best Deals</span>.<br />
              Save More.<br />
              Shop Smarter.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed text-balance"
            >
              Find trending products, amazing discounts, and hand-picked deals from trusted online stores.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-2xl shadow-hero-btn hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Deals
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-2xl hover:bg-blue-50 transition-all duration-300"
              >
                Shop Trending
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center gap-6 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Verified Deals</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Daily Updates</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Visual Composition */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center w-full">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl z-0"></div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-4 lg:right-10 w-48 h-60 bg-white rounded-[24px] shadow-hero-card p-4 border border-white flex flex-col items-center justify-center transform rotate-6 z-20"
            >
               <div className="w-32 h-32 bg-slate-100 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                 <Image src="https://picsum.photos/seed/gadget1/200/200" alt="Product" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold absolute -top-2 -right-2 shadow-lg">
                 -40% OFF
               </div>
               <div className="text-center">
                 <p className="font-bold text-sm text-slate-900 line-clamp-1">Ultra Smartphone</p>
                 <p className="text-slate-500 text-xs">Premium Tech</p>
               </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-4 lg:left-10 w-40 h-48 bg-white rounded-[24px] shadow-soft-3d p-4 border border-white flex flex-col items-center justify-center transform -rotate-3 z-30"
            >
               <div className="w-24 h-24 bg-blue-50 rounded-2xl mb-2 flex items-center justify-center relative overflow-hidden">
                 <Image src="https://picsum.photos/seed/watch/200/200" alt="Product" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold absolute top-2 right-2">
                 TRENDING
               </div>
               <div className="text-center">
                 <p className="font-bold text-xs text-slate-900 line-clamp-1">Smart Watch Pro</p>
                 <p className="text-blue-600 text-[10px] font-bold">$299.00</p>
               </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
