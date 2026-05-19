"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      
      {/* Section Heading */}
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Find Us On Map
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Visit our office location and connect with us easily through Google Maps.
          </motion.p>
      </div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto w-[92%] md:w-[90%] lg:w-[85%] 
        h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.87994066915874!2d80.1475561403886!3d13.094176447245172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzQwLjEiTiA4MMKwMDgnNTEuNSJF!5e0!3m2!1sen!2sin!4v1779191797438!5m2!1sen!2sin"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}