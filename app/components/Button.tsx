'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonProps = {
  cta: string;
  href: string;
  className?: string;
};

const Button = ({ cta, href,className="" }: ButtonProps) => {
  return (
   <motion.div
              whileHover="hover"
              className="ml-4 relative overflow-hidden h-10"
            >
              <Link
                href={href}
                className="px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium shadow-sm block"
              >
                <motion.span
                  variants={{
                    hover: { y: -30 },
                  }}
                  initial={{ y: 0 }}
                  transition={{ duration: 0.3,ease: "easeOut" }}
                  className="block text-center"
                >
                  {cta}
                </motion.span>
                <motion.span
                  variants={{ hover: { y: -20 } }}
                  initial={{ y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 text-center inline-block text-white"
                >
                  {cta}
                </motion.span>
              </Link>
            </motion.div>
  );
};

export default Button;

