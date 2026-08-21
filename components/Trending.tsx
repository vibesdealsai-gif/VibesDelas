'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const filters = ['All', 'Electronics', 'Fashion', 'Home', 'Gaming', 'Beauty', 'Travel'];

const trendingProducts = [
  { id: 1, name: 'Minimalist Mechanical Keyboard', price: 129.99, rating: 4.9, category: 'Gaming', image: 'https://picsum.photos/seed/keyboard/300/300' },
  { id: 2, name: 'Ceramic Pour-Over Coffee Maker', price: 45.00, rating: 4.8, category: 'Home', image: 'https://picsum.photos/seed/coffee/300/300' },
  { id: 3, name: 'Sustainable Canvas Backpack', price: 85.00, rating: 4.7, category: 'Travel', image: 'https://picsum.photos/seed/bag/300/300' },
  { id: 4, name: 'Hydrating Face Serum', price: 32.50, rating: 4.6, category: 'Beauty', image: 'https://picsum.photos/seed/serum/300/300' },
  { id: 5, name: 'Wireless Charging Stand', price: 29.99, rating: 4.5, category: 'Electronics', image: 'https://picsum.photos/seed/charger/300/300' },
  { id: 6, name: 'Cotton Classic T-Shirt', price: 24.00, rating: 4.8, category: 'Fashion', image: 'https://picsum.photos/seed/shirt/300/300' },
];

export default function Trending() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Trending Products
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-icon'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {trendingProducts.map(product => (
              <div
                key={product.id}
                className="min-w-[240px] max-w-[240px] bg-white rounded-[20px] p-4 border border-slate-200 shadow-card snap-start hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-square rounded-xl bg-slate-50 mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    {product.rating}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="font-bold text-sm text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-slate-900">${product.price}</span>
                    <button className="bg-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
