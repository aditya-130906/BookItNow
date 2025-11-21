const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
const dotenv = require('dotenv');

dotenv.config();

const hotels = [
    {
        name: 'Luxe Palace Hotel',
        description: 'Experience ultimate luxury and comfort at our five-star hotel located in the heart of the city. Our world-class amenities and exceptional service ensure an unforgettable stay.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        city: 'New York',
        address: '123 Fifth Avenue, Manhattan',
        rating: 4.8,
        reviewCount: 450,
        amenities: ['WiFi', 'Swimming Pool', 'Spa', 'Gym', 'Restaurant', 'Room Service', 'Concierge', 'Valet Parking'],
        pricePerNight: 250,
    },
    {
        name: 'Sunset Beach Resort',
        description: 'A beachfront paradise offering stunning ocean views, pristine sandy beaches, and water sports activities. Perfect for a relaxing vacation with family and friends.',
        image: 'https://images.unsplash.com/photo-1582719471537-c3400ca199e7?w=800&h=600&fit=crop',
        city: 'Miami',
        address: '456 Ocean Drive, Miami Beach',
        rating: 4.7,
        reviewCount: 380,
        amenities: ['Beach Access', 'Water Sports', 'Beachbar', 'Outdoor Pool', 'Snorkeling', 'Sunset Tours', 'WiFi', 'Restaurant'],
        pricePerNight: 180,
    },
    {
        name: 'Mountain Lodge Retreat',
        description: 'Nestled in the heart of the mountains, our lodge offers a serene escape surrounded by natural beauty. Perfect for hiking, meditation, and nature lovers.',
        image: 'https://images.unsplash.com/photo-1572120471610-ba4facef254d?w=800&h=600&fit=crop',
        city: 'Aspen',
        address: '789 Mountain Road, Aspen',
        rating: 4.6,
        reviewCount: 320,
        amenities: ['Hiking Trails', 'Fireplace', 'Hot Tub', 'Mountain Views', 'Restaurant', 'Library', 'WiFi', 'Parking'],
        pricePerNight: 200,
    },
    {
        name: 'Urban Downtown Hotel',
        description: 'Located in the vibrant downtown area, our boutique hotel offers easy access to restaurants, shops, and entertainment. Modern design meets classic comfort.',
        image: 'https://images.unsplash.com/photo-1578894378341-fb3fc2fea87b?w=800&h=600&fit=crop',
        city: 'Los Angeles',
        address: '321 Downtown Blvd, LA',
        rating: 4.5,
        reviewCount: 280,
        amenities: ['WiFi', 'Gym', 'Bar', 'Restaurant', 'Meeting Rooms', 'Concierge', 'Parking', 'Room Service'],
        pricePerNight: 160,
    },
    {
        name: 'Garden Inn & Suites',
        description: 'A charming, family-friendly hotel surrounded by lush gardens and landscaping. Ideal for families and those seeking a peaceful retreat with modern amenities.',
        image: 'https://images.unsplash.com/photo-1586522881525-86bc9eec1be3?w=800&h=600&fit=crop',
        city: 'Austin',
        address: '654 Garden Lane, Austin',
        rating: 4.4,
        reviewCount: 210,
        amenities: ['WiFi', 'Pool', 'Garden Walks', 'Family Rooms', 'Restaurant', 'Kids Activities', 'Parking', 'Lounge'],
        pricePerNight: 120,
    },
    {
        name: 'Heritage Castle Hotel',
        description: 'Stay in a historic castle with timeless elegance and modern amenities. Our grand halls and period architecture transport you back in time.',
        image: 'https://images.unsplash.com/photo-1531973576460-7e2b19cd6400?w=800&h=600&fit=crop',
        city: 'Edinburgh',
        address: '987 Castle Hill, Edinburgh',
        rating: 4.7,
        reviewCount: 360,
        amenities: ['Historic Tours', 'Fine Dining', 'Library', 'WiFi', 'Conference Halls', 'Spa', 'Room Service', 'Garden'],
        pricePerNight: 220,
    },
    {
        name: 'Business Executive Tower',
        description: 'Perfect for business travelers with state-of-the-art facilities. Located near major business districts with excellent transport connections.',
        image: 'https://images.unsplash.com/photo-1559631813-8ccbb5b13eae?w=800&h=600&fit=crop',
        city: 'Chicago',
        address: '246 Business Park, Chicago',
        rating: 4.3,
        reviewCount: 190,
        amenities: ['High-Speed WiFi', 'Business Center', 'Gym', 'Bar', 'Restaurant', 'Meeting Rooms', 'Valet Parking', 'Concierge'],
        pricePerNight: 150,
    },
    {
        name: 'Tropical Paradise Villas',
        description: 'Immerse yourself in tropical luxury with private villas, crystal clear waters, and world-class service. A true island paradise awaits.',
        image: 'https://images.unsplash.com/photo-1564501049351-005e2b74742c?w=800&h=600&fit=crop',
        city: 'Bali',
        address: '135 Island Road, Bali',
        rating: 4.9,
        reviewCount: 520,
        amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Water Sports', 'Fine Dining', 'Villa Concierge', 'Yoga Classes', 'WiFi'],
        pricePerNight: 280,
    },
    {
        name: 'City Comfort Inn',
        description: 'Affordable yet comfortable hotel perfect for budget travelers and backpackers. Great location with friendly staff and clean rooms.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
        city: 'Barcelona',
        address: '369 City Center, Barcelona',
        rating: 4.2,
        reviewCount: 280,
        amenities: ['WiFi', 'Common Kitchen', 'Lounge', 'Tours Desk', 'Luggage Storage', 'Air Conditioning', 'Lockers', 'Social Events'],
        pricePerNight: 70,
    },
    {
        name: 'Wellness Spa Resort',
        description: 'A holistic wellness destination featuring spa treatments, yoga classes, and health-focused activities. Rejuvenate your mind, body, and spirit.',
        image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5d82a?w=800&h=600&fit=crop',
        city: 'Sedona',
        address: '789 Wellness Way, Sedona',
        rating: 4.8,
        reviewCount: 400,
        amenities: ['Spa', 'Yoga Studio', 'Thermal Pools', 'Wellness Cafe', 'Meditation Room', 'Fitness Center', 'Hiking Trails', 'Restaurant'],
        pricePerNight: 240,
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
