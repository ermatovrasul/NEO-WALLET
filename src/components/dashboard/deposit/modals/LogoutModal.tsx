"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogOut, AlertCircle } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal = ({ isOpen, onClose, onConfirm }: LogoutModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#1A1A1A] border border-white/10 rounded-[32px] w-full max-w-[400px] p-8 relative shadow-2xl"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#E50914]/10 rounded-full flex items-center justify-center text-[#E50914] mb-6">
              <LogOut size={32} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Выход из аккаунта</h3>
            <p className="text-[#A3A3A3] text-sm mb-8">
              Вы уверены, что хотите выйти? Вам придется снова вводить данные для входа.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={onClose}
              className="py-4 rounded-2xl bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              Отмена
            </button>
            <button 
              onClick={onConfirm}
              className="py-4 rounded-2xl bg-[#E50914] text-white font-bold text-sm hover:bg-[#CC0812] transition-all shadow-lg shadow-red-900/20"
            >
              Да, выйти
            </button>
          </div>
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-[#4C4C4C] hover:text-white transition-colors"
          >
            <X size={20}/>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};