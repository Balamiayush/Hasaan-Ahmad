'use client';
import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

const FeatureCard: FC<FeatureProps> = ({ icon, title, description, color }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // GSAP animation for card entry
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Hover animations
    const card = cardRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.25)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(content, {
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(icon, {
        scale: 1.2,
        rotate: 5,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(content, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 will-change-transform"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-indigo-50/30 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: 'inset 0 0 80px rgba(124, 58, 237, 0.1)',
        }}
      />
      
      <div ref={contentRef} className="p-6 flex flex-col items-start gap-4 relative z-10">
        <motion.div
          ref={iconRef}
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} transition-all duration-300`}
          whileTap={{ scale: 0.9 }}
        >
          {icons[icon]}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        {/* Animated underline */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const FeatureSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    // Animate heading
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // Animate subtitle
    gsap.from(headingRef.current.querySelector('p'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nexus Core combines essential ERP functionality with cutting-edge technology to streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;