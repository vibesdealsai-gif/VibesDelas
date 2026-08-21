'use client';

import { motion } from 'motion/react';
import { Smartphone, Shirt, Coffee, Sparkles, Car, Gamepad2, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Electronics & Gadgets', icon: Smartphone, desc: 'Phones, laptops, accessories', color: 'text-blue-600' },
  { id: 2, name: 'Fashion & Clothing', icon: Shirt, desc: 'Trendy apparel, shoes', color: 'text-pink-500' },
  { id: 3, name: 'Home & Kitchen', icon: Coffee, desc: 'Appliances, decor', color: 'text-orange-500' },
  { id: 4, name: 'Beauty & Personal Care', icon: Sparkles, desc: 'Skincare, makeup', color: 'text-purple-500' },
  { id: 5, name: 'Automobile Accessories', icon: Car, desc: 'Car tech, care products', color: 'text-slate-700' },
  { id: 6, name: 'Gaming', icon: Gamepad2, desc: 'Consoles, PC parts', color: 'text-green-500' },
  { id: 7, name: 'Bags & Travel', icon: Briefcase, desc: 'Luggage, backpacks', color: 'text-amber-600' },
  { id: 8, name: 'Trending Products', icon: TrendingUp, desc: 'Hottest items right now', color: 'text-red-500' },
];

export default function Categories() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-xl font-bold mb-4 text-slate-900">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href="#" className="group block h-full">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-600/20 transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 bg-slate-100 group-hover:bg-white rounded-lg flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight text-slate-900 text-center">
                    {category.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
