'use client';
import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const icons = {
  operations: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
      <path d="M3 9h18" strokeWidth="2" />
      <path d="M9 21V9" strokeWidth="2" />
    </motion.svg>
  ),
  automation: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M12 8v4l3 3" strokeWidth="2" />
      <path d="M7 4.5l2 2" strokeWidth="2" />
      <path d="M17 4.5l-2 2" strokeWidth="2" />
    </motion.svg>
  ),
  domain: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M12 4v16" strokeWidth="2" />
      <path d="M4 12h16" strokeWidth="2" />
    </motion.svg>
  ),
  workflow: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" />
    </motion.svg>
  ),
  security: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" strokeWidth="2" />
      <path d="M12 9v4" strokeWidth="2" />
      <path d="M12 16h.01" strokeWidth="2" />
    </motion.svg>
  ),
  architecture: (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path d="M2 20h20" strokeWidth="2" />
      <path d="M5 20V8h4v12" strokeWidth="2" />
      <path d="M15 20V4h4v16" strokeWidth="2" />
    </motion.svg>
  ),
};

interface FeatureProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 will-change-transform h-full"
      style={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-6 flex flex-col items-start gap-4 relative z-10 h-full">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} transition-all duration-300 shadow-md`}
        >
          {icons[icon]}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

const FeatureSection: FC = () => {

  const features: FeatureProps[] = [
    {
      icon: 'operations',
      title: 'Centralized Operations',
      description: 'Manage all business operations in one unified online system, from workflows to inventory and payroll.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: 'automation',
      title: 'AI-Powered Automation',
      description: 'Leverage generative AI to automate repetitive tasks, enhance decision-making, and reduce inefficiencies.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: 'domain',
      title: 'Custom Domain Support',
      description: 'Use your own branded domain with DNS pointing for a professional, customized experience.',
      color: 'bg-violet-100 text-violet-600',
    },
    {
      icon: 'workflow',
      title: 'Streamlined Workflow',
      description: 'Create and optimize workflows with Kanban-style project boards to align tasks across departments.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: 'security',
      title: 'Robust Security',
      description: 'Enterprise-grade security protocols to protect your organization\'s sensitive data.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: 'architecture',
      title: 'Scalable Architecture',
      description: 'Designed to grow with your business, from startup to enterprise, without performance compromise.',
      color: 'bg-violet-100 text-violet-600',
    },
  ];
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        backgroundSize: '200% 200%',
      }}
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Powerful Features
            </span>{' '}
            <br className="sm:hidden" />
            for Modern Businesses
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nexus Core combines essential ERP functionality with cutting-edge technology to streamline your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to transform your business?</h3>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

