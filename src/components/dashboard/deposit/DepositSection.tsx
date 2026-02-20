"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CryptoModal } from '@/components/dashboard/deposit/modals/CryptoModal';
import { TerminalModal } from '@/components/dashboard/deposit/modals/TerminalModal';
import { SwiftModal } from '@/components/dashboard/deposit/modals/SwiftModal';

const tabs = [
  { id: 'crypto', label: 'Криптовалюты' },
  { id: 'fiat', label: 'Фиат' },
  { id: 'terminal', label: 'Терминалы' },
  { id: 'swift', label: 'Swift' },
];

export const DepositSection = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  const methods = {
    crypto: [
      { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: '/icon/Ellipse 10.png' },
      { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '/icon/Ellipse 11.png' },
      { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: '/icon/Ellipse 10 (1).png' },
    ],
    fiat: [
      { id: 'mbank', name: 'Mbank', desc: '0%, днем в будни', icon: '/icon/mbank.png' },
      { id: 'elqr', name: 'ELQR любой банк КР', desc: '0.6%', icon: '/icon/elqr.png' },
      { id: 'megapay', name: 'MegaPay', desc: '0.5%', icon: '/icon/megapay.png' },
    ],
    terminal: [
      { id: 'onoi', name: 'Оной', desc: 'комиссия 0.6%', icon: '/icon/onoi.png' },
    ],
    swift: [
      { id: 'swift_usd', name: 'Банковский платеж', desc: 'USD/EUR — 0%', icon: '/icon/swift.png' },
    ]
  };

  return (
    <section className=" rounded-[32px] p-2 min-h-[500px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-xl font-bold font-['Inter']">Пополнить баланс</h2>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-white/40 font-bold uppercase">KGS</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-white/40 font-bold uppercase">USD</span>
        </div>
      </div>

      <div className="flex gap-2 mb-8 bg-black/40 p-1.5 rounded-2xl w-fit border border-white/[0.02]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
              activeTab === tab.id ? "bg-[#262626] text-white shadow-xl" : "text-[#4C4C4C] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode='popLayout'>
          {methods[activeTab as keyof typeof methods].map((item: any) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setSelectedMethod(item)}
              className="bg-[#262626] border border-white/[0.05] p-6 rounded-[24px] hover:border-[#E50914]/40 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                   <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                </div>
                {item.symbol && <span className="text-[10px] font-black text-white/20 uppercase">{item.symbol}</span>}
              </div>
              <h4 className="text-white text-sm font-bold mb-1">{item.name}</h4>
              <p className="text-[#4C4C4C] text-[11px] leading-tight">{item.desc || 'Быстрое пополнение'}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedMethod?.id === 'usdt' && <CryptoModal isOpen={true} onClose={() => setSelectedMethod(null)} />}
      {selectedMethod?.id === 'onoi' && <TerminalModal isOpen={true} onClose={() => setSelectedMethod(null)} />}
      {selectedMethod?.id === 'swift_usd' && <SwiftModal isOpen={true} onClose={() => setSelectedMethod(null)} />}
    </section>
  );
};