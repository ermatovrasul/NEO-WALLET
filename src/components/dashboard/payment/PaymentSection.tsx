'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const SERVICES_DATA = {
  banks: [
    { id: 'mbank', name: 'Счет Mbank', commission: '0.4%', icon: '/icon/mbank.png' },
    { id: 'optima', name: 'Счет Optima банка', commission: '0.5%', icon: '/icon/optima.png' },
    { id: 'bakai', name: 'Bakai по номеру телефона', commission: '0%', icon: '/icon/bakai.png' },
    { id: 'bakai2', name: 'Bakai по номеру телефона', commission: '0%', icon: '/icon/bakai.png' },
    { id: 'bakai3', name: 'Bakai по номеру телефона', commission: '0%', icon: '/icon/bakai.png' },
    { id: 'bakai4', name: 'Bakai по номеру телефона', commission: '0%', icon: '/icon/bakai.png' },
  ],
  mobile: [
    { id: 'beeline', name: 'Билайн', commission: '0%', icon: '/icon/beeline.png' },
    { id: 'o', name: 'О! - 3 KGS', commission: '0%', icon: '/icon/o.png' },
    { id: 'megacom', name: 'Мегаком', commission: '0%', icon: '/icon/mega.png' },
  ]
};

export default function PaymentSection() {
  const [step, setStep] = useState<'categories' | 'services' | 'form'>('categories');
  const [category, setCategory] = useState<'banks' | 'mobile' | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [amount, setAmount] = useState<string>('');

  const handleCategorySelect = (cat: 'banks' | 'mobile') => {
    setCategory(cat);
    setStep('services');
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setStep('form');
  };

  const goBack = () => {
    if (step === 'form') setStep('services');
    else if (step === 'services') setStep('categories');
  };

  return (
    <section className="bg-[#161616] rounded-[24px] md:rounded-3xl border border-white/5 p-4 md:p-8 min-h-[450px]">
      
      <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-500 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap pb-2">
        <button onClick={goBack} className="hover:text-white transition shrink-0">
          Оплата услуг
        </button>
        {category && <span className="shrink-0">— {category === 'banks' ? 'Банковские услуги' : 'Мобильная связь'}</span>}
        {selectedService && <span className="shrink-0 text-gray-300">— {selectedService.name}</span>}
      </div>

      {step === 'categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <CategoryCard 
            title="Банковские услуги, кошельки" 
            count="21 услуга" 
            icon="/icon/Group 16.png"
            onClick={() => handleCategorySelect('banks')}
          />
          <CategoryCard 
            title="Мобильная связь" 
            count="3 услуги" 
            icon="/icon/Group 17.png"
            onClick={() => handleCategorySelect('mobile')}
          />
        </div>
      )}

      {step === 'services' && category && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <input 
            type="text" 
            placeholder="Поиск услуги..." 
            className="w-full bg-[#0D0D0D] border border-white/5 p-4 rounded-2xl text-sm outline-none focus:border-red-900/50 transition-all"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] md:max-h-none overflow-y-auto pr-1 custom-scrollbar">
            {SERVICES_DATA[category].map((s) => (
              <div 
                key={s.id}
                onClick={() => handleServiceSelect(s)}
                className="bg-[#1C1C1C] p-4 rounded-2xl cursor-pointer hover:bg-[#252525] border border-transparent hover:border-white/5 transition flex items-center justify-between md:flex-col md:items-start md:gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative shrink-0">
                    <Image src={s.icon} alt={s.name} fill className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-white">{s.name}</span>
                </div>
                <span className="text-[10px] text-gray-500 bg-black/30 px-2 py-1 rounded-md">
                  Комиссия: {s.commission}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 'form' && selectedService && (
        <div className="flex flex-col lg:flex-row gap-6 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex-1 space-y-5">
            <InputGroup label="Номер телефона / Счет" placeholder="996 XXX XXX XXX" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <InputGroup 
                  label="Сумма к списанию" 
                  type="number" 
                  value={amount} 
                  onChange={(e:any) => setAmount(e.target.value)}
                  placeholder="0.00 С"
               />
               <InputGroup 
                  label="Сумма к зачислению" 
                  type="number" 
                  value={amount}
                  placeholder="0.00 С"
                  disabled
               />
            </div>

            <button className="w-full bg-[#A33939] hover:bg-red-700 py-4 rounded-2xl font-bold text-white transition-all active:scale-[0.98] shadow-lg shadow-red-900/10">
              Продолжить
            </button>
          </div>

          <div className="w-full lg:w-72 space-y-3">
            <div className="bg-red-900/5 border border-red-900/10 p-4 rounded-2xl">
              <p className="text-red-500 text-[11px] font-bold mb-1 uppercase tracking-wider">⚠️ Важно</p>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Напоминание о безотзывных трансферах. Компания Baisanar LLC предупреждает вас...
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-4 rounded-2xl text-[11px] space-y-3 border border-white/5">
              <div className="flex justify-between text-gray-400">
                <span>Мин. сумма:</span> 
                <span className="text-white font-medium">5.00 С</span>
              </div>
              <div className="flex justify-between text-gray-400 border-t border-white/5 pt-2">
                <span>Комиссия:</span> 
                <span className="text-white font-medium">{selectedService.commission}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CategoryCard({ title, count, icon, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 bg-[#1C1C1C] p-4 md:p-6 rounded-2xl cursor-pointer hover:border-white/10 border border-transparent transition-all active:scale-[0.98]"
    >
      <Image src={icon} alt={title} width={40} height={40} className="shrink-0" />
      <div>
        <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
        <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{count}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-1">{label}</label>
      <input 
        {...props}
        className="w-full bg-[#0D0D0D] border border-white/5 p-4 rounded-2xl text-sm text-white outline-none focus:border-[#A33939] transition-all placeholder:text-gray-700 disabled:opacity-50"
      />
    </div>
  );
}