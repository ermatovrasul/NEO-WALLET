"use client";
import { motion } from 'framer-motion';
import { X, Copy, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
  coin: {
    id: string;
    name: string;
    symbol: string;
    icon: string;
  } | null; 
}

export const CryptoModal = ({ isOpen, onClose, coin }: CryptoModalProps) => {
  const [copied, setCopied] = useState(false);
  
  const address = "0x6852c7557058f4a6fc77686f7A20C426a4a51C39";

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !coin) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#1A1A1A] border border-white/10 rounded-[40px] w-full max-w-[500px] p-8 relative"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-[#4C4C4C] hover:text-white transition-colors">
          <X size={20}/>
        </button>
        
        <div className="flex items-center gap-3 mb-2">
          {coin.icon && <img src={coin.icon} alt={coin.name} className="w-6 h-6 object-contain" />}
          <h3 className="text-xl font-bold text-white">{coin.name} депозитный адрес</h3>
        </div>
        
        <p className="text-[#A3A3A3] text-[13px] mb-8 leading-relaxed">
          Транзакции, отправленные из источников с высоким риском (BestChange, Mixer и др.), могут быть заморожены.
        </p>
        
        <div className="flex justify-center mb-8">
           <div className="w-48 h-48 bg-white p-4 rounded-[32px] flex items-center justify-center shadow-2xl shadow-white/5">
              <div className="w-full h-full bg-black rounded-xl flex flex-col items-center justify-center text-white text-[10px] text-center p-4">
                <Image src="/icon/qrcode.png" alt="QR Code" width={120} height={120} className="mb-2" />
                <span className="text-white/40">{coin.symbol} ONLY</span>
              </div>
           </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-[10px] text-[#4C4C4C] font-black uppercase mb-3 block tracking-widest">Выберите сеть</label>
            <div className="bg-black border border-white/10 p-4 rounded-2xl text-sm font-bold flex justify-between items-center text-white">
              {coin.symbol} (PLASMA) MIN: 5 {coin.symbol} <span className="text-[#4C4C4C] text-[10px]">▼</span>
            </div>
          </div>

          <div>
            <label className="text-[10px] text-[#4C4C4C] font-black uppercase mb-3 block tracking-widest">{coin.name} {coin.symbol} Адрес</label>
            <div className="flex gap-2">
              <input 
                readOnly 
                value={address} 
                className="flex-1 bg-black border border-white/10 p-4 rounded-2xl text-[12px] font-mono text-white/70 outline-none"
              />
              <button 
                onClick={handleCopy}
                className="bg-[#E50914] hover:bg-[#CC0812] px-6 rounded-2xl font-bold text-sm text-white transition-all flex items-center gap-2"
              >
                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                {copied ? "ОК" : "Копия"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};