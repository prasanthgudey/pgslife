import Hotel from '../models/Hotel.js';

// Get all hotels
export const getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.status(200).json(hotels);
};

// Get a single hotel by ID
export const getHotelById = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
  res.status(200).json(hotel);
};

// Create a new hotel
export const createHotel = async (req, res) => {
  const { name, city, price, rating, image } = req.body;
  const hotel = await Hotel.create({ name, city, price, rating, image });
  res.status(201).json(hotel);
};

// Update a hotel
export const updateHotel = async (req, res) => {
  const { name, city, price, rating, image } = req.body;
  const hotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    { name, city, price, rating, image },
    { new: true, runValidators: true }
  );
  if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
  res.status(200).json(hotel);
};

export const deleteHotel = async (req, res) => {
  try {
    console.log('Delete route hit');
    console.log('ID to delete:', req.params.id);

    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!hotel) {
      console.log('Hotel not found for ID:', req.params.id);
      return res.status(404).json({ message: 'Hotel not found' });
    }

    console.log('Deleted hotel:', hotel.name);
    res.status(200).json({ message: 'Hotel deleted successfully' });

  } catch (err) {
    console.error('Error during deletion:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

