// src/components/Footer.jsx
import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-3">PG's Life</h2>
          <p className="text-sm leading-relaxed">
            Discover and book the best PG accommodations across cities.
            Affordable, verified, and trusted by thousands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Hotels', 'About', 'Contact', 'Login', 'Signup'].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="group-hover:underline group-hover:underline-offset-4">
                    {link}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            {['Privacy Policy', 'Terms of Service', 'Help'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="group-hover:underline group-hover:underline-offset-4">
                    {link}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors duration-300"
              >
                <Icon className="w-5 h-5 text-gray-300 hover:text-white transition duration-300 hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-center text-gray-400">
        © 2025 PG's Life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
