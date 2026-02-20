import { WalletsList } from "@/components/dashboard/WalletsList";
import { ExchangeRates } from "@/components/dashboard/ExchangeRates";
import { DailyLimits } from "@/components/dashboard/DailyLimits";
import { PersonalInfo } from "@/components/dashboard/PersonalInfo";

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="flex-1 border-r border-white/[0.05]">
        <WalletsList />
      </div>

      <div className="w-full lg:w-[350px] p-2 space-y-6 bg-[#0D0D0D]/20">
        <ExchangeRates />
        <DailyLimits />
        <PersonalInfo />
      </div>
    </div>
  );
}