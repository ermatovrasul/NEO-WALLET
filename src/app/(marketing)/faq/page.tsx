"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Как пройти верификацию личности?",
    answer: "Для прохождения верификации вам необходимо перейти в настройки профиля, загрузить документ, удостоверяющий личность, и сделать селфи. Процесс обычно занимает от 10 до 30 минут."
  },
  {
    question: "Для чего нужна верификация аккаунта?",
    answer: "Верификация необходима для обеспечения безопасности ваших средств, увеличения лимитов на ввод и вывод, а также для соблюдения международных регуляторных норм."
  },
  {
    question: "Как добавить номер телефона?",
    answer: "Зайдите в раздел 'Безопасность', выберите 'Привязать номер' и введите код из SMS, который придет на ваш номер."
  },
  {
    question: "Как зарегистрироваться на XBT с помощью электронной почты?",
    answer: "Нажмите кнопку 'Регистрация', введите ваш e-mail, придумайте надежный пароль и подтвердите почту через письмо, которое мы отправим вам."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-32  pb-20 relative overflow-hidden">
      
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[#E50914]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Часто задаваемые вопросы
          </h1>
          <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-2xl">
            Не нашли ответ? Мы собрали подробные инструкции по каждому этапу работы, чтобы ваш опыт был максимально простым.
          </p>
        </div>

        <div className="bg-[#0D0D0D] border border-white/[0.05] rounded-[32px] p-8 md:p-14 mb-12">
            <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-wider">
            Общие вопросы
          </button>
          <button className="px-6 py-2 text-[#4C4C4C] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
            Финансовые вопросы
          </button>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-[24px] transition-all duration-300 ${
                openIndex === index 
                ? "bg-[#151515] border-white/10" 
                : "bg-transparent border-white/[0.05] hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-[15px] md:text-lg font-bold transition-colors ${
                  openIndex === index ? "text-white" : "text-[#4C4C4C]"
                }`}>
                  {item.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#E50914]" : "text-[#4C4C4C]"}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 md:px-8 pb-8 pt-0">
                  <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
}