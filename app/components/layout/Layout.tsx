import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollReveal from "../common/ScrollReveal";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="portfolio-shell min-h-screen text-slate-900">
      <ScrollReveal />
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
