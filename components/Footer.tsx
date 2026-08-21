import Link from 'next/link';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-500 text-xs">
      <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link href="#" className="flex items-center gap-2">
            <span className="font-bold text-white text-base">Vibes Deals</span>
          </Link>
          <span>&copy; {currentYear} All Rights Reserved</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors text-white">
            <Facebook className="w-4 h-4" />
          </Link>
          <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors text-white">
            <Twitter className="w-4 h-4" />
          </Link>
          <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors text-white">
            <Instagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
