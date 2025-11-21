import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiCall } from '../utils/api';
import '../styles/MyBookings.css';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchBookings = async () => {
            try {
                const response = await apiCall('/bookings');

                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }

                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [navigate]);

    const handleCancelBooking = async (bookingId) => {
        if (!window.confirm('Are you sure you want to cancel this booking?')) {
            return;
        }

        try {
            const response = await apiCall(`/bookings/${bookingId}/cancel`, {
                method: 'PUT',
            });

            if (!response.ok) {
                throw new Error('Failed to cancel booking');
            }

            setBookings(prev => prev.map(booking =>
                booking._id === bookingId
                    ? { ...booking, bookingStatus: 'Cancelled' }
                    : booking
            ));
        } catch (error) {
            alert('Error cancelling booking: ' + error.message);
        }
    };

    if (loading) {
        return <div className="loading">Loading your bookings...</div>;
    }

    return (
        <div className="my-bookings-page">
            <h1>My Bookings</h1>

            {bookings.length === 0 ? (
                <div className="no-bookings">
                    <p>You haven't made any bookings yet.</p>
                    <a href="/hotels" className="browse-link">Browse Hotels</a>
                </div>
            ) : (
                <div className="bookings-list">
                    {bookings.map(booking => (
                        <div key={booking._id} className={`booking-card ${booking.bookingStatus.toLowerCase()}`}>
                            <div className="booking-header">
                                <h3>{booking.hotelId?.name}</h3>
                                <span className={`status ${booking.bookingStatus.toLowerCase()}`}>
                                    {booking.bookingStatus}
                                </span>
                            </div>

                            <div className="booking-details">
                                <div className="detail-row">
                                    <span className="label">Location:</span>
                                    <span className="value">
                                        {booking.hotelId?.address}, {booking.hotelId?.city}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Check-in:</span>
                                    <span className="value">
                                        {new Date(booking.checkInDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Check-out:</span>
                                    <span className="value">
                                        {new Date(booking.checkOutDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Guests:</span>
                                    <span className="value">{booking.numberOfGuests}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="label">Total Price:</span>
                                    <span className="value">${booking.totalPrice}</span>
                                </div>
                            </div>

                            {booking.bookingStatus === 'Confirmed' && (
                                <button
                                    className="cancel-btn"
                                    onClick={() => handleCancelBooking(booking._id)}
                                >
                                    Cancel Booking
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
