"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, UserPlus } from 'lucide-react'; 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  { name: 'Новости', path: '/news' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Контакты', path: '/contacts' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;

  return (
    <>
      <header className="fixed top-6 w-full z-[100] px-4">
        <div className="max-w-7xl mx-auto h-[76px] bg-[#151515]/80 backdrop-blur-xl border border-white/[0.05] rounded-[24px] px-6 flex justify-between items-center shadow-2xl relative">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#E50914] rounded-full flex items-center justify-center text-[10px] font-black text-white italic transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
              NEO
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  href={item.path} 
                  className={`text-[12px] font-bold transition-all duration-300 uppercase tracking-widest ${
                    isActive ? "text-[#E50914]" : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              href="/register" 
              className="hidden lg:block bg-[#E50914] hover:bg-[#CC0812] text-white px-7 py-3 rounded-2xl text-[13px] font-bold transition-all"
            >
              Регистрация
            </Link>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="p-3 bg-white/5 rounded-2xl text-white lg:hidden hover:bg-white/10 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[#0D0D0D] border-l border-white/[0.05] z-[120] lg:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="w-9 h-9 bg-[#E50914] rounded-full flex items-center justify-center text-[10px] font-black text-white italic">NEO</div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-[#4C4C4C] hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center justify-between text-[14px] font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {item.name} <ChevronRight size={16} className="text-[#4C4C4C]" />
                  </Link>
                ))}
              </nav>

              <div className="pt-8 border-t border-white/[0.05]">
                <Link 
                  href="/register" 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#E50914] hover:bg-[#CC0812] text-white py-4 rounded-2xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(229,9,20,0.15)]"
                >
                  <UserPlus size={18} />
                  Регистрация
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};