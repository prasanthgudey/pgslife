import express from 'express';
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
} from '../controllers/hotelController.js';
import protect from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/', getHotels);                 // GET /api/hotels
router.get('/:id', getHotelById);           // GET /api/hotels/:id
router.post('/', protect, createHotel);     // POST /api/hotels
router.put('/:id', protect, updateHotel);   // PUT /api/hotels/:id
router.delete('/:id', protect, deleteHotel); // DELETE /api/hotels/:id

export default router;
