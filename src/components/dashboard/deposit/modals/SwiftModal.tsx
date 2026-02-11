"use client";
import { motion } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

export const SwiftModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1A1A1A] border border-white/10 rounded-[40px] w-full max-w-[550px] overflow-hidden shadow-2xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-lg font-bold pr-8">
              Пополнить через "Банковский платеж в валюте USD\EUR — 0%"
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={20} className="text-[#4C4C4C]" />
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-[#4C4C4C]">Комиссия</span>
              <span className="text-white font-bold">0%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#4C4C4C]">Суммы от</span>
              <span className="text-white font-bold">300$</span>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-3xl p-6 text-[12px] text-[#A3A3A3] leading-relaxed">
              Транзакции SWIFT могут поступать в срок до 14 дней. <br /><br />
              Если вы хотите купить криптовалюту со счета в банке — напишите нам в телеграм или позвоните +996000000000
            </div>

            <div className="bg-[#E50914]/10 border border-[#E50914]/20 rounded-2xl p-4 flex gap-3">
              <AlertCircle className="text-[#E50914] shrink-0" size={18} />
              <p className="text-[11px] text-white font-medium">
                Не проводим сделок онлайн в мессенджерах. Только на сайте NEO Wallet.kg
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-[#E50914] hover:bg-[#CC0812] text-white py-5 rounded-[20px] font-bold text-sm transition-all active:scale-[0.98]"
          >
            Закрыть
          </button>
        </div>
      </motion.div>
    </div>
  );
};