"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  // Smooth fade-in for menu items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  // Minimal hover effect
  const hoverEffect = {
    color: "#7C3AED", // Purple-600
    transition: { duration: 0.2, ease: "easeOut" }
  };

  // Underline animation
  const underline = {
    rest: { scaleX: 0, opacity: 0 },
    hover: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with subtle interaction */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="text-xl font-semibold text-[#7C3AED]">
            Nexus Core
          </Link>
        </motion.div>

        {/* Menu items */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex items-center space-x-8"
        >
          {["Features", "User Roles", "Domains", "Pricing"].map((navItem) => (
            <motion.li key={navItem} variants={item}>
              <Link href="#" className="relative group">
                <motion.span
                  className="text-[#626262] font-medium"
                  whileHover={hoverEffect}
                >
                  {navItem}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-px bg-purple-600 origin-left"
                  variants={underline}
                  initial="rest"
                  whileHover="hover"
                />
              </Link>
            </motion.li>
          ))}

          {/* CTA Button */}
          <motion.li variants={item}>
            <motion.button
              whileHover={{
                backgroundColor: "#8C3BFF", // Purple-600
                transition: { duration: 0.2 }
              }}
              className="px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium"
            >
              Get Started
            </motion.button>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;