"use client"; 
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { LogoutModal } from '@/components/dashboard/deposit/modals/LogoutModal'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); 
  const router = useRouter();

  const handleLogoutConfirm = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans flex flex-col overflow-hidden">
      
      <header className="sticky top-0 z-[110] bg-[#080808]">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden p-2 bg-white/5 rounded-xl text-white hover:bg-white/10"
            >
              <Menu size={24} />
            </button>
            
            <Link href="/dashboard" className="flex items-center gap-2">
               <div className="w-8 h-8 bg-[#E50914] rounded-full flex items-center justify-center text-[8px] font-black italic">NEO</div>
               <span className="font-bold text-sm tracking-tight hidden sm:block">ЛИЧНЫЙ КАБИНЕТ</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-[10px] text-[#4C4C4C] font-bold uppercase">ID: 85421</p>
                <p className="text-[12px] font-bold">User Name</p>
             </div>
             <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center font-bold text-[#E50914]">U</div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        
        <aside className={`
          fixed inset-y-0 left-0 z-[200] w-[300px] bg-[#080808] border-r border-[#1E1E1E]
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:gap-4 lg:p-6 lg:h-[calc(100vh-73px)] lg:sticky lg:top-[73px]
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="lg:hidden flex justify-between items-center p-6 border-b border-white/5 mb-4">
             <span className="font-black italic text-[#E50914]">NEO EXCHANGE</span>
             <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-4 px-4 lg:px-0 h-full">
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-[24px] p-4 ">
              <BalanceCard />
            </div>
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-[24px] p-4 flex-1 flex flex-col">
              <Sidebar onLogoutClick={() => setIsLogoutOpen(true)} />
            </div>
          </div>
        </aside>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[150] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        <main className="flex-1 p-4 lg:p-2 min-w-0">
          <section className="bg-[#121212] border border-[#1E1E1E] rounded-[32px] p-4 lg:p-6 min-h-full">
            {children}
          </section>
        </main>
      </div>

      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={handleLogoutConfirm} 
      />
    </div>
  );
}