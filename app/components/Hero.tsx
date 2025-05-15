"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
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
      transition: { type: "spring", damping: 10, stiffness: 100 }
    },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.2 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  return (
    <div className="min-h-screen to-gray-100 text-gray-900 overflow-hidden">
      <Head>
        <title>Nexus Core | Unified ERP for Modern Business</title>
        <meta
          name="description"
          content="Centralize operations, automate workflows, and boost productivity with Nexus Core"
        />
      </Head>

      <Navbar />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="  container mx-auto px-6 lg:px-8 xl:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-20"
      >
        {/* Left Content */}
        <div className=" space-y-8 text-center lg:text-left ">
          <motion.h1
            variants={item}
            className="sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Unified ERP
            </span>{" "}
            for <br className="hidden sm:block" />
            Modern Business
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
          >
            Centralize operations, automate workflows, and boost productivity
            with <strong className="font-semibold">Nexus Core</strong> — the all-in-one ERP solution
            for growing organizations.
          </motion.p>
<div className="flex gap-10">

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
             <motion.div
                      whileHover="hover"
                      className="relative "
                    >
                      <Link
                        href="/get-started"
                        className="px-8 py-3.5 rounded-lg bg-[#7C3AED] text-white text-sm font-medium shadow-sm block"
                      >
                        <motion.span
                          variants={{
                            hover: { y: -30 },
                          }}
                          initial={{ y: 0 }}
                          transition={{ duration: 0.3,ease: "easeOut" }}
                          className="block"
                        >
                         Start for Free →
                        </motion.span>
                        <motion.span
                          variants={{ hover: { y: -20 } }}
                          initial={{ y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute  inline-block text-white"
                        >
                         Start for Free →
                        </motion.span>
                      </Link>
                    </motion.div>
            
            {/* <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="px-8 py-3.5 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-purple-100"
            >
              Start for Free →
            </motion.button> */}
            {/* <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="px-8 py-3.5 rounded-lg border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
            >
              Explore Features
            </motion.button> */}
            
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
             <motion.div
                      whileHover="hover"
                      className="relative overflow-hidden h-10"
                    >
                      <Link
                        href=""
                        className="px-8 py-3.5 rounded-lg bg-yellow-100 text-black text-sm font-medium shadow-sm block"
                      >
                        <motion.span
                          variants={{
                            hover: { y: -40 },
                          }}
                          initial={{ y: 0 }}
                          transition={{ duration: 0.4,ease: "easeOut" }}
                          className="block"
                        >
                          Explore Features →
                        </motion.span>
                        <motion.span
                          variants={{ hover: { y: -20 } }}
                          initial={{ y: 10 }}
                          transition={{ duration: 0.4 }}
                          className="absolute  inline-block text-black"
                        >
                          Explore Features →
                        </motion.span>
                      </Link>
                    </motion.div>
            
            {/* <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="px-8 py-3.5 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-purple-100"
            >
              Start for Free →
            </motion.button> */}
            {/* <motion.button
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="px-8 py-3.5 rounded-lg border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
            >
             
            </motion.button> */}
            
          </motion.div>
</div>
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 text-sm md:text-base text-gray-500"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span>Affordable Flat Rate</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span>Custom Domains</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </div>

        {/* Right Card */}
        <motion.div
          variants={item}
          className=" max-w-md xl:max-w-lg bg-white rounded-3xl border border-gray-200 shadow-xl p-8 space-y-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Why Choose <span className="text-purple-600">Nexus Core?</span>
          </h3>

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

          <div className="pt-4 border-t border-gray-200 text-gray-600 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Flat pricing for all users — no hidden fees
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Smarter workflows powered by automation & AI
            </p>
          </div>
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
    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
  >
    <div
      className={`w-12 h-12 rounded-xl ${iconColor} flex items-center justify-center ${iconTextColor} flex-shrink-0`}
    >
      {icon}
    </div>
    <div>
      <p className="text-gray-800 font-semibold">{text}</p>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  </motion.div>
);

// Icons remain the same as in your original code
const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

export default Hero;