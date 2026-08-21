import type {Metadata} from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vibes Deals | Discover better products. Find better deals.',
  description: 'A premium modern shopping website with subtle 3D depth, clean white surfaces and energetic blue/red branding.',
  openGraph: {
    title: 'Vibes Deals',
    description: 'Discover better products. Find better deals.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibes Deals',
    description: 'Discover better products. Find better deals.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
