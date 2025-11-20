const express = require('express');
const router = express.Router();
const { createReview, getAllReviews, getHotelReviews, deleteReview } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/hotel/:hotelId', getHotelReviews);
router.delete('/:id', deleteReview);

module.exports = router;
