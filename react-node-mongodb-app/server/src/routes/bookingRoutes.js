const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings, getBookingById, updateBooking, cancelBooking } = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, createBooking);
router.get('/', auth, getUserBookings);
router.get('/:id', auth, getBookingById);
router.put('/:id', auth, updateBooking);
router.put('/:id/cancel', auth, cancelBooking);

module.exports = router;
