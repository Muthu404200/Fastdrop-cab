"use client";

import { motion } from "framer-motion";

type Tab = {
  id: string;
  label: string;
};

interface TariffTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function TariffTabs({ tabs, activeTab, onChange }: TariffTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
              isActive ? "text-[#0B0F14]" : "text-gray-300 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#FFC107] rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
