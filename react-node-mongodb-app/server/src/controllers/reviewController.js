const Review = require('../models/Review');

const createReview = async (req, res) => {
    try {
        const { name, email, subject, message, rating } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const review = new Review({
            userId: req.userId || null,
            name,
            email,
            subject,
            message,
            rating,
        });

        await review.save();
        res.status(201).json({ message: 'Review submitted successfully', review });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getHotelReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ hotelId: req.params.hotelId }).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createReview, getAllReviews, getHotelReviews, deleteReview };
