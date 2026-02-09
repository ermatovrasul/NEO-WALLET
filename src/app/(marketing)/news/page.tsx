export default function NewsPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-32 pb-20">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#E50914]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 ">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Новости</h1>
          <p className="text-[#A3A3A3] text-lg max-w-2xl">
            Держите руку на пульсе индустрии: ежедневные обновления и эксклюзивные инсайды о главных цифровых активах 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#151515] rounded-[32px] border border-white/[0.05] p-8 ">
            <input 
              type="text" 
              placeholder="Поиск" 
              className="col-span-full mb-6 px-4 py-3 bg-[#151515] border border-white/[0.05] rounded-[32px] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E50914]/30 transition-all"
            />
          {Array(8).fill(null).map((_, i) => (
            <div key={i} className="bg-[#151515] border border-white/[0.05] rounded-[32px] overflow-hidden hover:border-[#E50914]/30 transition-all">
              <div className="aspect-video bg-white/5" /> 
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3">Успейте купить!</h3>
                <p className="text-[#4C4C4C] text-sm line-clamp-3 mb-6">
                  Держите руку на пульсе индустрии: ежедневные обновления и эксклюзивные инсайды о главных цифровых активах 24/7.
                </p>
                <div className="pt-4 border-t border-white/[0.05] text-[11px] text-[#4C4C4C] font-bold">
                  14.11.2025 19:26
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}