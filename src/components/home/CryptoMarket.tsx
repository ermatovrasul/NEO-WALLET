import Image from 'next/image';
import { TrendingUp, TrendingDown } from 'lucide-react';

const miniCards = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$52,291', change: '+0.25%', image:'/icon/Vector 10.png' },
  { name: 'Ethereum', symbol: 'ETH', price: '$52,291', change: '+0.25%', image:'/icon/Vector 10.png' },
  { name: 'Solana', symbol: 'SOL', price: '$52,291', change: '-0.25%', image:'/icon/Vector 10 (1).png' },
  { name: 'Bitcoin', symbol: 'BTC', price: '$52,291', change: '+0.25%', image:'/icon/Vector 10.png' },
];

const cryptoList = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$84002.45', volume: '+0.05$', trend: 'down' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$84002.45', volume: '+0.05$', trend: 'up' },
  { id: 3, name: 'Bitcoin', symbol: 'BTC', price: '$84002.45', volume: '+0.05$', trend: 'down' },
  { id: 4, name: 'Ethereum', symbol: 'ETH', price: '$84002.45', volume: '+0.05$', trend: 'up' },
];

export const CryptoMarket = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-0">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {miniCards.map((item, idx) => (
          <div key={idx} className="bg-[#151515] border border-white/[0.05] p-5 rounded-[24px] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/[0.05]">
                <span className="text-primary font-bold">₿</span>
              </div>
                  <span className="font-bold text-[14px] text-white">{item.name}</span>
                  <span className="text-[10px] text-[#4C4C4C] font-bold uppercase">{item.symbol}</span>
                </div>
                <div className="text-[16px] font-bold text-white mt-0.5">{item.price}</div>
                <div className={`text-[11px] font-bold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change}
                </div>
              </div>
            </div>
            <div className="w-20 h-8">
              <Image src={item.image} width={0} height={0} alt={item.name} className="w-full h-full "/>
            </div>
          </div>
        ))} 
      </div>

      <div className="bg-[#0D0D0D] border border-white/[0.05] rounded-[32px] p-6 md:p-10 shadow-xl">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Популярные криптовалюты</h2>
          <p className="text-[#A3A3A3] text-sm leading-relaxed">
            Будьте в курсе малейших изменений курса и рыночных позиций топовых активов 24/7, чтобы не упустить момент для выгодной сделки.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-5 text-[#4C4C4C] text-[11px] font-bold uppercase tracking-[0.1em] px-6 mb-6">
          <div className="col-span-1">Торговая пара</div>
          <div>Цена</div>
          <div>Объем 24ч (USDT)</div>
          <div className="text-center">Рынок</div>
          <div className="text-right">Действие</div>
        </div>

        <div className="space-y-2">
          {cryptoList.map((coin) => (
            <div key={coin.id} className="grid grid-cols-2 md:grid-cols-5 items-center border border-white/[0.05] bg-transparent p-5 rounded-[24px] hover:bg-white/[0.02] transition-all duration-300">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/[0.05]">
                   <span className="text-primary text-sm font-bold">{coin.symbol === 'BTC' ? '₿' : 'Ξ'}</span>
                </div>
                <div>
                  <div className="font-bold text-[15px] text-white leading-none">{coin.name}</div>
                  <div className="text-[10px] text-[#4C4C4C] font-bold mt-1 uppercase">{coin.symbol}</div>
                </div>
              </div>

              <div className="hidden md:block font-bold text-[15px] text-white/90">{coin.price}</div>

              <div className="hidden md:block font-bold text-[15px] text-[#A3A3A3]">{coin.volume}</div>

              <div className="flex justify-center">
                {coin.trend === 'up' ? 
                  <TrendingUp className="text-white opacity-40" size={20} /> : 
                  <TrendingDown className="text-red-500 opacity-60" size={20} />
                }
              </div>

              <div className="flex justify-end gap-2">
                <button className="bg-[#1A1A1A] hover:bg-[#252525] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all border border-white/[0.05]">
                  Купить
                </button>
                <button className="border border-[#22c55e]/50 hover:bg-[#22c55e]/10 text-[#22c55e] px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all active:scale-95">
                  Продать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};