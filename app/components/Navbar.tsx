'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Features");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = ["Features", "User Roles", "Domains", "Pricing"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full top-0 z-50 fixed bg-white shadow-sm"
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 relative">
          {tabs.map((tab) => (
            <Link
              href={`#${tab.toLowerCase().replace(" ", "-")}`}
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className="relative px-3 py-1.5 rounded-md text-sm"
            >
              <motion.div
                whileHover="hover"
                className="relative overflow-hidden h-8 w-fit group"
              >
                <motion.span
                  variants={{
                    hover: { y: -20 },
                  }}
                  initial={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block ${selectedTab === tab ? 'text-[#7C3AED]' : 'text-gray-600'}`}
                >
                  {tab}
                </motion.span>
                <motion.span
                  variants={{ hover: { y: -20 } }}
                  initial={{ y: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-0 inline-block ${selectedTab === tab ? 'text-[#7C3AED]' : 'text-gray-600'}`}
                >
                  {tab}
                </motion.span>
                <span className={`absolute left-0 bottom-0 h-[2px] w-full ${selectedTab === tab ? 'bg-[#7C3AED]' : 'bg-gray-300'} transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}></span>
              </motion.div>
            </Link>
          ))}

          {/* CTA Button with similar hover effect */}
          <motion.div
            whileHover="hover"
            className="ml-4 relative overflow-hidden h-10"
          >
            <Link
              href="/get-started"
              className="px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium shadow-sm block"
            >
              <motion.span
                variants={{
                  hover: { y: -30 },
                }}
                initial={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                Get Started
              </motion.span>
              <motion.span
                variants={{ hover: { y: -20 } }}
                initial={{ y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-5 inline-block text-white"
              >
                Get Started
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <span className="underline-hover-effect">Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-6 py-4 border-t"
        >
          {tabs.map((tab) => (
            <Link
              href={`#${tab.toLowerCase().replace(" ", "-")}`}
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-600 hover:text-[#7C3AED]"
            >
              {tab}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="mt-4 inline-block px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium shadow-sm"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;