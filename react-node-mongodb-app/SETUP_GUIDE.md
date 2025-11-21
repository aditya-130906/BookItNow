# HotelHub - Hotel Booking Application

## Project Overview

HotelHub is a full-stack hotel booking application built with:
- **Frontend**: React with React Router for navigation
- **Backend**: Node.js with Express API
- **Database**: MongoDB for data persistence
- **Authentication**: JWT-based user authentication

## Project Structure

```
react-node-mongodb-app/
├── client/                      # React Frontend
│   ├── src/
│   │   ├── pages/              # 10 main pages
│   │   │   ├── Home.jsx
│   ��   │   ├── Hotels.jsx
│   │   │   ├── HotelDetails.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   └── styles/             # CSS for all pages
│   └── package.json
└── server/                      # Express Backend
    ├── src/
    │   ├── models/             # Database models
    │   │   ├── User.js
    │   │   ├── Hotel.js
    │   │   ├── Room.js
    │   │   ├── Booking.js
    │   │   └── Review.js
    │   ├── controllers/        # Business logic
    │   │   ├── authController.js
    │   │   ├── hotelController.js
    │   │   ├── bookingController.js
    │   │   └── reviewController.js
    │   ├── routes/            # API routes
    │   │   ├── authRoutes.js
    │   │   ├── hotelRoutes.js
    │   │   ├── bookingRoutes.js
    │   │   └── reviewRoutes.js
    │   ├── middleware/        # Authentication middleware
    │   │   └── auth.js
    │   ├── seeds/             # Database seeds
    │   │   └── hotelSeeds.js
    │   ├── app.js             # Express app setup
    │   └── index.js           # Server entry point
    └── package.json
```

## Features

### 🏨 Hotel Management
- Browse all available hotels
- Search and filter hotels by city, price, and rating
- View detailed hotel information with amenities
- Check real-time availability

### 👤 User Authentication
- User registration with email validation
- Secure login with JWT tokens
- User profile management
- Password security with bcrypt hashing

### 📅 Booking System
- Easy hotel booking with date selection
- Check-in and check-out date management
- Real-time price calculation
- Booking confirmation and management

### 💰 Payment Processing
- Secure checkout page
- Payment form with card details
- Special requests during booking

### 📝 Reviews & Feedback
- Hotel reviews and ratings
- Contact form for inquiries
- Guest feedback submission

### 📱 Responsive Design
- Mobile-friendly interface
- Works on all devices and screen sizes
- Modern and intuitive UI

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Backend Setup

1. **Install backend dependencies** (if not already installed):
```bash
cd react-node-mongodb-app
npm install
```

2. **Configure environment variables**:
The following environment variables are already set:
```
MONGODB_URI="mongodb://localhost:27017/react-node-mongodb-app"
JWT_SECRET="your_jwt_secret"
PORT="5000"
```

3. **Seed the database with sample hotels**:
```bash
node server/src/seeds/hotelSeeds.js
```

This will populate your database with 10 sample hotels with realistic data and images.

### Frontend Setup

The frontend is already set up and will run with the dev server.

## Running the Application

### Start the Development Server

The application is configured to run with:
```bash
npm start --prefix react-node-mongodb-app/client
```

This will:
1. Start the React dev server on http://localhost:3000
2. The backend API proxy is configured to http://localhost:5000

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires token)
- `PUT /api/auth/profile` - Update user profile (requires token)

### Hotels
- `GET /api/hotels` - Get all hotels (supports filtering)
  - Query params: `city`, `priceMin`, `priceMax`, `rating`
- `GET /api/hotels/:id` - Get hotel details

### Bookings
- `POST /api/bookings` - Create new booking (requires token)
- `GET /api/bookings` - Get user's bookings (requires token)
- `GET /api/bookings/:id` - Get booking details (requires token)
- `PUT /api/bookings/:id` - Update booking (requires token)
- `PUT /api/bookings/:id/cancel` - Cancel booking (requires token)

### Reviews
- `POST /api/reviews` - Submit review/feedback
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/hotel/:hotelId` - Get hotel reviews
- `DELETE /api/reviews/:id` - Delete review

## Database Schema

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: String,
  city: String,
  zipCode: String,
  country: String,
  createdAt: Date
}
```

### Hotel Model
```javascript
{
  name: String,
  description: String,
  image: String,
  city: String,
  address: String,
  rating: Number (0-5),
  reviewCount: Number,
  amenities: [String],
  pricePerNight: Number,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  userId: ObjectId (ref: User),
  hotelId: ObjectId (ref: Hotel),
  roomId: ObjectId (ref: Room),
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  totalPrice: Number,
  bookingStatus: String (Confirmed/Cancelled/Completed),
  specialRequests: String,
  createdAt: Date
}
```

## Technologies Used

### Frontend
- React 18
- React Router v6
- CSS3 with responsive design
- Modern JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS for cross-origin requests

## Key Features Implemented

✅ 10 Complete Pages with Rich Frontend
- Home page with search functionality
- Hotel browsing with advanced filtering
- Detailed hotel information page
- User authentication (login/register)
- Booking management page
- User profile management
- Secure checkout page
- About Us page
- Contact/Feedback page
- Navigation and Footer components

✅ Backend Support for Multiple Pages
- Hotel search and filtering
- User authentication with JWT
- Booking creation and management
- Feedback/contact form submission
- User profile updates

✅ Rich Frontend Functionality
- Real-time search and filtering
- Date picker for bookings
- Responsive design for all devices
- Form validation and error handling
- Loading states and user feedback

✅ Database Integration
- MongoDB with Mongoose ODM
- 5 main collections: Users, Hotels, Rooms, Bookings, Reviews
- Relationships between collections
- Proper indexing and validation

## How to Use the App

### For Users

1. **Browse Hotels**
   - Go to "Browse Hotels" page
   - Use search and filters to find desired hotels
   - Click on a hotel to see details

2. **Make a Booking**
   - Select a hotel
   - Choose check-in and check-out dates
   - Click "Proceed to Booking"
   - Register/Login if needed
   - Complete payment on checkout page

3. **Manage Bookings**
   - Login to your account
   - Go to "My Bookings"
   - View, modify, or cancel bookings

4. **Leave Feedback**
   - Go to "Contact Us"
   - Fill out the feedback form
   - Submit your message and rating

### Test Credentials

After running the seed script, you can register new accounts or test with sample data.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or check your Atlas connection
- Verify MONGODB_URI environment variable is correct

### Port Already in Use
- Backend: Change PORT in environment variables
- Frontend: React CLI will prompt to use different port

### API Not Responding
- Ensure backend server is running on port 5000
- Check network tab in browser dev tools
- Verify CORS is enabled

## Future Enhancements

- Payment gateway integration (Stripe)
- Email notifications for bookings
- Advanced user dashboard with booking history
- Hotel admin panel
- Reviews with photos
- Wishlist/favorites feature
- Multi-language support
- Advanced analytics

## License

This project is created for educational purposes.

## Support

For issues or questions, contact the development team or check the application's help section.

---

**Enjoy your HotelHub experience! 🏨✈️**
