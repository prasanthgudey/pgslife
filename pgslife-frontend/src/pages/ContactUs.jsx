// src/pages/ContactUs.jsx
import React from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <section aria-label="Contact Us" className="bg-slate-900 text-slate-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-400 mb-2">Get in Touch</h2>
          <p className="text-slate-300 text-lg">
            We'd love to hear from you. Fill out the form and our team will respond shortly.
          </p>
        </div>

        <form className="bg-slate-800 p-8 rounded-xl shadow-lg space-y-6 transition-all duration-700">
          {/* Name Field */}
          <div className="flex items-center bg-slate-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
            <span className="p-3 text-indigo-300">
              <User size={20} />
            </span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent px-4 py-3 text-white placeholder-slate-400 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center bg-slate-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
            <span className="p-3 text-indigo-300">
              <Mail size={20} />
            </span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent px-4 py-3 text-white placeholder-slate-400 focus:outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div className="bg-slate-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
            <div className="flex items-start">
              <span className="p-3 pt-4 text-indigo-300">
                <MessageCircle size={20} />
              </span>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-transparent px-4 py-3 text-white placeholder-slate-400 focus:outline-none resize-none"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg text-white font-semibold shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
