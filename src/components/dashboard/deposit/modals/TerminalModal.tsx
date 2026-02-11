"use client";
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1A1A1A] border border-white/10 rounded-[40px] w-full max-w-[480px] p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-lg font-bold">Пополнить через "Оной — комиссия 0.6%"</h3>
          <button onClick={onClose}><X size={20} className="text-[#4C4C4C]" /></button>
        </div>

        <p className="text-[#A3A3A3] text-sm mb-6">Комиссия "Оной" 3,5%</p>

        <div className="space-y-3 mb-8">
          {[
            'Вам необходимо в терминале выбрать "Банковские и финансовые услуги"',
            'Выберите услугу "XBT - Пополнение баланса"',
            'Введите следующий реквизит "Укажите номер телефона"'
          ].map((step, index) => (
            <div key={index} className="flex gap-4 bg-white/5 p-4 rounded-2xl items-center border border-white/5">
              <span className="text-[#E50914] font-black text-sm">{index + 1}.</span>
              <p className="text-white text-[12px] font-medium leading-snug">{step}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-[#E50914] text-white py-5 rounded-[20px] font-bold text-sm"
        >
          Закрыть
        </button>
      </motion.div>
    </div>
  );
};