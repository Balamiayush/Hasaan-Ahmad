"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "./Navbar";

const Hero = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 40, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    const hoverEffect = {
        scale: 1.03,
        transition: { duration: 0.2 },
    };

    const tapEffect = {
        scale: 0.98,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Navbar />
            <Head>
                <title>Nexus Core | Unified ERP for Modern Business</title>
                <meta name="description" content="Centralize operations, automate workflows, and boost productivity with Nexus Core" />
            </Head>

            {/* Hero Section */}
            <motion.main
                initial="hidden"
                animate="show"
                variants={container}
                className="max-w-7xl mx-auto px-6 py-20 md:py-40"
            >
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column */}
                    <div className="md:w-1/2 space-y-8">
                        <motion.h1 variants={item} className="text-4xl md:text-start for free font-bold text-purple-600 ">
                            Unified ERP  &nbsp;
                            <span className="text-gray-900">
                                for
                            </span> <br />
                            Modern Business
                        </motion.h1>

                        <motion.p variants={item} className="text-[18px] text-gray-600">
                            Centralize operations, automate workflows, and boost productivity with <strong>Nexus Core</strong> — the all-in-one ERP solution for growing organizations.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium shadow-lg shadow-purple-100"
                            >
                                Start for Free →
                            </motion.button>
                            <motion.button
                                whileHover={hoverEffect}
                                whileTap={tapEffect}
                                className="px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium"
                            >
                                Explore Features
                            </motion.button>
                        </motion.div>
                        <ul className="lg:flex gap-4 ">
                            <p><div className="circle bg-green-500 w-2 h-2 inline-block rounded-full"></div>Affordable flat Rate</p>
                            <p><div className="circle bg-sky-500 w-2 h-2 inline-block rounded-full"></div>Custom Domains</p>
                            <p><div className="circle bg-purple-500 w-2 h-2 inline-block rounded-full"></div>AI-Powered</p>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        variants={item}
                        className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900">Affordable Flat Rate</h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900">Custom Domains</h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900">AI-Powered</h3>
                            </div>

                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <p className="text-gray-600">One flat price for all users</p>
                                <p className="text-gray-600">Automating repetitive tasks with AI</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
};

export default Hero;