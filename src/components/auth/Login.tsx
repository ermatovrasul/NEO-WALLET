'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email:'',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Каттоо маалыматтары:", formData);
    
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col justify-center items-center relative overflow-hidden px-6">
      
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#E50914]/15 blur-[120px] rounded-full z-0" />

      <div className="w-full max-w-[420px] relative z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Добро пожаловать!</h1>
        <p className="text-[#4C4C4C] text-sm text-center mb-10">Вход в личный кабинет</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-[#151515] border border-white/[0.05] rounded-[40px] p-6">

          <input 
            type="email" 
            placeholder="Введите e-mail"
            required
            className="w-full bg-[#151515] border border-white/[0.05] rounded-xl px-4 py-3.5 text-white text-[14px] outline-none focus:border-[#E50914]/50 transition-all"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />

          <input 
            type="password" 
            placeholder="Введите пароль"
            required
            className="w-full bg-[#151515] border border-white/[0.05] rounded-xl px-4 py-3.5 text-white text-[14px] outline-none focus:border-[#E50914]/50 transition-all"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <button 
            type="submit"
            className="w-full bg-[#E50914] hover:bg-[#CC0812] text-white font-bold py-4 rounded-xl mt-4 transition-all active:scale-[0.98] shadow-lg shadow-red-900/20"
          >
            Войти
          </button>
          <div className="mt-8 text-center text-[13px]">
          <span className="text-[#4C4C4C]">Забыли пароль? </span>
        </div>
        </form>
      </div>
    </div>
  );
}