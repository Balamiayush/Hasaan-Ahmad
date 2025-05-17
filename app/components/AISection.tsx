'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface AIFeatureCardProps {
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
  progressColor: string;
}

const AIFeatureCard: FC<AIFeatureCardProps> = ({ 
  title, 
  description,
  iconColor,
  iconBg,
  progressColor
}) => {
  return (
    <motion.div 
      className=" p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={`${iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-4`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className={`w-5 h-5 ${iconColor}`}
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 8v8M8 12h8" strokeWidth="2" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="h-1 rounded-full bg-gray-100">
        <div className={`h-1 rounded-full ${progressColor}`} style={{ width: '70%' }}></div>
      </div>
    </motion.div>
  );
};

const AISection: FC = () => {
  const features = [
    {
      title: "AI-Powered Role Definition",
      description: "Let AI analyze your organization structure and suggest optimal custom roles with appropriate permissions.",
      iconColor: "text-white",
      iconBg: "bg-purple-600",
      progressColor: "bg-purple-600"
    },
    {
      title: "Intelligent Inventory Schema",
      description: "AI generates the perfect inventory structure based on your business type and needs.",
      iconColor: "text-white",
      iconBg: "bg-blue-600",
      progressColor: "bg-blue-600"
    },
    {
      title: "Smart Workflow Design",
      description: "AI creates efficient workflows tailored to your team's processes and goals.",
      iconColor: "text-white",
      iconBg: "bg-blue-500",
      progressColor: "bg-blue-500"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to predict business trends and make data-driven decisions.",
      iconColor: "text-white",
      iconBg: "bg-teal-500",
      progressColor: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 rounded-xl overflow-hidden relative">
      {/* Purple glow effect in top left corner */}
      <div 
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-400 filter blur-lg opacity-70"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(139,92,246,0) 70%)' }}
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">
            AI-Powered Innovation <span className="text-gray-800">at Every Level</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced AI capabilities set Nexus Core apart from traditional ERP solutions, automating complex tasks and streamlining your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AIFeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;