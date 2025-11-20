import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    🏨 HotelHub
                </Link>
                
                <button 
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/hotels" onClick={() => setIsMenuOpen(false)}>Browse Hotels</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </li>
                    {token && (
                        <>
                            <li>
                                <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)}>My Bookings</Link>
                            </li>
                            <li>
                                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                            </li>
                            <li>
                                <button 
                                    className="logout-btn"
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                    {!token && (
                        <>
                            <li>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                            </li>
                            <li>
                                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
