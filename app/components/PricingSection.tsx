"use client";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiStar } from 'react-icons/fi';
import Button from "./Button";
const PricingSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  };

  const plans = [
    {
      name: "Free Plan",
      description: "Ideal for startups or small teams just getting started",
      price: "$0",
      period: "month",
      cta: "Get Started",
      featured: false,
      features: [
        "Up to 8 Users",
        "Limited Access to Basic Features",
        "Basic Vendition Management",
        "Limited Inventory Management",
        "Limited Payroll Management",
        "Website Builder",
        "AI-Powered Automation",
        "Custom Domains"
      ]
    },
    {
      name: "Premium Plan",
      description: "Complete solution for growing organizations",
      price: "$9.99",
      period: "month",
      cta: "Upgrade Now",
      featured: true,
      features: [
        "Unlimited Users",
        "Full Access to All Features",
        "Advanced Vendition Management",
        "Complete Inventory Management",
        "Full Payroll Management",
        "Website Builder",
        "AI-Powered Automation",
        "Custom Domains",
        "Priority Support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-purple-600">Affordable Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike competitors that charge per user, Nexus Core offers a flat rate for your entire organization
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={plan.featured ? undefined : cardHover}
              className={`relative rounded-xl border ${plan.featured ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-white shadow-lg' : 'border-gray-200 bg-white shadow-sm'} overflow-hidden`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 transform rotate-12 translate-x-2 -translate-y-2">
                  Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.featured && <FiStar className="text-yellow-400" />}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>

                <Button
                  cta={plan.cta}
                  href="/register"
                  className={`w-full ${plan.cta === "Upgrade Now" ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                />
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className={`mt-1 mr-2 flex-shrink-0 ${plan.featured ? 'text-purple-600' : 'text-gray-400'}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
