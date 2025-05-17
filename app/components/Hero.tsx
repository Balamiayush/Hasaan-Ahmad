"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Floating animation for the card
  const floatingAnimation = {
    hidden: { y: 50, opacity: 0, rotate: 5 },
    visible: {
      y: [0, -100, 0],
      opacity: 1,
      rotate: 0,
      transition: {
        y: {
          duration: 0.8,
          ease: "easeInOut",
        },
        opacity: { duration: 0.8 },
        rotate: { duration: 0.8 },
      },
    },
  };

  // Gradient pulse animation
  const gradientPulse = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        backgroundPosition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen heroSection mt-10 lg:mt-5 text-white overflow-hidden">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="container mx-auto px-6 lg:px-8 xl:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-20"
      >
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-[6vw] font-bold leading-[80px]"
          >
            <motion.span
              variants={gradientPulse}
              initial="hidden"
              animate="visible"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-[length:300%_300%]"
            >
              Unified ERP
            </motion.span>{" "}
            for <br className="hidden sm:block" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Modern Business
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-sm md:text-[15px] text-gray-600 max-w-xl mx-auto lg:mx-0"
          >
            Centralize operations, automate workflows, and boost productivity
            with{" "}
            <motion.strong 
              className="font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nexus Core
            </motion.strong> — the all-in-one ERP solution for
            growing organizations.
          </motion.p>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4 p-6"
          >
            <Button 
              text="Start for Free" 
              variant="primary" 
              className="w-full sm:w-auto text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
            <Button 
              text="Explore Features" 
              variant="secondary" 
              className="w-full sm:w-auto text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 text-sm md:text-base text-gray-500"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span>Affordable Flat Rate</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <span>Custom Domains</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span>AI-Powered</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Card */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={floatingAnimation}
          className="relative max-w-md xl:max-w-lg bg-white rounded-3xl border border-gray-200 shadow-xl p-8 space-y-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-100 opacity-30 blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-100 opacity-30 blur-xl"></div>
          
          <motion.h3 
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800"
            whileHover={{ x: 5 }}
          >
            Why Choose <span className="text-purple-600">Nexus Core?</span>
          </motion.h3>

          <div className="space-y-5">
            <FeatureItem
              iconColor="bg-purple-100"
              iconTextColor="text-purple-600"
              text="Affordable Flat Rate"
              description="Simple pricing with no hidden fees"
              icon={<CheckIcon />}
            />
            <FeatureItem
              iconColor="bg-blue-100"
              iconTextColor="text-blue-600"
              text="Custom Domains"
              description="Brand your platform with custom domains"
              icon={<ArrowIcon />}
            />
            <FeatureItem
              iconColor="bg-green-100"
              iconTextColor="text-green-600"
              text="AI-Powered Automation"
              description="Smart workflows that save you time"
              icon={<BrainIcon />}
            />
          </div>

          <motion.div 
            className="pt-4 border-t border-gray-200 text-gray-600 text-sm space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              Flat pricing for all users — no hidden fees
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Smarter workflows powered by automation & AI
            </p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

const FeatureItem = ({
  text,
  description,
  icon,
  iconColor,
  iconTextColor,
}: {
  text: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  iconTextColor: string;
}) => (
  <motion.div
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
  >
    <motion.div
      whileHover={{ rotate: 10, scale: 1.1 }}
      className={`w-12 h-12 rounded-xl ${iconColor} flex items-center justify-center ${iconTextColor} flex-shrink-0 transition-all`}
    >
      {icon}
    </motion.div>
    <div>
      <p className="text-gray-800 font-semibold">{text}</p>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  </motion.div>
);

const CheckIcon = () => (
  <motion.svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    whileHover={{ scale: 1.2 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </motion.svg>
);

const ArrowIcon = () => (
  <motion.svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    animate={{
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </motion.svg>
);

const BrainIcon = () => (
  <motion.svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    animate={{
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </motion.svg>
);

export default Hero;