'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CallToAction: FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7928CA] to-[#4F3CC9] px-4 py-20">
      <div className="text-center max-w-xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Ready to Transform Your Business Operations?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 mb-8"
        >
          Join thousands of organizations already using Nexus Core to streamline their operations.
        </motion.p>

        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl space-y-4 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Organization Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-4 py-3 rounded-lg bg-white text-[#4F3CC9] font-semibold hover:bg-gray-100 transition"
          >
            Start Free Trial →
          </motion.button>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm">
          {[
            'Free 14-day trial',
            'No credit card required',
            'Cancel anytime',
          ].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <CheckCircle size={16} className="text-green-400" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

