'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Deals', href: '#' },
    { name: 'Trending', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 h-16 flex items-center'
          : 'bg-white border-b border-slate-200 shadow-sm h-16 flex items-center'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 shadow-icon">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-blue-600">Vibes</span>
            <span className="text-red-500">Deals</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-slate-100 border-none rounded-full py-1.5 px-4 text-sm w-48 focus:ring-2 ring-blue-100 outline-none text-slate-900 placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-button-3d hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hot Deals
          </Link>
          <button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-700 py-2 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
