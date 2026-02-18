'use client'
import Image from 'next/image';
import React from 'react';

export default function PersonalData() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
      
      <div className="flex-1 space-y-8">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-sm font-medium text-gray-200">Фото профиля и данные</h3>
          <div className="relative group">
            <div className="w-24 h-24 bg-[#1C1C1C] rounded-full flex items-center justify-center border border-[#262626] overflow-hidden">
              <span className="text-4xl grayscale opacity-30">👤</span>
            </div>
            <button className="mt-3 text-[#A33939] text-[12px] flex items-center gap-1.5 hover:brightness-125 transition-all mx-auto font-medium">
              Изменить фото 
              <Image src="/icon/edit-2.png" alt="Edit" width={14} height={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <InputGroup label="Имя" defaultValue="Райан" />
          <InputGroup label="Фамилия" defaultValue="Гослинг" />
          <InputGroup label="Почта" defaultValue="neowallet@gmail.com" type="email" />
          <InputGroup label="Номер телефона" defaultValue="996 000 000 000" />
        </div>

        <button className="w-full bg-[#A33939] hover:bg-[#8e3131] py-4 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] text-white shadow-lg shadow-red-900/10">
          Сохранить изменения
        </button>
      </div>

      <div className="w-full lg:w-[1px] h-[1px] lg:h-auto bg-[#262626]" />

      <div className="w-full lg:w-[320px] space-y-6">
        <h3 className="text-sm font-medium text-gray-200">Изменить пароль</h3>
        
        <div className="space-y-4">
          <InputGroup label="Текущий пароль" type="password" placeholder="***********" />
          <InputGroup label="Новый пароль" type="password" placeholder="***********" />
          <InputGroup label="Повторите новый пароль" type="password" placeholder="***********" />
        </div>

        <button className="w-full bg-[#1C1C1C] border border-[#262626] hover:bg-[#262626] py-4 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] text-white">
          Обновить пароль
        </button>
      </div>

    </div>
  );
}

function InputGroup({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-bold ml-1">
        {label}
      </label>
      <input 
        {...props}
        className="bg-[#0D0D0D] border border-[#262626] p-4 rounded-2xl outline-none text-sm text-white placeholder:text-gray-800 transition-all duration-200 
                   focus:border-[#A21427] focus:ring-1 focus:ring-[#A21427]/30 w-full" 
      />
    </div>
  );
}