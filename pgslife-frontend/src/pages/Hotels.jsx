// src/pages/Hotels.jsx
import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import HotelCard from '../components/HotelCard';
import api from '../api/api'; // axios instance with token
import { useAuth } from '../context/AuthContext';

const Hotels = () => {
  const [filters, setFilters] = useState({ city: '', rating: '', priceOrder: '' });
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();

  // Fetch data from backend
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get('/hotels');
        setHotels(res.data);
        setFilteredHotels(res.data);
      } catch (err) {
        console.error('Failed to fetch hotels:', err);
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchHotels();
    }
  }, [isLoggedIn]);

  // Apply filters whenever filters or hotels change
  useEffect(() => {
    let updated = [...hotels];

    if (filters.city) {
      updated = updated.filter(hotel =>
        hotel.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.rating) {
      updated = updated.filter(hotel => hotel.rating >= parseFloat(filters.rating));
    }

    if (filters.priceOrder === 'low') {
      updated.sort((a, b) => a.price - b.price);
    } else if (filters.priceOrder === 'high') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredHotels(updated);
  }, [filters, hotels]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-4 flex-wrap bg-slate-800 p-4 rounded-lg shadow-md">
          <Filter className="text-indigo-400" size={20} />
          <input
            type="text"
            placeholder="City"
            className="bg-slate-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          />
          <input
            type="number"
            placeholder="Min Rating"
            min="1"
            max="5"
            className="bg-slate-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          />
          <select
            className="bg-slate-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setFilters({ ...filters, priceOrder: e.target.value })}
          >
            <option value="">Sort By Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
        {loading ? (
          <p className="col-span-full text-center text-slate-300">Loading hotels...</p>
        ) : filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => <HotelCard key={hotel._id} {...hotel} id={hotel._id} />)
        ) : (
          <p className="col-span-full text-center text-slate-400">No hotels found matching filters.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
