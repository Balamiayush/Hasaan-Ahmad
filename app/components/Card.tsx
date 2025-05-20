'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  bgColorClass: string;
  textColorClass: string;
}

const projects: Project[] = [
  {
    title: 'Centralized Operations',
    description: 'Manage all business operations in one unified online system, from workflows to inventory and payroll.',
    link: 'https://example.com/centralized-operations',
    src: "https://plus.unsplash.com/premium_photo-1744376824139-8840f04a4663?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColorClass: 'bg-indigo-100',
    textColorClass: 'text-indigo-600',
  },
  {
    title: 'AI-Powered Automation',
    description: 'Leverage generative AI to automate repetitive tasks, enhance decision-making, and reduce inefficiencies.',
    link: 'https://example.com/ai-automation',
    bgColorClass: 'bg-purple-100',
    textColorClass: 'text-purple-600',
    src: "https://plus.unsplash.com/premium_photo-1714816334057-d697e55cfeb9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: 'Custom Domain Support',
    description: 'Use your own branded domain with DNS pointing for a professional, customized experience.',
    link: 'https://example.com/custom-domain',
    bgColorClass: 'bg-violet-100',
    textColorClass: 'text-violet-600',
    src: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3VzdG9tJTIwRG9tYWluJTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
  },
];

interface CardItemProps extends Project {
  index: number;
}

const CardItem: React.FC<CardItemProps> = ({
  index,
  title,
  description,
  src,
  link,
  bgColorClass,
  textColorClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div ref={containerRef} className="cardContainer">
      <motion.div

        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className={`card relative overflow-hidden rounded-lg  ${bgColorClass} ${textColorClass}`}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="body flex gap-4 flex-col md:flex-row ">
          <div className="description flex-1">
            <p className="mb-4">{description}</p>
            <span className="inline-flex items-center gap-1 cursor-pointer">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline ${textColorClass}`}
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          <div className="imageContainer relative w-40 h-24 rounded-md overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                unoptimized={true} // Add this if you're still having issues
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Card: React.FC = () => {
  return (
    <>
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center mt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Our
        </span>{' '}
        <br className="sm:hidden" />
        Services
      </motion.h2>
      {projects.map((project, i) => (
        <CardItem key={i} index={i} {...project} />
      ))}
    </>
  );
};

export default Card;