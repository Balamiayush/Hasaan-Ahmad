"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => setIsVisible(false), 800);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-blue-500"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.8, 
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }}
                >
                    <div className="relative w-full max-w-md px-8">
                        {/* Animated progress bar */}
                        <motion.div 
                            className="h-1 bg-neutral-700 rounded-full overflow-hidden mb-8"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </motion.div>

                        {/* Animated logo/text */}
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <motion.h1 
                                className="text-4xl font-bold text-white mb-2"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Nexus Core
                            </motion.h1>
                            
                            <motion.span 
                                className=" text-5xl font-bold text-white "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {progress}%
                            </motion.span>
                        </motion.div>

                        {/* Floating dots */}
                        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                            {[...Array(3)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="block w-2 h-2 bg-white rounded-full"
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loading;