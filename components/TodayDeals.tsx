'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noise Cancelling Wireless Earbuds Pro',
    desc: 'Premium sound with active noise cancellation.',
    image: 'https://picsum.photos/seed/earbuds/400/400',
    rating: 4.8,
    reviews: 1245,
    originalPrice: 199.99,
    price: 99.99,
    discount: 50,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch Series 5',
    desc: 'Track your health, workouts, and notifications.',
    image: 'https://picsum.photos/seed/watch/400/400',
    rating: 4.6,
    reviews: 892,
    originalPrice: 149.99,
    price: 89.99,
    discount: 40,
  },
  {
    id: 3,
    name: 'Ultra-Slim 4K Monitor 27"',
    desc: 'Stunning visuals for work and entertainment.',
    image: 'https://picsum.photos/seed/monitor/400/400',
    rating: 4.9,
    reviews: 324,
    originalPrice: 349.99,
    price: 249.99,
    discount: 28,
  },
  {
    id: 4,
    name: 'Ergonomic Gaming Mouse',
    desc: 'High precision optical sensor with RGB lighting.',
    image: 'https://picsum.photos/seed/mouse/400/400',
    rating: 4.7,
    reviews: 2156,
    originalPrice: 79.99,
    price: 39.99,
    discount: 50,
  },
];

export default function TodayDeals() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Today&apos;s Best Deals
          </h2>
          <Link
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            View All Deals
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-[20px] border border-slate-200 shadow-card flex gap-4 hover:-translate-y-1 transition-all cursor-pointer group"
            >
              {/* Image Area */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-50 rounded-xl flex items-center justify-center relative flex-shrink-0 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold z-10 shadow-sm">
                  -{product.discount}%
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <h3 className="font-bold text-base mb-1 text-slate-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-amber-400 text-xs">★★★★★</span>
                    <span className="text-slate-500 text-[10px]">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-bold text-slate-900">${product.price}</span>
                    <span className="text-slate-500 text-sm line-through">${product.originalPrice}</span>
                  </div>
                  <button className="w-full bg-blue-50 text-blue-600 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
