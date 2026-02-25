import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans flex flex-col"> 
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-0 md:px-0 py-4 md:py-10 flex gap-6 flex-1 w-full">
        
        <aside className="w-[260px] hidden lg:flex flex-col gap-4">
          <div className="bg-[#121212] border border-[#1E1E1E] rounded-[24px] p-6">
            <BalanceCard />
          </div>
          <div className="bg-[#121212] border border-[#1E1E1E] rounded-[24px] p-4 flex-1">
            <Sidebar />
          </div>
        </aside>

        <section className="flex-1 bg-[#121212] border border-[#1E1E1E] rounded-[24px] p-3 
          min-h-0 h-auto md:min-h-[800px] overflow-hidden">
          {children}
        </section>

      </main>
      
      <Footer />
    </div>
  );
}