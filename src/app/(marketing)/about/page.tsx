import { CreditCard, ShieldCheck, Zap } from 'lucide-react';

export default function AboutAndFeatures() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-32">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight">
          О НАС
        </h2>
        <p className="text-white font-bold text-m uppercase tracking-[0.2em] mb-4">NEO Exchange — это сервис отвечающий даже самым серьезным запросам! NEO Exchange не просто обменка, а самое главное дело в нашей жизни, нам действительно важен каждый наш клиент.</p>
      </div>

      <div className="grid grid-cols-1 bg-[#151515] rounded-[32px] border border-white/[0.05] p-8 lg:grid-cols-1 gap-12 items-start">
        <div className="lg:col-span-4">
          <h3 className="text-3xl font-bold text-white mb-6">Наши преимущества</h3>
          <p className="text-[#A3A3A3] leading-relaxed">
            Наше видение заключается в продвижении свободы денег. Мы верим, что, продвигая эту свободу, мы можем повлиять на качество жизни по всему миру.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="  hover:border-[#E50914]/30 transition-all group">
              <div className='flex items-center gap-2'>
                <div className="w-10 h-10 bg-[#E50914]/10 rounded-2xl flex items-center justify-center text-[#E50914] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-4">{item.title}</h4>
              </div>
              <p className="text-[#4C4C4C] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Разнообразие способов оплаты",
    desc: "Покупайте и продавайте крипту удобным способом — от банковских карт и СБП до популярных электронных кошельков.",
    icon: <CreditCard size={24} />
  },
  {
    title: "Прозрачные комиссии",
    desc: "Никаких скрытых платежей и «сюрпризов» — вы видите финальную сумму сделки еще до нажатия кнопки.",
    icon: <Zap size={24} />
  },
  {
    title: "Безопасность пользователей",
    desc: "Ваши активы под надежной защитой благодаря многоуровневому шифрованию и системе холодного хранения средств.",
    icon: <ShieldCheck size={24} />
  }
];