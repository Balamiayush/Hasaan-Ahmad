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
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;
    const gradient = gradientRef.current;

    // GSAP animation for card entry
    gsap.from(card, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -15,
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.3)',
        duration: 0.4,
        ease: 'power2.out',
      });
      
      gsap.to(content, {
        y: -8,
        duration: 0.4,
        ease: 'power2.out',
      });
      
      gsap.to(icon, {
        scale: 1.3,
        rotate: 10,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
      
      gsap.to(gradient, {
        opacity: 0.8,
        duration: 0.6,
        ease: 'power2.out',
      });
      
      // Background pulse effect
      gsap.to(card, {
        background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245, 243, 255, 0.9) 100%)`,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        background: 'white',
        duration: 0.6,
        ease: 'power2.out',
      });
      
      gsap.to(content, {
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
      
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
      
      gsap.to(gradient, {
        opacity: 0,
        duration: 0.6,
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
      className="relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 will-change-transform h-full"
      style={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Animated gradient overlay */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-purple-100/80 to-indigo-100/80 opacity-0 transition-opacity duration-500 pointer-events-none"
      />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-200/50"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: 0,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              opacity: [0, 0.3, 0],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 5,
              },
            }}
          />
        ))}
      </div>
      
      <div ref={contentRef} className="p-6 flex flex-col items-start gap-4 relative z-10 h-full">
        <motion.div
          ref={iconRef}
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} transition-all duration-300 shadow-md`}
          whileTap={{ scale: 0.9 }}
        >
          {icons[icon]}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        
        {/* Animated underline */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-4"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Learn more link */}
        <motion.div
          className="mt-2 text-sm font-medium text-purple-600 flex items-center gap-1"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !containerRef.current) return;

    // Animate heading
    gsap.from(headingRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // Animate subtitle
    gsap.from(headingRef.current.querySelector('p'), {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // Background animation
    gsap.fromTo(sectionRef.current,
      { backgroundPosition: '0% 0%' },
      {
        backgroundPosition: '0% 20%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Floating dots animation
    const dots = gsap.utils.toArray('.floating-dot');
    dots.forEach((dot: any) => {
      gsap.to(dot, {
        y: 20,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
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
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        backgroundSize: '200% 200%',
      }}
    >
      {/* Decorative floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-100/50 floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div ref={headingRef} className="text-center mb-16">
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

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* CTA section */}
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