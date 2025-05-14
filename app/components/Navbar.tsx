"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Features");

  const tabs = ["Features", "User Roles", "Domains", "Pricing"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="text-xl font-semibold text-[#7C3AED]">
            Nexus Core
          </Link>
        </motion.div>

        {/* Navigation Links with Animated Tab Effect */}
        <div className="flex items-center gap-3 relative">
          {tabs.map((tab) => (
            <Link
            href={""}
              // href={`/${tab.toLowerCase().replace(" ", "-")}`} 
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`relative px-3 py-1.5 rounded-md text-sm transition-colors ${
                selectedTab === tab
                  ? "text-white"
                  : "text-slate-500  hover:bg-slate-100/10"
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {selectedTab === tab && (
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
                />
              )}
            </Link>
          ))}

          {/* CTA Button */}
          <motion.div
            whileHover={{
              backgroundColor: "#6D28D9",
              scale: 1.03,
              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.2)",
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0 2px 6px rgba(124, 58, 237, 0.2)",
            }}
            className="ml-4"
          >
            <Link
              href="/get-started"
              className="px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium shadow-sm"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
