import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Wifi, BedDouble, AirVent, Utensils } from 'lucide-react';
import axios from 'axios';

const icons = {
  WiFi: <Wifi className="text-emerald-400 w-6 h-6" />,
  AC: <AirVent className="text-sky-400 w-6 h-6" />,
  Meals: <Utensils className="text-orange-400 w-6 h-6" />,
  Laundry: <BedDouble className="text-indigo-400 w-6 h-6" />,
};

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  // Static values
  const staticDescription = 'Experience premium living with all modern amenities and professional staff.';
  const staticAmenities = ['WiFi', 'AC', 'Meals', 'Laundry'];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`https://pgslife.onrender.com/api/hotels/${id}`);
        const data = {
          ...res.data,
          description: staticDescription,
          amenities: staticAmenities,
        };
        setHotel(data);
      } catch (err) {
        setHotel(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) return <div className="text-center text-gray-400 py-20">Loading hotel details...</div>;
  if (!hotel) return <div className="text-center text-gray-500 py-20">Hotel not found.</div>;

  return (
    <section aria-label="Hotel Details" className="bg-slate-950 text-slate-100">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeInUp">
              {hotel.name}
            </h1>
            <div className="flex items-center space-x-4 text-slate-300">
              <span className="flex items-center"><MapPin className="mr-1 text-emerald-400" size={18} />{hotel.city}</span>
              <span className="text-emerald-400 font-semibold">₹{hotel.price} / night</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">About This Stay</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">{hotel.description}</p>

          <h3 className="text-xl font-semibold text-emerald-400 mb-3">Amenities</h3>
          <div className="grid grid-cols-2 gap-4">
            {hotel.amenities.map((item) => (
              <div
                key={item}
                className="flex items-center space-x-3 bg-slate-800 rounded-lg p-3 hover:scale-105 transition transform"
              >
                {icons[item]}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Rating</h3>
            <div className="flex items-center space-x-1 text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(hotel.rating) ? 'currentColor' : 'none'}
                  strokeWidth={1.5}
                />
              ))}
              <span className="ml-2 text-slate-300">{hotel.rating}/5</span>
            </div>
          </div>

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-2xl transition hover:scale-105 duration-300"
            aria-label="Check Availability"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelPage;
