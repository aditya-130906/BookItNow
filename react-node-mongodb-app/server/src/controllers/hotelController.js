const Hotel = require('../models/Hotel');

const getAllHotels = async (req, res) => {
    try {
        const { city, priceMin, priceMax, rating } = req.query;
        let filter = {};

        if (city) {
            filter.city = { $regex: city, $options: 'i' };
        }
        if (priceMin || priceMax) {
            filter.pricePerNight = {};
            if (priceMin) filter.pricePerNight.$gte = parseInt(priceMin);
            if (priceMax) filter.pricePerNight.$lte = parseInt(priceMax);
        }
        if (rating) {
            filter.rating = { $gte: parseFloat(rating) };
        }

        const hotels = await Hotel.find(filter).sort({ createdAt: -1 });
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createHotel = async (req, res) => {
    try {
        const { name, description, image, city, address, amenities, pricePerNight } = req.body;

        const hotel = new Hotel({
            name,
            description,
            image,
            city,
            address,
            amenities,
            pricePerNight,
        });

        await hotel.save();
        res.status(201).json({ message: 'Hotel created successfully', hotel });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel updated successfully', hotel });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllHotels, getHotelById, createHotel, updateHotel, deleteHotel };
