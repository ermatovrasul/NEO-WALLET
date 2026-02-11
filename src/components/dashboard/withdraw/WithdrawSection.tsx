"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Landmark, Info, CheckCircle2, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'crypto', label: 'Криптовалюты' },
  { id: 'bank', label: 'Банк' },
];

const cryptoMethods = [
  { id: 'btc', name: 'Bitcoin', symbol: '0.00000', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg' },
  { id: 'eth', name: 'Ethereum', symbol: '0.00000', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' },
  { id: 'sol', name: 'Solana', symbol: '0.00000', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg' },
];

export const WithdrawSection = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  return (
    <section className="bg-[#151515] border border-white/[0.05] rounded-[32px] p-8">
      <h2 className="text-white text-xl font-bold mb-8">Пополнить баланс</h2>

      <div className="flex gap-2 mb-8 bg-black/40 p-1 rounded-2xl w-fit border border-white/[0.02]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all ${
              activeTab === tab.id ? "bg-[#262626] text-white shadow-xl" : "text-[#4C4C4C] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeTab === 'crypto' ? (
          cryptoMethods.map((coin) => (
            <motion.div
              key={coin.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMethod({ ...coin, type: 'crypto' })}
              className="bg-black/20 border border-white/[0.05] p-6 rounded-[24px] cursor-pointer hover:border-[#E50914]/40 transition-all text-center"
            >
              <img src={coin.icon} alt="" className="w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white text-sm font-bold">{coin.name}</h4>
              <p className="text-[#4C4C4C] text-[11px] mt-1">{coin.symbol}</p>
            </motion.div>
          ))
        ) : (
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedMethod({ type: 'bank' })}
            className="bg-black/20 border border-white/[0.05] p-6 rounded-[24px] cursor-pointer hover:border-[#E50914]/40 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center">
                <Landmark size={20} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase">KGS</h4>
                <p className="text-[#00C076] text-[11px] font-bold">0.00%</p>
                <p className="text-[#4C4C4C] text-[10px] mt-2 leading-tight">Вывод на банковский счет в любой банк KGS — 0%</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {selectedMethod && (
          <WithdrawModal 
            method={selectedMethod} 
            onClose={() => setSelectedMethod(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const WithdrawModal = ({ method, onClose }: { method: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1A1A1A] border border-white/10 w-full max-w-[500px] rounded-[32px] overflow-hidden relative"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-white font-bold">
            {method.type === 'bank' ? 'Вывод на банковский счет' : `Вывести ${method.name}`}
          </h3>
          <button onClick={onClose} className="text-[#4C4C4C] hover:text-white"><X size={20}/></button>
        </div>

        <div className="p-6 space-y-6">
          {method.type === 'bank' && (
            <div className="grid grid-cols-2 gap-4 bg-black/20 p-4 rounded-2xl border border-white/5 text-[11px]">
               <div><p className="text-[#4C4C4C]">Минимальная сумма</p><p className="text-white font-bold">10.00 KGS</p></div>
               <div><p className="text-[#4C4C4C]">Максимальная сумма</p><p className="text-white font-bold">100000.00 KGS</p></div>
               <div><p className="text-[#4C4C4C]">Комиссия</p><p className="text-white font-bold">0.00%</p></div>
               <div><p className="text-[#4C4C4C]">Курс</p><p className="text-[#00C076] font-bold">1.00 USDT = 88.40 KGS</p></div>
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] text-[#4C4C4C] font-bold uppercase ml-2">Сумма к списанию {method.type === 'crypto' ? 'USDT' : 'USDT'}</label>
              <input type="text" placeholder="Введите сумму" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] text-[#4C4C4C] font-bold uppercase ml-2">Сумма к зачислению {method.type === 'bank' ? 'KGS' : method.name}</label>
              <input type="text" placeholder="Введите сумму" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-[#4C4C4C] font-bold uppercase ml-2">{method.type === 'bank' ? 'Введите банковский счет' : 'Введите адрес кошелька'}</label>
              <input type="text" placeholder="Введите реквизиты" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
            </div>

            {method.type === 'bank' && (
               <div className="space-y-2">
                 <label className="text-[10px] text-[#4C4C4C] font-bold uppercase ml-2">Введите БИК банка</label>
                 <input type="text" placeholder="Введите БИК банка" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
               </div>
            )}
          </div>

          <button className="w-full bg-[#E50914] text-white py-4 rounded-2xl font-bold hover:bg-[#CC0812] transition-all">
            Продолжить
          </button>
        </div>
      </motion.div>
    </div>
  );
};