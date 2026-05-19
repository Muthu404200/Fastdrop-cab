"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, CarFront, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { routes, RouteData } from "../data/routes";

const RouteCard = ({ route }: { route: RouteData }) => {
  return (
    <motion.li
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="list-none h-full"
    >
      <Link href={`/routes/${route.slug}`} className="block h-full">
        <div className="relative h-full w-full group bg-gradient-to-br from-[#131A22] to-[#0B0F14] border border-white/5 hover:border-[#FFC107]/40 hover:shadow-[0_8px_30px_rgba(255,193,7,0.12)] rounded-2xl p-5 flex flex-col justify-between transition-all duration-500 overflow-hidden">
          
          {/* Subtle Background Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* TOP SECTION */}
          <div className="relative z-10 flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-[#1A222C] flex items-center justify-center group-hover:bg-[#FFC107]/20 transition-colors duration-500 shadow-inner border border-white/5 group-hover:border-[#FFC107]/30 shrink-0">
                <CarFront className="w-6 h-6 text-gray-400 group-hover:text-[#FFC107] transition-colors duration-500" />
                <div className="absolute inset-0 rounded-full border border-[#FFC107] opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-100 transition-all duration-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base md:text-lg group-hover:text-[#FFC107] transition-colors duration-300 truncate">
                  {route.from} <span className="text-gray-500 font-normal text-xs mx-1">to</span> {route.to}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 group-hover:border-[#FFC107]/30 group-hover:text-[#FFC107]/80 transition-colors whitespace-nowrap">
                    One Way
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/20 whitespace-nowrap">
                    Popular
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="relative z-10 py-4 border-y border-white/5 my-2 flex justify-between items-center group-hover:border-white/10 transition-colors">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Distance</span>
              <span className="text-sm font-medium text-gray-300">{route.distance} km</span>
            </div>
            <div className="w-[1px] h-8 bg-white/5" />
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-500 mb-1">Est. Fare</span>
              <span className="text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors">
                ₹{route.prices.sedan} <span className="text-xs text-gray-500 font-normal">up</span>
              </span>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="relative z-10 flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              View Details
            </span>
            <button className="px-5 py-2 bg-[#FFC107] text-[#0B0F14] text-sm font-bold rounded-full shadow-[0_0_10px_rgba(255,193,7,0.2)] hover:shadow-[0_0_15px_rgba(255,193,7,0.4)] group-hover:scale-105 transition-all duration-300 md:translate-y-1 md:group-hover:translate-y-0 md:opacity-90 md:group-hover:opacity-100">
              Book Now
            </button>
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
        </motion.div>

      </div>




      
    </section>
  );
}
