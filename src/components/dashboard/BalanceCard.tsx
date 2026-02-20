import { Bell } from "lucide-react";

export const BalanceCard = () => {
  return (
    <div className=" "> 
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[#4C4C4C] text-[13px] font-medium mb-1">
            Айзирек Орозбаева
          </p>
          
          <div className="flex items-baseline gap-2">
            <h2 className="text-white text-[20px] font-bold tracking-tight">
              $2 500.80
            </h2>
          </div>
          
          <p className="text-[#00C076] text-[12px] font-bold mt-0.5">
            +24.5%
          </p>
        </div>

        <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] text-[#4C4C4C] hover:text-white transition-all group">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#E50914] rounded-full border-2 border-[#151515]" />
        </button>
      </div>

      <button className="w-full bg-[#E50914] hover:bg-[#CC0812] text-white py-3.5 rounded-[16px] font-bold text-[14px] transition-all shadow-lg shadow-red-900/10 active:scale-[0.98]">
        Вывод на карту
      </button>
    </div>
  );
};