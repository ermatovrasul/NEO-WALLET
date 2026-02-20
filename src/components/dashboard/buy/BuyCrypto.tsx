"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const cryptoData = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: "$1.0011", balance: "0.000000", value: "$0.00", icon: "B" },
  { id: 2, name: "Ethereum", symbol: "ETH", price: "$1.0011", balance: "0.000000", value: "$0.00", icon: "E" },
  { id: 3, name: "Solana", symbol: "SOL", price: "$1.0011", balance: "0.000000", value: "$0.00", icon: "S" },
  { id: 4, name: "USD Coin", symbol: "USDC", price: "$1.0000", balance: "0.000000", value: "$0.00", icon: "U" },
  { id: 5, name: "Tether", symbol: "USDT", price: "$1.0005", balance: "0.000000", value: "$0.00", icon: "T" },
  { id: 6, name: "Litecoin", symbol: "LTC", price: "$75.24", balance: "0.000000", value: "$0.00", icon: "L" },
];

export default function BuyCryptoContent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoins = cryptoData.filter(coin => 
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full   p-5 md:p-2 shadow-2xl overflow-hidden">
      
      <h1 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight">
        Купить криптовалюту
      </h1>
      
      <div className="relative mb-6 md:mb-4 group">
        <Search 
          className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-[#4C4C4C] group-focus-within:text-[#E50914] transition-colors" 
          size={18} 
        />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск" 
          className="w-full bg-[#0D0D0D] border border-white/5 rounded-[16px] md:rounded-[20px] py-3.5 md:py-4 pl-12 md:pl-14 pr-4 text-white placeholder:text-[#4C4C4C] outline-none focus:border-[#E50914]/40 transition-all text-sm md:text-base"
        />
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto max-h-[500px] pr-1 md:pr-2 custom-scrollbar">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => (
            <div 
              key={coin.id} 
              className="flex flex-col md:grid md:grid-cols-4 items-start md:items-center p-4 rounded-2xl hover:bg-white/[0.03] transition-all border border-white/[0.02] md:border-0 md:border-b last:border-0 group gap-4 md:gap-0"
            >
              <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-[#0D0D0D] border border-white/5 rounded-full flex items-center justify-center font-bold text-[#E50914] text-base md:text-lg group-hover:scale-110 transition-transform shrink-0">
                  {coin.icon}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm md:text-[15px] leading-tight">{coin.name}</div>
                  <div className="text-[10px] text-[#4C4C4C] font-bold uppercase tracking-wider">{coin.symbol}</div>
                </div>
                <div className="md:hidden text-right">
                  <div className="text-white font-medium text-sm">{coin.price}</div>
                  <div className="text-[9px] text-[#4C4C4C] uppercase font-bold">цена</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col">
                <span className="text-white font-medium text-[15px]">{coin.price}</span>
                <span className="text-[11px] text-[#4C4C4C] font-bold uppercase tracking-tight">цена</span>
              </div>

              <div className="flex md:flex flex-row md:flex-col justify-between w-full md:w-auto border-t border-white/5 pt-3 md:pt-0 md:border-0">
                <div className="flex flex-col">
                    <span className="text-white font-medium text-sm md:text-[15px]">{coin.balance}</span>
                    <span className={`text-[10px] md:text-[11px] font-bold uppercase ${coin.value === '$0.00' ? 'text-[#E50914]/80' : 'text-[#34C759]'}`}>
                    {coin.value}
                    </span>
                </div>
                
                <div className="md:hidden flex justify-end items-center">
                    <button 
                    onClick={() => router.push(`/dashboard/buy/${coin.symbol.toLowerCase()}`)}
                    className="bg-[#1A1A1A] text-[#34C759] hover:bg-[#E50914] hover:text-white px-5 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 border border-white/5"
                    >
                    Купить
                    </button>
                </div>
              </div>

              <div className="hidden md:flex justify-end">
                <button 
                  onClick={() => router.push(`/dashboard/buy/${coin.symbol.toLowerCase()}`)}
                  className="bg-[#1A1A1A] text-[#34C759] hover:bg-[#E50914] hover:text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
                >
                  Купить
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-[#4C4C4C]">Ничего не найдено</div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1A1A1A;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E50914;
        }
      `}</style>
    </div>
  );
}