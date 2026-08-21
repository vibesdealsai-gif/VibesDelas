import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import TodayDeals from '@/components/TodayDeals';
import Trending from '@/components/Trending';
import WhyChoose from '@/components/WhyChoose';
import PromoBanner from '@/components/PromoBanner';
import Comparison from '@/components/Comparison';
import BuyingGuide from '@/components/BuyingGuide';
import Newsletter from '@/components/Newsletter';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Categories />
        <TodayDeals />
        <Trending />
        <WhyChoose />
        <PromoBanner />
        <Comparison />
        <BuyingGuide />
        <Newsletter />
      </div>
      <AffiliateDisclosure />
      <Footer />
    </main>
  );
}
