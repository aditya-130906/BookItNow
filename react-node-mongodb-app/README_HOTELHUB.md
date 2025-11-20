# 🏨 HotelHub - Professional Hotel Booking Application

A full-stack hotel booking web application built with React, Node.js, Express, and MongoDB. This is a feature-rich application designed as a complete hotel reservation system.

## 🌟 Key Features

### ✨ 10+ Unique Pages
1. **Home** - Landing page with featured hotels and search functionality
2. **Browse Hotels** - Advanced search with filters for city, price, and ratings
3. **Hotel Details** - Comprehensive hotel information with amenities and reviews
4. **Login** - Secure user authentication
5. **Register** - New user account creation
6. **My Bookings** - View and manage all user bookings
7. **Profile** - User account and profile management
8. **Checkout** - Secure payment and booking confirmation
9. **About Us** - Company information and features
10. **Contact Us** - Contact form and feedback submission

### 🔐 Authentication & Security
- JWT-based user authentication
- Bcrypt password hashing
- Secure API endpoints
- Protected user routes

### 🔍 Hotel Search & Filtering
- Search hotels by city name
- Filter by price range
- Filter by minimum rating
- Real-time search results

### 📅 Booking Management
- Easy date-based booking
- Check-in and check-out date selection
- Guest count management
- Special requests for bookings
- Booking cancellation
- Booking history and status tracking

### 💳 Checkout System
- Secure payment form
- Price calculation with night count
- Booking confirmation
- Order summary

### 📊 Responsive Design
- Mobile-first approach
- Fully responsive on all devices
- Modern UI with smooth interactions
- Accessible navigation

## 🛠️ Tech Stack

### Frontend
```
React 18.0
React Router v6
CSS3 (Responsive Design)
Fetch API for HTTP requests
```

### Backend
```
Node.js
Express.js
MongoDB with Mongoose ODM
JWT Authentication
Bcryptjs for password hashing
CORS for cross-origin requests
```

### Database Models
- **User** - User accounts and profiles
- **Hotel** - Hotel listings and details
- **Room** - Room information and types
- **Booking** - Booking records and management
- **Review** - Guest reviews and feedback

## 📦 Project Structure

```
react-node-mongodb-app/
│
├── client/                           # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/                   # Page components (10 pages)
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Hotels.jsx           # Hotels listing
│   │   │   ├── HotelDetails.jsx     # Hotel info
│   │   │   ├── Login.jsx            # Login form
│   │   │   ├── Register.jsx         # Registration form
│   │   │   ├── MyBookings.jsx       # Bookings list
│   │   │   ├── Profile.jsx          # User profile
│   │   │   ├── Checkout.jsx         # Payment page
│   │   │   ├── About.jsx            # About page
│   │   │   └── Contact.jsx          # Contact form
│   │   │
│   │   ├── components/              # Reusable components
│   │   │   ├── Navigation.jsx       # Header/Nav bar
│   │   │   └── Footer.jsx           # Footer component
│   │   │
│   │   ├── styles/                  # CSS files
│   │   │   ├── index.css            # Global styles
│   │   │   ├── Navigation.css       # Nav styles
│   │   │   ├── Footer.css           # Footer styles
│   │   │   ├── Home.css
│   │   │   ├── Hotels.css
│   │   │   ├── HotelDetails.css
│   │   │   ├── Auth.css
│   │   │   ├── MyBookings.css
│   │   │   ├── Profile.css
│   │   │   ├── Checkout.css
│   │   │   ├── About.css
│   │   │   └── Contact.css
│   │   │
│   │   ├── App.jsx                  # Main app component
│   │   └── index.jsx                # App entry point
│   │
│   └── package.json
│
├── server/                           # Express Backend
│   ├── src/
│   │   ├── models/                  # Mongoose models
│   │   │   ├── User.js              # User model
│   │   │   ├── Hotel.js             # Hotel model
│   │   │   ├── Room.js              # Room model
│   │   │   ├── Booking.js           # Booking model
│   │   │   └── Review.js            # Review model
│   │   │
│   │   ├── controllers/             # Business logic
��   │   │   ├── authController.js    # Auth logic
│   │   │   ├── hotelController.js   # Hotel logic
│   │   │   ├── bookingController.js # Booking logic
│   │   │   └── reviewController.js  # Review logic
│   │   │
│   │   ├── routes/                  # API routes
│   │   │   ├── authRoutes.js        # Auth endpoints
│   │   │   ├── hotelRoutes.js       # Hotel endpoints
│   │   │   ├── bookingRoutes.js     # Booking endpoints
│   │   │   └── reviewRoutes.js      # Review endpoints
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.js              # JWT verification
│   │   │
│   │   ├── seeds/
│   │   │   └── hotelSeeds.js        # Sample data
│   │   │
│   │   ├── app.js                   # Express app setup
│   │   └── index.js                 # Server entry point
│   │
│   └── package.json
│
├── SETUP_GUIDE.md                   # Detailed setup instructions
├── README.md
└── package.json                     # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install
   ```

2. **Configure environment variables** (Already set):
   ```
   MONGODB_URI=mongodb://localhost:27017/react-node-mongodb-app
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. **Seed the database with sample hotels:**
   ```bash
   npm run seed
   ```

### Running the Application

**Option 1: Run both frontend and backend together**
```bash
npm start
```

**Option 2: Run separately**
```bash
# Terminal 1 - Frontend
npm run client

# Terminal 2 - Backend
npm run server
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## 📡 API Endpoints

### Authentication Endpoints
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
GET    /api/auth/profile           - Get user profile (auth required)
PUT    /api/auth/profile           - Update profile (auth required)
```

### Hotel Endpoints
```
GET    /api/hotels                 - Get all hotels (with filters)
GET    /api/hotels/:id             - Get specific hotel
POST   /api/hotels                 - Create hotel (admin)
PUT    /api/hotels/:id             - Update hotel (admin)
DELETE /api/hotels/:id             - Delete hotel (admin)
```

**Hotel Query Filters:**
- `?city=New York` - Filter by city
- `?priceMin=100&priceMax=500` - Filter by price
- `?rating=4.5` - Minimum rating filter

### Booking Endpoints
```
POST   /api/bookings               - Create booking (auth required)
GET    /api/bookings               - Get user's bookings (auth required)
GET    /api/bookings/:id           - Get booking details (auth required)
PUT    /api/bookings/:id           - Update booking (auth required)
PUT    /api/bookings/:id/cancel    - Cancel booking (auth required)
```

### Review Endpoints
```
POST   /api/reviews                - Submit review/feedback
GET    /api/reviews                - Get all reviews
GET    /api/reviews/hotel/:hotelId - Get hotel reviews
DELETE /api/reviews/:id            - Delete review (admin)
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User registers or logs in
2. Server returns JWT token
3. Token is stored in localStorage
4. Token is sent with each API request in Authorization header
5. Backend verifies token and grants access to protected routes

### Protected Routes:
- `/my-bookings` - View user bookings
- `/profile` - User profile management
- `/checkout/:hotelId` - Booking checkout

## 📊 Database Collections

### Users Collection
```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  city: String,
  zipCode: String,
  country: String,
  createdAt: Date
}
```

### Hotels Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  image: String (URL),
  city: String,
  address: String,
  rating: Number,
  reviewCount: Number,
  amenities: [String],
  pricePerNight: Number,
  createdAt: Date
}
```

### Bookings Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  hotelId: ObjectId,
  roomId: ObjectId,
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  totalPrice: Number,
  bookingStatus: String,
  specialRequests: String,
  createdAt: Date
}
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  hotelId: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  rating: Number,
  createdAt: Date
}
```

## 🎨 UI/UX Features

### Design Highlights
- Modern gradient backgrounds
- Card-based layouts
- Smooth hover effects and transitions
- Clear typography hierarchy
- Color-coded status indicators
- Responsive grid layouts

### User Experience
- Intuitive navigation
- Clear call-to-action buttons
- Form validation and error messages
- Loading states for async operations
- Success feedback messages
- Mobile-optimized interface

## 🧪 Testing the Application

### Test Workflow:
1. **Browse Hotels**
   - Visit home page
   - Click "Browse Hotels"
   - Use filters to search
   - Click on a hotel to view details

2. **Create Account**
   - Click "Register"
   - Fill in registration form
   - System creates account and logs in

3. **Make Booking**
   - Select a hotel
   - Choose dates and guests
   - Click "Proceed to Booking"
   - Complete checkout

4. **View Bookings**
   - Go to "My Bookings"
   - View booking details
   - Cancel if needed

5. **Manage Profile**
   - Go to "Profile"
   - Update personal information
   - Save changes

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running
- Check MONGODB_URI is correct
- Verify database exists

**Port Already in Use**
- Change port in environment variables
- Kill process using the port

**Authentication Issues**
- Clear localStorage
- Log out and log back in
- Check JWT_SECRET is set correctly

**API Not Responding**
- Ensure backend server is running
- Check Network tab in browser DevTools
- Verify CORS is enabled

## 📈 Performance Optimizations

- Lazy loading of pages
- CSS optimizations
- MongoDB indexing
- Efficient API calls
- Response caching where applicable

## 🔄 Future Enhancements

- Payment gateway integration (Stripe)
- Email notifications
- Advanced analytics dashboard
- Admin panel for hotel management
- Photo uploads for reviews
- Wishlist functionality
- Multi-currency support
- Real-time availability updates
- Integration with calendar APIs

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack development with MERN stack
- RESTful API design
- Database modeling with MongoDB
- JWT authentication
- React routing and state management
- Responsive CSS design
- Form handling and validation
- Error handling and user feedback
- Deployment concepts

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to fork and submit pull requests.

## 📞 Support

For issues or questions, please refer to the SETUP_GUIDE.md or contact the development team.

---

**Built with ❤️ using React, Node.js, and MongoDB**

**Enjoy exploring HotelHub! 🏨✈️🌍**
