"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, CarFront, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { routes, RouteData } from "../data/routes";

const RouteCard = ({ route }: { route: RouteData }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="list-none"
    >
      <Link href={`/routes/${route.slug}`} className="block">
        <div className="w-full group bg-[#131A22] border border-white/10 hover:border-[#FFC107]/50 hover:shadow-[0_0_15px_rgba(255,193,7,0.2)] rounded-xl p-4 md:p-5 flex items-center justify-between transition-all duration-300 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFC107]/10 transition-colors">
              <CarFront className="w-5 h-5 text-gray-400 group-hover:text-[#FFC107] transition-colors" />
            </div>
            <div>
              <span className="text-white font-medium md:text-lg group-hover:text-[#FFC107] transition-colors block">
                {route.from} to {route.to}
              </span>
              {route.distance && (
                <span className="text-gray-400 text-sm">{route.distance} km</span>
              )}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#0B0F14] bg-[#FFC107] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
            View Details
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

const CityAccordion = ({ city, cityRoutes, isOpen, onToggle }: { city: string, cityRoutes: RouteData[], isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#131A22]/50">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between bg-[#131A22] hover:bg-white/5 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-[#FFC107]" />
          <h3 className="text-xl font-bold text-white tracking-wide">{city} Routes</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-white/5">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityRoutes.map((route) => (
                  <RouteCard key={route.slug} route={route} />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PopularRoutes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCity, setOpenCity] = useState<string | null>("Tanjavur");

  // Filter logic
  const searchResults = searchQuery.trim() !== "" 
    ? routes.filter(route => 
        route.from.toLowerCase().includes(searchQuery.toLowerCase()) || 
        route.to.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const routesByCity = routes.reduce((acc, route) => {
    if (!acc[route.from]) acc[route.from] = [];
    acc[route.from].push(route);
    return acc;
  }, {} as Record<string, RouteData[]>);

  return (
    <section className="py-24 bg-[#0B0F14] relative overflow-hidden" id="popular-routes">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFC107] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Popular <span className="text-[#FFC107]">One Way & Round Trip</span> Routes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Explore our wide range of premium outstation taxi services connecting major cities across Tamil Nadu, Bangalore, Kerala, and Pondicherry. Safe, reliable, and comfortable rides at the best prices.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 relative"
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-500 group-focus-within:text-[#FFC107] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search route (e.g., Chennai to Bangalore)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-14 pr-6 py-4 md:py-5 bg-[#131A22] border-2 border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC107] focus:ring-4 focus:ring-[#FFC107]/10 transition-all text-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Routes Content */}
        <div className="max-w-5xl mx-auto">
          {searchQuery.trim() !== "" ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl text-gray-400 font-medium px-2">
                Search Results ({searchResults.length})
              </h3>
              {searchResults.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.map(route => (
                    <RouteCard key={route.slug} route={route} />
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12 bg-[#131A22] rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-lg">No routes found matching "{searchQuery}".</p>
                  <p className="text-gray-500 mt-2">Try a different search term.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {Object.entries(routesByCity).map(([city, cityRoutes]) => (
                <CityAccordion
                  key={city}
                  city={city}
                  cityRoutes={cityRoutes}
                  isOpen={openCity === city}
                  onToggle={() => setOpenCity(openCity === city ? null : city)}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-300 mb-6">Didn't find your route?</p>
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%20want%20to%20book%20a%20custom%20ride."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFC107] hover:bg-[#ffb000] text-[#0B0F14] font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_rgba(255,193,7,0.3)] hover:shadow-[0_6px_25px_rgba(255,193,7,0.4)] transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Book Custom Ride on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
