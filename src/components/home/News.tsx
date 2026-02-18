import Image from 'next/image';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    tag: 'Успейте купить!',
    title: 'Держите руку на пульсе индустрии: ежедневные обновления...',
    date: '14.11.2023 19:26',
    image: '/icon/08.png'
  },
  {
    id: 2,
    tag: 'Успейте купить!',
    title: 'Держите руку на пульсе индустрии: ежедневные обновления...',
    date: '14.11.2023 19:26',
    image: '/icon/09.png'
  },
  {
    id: 3,
    tag: 'Успейте купить!',
    title: 'Держите руку на пульсе индустрии: ежедневные обновления...',
    date: '14.11.2023 19:26',
    image: '/icon/10.png'
  },
  {
    id: 4,
    tag: 'Успейте купить!',
    title: 'Держите руку на пульсе индустрии: ежедневные обновления...',
    date: '14.11.2023 19:26',
    image: '/icon/11.png'
  }
];

export const News = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-0">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Последние новости</h2>
        <p className="text-[#4C4C4C] text-sm">
          Держите руку на пульсе индустрии: ежедневные обновления и эксклюзивные инсайды о главных цифровых активах 24/7.
        </p>
      </div>

      <Link href="/news"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsData.map((item) => (
          <div key={item.id} className="bg-[#151515] border border-white/[0.05] rounded-[24px] p- flex flex-col h-full group cursor-pointer hover:border-white/10 transition-all">
            <div className="relative h-[160px] w-full rounded-[16px] overflow-hidden mb-4 bg-[#1A1A1A]">
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white/10">Image</div>
              <Image src={item.image} alt="news" fill className="object-cover" />
            </div>
            
            <div className="flex flex-col flex-grow p-4">
              <span className="text-[13px] font-bold text-white mb-2">{item.tag}</span>
              <h3 className="text-[13px] text-[#4C4C4C] leading-snug mb-4 line-clamp-3">
                {item.title}
              </h3>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-[11px] text-[#4C4C4C] font-medium">{item.date}</span>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px]">↗</div>
              </div>
            </div>
          </div>
        ))}
      </div></Link>
    </section>
  );
};