const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    bookingStatus: {
        type: String,
        enum: ['Confirmed', 'Cancelled', 'Completed'],
        default: 'Confirmed',
    },
    specialRequests: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Booking', bookingSchema);
