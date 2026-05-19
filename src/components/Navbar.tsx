"use client";

import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">
            <Image
              src="/l1.svg"
              alt="FastDrop Cab Logo"
              width={280}
              height={180}
              className="object-contain w-[170px] sm:w-[220px] md:w-[280px]"
            />
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* Call Button */}
          <a
            href="tel:+919566197139"
            className="flex items-center justify-center gap-2
            text-sm font-medium text-foreground hover:text-primary
            transition-colors px-3 py-2 rounded-full
            border border-border bg-card/60 backdrop-blur-md
            hover:border-primary/40"
          >
            <Phone className="w-4 h-4" />

            {/* Desktop only text */}
            
            <span className="hidden md:block">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+919566197139"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2
            bg-primary text-primary-foreground
            px-4 py-2 rounded-full font-medium
            text-sm md:text-base hover:bg-primary/90
            transition-all
            shadow-[0_0_15px_rgba(255,193,7,0.3)]
            hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />

            {/* Desktop only text */}
            <span className="hidden md:block">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}