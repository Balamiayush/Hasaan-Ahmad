'use client';

import { FC } from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
  const socialIcons = [
    { icon: <Facebook size={16} />, href: '#' },
    { icon: <Twitter size={16} />, href: '#' },
    { icon: <Linkedin size={16} />, href: '#' },
    { icon: <Instagram size={16} />, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Privacy Policy', 'Terms of Service'],
    },
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Roadmap'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Blog', 'Support'],
    },
  ];

  return (
    <footer className="bg-[#0B0D1A] text-white/90 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4 col-span-1">
          <div className="text-lg font-semibold">Nexus Core</div>
          <p className="text-sm text-white/60">
            The all-in-one ERP solution for modern businesses. Streamline operations, boost productivity, and grow your business.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                className="hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{section.title}</h4>
            <ul className="text-sm text-white/70 space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
