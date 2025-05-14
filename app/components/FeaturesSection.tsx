'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const icons = {
  operations: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
      <path d="M3 9h18" strokeWidth="2" />
      <path d="M9 21V9" strokeWidth="2" />
    </svg>
  ),
  automation: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M12 8v4l3 3" strokeWidth="2" />
      <path d="M7 4.5l2 2" strokeWidth="2" />
      <path d="M17 4.5l-2 2" strokeWidth="2" />
    </svg>
  ),
  domain: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M12 4v16" strokeWidth="2" />
      <path d="M4 12h16" strokeWidth="2" />
    </svg>
  ),
  workflow: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" />
    </svg>
  ),
  security: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" strokeWidth="2" />
      <path d="M12 9v4" strokeWidth="2" />
      <path d="M12 16h.01" strokeWidth="2" />
    </svg>
  ),
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path d="M2 20h20" strokeWidth="2" />
      <path d="M5 20V8h4v12" strokeWidth="2" />
      <path d="M15 20V4h4v16" strokeWidth="2" />
    </svg>
  ),
};

interface FeatureProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
  color: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <motion.div
      className="p-6 flex flex-col items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.4, type: 'spring' }}
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
      >
        {icons[icon]}
      </motion.div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nexus Core combines essential ERP functionality with cutting-edge technology to streamline your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white rounded-xl border border-transparent hover:border-indigo-300 transition-all duration-300"
            >
              <Feature {...feature} />

              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-300/10 to-indigo-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
