// src/components/HotelCard.jsx
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HotelCard = ({ id, name, city, price, image, rating = 4.5 }) => {
  return (
    <div
      className="bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out group cursor-pointer"
      aria-label={`Hotel card for ${name}`}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Price Ribbon */}
        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          ₹{price} / night
        </div>

        {/* Badge */}
        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
          Top Rated
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-white">{name}</h2>

        {/* City with Icon */}
        <div className="flex items-center text-slate-300 text-sm">
          <MapPin size={16} className="mr-1 text-emerald-400" />
          <span>{city}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
              strokeWidth={1.5}
            />
          ))}
          <span className="ml-1 text-gray-300">{rating}/5</span>
        </div>

        {/* View Details Button */}
        <NavLink
          to={`/hotels/${id}`}
          className="inline-block mt-3 text-indigo-400 hover:text-white border border-indigo-500 hover:bg-indigo-600 transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label={`View details of ${name}`}
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default HotelCard;
