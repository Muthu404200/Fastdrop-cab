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
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">

              <Image
    src="/l1.svg"
    alt="FastDrop Cab Logo"
    width={280}
    height={240}
    className="object-contain"
  />
            {/* Fast<span className="text-primary">Drop</span> add logo */}
          </span>
        </Link>

        <div className="flex items-center space-x-3 md:space-x-4">
          <a
            href="tel:+6380831605"
            className="hidden sm:flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/6380831605"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm md:text-base hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
