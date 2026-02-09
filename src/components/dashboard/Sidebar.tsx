"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, PlusCircle, ArrowUpRight, CreditCard, 
  ArrowDownLeft, BarChart3, History, Wallet, Settings, LogOut, Bell
} from 'lucide-react';

const menu = [
  { group: 'Основное', items: [
    { name: 'Главная', icon: <LayoutGrid size={18} />, path: '/dashboard' },
    { name: 'Пополнить', icon: <PlusCircle size={18} />, path: '/dashboard/deposit' },
    { name: 'Вывести', icon: <ArrowUpRight size={18} />, path: '/dashboard/withdraw' },
    { name: 'Купить', icon: <CreditCard size={18} />, path: '/dashboard/buy' },
    { name: 'Продать', icon: <ArrowDownLeft size={18} />, path: '/dashboard/sell' },
    { name: 'Курс валют', icon: <BarChart3 size={18} />, path: '/dashboard/rates' },
  ]},
  { group: 'Дополнительно', items: [
    { name: 'История операций', icon: <History size={18} />, path: '/dashboard/history' },
    { name: 'Оплата услуг', icon: <Wallet size={18} />, path: '/dashboard/services' },
    { name: 'Настройки', icon: <Settings size={18} />, path: '/dashboard/settings' },
  ]}
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-6">
      
      <nav className="flex-1 space-y-6">
        {menu.map((g) => (
          <div key={g.group}>
            <p className="text-[10px] text-[#4C4C4C] font-bold uppercase tracking-widest mb-3 px-2">{g.group}</p>
            <div className="space-y-1">
              {g.items.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link 
                    key={item.name} 
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                      active 
                      ? "bg-white/[0.05] text-white border border-white/[0.05]" 
                      : "text-[#4C4C4C] hover:text-[#A3A3A3]"
                    }`}
                  >
                    <span className={active ? "text-[#E50914]" : ""}>{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 text-[#4C4C4C] hover:text-red-500 transition-colors mt-auto">
        <LogOut size={18} />
        <span className="text-sm font-medium">Выйти</span>
      </button>
    </div>
  );
};