"use client";
import { useState, useEffect, Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation'; 
import { motion, AnimatePresence } from 'framer-motion';
import { CryptoModal } from '@/components/dashboard/deposit/modals/CryptoModal';
import { TerminalModal } from '@/components/dashboard/deposit/modals/TerminalModal';
import { SwiftModal } from '@/components/dashboard/deposit/modals/SwiftModal';

// 1. Интерфейстерді анықтаймыз
interface BaseMethod {
  id: string;
  name: string;
  icon: string;
  desc?: string;
}

interface CryptoMethod extends BaseMethod {
  symbol: string;
  balance: string;
  usd: string;
}

type PaymentMethod = CryptoMethod | BaseMethod;

const tabs = [
  { id: 'crypto', label: 'Криптовалюты' },
  { id: 'fiat', label: 'Фиат' },
  { id: 'terminal', label: 'Терминалы' },
  { id: 'swift', label: 'Swift' },
];

export const DepositSection = () => {
  return (
    <Suspense fallback={<div className="text-white">Загрузка...</div>}>
      <DepositContent />
    </Suspense>
  );
};

const DepositContent = () => {
  const searchParams = useSearchParams();
  const methodParam = searchParams.get('method'); 

  const [activeTab, setActiveTab] = useState('crypto');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

  const methods: Record<string, PaymentMethod[]> = {
    crypto: [
      { id: 'btc', name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
      { id: 'eth', name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
      { id: 'sol', name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
      { id: 'usdt', name: 'Tether', symbol: 'USDT', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
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

  useEffect(() => {
    if (methodParam) {
      const allMethods = Object.values(methods).flat();
      const found = allMethods.find(m => 
        m.id === methodParam.toLowerCase() || 
        ('symbol' in m && m.symbol.toLowerCase() === methodParam.toLowerCase()) // 3. 'in' операторымен тексеру
      );
      
      if (found) {
        setSelectedMethod(found);
        if (methods.crypto.some(c => c.id === found.id)) setActiveTab('crypto');
        else if (methods.fiat.some(f => f.id === found.id)) setActiveTab('fiat');
      }
    }
  }, [methodParam]);

  return (
    <section className=" rounded-[32px] p-2 min-h-[500px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-xl font-bold ">Пополнить баланс</h2>
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

      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode='popLayout'>
          {methods[activeTab].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setSelectedMethod(item)}
              className={`bg-[#262626] border p-6 rounded-[24px] hover:border-[#E50914]/40 transition-all cursor-pointer group relative overflow-hidden ${selectedMethod?.id === item.id ? 'border-[#E50914]' : 'border-white/[0.05]'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                   <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                </div>
                {'symbol' in item && <span className="text-[10px] font-black text-white/20 uppercase">{item.symbol}</span>}
              </div>
              <h4 className="text-white text-sm font-bold mb-1">{item.name}</h4>
              <p className="text-[#4C4C4C] text-[11px] leading-tight">{item.desc || 'Быстрое пополнение'}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedMethod && ['btc', 'eth', 'sol', 'usdt'].includes(selectedMethod.id) && (
        <CryptoModal 
            isOpen={true} 
            coin={selectedMethod as CryptoMethod} 
            onClose={() => setSelectedMethod(null)} 
        />
      )}
      {selectedMethod?.id === 'onoi' && <TerminalModal isOpen={true} onClose={() => setSelectedMethod(null)} />}
      {selectedMethod?.id === 'swift_usd' && <SwiftModal isOpen={true} onClose={() => setSelectedMethod(null)} />}
    </section>
  );
};