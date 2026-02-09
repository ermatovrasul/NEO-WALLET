import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}