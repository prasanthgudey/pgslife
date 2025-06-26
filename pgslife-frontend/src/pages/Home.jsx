// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, DollarSign, ShieldCheck, Headset } from 'lucide-react';

const features = [
  {
    icon: <Home size={28} />,
    title: "Find PGs Across Cities",
    description: "Choose from top-rated PGs in major cities across India with detailed amenities.",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Affordable Prices",
    description: "Compare prices and book PGs that match your budget perfectly.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Verified Rooms",
    description: "Every listing is verified to ensure safety, hygiene, and real photos.",
  },
  {
    icon: <Headset size={28} />,
    title: "24x7 Support",
    description: "Our support team is here for you anytime, anywhere.",
  },
];

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-300 drop-shadow-lg motion-safe:animate-fadeIn">
            Welcome to PG's Life
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 font-light motion-safe:animate-fadeIn delay-100">
            Book trusted PGs and shared rooms in your city at the best prices.
          </p>
          <Link to="/hotels">
            <button className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg text-white font-medium text-lg shadow-lg hover:shadow-xl ring-2 ring-indigo-500 hover:ring-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              Explore Hotels
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-12">Why Choose PG's Life?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group"
              >
                <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
