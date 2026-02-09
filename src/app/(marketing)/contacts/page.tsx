import { Phone, Mail, FileText, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ContactsPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[350px] bg-[#E50914]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Контакты</h1>
          <p className="text-[#A3A3A3] text-lg max-w-3xl leading-relaxed">
            Мы работаем в правовом поле и всегда открыты для связи — здесь вы найдете наши юридические данные и способы связи с офисом.
          </p>
        </div>

        <div className="bg-[#151515] border border-white/[0.05] rounded-[40px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-10">
            
            <section>
              <div className="flex items-center gap-3 mb-6 text-[#E50914]">
                <Phone size={20} />
                <h3 className="text-white font-bold text-lg">Контакты</h3>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-[#4C4C4C]">Номер телефона: <span className="text-[#A3A3A3] ml-2">+996 (000) 00 00 00</span></p>
                <p className="text-[#4C4C4C]">Ватсапп: <span className="text-[#A3A3A3] ml-2">+996 (000) 00 00 00</span></p>
                <p className="text-[#4C4C4C]">Телеграмм: <span className="text-[#A3A3A3] ml-2">+996 (000) 00 00 00</span></p>
                <p className="text-[#4C4C4C]">Электронная почта: <span className="text-[#A3A3A3] ml-2">neolabs@neo.pw</span></p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 text-[#E50914]">
                <FileText size={20} />
                <h3 className="text-white font-bold text-lg">Реквизиты</h3>
              </div>
              <div className="">
                <p className="text-[#4C4C4C] text-sm">Сервис предоставляется ОсоО "Байсанар"</p>
                <p className="text-[#A3A3A3] font-bold mt-1">ИНН 01105202310063</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 text-[#E50914]">
                <ShieldCheckIcon size={20} />
                <h3 className="text-white font-bold text-lg">Лицензия</h3>
              </div>
              <p className="text-[#4C4C4C] text-sm leading-relaxed mb-4">
                Лицензия №154 от 21.04.2023, выдана Государственной службой регулирования и надзора за финансовым рынком при Министерстве экономики и финансов Кыргызской Республики.
              </p>
              <button className="flex items-center gap-2 text-[#E50914] text-sm font-bold hover:underline">
                Проверить статус лицензии можно здесь <ExternalLink size={14} />
              </button>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 text-[#E50914]">
                <MapPin size={20} />
                <h3 className="text-white font-bold text-lg">Адрес</h3>
              </div>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                Кыргызская Республика, г. Бишкек, Боконбаева 101 (пересекает Тыныстанова).<br/>
                <span className="text-[#4C4C4C] mt-2 block">(Гастроном 101, со стороны Тыныстанова, рядом дверь с черной вывеской барбершоп «Change», дальше по стрелкам xbt.kg)</span>
              </p>
            </section>
          </div>

          <div className="relative group">
            <div className="w-full h-full min-h-[500px] bg-[#0D0D0D] border border-white/[0.05] rounded-[32px] overflow-hidden relative flex items-center justify-center">
              <Image 
                src="/image/image 18.png" 
                alt="Лицензия NEO Wallet"
                fill
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              <div className="absolute inset-0 flex items-center justify-center text-[#1A1A1A] pointer-events-none select-none -z-10 text-xl font-bold uppercase tracking-widest">
                Лицензия сүрөтү
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ShieldCheckIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}