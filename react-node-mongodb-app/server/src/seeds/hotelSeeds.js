const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
const dotenv = require('dotenv');

dotenv.config();

const hotels = [
  {
    name: 'The Oberoi, Bengaluru',
    description: 'A luxury 5-star hotel with lush gardens on MG Road.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    city: 'Bangalore',
    address: '37-39 MG Road, Bengaluru',
    rating: 4.8,
    reviewCount: 1200,
    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar'],
    pricePerNight: 8500,
  },
  {
    name: 'The Leela Palace Bengaluru',
    description: 'Palace-style luxury hotel with premium business facilities.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    city: 'Bangalore',
    address: 'HAL Old Airport Road, Bengaluru',
    rating: 4.9,
    reviewCount: 1500,
    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Fine Dining'],
    pricePerNight: 12000,
  },

  // 🌇 Mumbai Hotels
  {
    name: 'Taj Mahal Palace, Mumbai',
    description: 'Iconic luxury hotel overlooking the Gateway of India.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99c86e4b?w=800&h=600&fit=crop',
    city: 'Mumbai',
    address: 'Apollo Bandar, Colaba, Mumbai',
    rating: 4.9,
    reviewCount: 2000,
    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Sea View'],
    pricePerNight: 15000,
  },
  {
    name: 'Trident Bandra Kurla',
    description: 'Premium business hotel in the BKC commercial district.',
    image: 'https://images.unsplash.com/photo-1582719471537-c3400ca199e7?w=800&h=600&fit=crop',
    city: 'Mumbai',
    address: 'C-56, Bandra Kurla Complex, Mumbai',
    rating: 4.7,
    reviewCount: 950,
    amenities: ['WiFi', 'Gym', 'Restaurant', 'Bar'],
    pricePerNight: 9000,
  },

  // 🏙️ Delhi Hotels
  {
    name: 'The Imperial New Delhi',
    description: 'Classic luxury hotel near Connaught Place.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop',
    city: 'Delhi',
    address: 'Janpath Road, New Delhi',
    rating: 4.8,
    reviewCount: 1700,
    amenities: ['WiFi', 'Spa', 'Gym', 'Restaurant', 'Bar'],
    pricePerNight: 11000,
  },
  {
    name: 'ITC Maurya, New Delhi',
    description: 'Premium hotel known for world-class fine dining.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
    city: 'Delhi',
    address: 'Sardar Patel Marg, New Delhi',
    rating: 4.7,
    reviewCount: 1400,
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Valet Parking'],
    pricePerNight: 9500,
  },

  // 🌴 Chennai Hotels
  {
    name: 'ITC Grand Chola',
    description: 'Luxury hotel inspired by Chola dynasty architecture.',
    image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&h=600&fit=crop',
    city: 'Chennai',
    address: 'Guindy, Chennai',
    rating: 4.8,
    reviewCount: 1600,
    amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Fine Dining'],
    pricePerNight: 10000,
  },
  {
    name: 'Taj Coromandel, Chennai',
    description: 'Premium hospitality in the heart of Nungambakkam.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
    city: 'Chennai',
    address: 'Nungambakkam, Chennai',
    rating: 4.6,
    reviewCount: 900,
    amenities: ['WiFi', 'Gym', 'Spa', 'Restaurant'],
    pricePerNight: 7500,
  },
];


async function seedHotels() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        await Hotel.deleteMany({});
        console.log('Cleared existing hotels');

        const createdHotels = await Hotel.insertMany(hotels);
        console.log(`Successfully seeded ${createdHotels.length} hotels`);

        await mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedHotels();
