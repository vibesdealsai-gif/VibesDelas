import { ShieldAlert } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <div className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="max-w-4xl mx-auto flex gap-3 items-center text-center md:text-left justify-center md:justify-start">
          <ShieldAlert className="w-4 h-4 text-slate-400 flex-shrink-0 hidden md:block" />
          <p className="text-xs text-slate-500">
            <strong className="font-bold text-slate-700">Affiliate Disclosure:</strong> Vibes Deals may earn a commission when you purchase products through our affiliate links.
          </p>
        </div>
      </div>
    </div>
  );
}
