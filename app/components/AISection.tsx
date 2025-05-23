'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface AIFeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}

const AIFeatureCard: FC<AIFeatureCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="group relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.03 }}
    >
      {/* Gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-400" />

      <motion.div
        className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 shadow"
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ duration: 0.4, type: 'tween', ease: 'easeInOut' }}
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="h-1.5 w-full rounded-full bg-gray-100">
        <motion.div
          className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${70 + (index * 5)}%` }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
      </div>
      <motion.a
        className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:text-indigo-600 transition-colors"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.4, type: 'tween', ease: 'easeInOut' }}
        href="#"
        tabIndex={0}
      >
        Explore feature
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

const AISection: FC = () => {
  const features = [
    {
      title: "AI-Powered Role Definition",
      description: "Let AI analyze your organization structure and suggest optimal custom roles with appropriate permissions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Intelligent Inventory Schema",
      description: "AI generates the perfect inventory structure based on your business type and needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0.621 0 1.125.504 1.125 1.125z" />
        </svg>
      )
    },
    {
      title: "Smart Workflow Design",
      description: "AI creates efficient workflows tailored to your team's processes and goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      )
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to predict business trends and make data-driven decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.08),rgba(255,255,255,0))]" />
        <div className="absolute left-0 top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.07),rgba(255,255,255,0))]" />
        <div className="absolute right-0 bottom-0 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.09),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              AI-Powered Innovation
            </span>
            <br className="sm:hidden" />
            at Every Level
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our advanced AI capabilities set Nexus Core apart from traditional ERP solutions, automating complex tasks and streamlining your business operations.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <AIFeatureCard key={index} index={index} {...feature} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:from-purple-600 hover:to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, type: 'tween', ease: 'easeInOut' }}
          >
            Discover AI Capabilities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;