const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 4.5,
    },
    reviewCount: {
        type: Number,
        default: 0,
    },
    amenities: [String],
    pricePerNight: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Hotel', hotelSchema);
