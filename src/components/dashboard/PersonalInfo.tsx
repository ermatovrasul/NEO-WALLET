import { Calendar, Mail } from 'lucide-react';

export const PersonalInfo = () => {
  return (
    <div className="bg-[#151515] border border-white/[0.05] rounded-[24px] p-5">
      <h4 className="text-white text-sm font-bold mb-4">Персональные данные</h4>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-[#E50914]" />
          <div>
            <p className="text-[#4C4C4C] text-[11px] font-bold">Дата регистрации</p>
            <p className="text-white text-[13px] font-medium">2026/01/29 17:11</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-[#E50914]" />
          <div>
            <p className="text-[#4C4C4C] text-[11px] font-bold">Ваша почта</p>
            <p className="text-white text-[13px] font-medium underline">neowallet@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};