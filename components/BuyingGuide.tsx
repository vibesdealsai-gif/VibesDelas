'use client';

import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Best Budget Gadgets to Buy in 2026',
    category: 'Electronics',
    excerpt: 'A curated list of high-quality electronics that won\'t break the bank.',
    image: 'https://picsum.photos/seed/gadgets/600/400',
  },
  {
    id: 2,
    title: 'How to Find Genuine Online Deals',
    category: 'Guides',
    excerpt: 'Learn the secrets to spotting fake discounts and securing the best prices.',
    image: 'https://picsum.photos/seed/deal/600/400',
  },
  {
    id: 3,
    title: 'Things to Check Before Buying Online',
    category: 'Tips',
    excerpt: 'A comprehensive checklist to ensure a safe and satisfying online shopping experience.',
    image: 'https://picsum.photos/seed/checklist/600/400',
  },
];

export default function BuyingGuide() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Vibes Deals Buying Guide
            </h2>
            <p className="text-sm text-slate-500">
              Expert advice, product reviews, and shopping tips.
            </p>
          </div>
          <Link
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline hidden md:block"
          >
            Read All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-50">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-auto font-bold text-blue-600 text-[10px] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
