'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState('Features');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const tabs = ['Features', 'User Roles', 'Domains', 'Pricing'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isNavbarVisible ? 1 : 0, 
        y: isNavbarVisible ? 0 : -20 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full fixed top-0 z-50 navbar "
    >
      <div className=" py-4 mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="text-xl font-semibold text-[#7C3AED]">
            Nexus Core
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex relative space-x-4 items-center">
          {tabs.map((tab) => (
            <Link
              href={`#${tab.toLowerCase().replace(' ', '-')}`}
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className="relative px-3 py-2 text-sm font-medium"
            >
              <motion.div whileHover="hover" className="relative overflow-hidden h-6 group w-fit">
                <motion.span
                  variants={{ hover: { y: -20 } }}
                  initial={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block ${selectedTab === tab ? 'text-[#7C3AED]' : 'text-black'}`}
                >
                  {tab}
                </motion.span>
                <motion.span
                  variants={{ hover: { y: -20 } }}
                  initial={{ y: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-0 inline-block ${selectedTab === tab ? 'text-[#7C3AED]' : 'text-white'}`}
                >
                  {tab}
                </motion.span>
                <span className={`absolute left-0 bottom-0 h-[2px] w-full ${selectedTab === tab ? 'bg-[#7C3AED]' : 'bg-gray-300'} transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}></span>
              </motion.div>
            </Link>
          ))}

          {/* CTA Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="ml-4"
          >
            <Link 
              href="/get-started" 
              className="px-5 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6d28d9] text-white text-sm font-medium shadow-sm block transition-colors duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white font-semibold p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 border-t border-gray-800"
        >
          {tabs.map((tab) => (
            <Link
              href={`#${tab.toLowerCase().replace(' ', '-')}`}
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setIsMenuOpen(false);
              }}
              className="block py-3 text-white hover:text-[#7C3AED] border-b border-gray-800 last:border-0"
            >
              {tab}
            </Link>
          ))}
          <div className="mt-4">
            <Link
              href="/get-started"
              className="w-full text-center block px-5 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6d28d9] text-white text-sm font-medium shadow-sm transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;