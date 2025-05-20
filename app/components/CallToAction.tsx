'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CallToAction: FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !company) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-purple-300/20 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 bg-clip-text text-transparent animate-gradient-move">
              Transform Your Business
            </span>{' '}
            <span className="text-gray-900">Today</span>
          </h2>
          <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations using Nexus Core to streamline operations and drive growth.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            className="mt-12 p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your request. Our team will contact you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Back to Form
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-100 p-6 sm:p-8 max-w-md mx-auto relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Custom border animation on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 group-hover:border-2 group-hover:border-purple-400 z-0" />
            <div className="space-y-5 relative z-10">
              <div>
                <label htmlFor="email" className="sr-only">Work Email</label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/60 placeholder-gray-400 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">Organization Name</label>
                <motion.input
                  id="company"
                  type="text"
                  required
                  placeholder="Organization Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/60 placeholder-gray-400 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                transition={{ duration: 0.3 }}
              >
                Start Free Trial
                <span className="ml-2">→</span>
              </motion.button>
            </div>
          </motion.form>
        )}

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            'Free 14-day trial',
            'No credit card required',
            'Cancel anytime',
            '24/7 support',
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
