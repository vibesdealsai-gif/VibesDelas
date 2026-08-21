'use client';

import { Check, X } from 'lucide-react';

const compareData = [
  {
    id: 1,
    name: 'Standard Earbuds',
    brand: 'AudioTech',
    price: '$49.99',
    rating: '4.1/5',
    features: ['Bluetooth 5.0', '10h Battery', 'Water Resistant'],
    specs: '10mm Drivers',
    discount: '10% OFF',
    isBestValue: false,
  },
  {
    id: 2,
    name: 'Pro Noise Cancelling',
    brand: 'SoundMaster',
    price: '$99.99',
    rating: '4.8/5',
    features: ['ANC', 'Bluetooth 5.3', '24h Battery', 'Waterproof'],
    specs: '12mm Drivers, Spatial Audio',
    discount: '40% OFF',
    isBestValue: true,
  },
  {
    id: 3,
    name: 'Elite Studio Buds',
    brand: 'StudioPro',
    price: '$199.99',
    rating: '4.5/5',
    features: ['Studio Sound', 'Bluetooth 5.2', '18h Battery'],
    specs: '14mm Drivers, Hi-Res',
    discount: '15% OFF',
    isBestValue: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Compare Before You Buy
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Make an informed decision by comparing features and value across top picks.
          </p>
        </div>

        {/* Mobile: Horizontal scrollable cards. Desktop: Table view */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[800px] flex md:block gap-4 md:gap-0">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-4 gap-4 p-4 border-b border-slate-200 font-bold text-slate-500 text-xs tracking-wider uppercase mb-2">
              <div className="col-span-1">Feature</div>
              {compareData.map(item => (
                <div key={item.id} className="text-center relative">
                  {item.isBestValue && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                      BEST VALUE
                    </div>
                  )}
                  {item.name}
                </div>
              ))}
            </div>

            {/* Rows mapping */}
            <div className="flex md:block gap-4 w-full">
              {/* Mobile Cards */}
              <div className="md:hidden flex gap-4">
                {compareData.map(item => (
                  <div key={`mobile-${item.id}`} className={`min-w-[260px] bg-white rounded-2xl p-5 border ${item.isBestValue ? 'border-blue-600 shadow-sm' : 'border-slate-200 shadow-sm'} relative`}>
                      {item.isBestValue && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                          BEST VALUE
                        </div>
                      )}
                      <h3 className="text-base font-bold text-slate-900 mt-2">{item.name}</h3>
                      <p className="text-slate-500 text-xs mb-3">{item.brand}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-slate-900">{item.price}</span>
                        <span className="bg-red-50 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">{item.discount}</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Rating</span>
                          <span className="font-bold text-slate-900">{item.rating}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Specs</span>
                          <span className="font-semibold text-slate-900 text-right">{item.specs}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-slate-500 block mb-1">Features</span>
                          <ul className="space-y-1">
                            {item.features.map((f, i) => (
                              <li key={i} className="flex items-center gap-1.5 text-slate-700">
                                <Check className="w-3 h-3 text-green-500" /> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                  </div>
                ))}
              </div>

              {/* Desktop Rows */}
              <div className="hidden md:block space-y-1">
                {[
                  { label: 'Brand', key: 'brand' },
                  { label: 'Price', key: 'price' },
                  { label: 'Rating', key: 'rating' },
                  { label: 'Discount', key: 'discount' },
                  { label: 'Specifications', key: 'specs' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 p-3 rounded-lg hover:bg-white transition-colors items-center border border-transparent hover:border-slate-200">
                    <div className="font-semibold text-xs text-slate-600">{row.label}</div>
                    {compareData.map(item => (
                      <div key={item.id} className="text-center font-bold text-sm text-slate-900">
                        {row.key === 'discount' ? (
                          <span className="bg-red-50 text-red-500 px-2 py-1 rounded text-[10px] uppercase">{item[row.key as keyof typeof item]}</span>
                        ) : (
                          item[row.key as keyof typeof item]
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                
                <div className="grid grid-cols-4 gap-4 p-3 items-start">
                  <div className="font-semibold text-xs text-slate-600 mt-1">Features</div>
                  {compareData.map(item => (
                    <div key={item.id} className="space-y-1.5">
                      {item.features.map((f, i) => (
                        <div key={i} className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700">
                           <Check className="w-3 h-3 text-green-500 flex-shrink-0" /> {f}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
