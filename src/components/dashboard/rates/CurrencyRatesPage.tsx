"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const currencyData = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: "$1.0011", icon: "B" },
  { id: 2, name: "Ethereum", symbol: "ETH", price: "$1.0011", icon: "E" },
  { id: 3, name: "Solana", symbol: "SOL", price: "$1.0011", icon: "S" },
  { id: 4, name: "Ethereum", symbol: "ETH", price: "$1.0011", icon: "E" },
  { id: 5, name: "Bitcoin", symbol: "BTC", price: "$1.0011", icon: "B" },
  { id: 6, name: "Solana", symbol: "SOL", price: "$1.0011", icon: "S" },
];

export default function CurrencyRatesPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full animate-in fade-in duration-500 p-2 md:p-0">
      
      <div className="flex-1 bg-[#151515] border border-white/5 rounded-[24px] md:rounded-[40px] p-5 md:p-8 shadow-xl">
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          Курс валют
        </h1>
        
        <div className="space-y-1 md:space-y-2">
          {currencyData.map((item, index) => (
            <div 
              key={index}
              onClick={() => router.push(`/buy/${item.symbol.toLowerCase()}`)}
              className="grid grid-cols-2 items-center p-3 md:p-4 rounded-2xl hover:bg-white/[0.03] active:bg-white/[0.05] cursor-pointer transition-all border-b border-white/[0.02] last:border-0 group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0D0D0D] border border-white/5 rounded-full flex items-center justify-center font-bold text-[#E50914] text-sm md:text-base group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm md:text-[15px] leading-tight">{item.name}</div>
                  <div className="text-[10px] md:text-[11px] text-[#4C4C4C] font-bold uppercase tracking-wider">{item.symbol}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-white font-medium text-sm md:text-base">{item.price}</div>
                <div className="text-[9px] md:text-[11px] text-[#4C4C4C] font-bold uppercase">цена</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-80 bg-[#151515] border border-white/5 rounded-[24px] md:rounded-[32px] p-5 md:p-6 h-fit shadow-xl">
        <h3 className="text-[#4C4C4C] text-[10px] md:text-xs font-bold mb-4 md:mb-6 uppercase tracking-widest">
          Курс обмена
        </h3>
        
        <div className="overflow-hidden">
          <table className="w-full text-left border-separate border-spacing-y-2 md:border-spacing-y-4">
            <thead>
              <tr className="text-[10px] md:text-[11px] text-[#4C4C4C] font-bold uppercase">
                <th className="pb-1">Валюта</th>
                <th className="pb-1">Покупка</th>
                <th className="pb-1 text-right md:text-left">Продажа</th>
              </tr>
            </thead>
            <tbody className="text-white text-xs md:text-sm">
              <tr className="hover:text-[#E50914] transition-colors border-b border-white/5">
                <td className="py-2 font-semibold">USDT/KGS</td>
                <td className="py-2 text-[#34C759]">87.80</td>
                <td className="py-2 text-right md:text-left text-[#E50914]">88.40</td>
              </tr>
              <tr className="hover:text-[#E50914] transition-colors">
                <td className="py-2 font-semibold">USDT/USD</td>
                <td className="py-2 text-[#34C759]">1.00</td>
                <td className="py-2 text-right md:text-left text-[#E50914]">1.02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}