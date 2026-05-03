import { notFound } from "next/navigation";
import { getRouteBySlug, routes } from "@/data/routes";
import MapSection from "@/components/MapSection";
import PricingSection from "@/components/PricingSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  
  if (!route) {
    return { title: "Route Not Found" };
  }

  return {
    title: `Book ${route.from} to ${route.to} Outstation Taxi`,
    description: `The best way to travel from ${route.from} to ${route.to}. Book our comfortable outstation cabs for a smooth journey.`,
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0B0F14] min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <MapSection from={route.from} to={route.to} distance={route.distance} />
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Book <span className="text-[#FFC107]">{route.from} To {route.to}</span> Outstation Droptaxi Cabs
            </h1>
            <p className="text-xl text-gray-400">
              The best way to travel to your destination
            </p>
          </div>

          <PricingSection route={route} />

        </div>
      </main>
      <Footer />
    </>
  );
}
