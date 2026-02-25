"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Landmark } from 'lucide-react';

const tabs = [
  { id: 'crypto', label: 'Криптовалюты' },
  { id: 'bank', label: 'Банк' },
];

const cryptoMethods = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg' },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg' },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.svg' },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.svg' },
];

const WithdrawContent = () => {
  const searchParams = useSearchParams();
  const methodParam = searchParams.get('method');
  const [activeTab, setActiveTab] = useState('crypto');
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  useEffect(() => {
    if (methodParam) {
      const found = cryptoMethods.find(c => c.symbol.toLowerCase() === methodParam.toLowerCase());
      if (found) {
        setSelectedMethod({ ...found, type: 'crypto' });
        setActiveTab('crypto');
      }
    }
  }, [methodParam]);

  return (
    <section className="p-2">
      <h2 className="text-white text-xl font-bold mb-8">Вывести баланс</h2>
      <div className="flex gap-2 mb-8 bg-black/40 p-1 rounded-2xl w-fit border border-white/[0.02]">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all ${activeTab === tab.id ? "bg-[#262626] text-white" : "text-[#4C4C4C]"}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeTab === 'crypto' ? (
          cryptoMethods.map((coin) => (
            <motion.div key={coin.id} whileHover={{ scale: 1.02 }} onClick={() => setSelectedMethod({ ...coin, type: 'crypto' })}
              className={`bg-[#262626] border p-6 rounded-[24px] cursor-pointer text-center ${selectedMethod?.id === coin.id ? 'border-[#E50914]' : 'border-white/[0.05]'}`}>
              <img src={coin.icon} alt="" className="w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white text-sm font-bold">{coin.name}</h4>
            </motion.div>
          ))
        ) : (
          <motion.div whileHover={{ scale: 1.02 }} onClick={() => setSelectedMethod({ type: 'bank' })}
            className="bg-black/20 border border-white/[0.05] p-6 rounded-[24px] cursor-pointer hover:border-[#E50914]/40">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center"><Landmark size={20} /></div>
              <div><h4 className="text-white text-sm font-bold uppercase">KGS</h4><p className="text-[#00C076] text-[11px] font-bold">0.00%</p></div>
            </div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {selectedMethod && <WithdrawModal method={selectedMethod} onClose={() => setSelectedMethod(null)} />}
      </AnimatePresence>
    </section>
  );
};

export const WithdrawSection = () => (<Suspense><WithdrawContent /></Suspense>);

const WithdrawModal = ({ method, onClose }: { method: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1A1A1A] border border-white/10 w-full max-w-[500px] rounded-[32px] overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-white font-bold">{method.type === 'bank' ? 'Вывод на банк' : `Вывести ${method.name}`}</h3>
          <button onClick={onClose} className="text-[#4C4C4C] hover:text-white"><X size={20}/></button>
        </div>
        <div className="p-6 space-y-4">
          <input type="text" placeholder="Введите сумму" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
          <input type="text" placeholder="Введите реквизиты" className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white outline-none focus:border-[#E50914]/50" />
          <button className="w-full bg-[#E50914] text-white py-4 rounded-2xl font-bold">Продолжить</button>
        </div>
      </motion.div>
    </div>
  );
};