import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 4.5 },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Hotel', hotelSchema);
