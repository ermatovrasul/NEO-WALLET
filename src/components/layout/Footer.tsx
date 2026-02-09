import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] pt-20 pb-10 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <div className="flex  flex-col gap-2 mb-4">
              <Image src="/logo (1).png" alt="NEO Wallet Logo" width={42} height={42} />
              <span className="text-xl font-bold text-white tracking-tight">NEO Wallet</span>
            </div>
            <p className="text-[#4C4C4C] text-[13px] leading-relaxed max-w-[240px]">
              Ваша точка входа в мир криптовалют.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-6">Быстрые ссылки</h4>
              <ul className="space-y-3">
                {['Главная', 'О компании', 'Новости', 'Вопросы/Ответ', 'Контакты'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white text-[13px] hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-6">Регистрация</h4>
              <ul className="space-y-3">
                {['Регистрация', 'Войти в личный кабинет', 'Забыли пароль?'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white text-[13px] hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-6">Условия использования</h4>
              <ul className="space-y-3">
                {['Публичная оферта', 'Политика конфиденциальности'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white text-[13px] hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4C4C4C] text-[11px]">
            Все права защищены 2026 © Baisanar LLC
          </p>
          <div className="text-[#4C4C4C] text-[11px]">
            Made with ❤️ by <span className="text-white">TurboDevs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};