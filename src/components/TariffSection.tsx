"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TariffTabs from "./TariffTabs";
import { TariffCard, LocalPackageCard } from "./TariffCard";
import { MessageCircle } from "lucide-react";
import BookingModal from "./BookingModal";

const oneWayData = [
  { name: "SEDAN", price: "14", driverBata: "400", toll: "One Way Toll" },
  { name: "ONLY ETIOS", price: "15", driverBata: "400", toll: "One Way Toll" },
  { name: "SUV", price: "19", driverBata: "400", toll: "One Way Toll" },
  { name: "ONLY INNOVA", price: "20", driverBata: "400", toll: "One Way Toll" },
];

const roundTripData = [
  { name: "SEDAN", price: "13", driverBata: "500", toll: "Up & Down Toll" },
  { name: "ONLY ETIOS", price: "14", driverBata: "500", toll: "Up & Down Toll" },
  { name: "SUV", price: "18", driverBata: "500", toll: "Up & Down Toll" },
  { name: "ONLY INNOVA", price: "19", driverBata: "500", toll: "Up & Down Toll" },
];

const localPackageData = [
  {
    package: "5 hrs / 50 KM",
    prices: [
      { vehicle: "Sedan", price: "1500" },
      { vehicle: "Etios", price: "1600" },
      { vehicle: "SUV", price: "2000" },
      { vehicle: "Innova", price: "2200" },
    ],
  },
  {
    package: "10 hrs / 100 KM",
    prices: [
      { vehicle: "Sedan", price: "2800" },
      { vehicle: "Etios", price: "3000" },
      { vehicle: "SUV", price: "3800" },
      { vehicle: "Innova", price: "4200" },
    ],
  },
  {
    package: "15 hrs / 150 KM",
    prices: [
      { vehicle: "Sedan", price: "4000" },
      { vehicle: "Etios", price: "4300" },
      { vehicle: "SUV", price: "5500" },
      { vehicle: "Innova", price: "6000" },
    ],
  },
];

const tabs = [
  { id: "one-way", label: "One Way" },
  { id: "round-trip", label: "Round Trip" },
  { id: "local-package", label: "Local Package" },
];

export default function TariffSection() {
  const [activeTab, setActiveTab] = useState("one-way");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("SEDAN");
  const [selectedCabDetails, setSelectedCabDetails] = useState("");

  const handleBookTariff = (item: any) => {
    setSelectedVehicle(item.name.replace("ONLY ", ""));
    setSelectedCabDetails(`${item.name} — Rs.${item.price}/km — Rs.${item.driverBata} Driver Bata — ${item.toll}`);
    setIsModalOpen(true);
  };

  const handleBookPackage = (packageDuration: string) => {
    setSelectedVehicle("SEDAN");
    setSelectedCabDetails(`Local Package — ${packageDuration}`);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-[#0B0F14] relative overflow-hidden" id="tariffs">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFC107] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FFC107] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-[#FFC107]">Tariffs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Transparent pricing with no hidden charges
          </motion.p>
        </div>

        <TariffTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "one-way" && (
                <div>
                  {/* Mobile Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
                    {oneWayData.map((item, idx) => (
                      <TariffCard
                        key={idx}
                        vehicleName={item.name}
                        pricePerKm={item.price}
                        driverBata={item.driverBata}
                        toll={item.toll}
                        onBook={() => handleBookTariff(item)}
                      />
                    ))}
                  </div>
                  {/* Desktop Table */}
                  <div className="hidden lg:block bg-[#131A22] rounded-2xl border border-white/5 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/5 text-gray-300">
                          <th className="py-5 px-8 font-semibold">Vehicle</th>
                          <th className="py-5 px-8 font-semibold">Price/KM</th>
                          <th className="py-5 px-8 font-semibold">Driver Bata</th>
                          <th className="py-5 px-8 font-semibold">Toll</th>
                          <th className="py-5 px-8 font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oneWayData.map((item, idx) => (
                          <tr key={idx} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors group">
                            <td className="py-5 px-8 text-white font-bold group-hover:text-[#FFC107] transition-colors">{item.name}</td>
                            <td className="py-5 px-8 text-[#FFC107] font-bold text-xl">Rs.{item.price}</td>
                            <td className="py-5 px-8 text-gray-300">Rs.{item.driverBata}</td>
                            <td className="py-5 px-8 text-gray-300">{item.toll}</td>
                            <td className="py-5 px-8 text-right">
                              <button 
                                onClick={() => handleBookTariff(item)}
                                className="px-6 py-2 rounded-xl bg-white/5 text-white hover:bg-[#FFC107] hover:text-[#0B0F14] transition-all font-medium"
                              >
                                Book
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "round-trip" && (
                <div>
                  {/* Mobile Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
                    {roundTripData.map((item, idx) => (
                      <TariffCard
                        key={idx}
                        vehicleName={item.name}
                        pricePerKm={item.price}
                        driverBata={item.driverBata}
                        toll={item.toll}
                        onBook={() => handleBookTariff(item)}
                      />
                    ))}
                  </div>
                  {/* Desktop Table */}
                  <div className="hidden lg:block bg-[#131A22] rounded-2xl border border-white/5 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/5 text-gray-300">
                          <th className="py-5 px-8 font-semibold">Vehicle</th>
                          <th className="py-5 px-8 font-semibold">Price/KM</th>
                          <th className="py-5 px-8 font-semibold">Driver Bata</th>
                          <th className="py-5 px-8 font-semibold">Toll</th>
                          <th className="py-5 px-8 font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roundTripData.map((item, idx) => (
                          <tr key={idx} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors group">
                            <td className="py-5 px-8 text-white font-bold group-hover:text-[#FFC107] transition-colors">{item.name}</td>
                            <td className="py-5 px-8 text-[#FFC107] font-bold text-xl">Rs.{item.price}</td>
                            <td className="py-5 px-8 text-gray-300">Rs.{item.driverBata}</td>
                            <td className="py-5 px-8 text-gray-300">{item.toll}</td>
                            <td className="py-5 px-8 text-right">
                              <button 
                                onClick={() => handleBookTariff(item)}
                                className="px-6 py-2 rounded-xl bg-white/5 text-white hover:bg-[#FFC107] hover:text-[#0B0F14] transition-all font-medium"
                              >
                                Book
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "local-package" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {localPackageData.map((item, idx) => (
                    <LocalPackageCard
                      key={idx}
                      packageDuration={item.package}
                      prices={item.prices}
                      onBook={() => handleBookPackage(item.package)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#ffb000] text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Book Now via WhatsApp
          </a>
        </motion.div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVehicle={selectedVehicle}
        selectedCabDetails={selectedCabDetails}
      />
    </section>
  );
}
