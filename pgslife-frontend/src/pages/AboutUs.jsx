// src/pages/AboutUs.jsx
import React, { useEffect, useState } from 'react';
import { ShieldCheck, DollarSign, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  const [users, setUsers] = useState(0);
  const [pgs, setPGs] = useState(0);
  const [cities, setCities] = useState(0);

  // Simple animated counters
  useEffect(() => {
    const animateCounter = (target, setter, max) => {
      let count = 0;
      const step = Math.ceil(max / 50);
      const interval = setInterval(() => {
        count += step;
        if (count >= max) {
          setter(max);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 30);
    };

    animateCounter(users, setUsers, 1200);
    animateCounter(pgs, setPGs, 300);
    animateCounter(cities, setCities, 25);
  }, []);

  return (
    <section aria-label="About Us" className="bg-slate-900 text-slate-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        {/* Media Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
            alt="About PG's Life"
            className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-4 transition-opacity duration-700">
            Who We Are
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Empowering thousands of users to find safe and verified PGs.
          </p>

          <p className="text-slate-400 mb-4">
            At PG's Life, our mission is to simplify PG bookings by providing verified, affordable, and safe living spaces for students and working professionals across India.
          </p>
          <p className="text-slate-400 mb-8">
            With a vision to become the most trusted PG aggregator, we value transparency, safety, and 24/7 support.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="text-emerald-400 mt-1" />
              <span>Verified & Trusted Listings</span>
            </div>
            <div className="flex items-start space-x-3">
              <DollarSign className="text-yellow-300 mt-1" />
              <span>Affordable & Transparent Pricing</span>
            </div>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div>
              <p className="text-3xl font-bold text-white">{users}+</p>
              <span className="text-sm text-slate-400">Happy Users</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{pgs}+</p>
              <span className="text-sm text-slate-400">Verified PGs</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{cities}+</p>
              <span className="text-sm text-slate-400">Cities Covered</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg text-white font-medium shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-400">
            Explore Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
