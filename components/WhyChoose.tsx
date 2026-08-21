'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Tag, ShieldCheck, ShoppingBag } from 'lucide-react';

const reasons = [
  {
    title: 'Hand-Picked Deals',
    desc: 'We discover and highlight useful products and attractive deals.',
    icon: CheckCircle2,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Best Value',
    desc: 'Compare products and prices before making a purchase.',
    icon: Tag,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    title: 'Trusted Products',
    desc: 'Discover products from established online marketplaces.',
    icon: ShieldCheck,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    title: 'Easy Shopping',
    desc: 'Find useful products quickly through organized categories and recommendations.',
    icon: ShoppingBag,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Why Choose Vibes Deals?
          </h2>
          <p className="text-sm text-slate-500">
            We simplify your shopping experience by doing the research for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
