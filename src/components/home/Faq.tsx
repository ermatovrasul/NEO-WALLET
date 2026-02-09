'use client'
import { Plus } from 'lucide-react';

const faqList = [
  'Как пройти верификацию личности?',
  'Для чего нужна верификация аккаунта ?',
  'Как добавить номер телефона ?',
  'Как зарегистрироваться на XBT с помощью электронной почты?'
];

export const FAQ = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-0 relative overflow-hidden">
      
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E50914]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">
          Часто задаваемые вопросы
        </h2>
        
        <div className="border-t border-white/[0.08]">
          {faqList.map((question, index) => (
            <div key={index} className="border-b border-white/[0.08] group">
              <button className="w-full py-7 flex justify-between items-center text-left hover:bg-white/[0.02] px-2 transition-all duration-300">
                <span className="text-[16px] font-medium text-[#A3A3A3] group-hover:text-white transition-colors">
                  {question}
                </span>
                <Plus 
                  className="text-[#4C4C4C] group-hover:text-white group-hover:rotate-90 transition-all duration-300" 
                  size={22} 
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};