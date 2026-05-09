"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import BookingModal from "./BookingModal";
import { RouteData } from "@/data/routes";

interface PricingSectionProps {
  route: RouteData;
}

export default function PricingSection({ route }: PricingSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("SEDAN");
  const [selectedCabDetails, setSelectedCabDetails] = useState("");

  const handleBook = (vehicleName: string, price: number) => {
    setSelectedVehicle(vehicleName);
    setSelectedCabDetails(`${vehicleName} — Book ${route.from} to ${route.to} — ₹${price}`);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <PricingCard
          vehicleName="SEDAN"
          price={route.prices.sedan}
          from={route.from}
          to={route.to}
          onBook={() => handleBook("SEDAN", route.prices.sedan)}
        />
        <PricingCard
          vehicleName="ETIOS"
          price={route.prices.etios}
          from={route.from}
          to={route.to}
          onBook={() => handleBook("ETIOS", route.prices.etios)}
        />
        <PricingCard
          vehicleName="SUV"
          price={route.prices.suv}
          from={route.from}
          to={route.to}
          onBook={() => handleBook("SUV", route.prices.suv)}
        />
        <PricingCard
          vehicleName="INNOVA"
          price={route.prices.innova}
          from={route.from}
          to={route.to}
          onBook={() => handleBook("INNOVA", route.prices.innova)}
        />
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        from={route.from}
        to={route.to}
        selectedVehicle={selectedVehicle}
        selectedCabDetails={selectedCabDetails}
      />
    </>
  );
}
