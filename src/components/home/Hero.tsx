"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#0D0D0D]">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914]/10 blur-[90px] rounded-full pointer-events-none" />
      
      <motion.div
        animate={{ 
          y: [0, -25, 0], 
          rotate: [0, 15, -10, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute left-[8%] top-40 hidden lg:block opacity-40 blur-[1px] z-0"
      >
        <img 
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
          alt="BTC" 
          className="w-24 h-24 object-contain"
        />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 30, 0], 
          rotate: [0, -20, 10, 0],
          scale: [0.9, 1, 0.9] 
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-[10%] top-60 hidden lg:block opacity-30 blur-[2px] z-0"
      >
        <img 
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
          alt="ETH" 
          className="w-28 h-28 object-contain"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
            Ваша точка входа в <br /> 
              мир криптовалют
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className=""
              />
          </h1>

          <p className="text-[#A3A3A3] text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Мгновенный обмен, безопасное хранение и управление вашими цифровыми активами на лучшей платформе. Начните прямо сейчас.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-[#E50914] text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-lg shadow-red-900/20 overflow-hidden"
            >
              <Link href="/dashboard" className="relative z-10"><span className="relative z-10">Создать кошелек</span></Link>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0D0D0D] to-transparent z-20" />
    </section>
  );
};