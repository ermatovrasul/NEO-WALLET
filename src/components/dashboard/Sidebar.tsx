"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { LogoutModal } from '@/components/dashboard/deposit/modals/LogoutModal'; 
import Image from 'next/image';

interface SidebarProps {
  onLogoutClick?: () => void;
}

const menu = [
  { group: 'Основное', items: [
    { name: 'Главная', icon: '/icon/category.png', path: '/dashboard' },
    { name: 'Пополнить', icon: '/icon/add-square.png', path: '/dashboard/deposit' },
    { name: 'Вывести', icon: '/icon/card-receive.png', path: '/dashboard/withdraw' },
    { name: 'Купить', icon: '/icon/trend-up.png', path: '/dashboard/buy' },
    { name: 'Продать', icon: '/icon/trend-down.png', path: '/dashboard/sell' },
    { name: 'Курс валют', icon: '/icon/dollar-square.png', path: '/dashboard/rates' },
  ]},
  { group: 'Дополнительно', items: [
    { name: 'История операций', icon:'/icon/clock.png', path: '/dashboard/history' },
    { name: 'Оплата услуг', icon: '/icon/receipt-2.png', path: '/dashboard/payment' },
    { name: 'Настройки', icon: '/icon/setting-3 (1).png', path: '/dashboard/settings' },
  ]}
];

export const Sidebar = ({ onLogoutClick }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogoutConfirm = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col h-full w-full">
      <nav className="flex-1 flex flex-col gap-6">
        {menu.map((g) => (
          <div key={g.group} className="flex flex-col gap-3">
            <p className="text-[11px] text-[#4C4C4C] font-bold uppercase tracking-widest px-2">
              {g.group}
            </p>
            
            <div className="flex flex-col gap-1.5">
              {g.items.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link 
                    key={item.name} 
                    href={item.path}
                    style={active ? { backgroundColor: '#FF030005', borderColor: '#E8CED9' } : {}}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-[12px] transition-all duration-200 group border ${
                      active 
                      ? "text-white shadow-sm" 
                      : "text-[#7F7F7F] hover:text-[#A3A3A3] border-transparent"
                    }`}
                  >
                    <span className={`${active ? "text-white" : "text-[#4C4C4C] group-hover:text-[#A3A3A3]"}`}>
                      <Image src={item.icon} alt={item.name} width={20} height={20} />
                    </span>
                    <span className="text-[15px] font-medium tracking-tight">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
         <button 
        onClick={onLogoutClick} 
        className="flex items-center gap-3 px-3 py-2.5 text-[#4C4C4C] hover:text-red-500 transition-colors"
      >
        <span>Выйти</span>
      </button>
      </nav>
      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={handleLogoutConfirm} 
      />
    </div>
  );
};