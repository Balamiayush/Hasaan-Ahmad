'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CallToAction: FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.15),rgba(255,255,255,0))]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>{' '}
            Today
          </h2>
          <p className="text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
            Join thousands of organizations using Nexus Core to streamline operations and drive growth.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            className="mt-12 p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <div className="flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-400 mb-6">
                We've received your request. Our team will contact you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                Back to Form
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-12 bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-6 sm:p-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Work Email</label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
                  whileFocus={{ scale: 1.02 }}
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition"
              >
                Start Free Trial
                <span className="ml-2">→</span>
              </motion.button>
            </div>
          </motion.form>
        )}

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4"
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
            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;