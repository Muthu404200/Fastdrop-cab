"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

interface PricingCardProps {
  vehicleName: string;
  price: number;
  from: string;
  to: string;
  onBook: (vehicleName: string) => void;
}

export default function PricingCard({ vehicleName, price, from, to, onBook }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group bg-[#131A22] border border-white/5 hover:border-[#FFC107]/50 hover:shadow-[0_0_20px_rgba(255,193,7,0.15)] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full"
    >
      {/* Decorative background glow */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FFC107] rounded-full mix-blend-multiply filter blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#1A232D] flex items-center justify-center text-[#FFC107]">
            <Car size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{vehicleName}</h3>
        </div>

        <p className="text-gray-300 text-lg mb-2">
          Book <span className="font-semibold text-white">{from}</span> to <span className="font-semibold text-white">{to}</span>
        </p>
        
        <div className="flex items-end gap-2 mb-8">
          <span className="text-gray-400 font-medium pb-1">@</span>
          <span className="text-4xl font-extrabold text-[#FFC107]">₹{price}</span>
        </div>
      </div>

      <button
        onClick={() => onBook(vehicleName)}
        className="w-full py-4 rounded-xl font-bold text-lg bg-white/5 text-white group-hover:bg-[#FFC107] group-hover:text-[#0B0F14] transition-colors duration-300 relative z-10"
      >
        Book Now
      </button>
    </motion.div>
  );
}
