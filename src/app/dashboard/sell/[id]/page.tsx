"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function SellCryptoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id; 

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 text-white w-full p-2 md:p-0">
      
      <div className="flex-1 bg-[#151515] rounded-[24px] md:rounded-[32px] p-5 md:p-8 border border-white/5 shadow-xl">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-[#4C4C4C] hover:text-white mb-6 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm md:text-base font-medium">Продать {id?.toString().toUpperCase()} Coin</span>
        </button>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-end text-[10px] md:text-xs font-bold text-[#4C4C4C] uppercase tracking-wider px-1">
              <label>Сумма к списанию</label>
              <span className="normal-case opacity-60">Баланс: 0.00 {id?.toString().toUpperCase()}</span>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="0.00" 
                className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 outline-none focus:border-[#E50914]/50 transition-all text-sm md:text-base"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#E50914] cursor-pointer hover:opacity-80">МАКС</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end text-[10px] md:text-xs font-bold text-[#4C4C4C] uppercase tracking-wider px-1">
              <label>Сумма к зачислению</label>
              <span className="normal-case opacity-60">≈ 0.00 USDT</span>
            </div>
            <input 
              type="text" 
              placeholder="0.00" 
              className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 outline-none focus:border-[#E50914]/50 transition-all text-sm md:text-base"
            />
          </div>

          <button className="w-full bg-[#E50914] py-4 rounded-2xl font-bold hover:bg-[#CC0812] transition-all active:scale-[0.98] shadow-lg shadow-red-900/10">
            Продолжить продажу
          </button>
        </div>
      </div>

      <div className="w-full lg:w-80 space-y-4">
        
        <div className="bg-[#151515] rounded-[24px] md:rounded-[32px] p-6 border border-white/5">
          <h3 className="text-[#4C4C4C] text-[10px] md:text-xs font-bold mb-5 uppercase tracking-widest">Информация</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div>
              <p className="text-[#4C4C4C] text-[10px] uppercase font-bold mb-1">Текущий курс</p>
              <p className="font-semibold text-sm">1 {id?.toString().toUpperCase()} ≈ 1.0011 $</p>
            </div>
            <div>
              <p className="text-[#4C4C4C] text-[10px] uppercase font-bold mb-1">Комиссия</p>
              <p className="font-semibold text-sm">0.10%</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-[24px] md:rounded-[32px] p-6 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50" />
          <h3 className="text-green-500 text-[12px] font-bold mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Безопасность
          </h3>
          <p className="text-[#4C4C4C] text-[11px] md:text-[12px] leading-relaxed font-medium">
            Проверьте адрес кошелька зачисления. Транзакции в блокчейне необратимы. Компания Baisanar LLC не несет ответственности за ошибки в реквизитах.
          </p>
        </div>

      </div>
    </div>
  );
}