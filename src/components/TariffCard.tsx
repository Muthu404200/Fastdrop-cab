import { Car, CheckCircle2 } from "lucide-react";

interface TariffCardProps {
  vehicleName: string;
  pricePerKm: string | number;
  driverBata: string | number;
  toll: string;
}

export function TariffCard({ vehicleName, pricePerKm, driverBata, toll }: TariffCardProps) {
  return (
    <div className="group relative bg-[#131A22] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-[#FFC107]/50 hover:shadow-[0_0_20px_rgba(255,193,7,0.15)] flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#1A232D] flex items-center justify-center text-[#FFC107] group-hover:scale-110 transition-transform duration-300">
          <Car size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">{vehicleName}</h3>
          <p className="text-3xl font-extrabold text-[#FFC107] mt-1">
            Rs.{pricePerKm}<span className="text-sm font-normal text-gray-400">/KM</span>
          </p>
        </div>
      </div>
      
      <div className="mt-4 space-y-3 flex-1">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-gray-200">Driver Bata:</span> Rs.{driverBata}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-gray-200">Toll:</span> {toll}
          </p>
        </div>
      </div>
      
      <button className="mt-6 w-full py-3 rounded-xl bg-white/5 text-white font-medium group-hover:bg-[#FFC107] group-hover:text-[#0B0F14] transition-colors duration-300">
        Book Now
      </button>
    </div>
  );
}

interface LocalPackagePrice {
  vehicle: string;
  price: string | number;
}

interface LocalPackageCardProps {
  packageDuration: string;
  prices: LocalPackagePrice[];
}

export function LocalPackageCard({ packageDuration, prices }: LocalPackageCardProps) {
  return (
    <div className="group relative bg-[#131A22] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-[#FFC107]/50 hover:shadow-[0_0_20px_rgba(255,193,7,0.15)] flex flex-col h-full">
      <div className="mb-5 pb-4 border-b border-white/10 text-center">
        <h3 className="text-2xl font-bold text-[#FFC107]">{packageDuration}</h3>
      </div>
      
      <div className="space-y-4 flex-1">
        {prices.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200 font-medium">{p.vehicle}</span>
            </div>
            <span className="text-white font-bold">Rs. {p.price}</span>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-3 rounded-xl bg-white/5 text-white font-medium group-hover:bg-[#FFC107] group-hover:text-[#0B0F14] transition-colors duration-300">
        Book Package
      </button>
    </div>
  );
}
