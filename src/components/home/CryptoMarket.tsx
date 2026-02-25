"use client";
import Image from 'next/image';
import { TrendingUp, TrendingDown,  } from 'lucide-react';
import Link from 'next/link';
import MiniChart from './MiniChart';

const miniCards = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$52,291', change: '+0.25%', image: '/icon/Vector 10.png' },
  { name: 'Ethereum', symbol: 'ETH', price: '$52,291', change: '+0.25%', image: '/icon/Vector 10.png' },
  { name: 'Solana', symbol: 'SOL', price: '$52,291', change: '-0.25%', image: '/icon/Vector 10 (1).png' },
  { name: 'Bitcoin', symbol: 'BTC', price: '$52,291', change: '+0.25%', image: '/icon/Vector 10.png' },
];

const cryptoList = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$84002.45', volume: '+0.05$', trend: 'down' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$84002.45', volume: '+0.05$', trend: 'up' },
  { id: 3, name: 'Bitcoin', symbol: 'BTC', price: '$84002.45', volume: '+0.05$', trend: 'down' },
  { id: 4, name: 'Ethereum', symbol: 'ETH', price: '$84002.45', volume: '+0.05$', trend: 'up' },
];

export const CryptoMarket = () => {
  return (
    <section className="py-10 md:py-20 max-w-7xl mx-auto px-4 md:px-0">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {miniCards.map((item, idx) => (
          <div key={idx} className="bg-[#151515] border border-white/[0.05] p-5 rounded-[24px] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/[0.05]">
                    <span className="text-primary font-bold text-sm">₿</span>
                  </div>
                  <span className="font-bold text-[14px] text-white">{item.name}</span>
                  <span className="text-[10px] text-[#4C4C4C] font-bold uppercase">{item.symbol}</span>
                </div>
                <div className="text-[16px] font-bold text-white mt-1">{item.price}</div>
                <div className={`text-[11px] font-bold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change}
                </div>
              </div>
            </div>
            <div className="w-16 h-8">
              <MiniChart isUp={item.change.startsWith('+')} />
            </div>
          </div>
        ))} 
      </div>

      <div className="bg-[#0D0D0D] border border-white/[0.05] rounded-[24px] md:rounded-[32px] p-4 md:p-10 shadow-xl">
        <div className="max-w-2xl mb-8 md:mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Популярные криптовалюты</h2>
          <p className="text-[#A3A3A3] text-xs md:text-sm leading-relaxed">
            Будьте в курсе изменений курса топовых активов 24/7.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-5 text-[#4C4C4C] text-[11px] font-bold uppercase tracking-[0.1em] px-6 mb-6">
          <div className="col-span-1">Торговая пара</div>
          <div>Цена</div>
          <div>Объем 24ч</div>
          <div className="text-center">Рынок</div>
          <div className="text-right">Действие</div>
        </div>

        <div className="space-y-3">
          {cryptoList.map((coin) => (
            <div 
              key={coin.id} 
              className="flex flex-col md:grid md:grid-cols-5 items-center border border-white/[0.05] bg-white/[0.01] p-5 rounded-[24px] hover:bg-white/[0.03] transition-all"
            >
              
              <div className="flex items-center justify-between w-full md:w-auto md:col-span-1 mb-4 md:mb-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/[0.05]">
                    <span className="text-primary text-sm font-bold">{coin.symbol === 'BTC' ? '₿' : 'Ξ'}</span>
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-white leading-none">{coin.name}</div>
                    <div className="text-[10px] text-[#4C4C4C] font-bold mt-1 uppercase">{coin.symbol}</div>
                  </div>
                </div>
                <div className="md:hidden text-right">
                  <div className="font-bold text-[14px] text-white">{coin.price}</div>
                  <div className="text-[10px] text-[#00C076] font-bold">{coin.volume}</div>
                </div>
              </div>

              <div className="hidden md:block font-bold text-[15px] text-white/90">{coin.price}</div>

              <div className="hidden md:block font-bold text-[15px] text-[#A3A3A3]">{coin.volume}</div>

              <div className="hidden md:flex justify-center">
                {coin.trend === 'up' ? 
                  <TrendingUp className="text-[#00C076] opacity-60" size={20} /> : 
                  <TrendingDown className="text-red-500 opacity-60" size={20} />
                }
              </div>

              <div className="flex gap-2 w-full md:w-auto md:justify-end">
                <Link href="/dashboard/buy"><button className="flex-1 md:flex-none bg-white/[0.05] md:bg-[#1A1A1A] hover:bg-[#252525] text-white px-5 py-3 rounded-xl text-[13px] font-bold transition-all border border-white/[0.05]">
                  Купить
                </button></Link>
                <Link href="/dashboard/sell"><button className="flex-1 md:flex-none border border-[#00C076]/30 hover:bg-[#00C076]/10 text-[#00C076] px-5 py-3 rounded-xl text-[13px] font-bold transition-all">
                  Продать
                </button></Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};