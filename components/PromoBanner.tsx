'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Gift } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-sky-400 rounded-3xl p-8 md:p-12 shadow-hero-card flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-sky-300/30 rounded-full blur-2xl"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
            >
              Big Deals.<br />Smart Choices.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-50 text-sm md:text-base mb-6 text-balance"
            >
              Explore our latest product recommendations and discover deals worth checking out. Curated daily for your convenience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-blue-600 bg-white rounded-xl shadow-button-3d hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore All Deals
              </Link>
            </motion.div>
          </div>

          {/* 3D Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="relative z-10 w-full max-w-[280px]"
          >
            <div className="relative aspect-square w-full">
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-3/4 h-3/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] shadow-2xl flex items-center justify-center transform rotate-6"
              >
                 <div className="absolute inset-4 bg-white/20 rounded-[20px] border border-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Gift className="w-16 h-16 text-white drop-shadow-md" />
                 </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-6 -left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="font-bold text-slate-900 text-xs">Save 50%</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 -right-2 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="font-bold text-slate-900 text-xs">Limited Time</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
