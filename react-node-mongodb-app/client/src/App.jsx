import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import MyBookings from './pages/MyBookings';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/index.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/hotel/:id" element={<HotelDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-bookings" element={<MyBookings />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout/:hotelId" element={<Checkout />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
