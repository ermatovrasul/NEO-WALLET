import Link from 'next/link';
import { Menu, User } from 'lucide-react'; 
import Image from 'next/image';

export const Header = () => {
  return (
    <header className=" mt-6 w-full z-50 px-4 md:px-0">
      <div className="max-w-7xl mx-auto h-[76px] bg-[#151515]/80 backdrop-blur-xl border border-white/[0.05] rounded-[24px] px-6 flex justify-between items-center shadow-2xl">
        
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#E50914] rounded-full flex items-center justify-center text-[10px] font-black text-white italic transition-transform group-hover:scale-110">
            NEO
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Главная', path: '/' },
            { name: 'О компании', path: '/about' },
            { name: 'Новости', path: '/news' },
            { name: 'Отзывы', path: '/reviews' },
            { name: 'FAQ', path: '/faq' },
            { name: 'Контакты', path: '/contacts' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-[13px] font-bold text-white hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href="/register" 
            className="hidden md:block bg-[#E50914] hover:bg-[#CC0812] text-white px-7 py-3 rounded-2xl text-[13px] font-bold transition-all shadow-lg shadow-red-600/10 active:scale-95"
          >
            Регистрация
          </Link>
          
          <button className="p-3 bg-white/5 rounded-2xl text-white lg:hidden hover:bg-white/10 transition-colors">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
};