// src/layout/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      {/* Offset for fixed navbar */}
      <main className="flex-grow pt-20"> {/* 80px = h-20 */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
