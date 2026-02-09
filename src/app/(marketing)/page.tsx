import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { Advantages } from '@/components/home/Advantages';
import { CryptoMarket } from '@/components/home/CryptoMarket';
import { News } from '@/components/home/News';
import { FAQ } from '@/components/home/Faq';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Advantages />
      <CryptoMarket />
      <News />
      <FAQ />
    </div>
  );
}