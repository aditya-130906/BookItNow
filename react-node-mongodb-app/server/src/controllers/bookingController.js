const Booking = require('../models/Booking');
const Room = require('../models/Room');

const createBooking = async (req, res) => {
    try {
        const { hotelId, roomId, checkInDate, checkOutDate, numberOfGuests, totalPrice, specialRequests } = req.body;

        if (!hotelId || !roomId || !checkInDate || !checkOutDate || !numberOfGuests || !totalPrice) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const booking = new Booking({
            userId: req.userId,
            hotelId,
            roomId,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            totalPrice,
            specialRequests,
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.userId })
            .populate('hotelId')
            .populate('roomId')
            .sort({ createdAt: -1 });

        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate('hotelId')
            .populate('roomId')
            .populate('userId');

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.userId.toString() !== req.userId && req.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        Object.assign(booking, req.body);
        await booking.save();

        res.status(200).json({ message: 'Booking updated successfully', booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        booking.bookingStatus = 'Cancelled';
        await booking.save();

        res.status(200).json({ message: 'Booking cancelled successfully', booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createBooking,
    getUserBookings,
    getBookingById,
    updateBooking,
    cancelBooking,
};
