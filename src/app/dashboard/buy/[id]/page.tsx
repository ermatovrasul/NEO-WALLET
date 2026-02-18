"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function BuyCryptoDetailPage() {
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
          <span className="text-sm md:text-base font-medium">Купить {id?.toString().toUpperCase()} Coin</span>
        </button>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-end text-[10px] md:text-xs font-bold text-[#4C4C4C] uppercase tracking-wider px-1">
              <label>Сумма к списанию</label>
              <span className="normal-case opacity-60">Баланс: 0.00 BTC</span>
            </div>
            <input 
              type="text" 
              placeholder="Введите сумму" 
              className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 outline-none focus:border-[#E50914]/50 transition-all text-sm md:text-base"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-end text-[10px] md:text-xs font-bold text-[#4C4C4C] uppercase tracking-wider px-1">
              <label>Сумма к зачислению</label>
              <span className="normal-case opacity-60">Баланс: 0.00 BTC</span>
            </div>
            <input 
              type="text" 
              placeholder="Введите сумму" 
              className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 outline-none focus:border-[#E50914]/50 transition-all text-sm md:text-base"
            />
          </div>

          <button className="w-full bg-[#E50914] py-4 rounded-2xl font-bold hover:bg-[#CC0812] transition-all active:scale-[0.98] shadow-lg shadow-red-900/10">
            Продолжить
          </button>
        </div>
      </div>

      <div className="w-full lg:w-80 space-y-4 md:space-y-6">
        <div className="bg-[#151515] rounded-[24px] md:rounded-[32px] p-6 border border-white/5">
          <h3 className="text-[#4C4C4C] text-[10px] md:text-xs font-bold mb-4 md:mb-6 uppercase tracking-widest px-1">Детали сделки</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            <div>
              <p className="text-[#4C4C4C] text-[10px] uppercase font-bold mb-1">Курс</p>
              <p className="font-semibold text-sm">1.00 {id?.toString().toUpperCase()} ≈ 1.0011 USDT</p>
            </div>
            <div>
              <p className="text-[#4C4C4C] text-[10px] uppercase font-bold mb-1">Комиссия</p>
              <p className="font-semibold text-sm">0.10%</p>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-[24px] md:rounded-[32px] p-6 border border-white/5 text-[12px] md:text-[13px] leading-relaxed relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-50" />
          <h3 className="text-green-500 font-bold mb-3 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             Внимание
          </h3>
          <p className="text-[#4C4C4C]">
            Компания Baisanar LLC предупреждает вас, что за точность введенных реквизитов ответственность несет пользователь. Проверяйте данные перед отправкой.
          </p>
        </div>

      </div>
    </div>
  );
}