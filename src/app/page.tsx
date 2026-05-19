import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import QuickContact from "@/components/QuickContact";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularRoutes from "@/components/PopularRoutes";
import TrustSection from "@/components/TrustSection";
import TariffSection from "@/components/TariffSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* <Hero /> */}
        <Hero2 />
        <TariffSection />
        <QuickContact />
        <PopularRoutes />
        <WhyChooseUs />
        <TrustSection />
        <Location />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
