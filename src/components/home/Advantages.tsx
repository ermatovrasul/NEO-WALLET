import { ShieldCheck, Zap, CreditCard } from 'lucide-react';

const advantages = [
  {
    title: 'Разнообразие способов оплаты',
    desc: 'Покупайте и продавайте крипту удобным способом — от банковских карт и СБП до популярных электронных кошельков.',
    icon: <CreditCard size={18} className="text-[#E50914]" />
  },
  {
    title: 'Прозрачные комиссии',
    desc: 'Никаких скрытых платежей и «сюрпризов» — вы видите финальную сумму сделки еще до нажатия кнопки.',
    icon: <Zap size={18} className="text-[#E50914]" />
  },
  {
    title: 'Безопасность пользователей',
    desc: 'Ваши активы под надежной защитой благодаря многоуровневому шифрованию и системе холодного хранения средств.',
    icon: <ShieldCheck size={18} className="text-[#E50914]" />
  }
];

export const Advantages = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-6 md:px-0">
      <div className="bg-[#151515] border border-white/[0.05] rounded-[40px] p-8 md:p-12">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши преимущества
          </h2>
          <p className="text-white text-[15px] leading-relaxed">
            Наше видение заключается в продвижении свободы денег. Мы верим, что, продвигая эту свободу, 
            мы можем значительно повлиять на качество жизни по всему миру.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center">
                  {adv.icon}
                </div>
                <h3 className="text-[16px] font-bold text-white leading-tight">
                  {adv.title}
                </h3>
              </div>
              
              <p className="text-white text-[13px] leading-[1.6]">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};