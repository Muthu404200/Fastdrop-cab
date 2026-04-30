import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import QuickContact from "@/components/QuickContact";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularRoutes from "@/components/PopularRoutes";
import TrustSection from "@/components/TrustSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <QuickContact />
        <WhyChooseUs />
        <PopularRoutes />
        <TrustSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
