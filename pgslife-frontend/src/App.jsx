// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Hotels from './pages/Hotels';
import HotelPage from './pages/HotelPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelPage />} />
          </Route>
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
