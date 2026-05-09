"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  from?: string;
  to?: string;
  selectedVehicle?: string;
  selectedCabDetails?: string;
}

export default function BookingModal({ isOpen, onClose, from = "", to = "", selectedVehicle = "SEDAN", selectedCabDetails }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState(selectedVehicle);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || (from && to && !from.trim()) || (from && to && !to.trim())) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (from && to && from.trim().toLowerCase() === to.trim().toLowerCase()) {
      toast.error("Pickup and Drop locations cannot be the same.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      setIsLoading(true);
      const bookingId = `TXN-${Date.now()}`;
      const timestamp = new Date().toLocaleString();
      const travelDate = new Date().toLocaleDateString();

      const response = await fetch('/api/book-ride', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId,
          timestamp,
          name: name.trim(),
          phone: phone.trim(),
          pickup: from || "Not Specified",
          drop: to || "Not Specified",
          cabType: vehicle,
          datetime: travelDate
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save booking to Google Sheets');
      }

      toast.success("Booking completed successfully!");

      const cabInfoString = selectedCabDetails ? `\n🚕 Info: ${selectedCabDetails}` : "";
      const message = `🚖 *Taxi Booking*\n\n🆔 Booking ID: ${bookingId}\n👤 Name: ${name.trim()}\n📞 Phone: ${phone.trim()}\n📍 Pickup: ${from || "Not Specified"}\n🏁 Drop: ${to || "Not Specified"}\n🚗 Cab: ${vehicle}${cabInfoString}\n📅 Date: ${travelDate}`;
      const encodedMessage = encodeURIComponent(message);
      
      const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
      window.open(`https://wa.me/${targetNumber}?text=${encodedMessage}`, "_blank");

      // Reset state and close modal
      setName("");
      setPhone("");
      setVehicle(selectedVehicle);
      onClose();

    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            onClick={isLoading ? undefined : onClose}
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
                disabled={isLoading}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {selectedCabDetails && (
                <div className="bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-xl p-4 mb-4">
                  <p className="text-[#FFC107] font-medium text-sm text-center">
                    {selectedCabDetails}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    value={from}
                    disabled
                    placeholder="Not Specified"
                    className="w-full bg-[#1A232D] border border-white/5 rounded-xl px-4 py-3 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Drop Location</label>
                  <input
                    type="text"
                    value={to}
                    disabled
                    placeholder="Not Specified"
                    className="w-full bg-[#1A232D] border border-white/5 rounded-xl px-4 py-3 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Vehicle Type</label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  disabled={isLoading}
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors appearance-none disabled:opacity-50"
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
                  disabled={isLoading}
                  placeholder="Enter your name"
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-gray-600 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                  placeholder="Enter your 10-digit phone number"
                  className="w-full bg-[#1A232D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-gray-600 disabled:opacity-50"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FFC107] hover:bg-[#ffb000] text-[#0B0F14] font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(255,193,7,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(255,193,7,0.4)] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Confirm Booking</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
