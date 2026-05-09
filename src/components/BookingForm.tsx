"use client";

import { useState } from "react";
import { MessageCircle, MapPin, Navigation, Calendar, Phone, User, Car, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    drop: "",
    datetime: "",
    phone: "",
    cabType: "SEDAN",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.pickup.trim() ||
      !formData.drop.trim() ||
      !formData.datetime.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.pickup.trim().toLowerCase() === formData.drop.trim().toLowerCase()) {
      toast.error("Pickup and Drop locations cannot be the same.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    
    const selectedDate = new Date(formData.datetime);
    if (selectedDate < new Date()) {
      toast.error("Please select a future date and time.");
      return;
    }

    try {
      setIsLoading(true);
      const bookingId = `TXN-${Date.now()}`;
      const timestamp = new Date().toLocaleString();

      // 1. Save to Google Sheets
      const response = await fetch('/api/book-ride', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          bookingId,
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          pickup: formData.pickup.trim(),
          drop: formData.drop.trim(),
          cabType: formData.cabType,
          datetime: formData.datetime,
          timestamp
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save booking to Google Sheets');
      }

      // 2. Success Toast
      toast.success("Booking completed successfully!");

      // 3. Redirect to WhatsApp
      const message = `🚖 *Taxi Booking*\n\n🆔 Booking ID: ${bookingId}\n👤 Name: ${formData.name.trim()}\n📞 Phone: ${formData.phone.trim()}\n📍 Pickup: ${formData.pickup.trim()}\n🏁 Drop: ${formData.drop.trim()}\n🚗 Cab: ${formData.cabType}\n📅 Date: ${formData.datetime}`;
      const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
      
      window.location.href = whatsappUrl;

      // 4. Reset Form
      setFormData({
        name: "",
        pickup: "",
        drop: "",
        datetime: "",
        phone: "",
        cabType: "SEDAN"
      });

    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-muted/50 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl w-full max-w-md mx-auto flex flex-col space-y-4"
    >
      <h3 className="text-xl font-bold text-foreground mb-2">Book Your Ride</h3>
      
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone Number (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          name="pickup"
          required
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="relative">
        <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          name="drop"
          required
          placeholder="Drop Location"
          value={formData.drop}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="relative">
        <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <select
          name="cabType"
          required
          value={formData.cabType}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
        >
          <option value="SEDAN">SEDAN</option>
          <option value="ETIOS">ETIOS</option>
          <option value="SUV">SUV</option>
          <option value="INNOVA">INNOVA</option>
        </select>
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="datetime-local"
          name="datetime"
          required
          min={new Date().toISOString().slice(0, 16)}
          value={formData.datetime}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [color-scheme:dark] disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(255,193,7,0.4)] hover:shadow-[0_0_30px_rgba(255,193,7,0.6)] mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span>Book via WhatsApp</span>
          </>
        )}
      </button>
    </motion.form>
  );
}
