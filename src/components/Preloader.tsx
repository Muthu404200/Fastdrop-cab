"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-4"
        >
          {/* Logo + Text */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }} // 🔥 reduced from 1.1 → 1.05
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center space-x-3"
          >
            {/* Logo FIXED SIZE */}
            {/* <img
              src="/favicon.png"
              alt="logo"
              className="h-10 w-10 sm:h-10 sm:w-10 object-contain"
            /> */}

            {/* Brand Text */}
            <span className="text-2xl sm:text-4xl font-bold text-foreground">
              Fast<span className="text-primary">Drop</span>
            </span>
          </motion.div>

          {/* Loading Bar */}
          <div className="mt-6 w-40 sm:w-56 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2, // smoother
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}