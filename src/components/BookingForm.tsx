"use client";

import { useState } from "react";
import { MessageCircle, MapPin, Navigation, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    datetime: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Taxi Booking Request* 🚖\n\n*Pickup:* ${formData.pickup}\n*Drop:* ${formData.drop}\n*Date & Time:* ${formData.datetime || "As soon as possible"}\n*Phone:* ${formData.phone}`;
    
    // Replace with the actual target WhatsApp number
    const targetNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
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
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          name="pickup"
          required
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="datetime-local"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [color-scheme:dark]"
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(255,193,7,0.4)] hover:shadow-[0_0_30px_rgba(255,193,7,0.6)] mt-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Book via WhatsApp</span>
      </button>
    </motion.form>
  );
}
