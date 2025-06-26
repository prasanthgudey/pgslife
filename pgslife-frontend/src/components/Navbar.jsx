// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Hotel, Info, Phone, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const { isLoggedIn, logout } = useAuth();
const navigate = useNavigate();


const navItems = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'Hotels', path: '/hotels', icon: <Hotel size={18} /> },
  { name: 'About', path: '/about', icon: <Info size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
  ...(!isLoggedIn
    ? [
        { name: 'Login', path: '/login', icon: <LogIn size={18} /> },
        { name: 'Signup', path: '/signup', icon: <UserPlus size={18} /> },
      ]
    : [])
];

const handleLogout = () => {
  logout();
  navigate('/signup');
};


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const baseLinkStyle = `group flex items-center gap-2 py-2 px-3 rounded-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500`;
  const activeLink = `text-indigo-400 dark:text-emerald-400`;
  const inactiveLink = `text-slate-100 dark:text-slate-300 hover:text-indigo-300 dark:hover:text-emerald-300`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-md ${
        scrolled
          ? 'bg-slate-800/90 dark:bg-slate-900/90 shadow-md'
          : 'bg-slate-900 dark:bg-slate-950'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-200 dark:text-emerald-300">
          PG's Life
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
   <ul className="flex flex-col gap-4 md:flex-row md:gap-6 items-center">

  {navItems.map(({ name, path, icon }) => (
    <li key={name}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${baseLinkStyle} ${
            isActive ? activeLink : inactiveLink
          } group w-full flex items-center gap-2`
        }
        aria-label={name}
      >
        <span className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-1 duration-300">
          {icon}
        </span>
        <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 dark:after:bg-emerald-400 group-hover:after:w-full after:transition-all after:duration-300">
          {name}
        </span>
      </NavLink>
    </li>
  ))}

  {isLoggedIn && (
    <li>
      <button
        onClick={handleLogout}
        className={`${baseLinkStyle} text-red-400 hover:text-red-500 w-full text-left flex items-center gap-2 group`}
        aria-label="Logout"
      >
        <span className="transition-transform group-hover:-translate-y-0.5 group-hover:rotate-1 duration-300">
          <X size={18} />
        </span>
        <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-400 group-hover:after:w-full after:transition-all after:duration-300">
          Logout
        </span>
      </button>
    </li>
  )}
</ul>





        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-slate-100 dark:text-slate-100"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-4 right-4 w-[85%] max-w-xs bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-700 rounded-xl z-50 px-6 py-6 transform transition-all duration-500 ease-in-out origin-top-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button aligned top right */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-red-500 transition-colors"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="space-y-4">
          {navItems.map(({ name, path, icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${baseLinkStyle} ${
                    isActive ? activeLink : inactiveLink
                  }`
                }
                aria-label={name}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        {isLoggedIn && (
  <button
    onClick={handleLogout}
    className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300"
  >
    Logout
  </button>
)}

      </div>
    </nav>
  );
};

export default Navbar;
