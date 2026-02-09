import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-start justify-center p-4 md:p-10 pt-24 pb-20">
        <div className="w-full max-w-[1260px] bg-[#151515] border border-white/[0.05] rounded-[40px] flex overflow-hidden min-h-[850px]">
          
          <aside className="w-[300px] border-r border-white/[0.05] hidden lg:flex flex-col p-6">
            <BalanceCard />
            <div className="h-[1px] w-full bg-white/[0.05] my-2" />
            <Sidebar />
          </aside>

          <section className="flex-1 overflow-y-auto bg-[#0D0D0D]/30">
            {children}
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}