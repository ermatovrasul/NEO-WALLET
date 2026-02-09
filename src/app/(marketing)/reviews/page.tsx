"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

const reviewsData = Array(12).fill({
  name: "Райан Гослинг",
  text: "Пользуюсь обменником уже пару месяцев для оперативного вывода прибыли. Скорость обработки заявок реально впечатляет: деньги приходят быстро.",
  date: "14.11.2025 19:26",
});

export default function ReviewsPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Отзывы</h1>
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              Читайте отзывы пользователей в реальном времени и убедитесь в надежности нашего сервиса.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="review-prev w-14 h-14 rounded-full border border-white/5 bg-[#151515] flex items-center justify-center text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all disabled:opacity-20">
              <ChevronLeft size={24} />
            </button>
            <button className="review-next w-14 h-14 rounded-full border border-white/5 bg-[#151515] flex items-center justify-center text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all disabled:opacity-20">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mb-24">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1} 
            navigation={{
              prevEl: '.review-prev',
              nextEl: '.review-next',
            }}
            breakpoints={{
              1024: { 
                slidesPerView: 3, 
                slidesPerGroup: 3, 
                grid: { rows: 2 }
              },
            }}
            className="!overflow-visible"
          >
            {Array.from({ length: Math.ceil(reviewsData.length / 2) }).map((_, colIndex) => (
              <SwiperSlide key={colIndex} className="flex flex-col gap-6 mb-6 h-auto">
                <ReviewCard data={reviewsData[colIndex * 2]} />
                {reviewsData[colIndex * 2 + 1] && (
                  <ReviewCard data={reviewsData[colIndex * 2 + 1]} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-[#151515] border border-white/[0.05] rounded-[40px] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Оставить отзыв</h2>
            <p className="text-[#4C4C4C] text-lg leading-relaxed max-w-md">
              Мы работаем для вас каждый день улучшая свой сервис!
            </p>
          </div>
          <div className="space-y-4">
            <textarea 
              placeholder="Напишите отзыв" 
              className="w-full h-40 bg-[#0D0D0D] border border-white/[0.05] rounded-[24px] p-6 text-white outline-none focus:border-[#E50914]/50 transition-all"
            />
            <div className="flex justify-end">
              <button className="bg-[#E50914] text-white px-12 py-4 rounded-2xl font-bold hover:bg-[#CC0812] transition-all">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ data }: { data: any }) {
  return (
    <div className="bg-[#151515] border border-white/[0.05] p-8 rounded-[32px] flex flex-col justify-between hover:border-white/10 transition-all group w-full">
      <div className="flex items-center gap-4 mb-1">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#4C4C4C] group-hover:bg-[#E50914]/10 group-hover:text-[#E50914] transition-colors">
          <User size={24} />
        </div>
        <div>
          <h4 className="text-white font-bold text-[15px]">{data.name}</h4>
          <p className="text-[#4C4C4C] text-[11px] font-bold uppercase tracking-wider">{data.date}</p>
        </div>
      </div>
      <p className="text-[#A3A3A3] text-sm leading-relaxed italic">
        "{data.text}"
      </p>
    </div>
  );
}