// src/pages/Signup.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, UserPlus, User, Undo } from 'lucide-react';
import  {useAuth} from '../context/AuthContext';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        });
   const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', formData);
      alert('Signup successful. Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };


  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 animate-fade-in text-slate-100">
        {/* Header */}
        <div className="text-center mb-6">
          <UserPlus className="mx-auto text-emerald-400 mb-2" size={40} />
          <h2 className="text-3xl font-extrabold">Create an Account</h2>
          <p className="text-sm text-slate-300 mt-1">Join us and explore verified PGs</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <User className="absolute top-3.5 left-3 text-emerald-400" size={20} />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Name"
              aria-label="Name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute top-3.5 left-3 text-emerald-400" size={20} />
            <input
            name="email"
            value={formData.email}
            onChange={handleChange}
              type="email"
              required
              placeholder="Email"
              aria-label="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute top-3.5 left-3 text-emerald-400" size={20} />
            <input
              name="password"
            value={formData.password}
            onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Password"
              aria-label="Password"
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3.5 right-3 text-slate-300 hover:text-emerald-400"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <UserPlus size={18} />
            Signup
          </button>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Signup with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-6 text-slate-300">
          Already have an account?
          <Link to="/login" className="text-emerald-400 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
