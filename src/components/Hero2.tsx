"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-[120px] opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-muted/50 border border-border px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Available 24/7 in your city
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Book Your Taxi <br />
              <span className="text-primary">Instantly</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Fast, Safe & Always On Time. Experience premium rides at affordable prices with just one tap.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Call Button */}
              <a
                href="tel:+919566197139"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/9566197139"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-border bg-background hover:bg-muted font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp
              </a>
            </div>

            {/* Happy Customers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">10k+</span> happy customers
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-primary/20 blur-3xl" />

            {/* Taxi Image Card */}
            <div className="relative w-full max-w-[550px]">
              <div className="rounded-[32px] overflow-hidden border border-border bg-background/60 backdrop-blur-xl shadow-2xl">
                <Image
                  src="/taxi-hero.png"
                  alt="Taxi Booking"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-border shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Quick Booking
                  </p>
                  <h4 className="font-bold text-foreground">
                    Ride in 2 Minutes
                  </h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}