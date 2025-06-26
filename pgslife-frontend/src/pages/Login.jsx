// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import api from '../api/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      login(res.data.token, res.data.user);
      navigate('/hotels');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 animate-fade-in text-slate-100">
        {/* Header */}
        <div className="text-center mb-6">
          <ShieldCheck className="mx-auto text-indigo-400 mb-2" size={40} />
          <h2 className="text-3xl font-extrabold">Welcome Back</h2>
          <p className="text-sm text-slate-300 mt-1">Login to continue your journey</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <Mail className="absolute top-3.5 left-3 text-indigo-400" size={20} />
            <input
            name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              aria-label="Email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute top-3.5 left-3 text-indigo-400" size={20} />
            <input
            name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              required
              aria-label="Password"
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3.5 right-3 text-slate-300 hover:text-indigo-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-slate-300">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="form-checkbox rounded text-indigo-500" />
              Remember me
            </label>
            <Link to="/forgot" className="hover:text-indigo-400 transition-all">Forgot password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <LogIn size={18} />
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Login with Google
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center mt-6 text-slate-300">
          Don’t have an account?
          <Link to="/signup" className="text-indigo-400 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
