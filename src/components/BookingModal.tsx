"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  from: string;
  to: string;
  selectedVehicle: string;
}

export default function BookingModal({ isOpen, onClose, from, to, selectedVehicle }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState(selectedVehicle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello, I want to book a taxi\nRoute: ${from} to ${to}\nVehicle: ${vehicle}\nName: ${name}\nPhone: ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#131A22] rounded-3xl border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Book Your Ride</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    value={from}
                    disabled
                    className="w-full bg-[#1A232D] border border-white/5 rounded-xl px-4 py-3 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Drop Location</label>
                  <input
                    type="text"
                    value={to}
                    disabled
                    className="w-full bg-[#1A232D] border border-white/5 rounded-xl px-4 py-3 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Vehicle Type</label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors appearance-none"
                >
                  <option value="SEDAN">SEDAN</option>
                  <option value="ETIOS">ETIOS</option>
                  <option value="SUV">SUV</option>
                  <option value="INNOVA">INNOVA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-gray-600"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-[#ffb000] text-[#0B0F14] font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(255,193,7,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(255,193,7,0.4)] hover:scale-[1.02]"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
