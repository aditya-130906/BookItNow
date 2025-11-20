import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
    const { hotelId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { hotel, bookingData } = location.state || {};

    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        specialRequests: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!hotel || !bookingData) {
        return <div className="error">Invalid booking data</div>;
    }

    const checkInDate = new Date(bookingData.checkInDate);
    const checkOutDate = new Date(bookingData.checkOutDate);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * hotel.pricePerNight;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const bookingPayload = {
                hotelId,
                roomId: 'default-room',
                checkInDate: bookingData.checkInDate,
                checkOutDate: bookingData.checkOutDate,
                numberOfGuests: bookingData.numberOfGuests,
                totalPrice,
                specialRequests: formData.specialRequests,
            };

            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(bookingPayload),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Booking failed');
            }

            await response.json();
            alert('Booking successful!');
            navigate('/my-bookings');
        } catch (error) {
            setError(error.message || 'Error processing booking');
            console.error('Booking error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <h1>Complete Your Booking</h1>

            <div className="checkout-container">
                <div className="booking-summary">
                    <h2>Booking Summary</h2>
                    <div className="summary-card">
                        <h3>{hotel.name}</h3>
                        <p className="location">📍 {hotel.address}, {hotel.city}</p>

                        <div className="summary-details">
                            <div className="detail-row">
                                <span>Check-in:</span>
                                <span>{checkInDate.toLocaleDateString()}</span>
                            </div>
                            <div className="detail-row">
                                <span>Check-out:</span>
                                <span>{checkOutDate.toLocaleDateString()}</span>
                            </div>
                            <div className="detail-row">
                                <span>Number of Nights:</span>
                                <span>{nights}</span>
                            </div>
                            <div className="detail-row">
                                <span>Number of Guests:</span>
                                <span>{bookingData.numberOfGuests}</span>
                            </div>
                            <hr />
                            <div className="detail-row price-row">
                                <span>Price per Night:</span>
                                <span>${hotel.pricePerNight}</span>
                            </div>
                            <div className="detail-row total-row">
                                <span>Total Amount:</span>
                                <span className="total-price">${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Payment Details</h2>

                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label htmlFor="cardName">Cardholder Name</label>
                        <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Name on card"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="specialRequests">Special Requests (Optional)</label>
                        <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            placeholder="Any special requests for your stay?"
                            rows="4"
                        ></textarea>
                    </div>

                    <button type="submit" className="confirm-btn" disabled={loading}>
                        {loading ? 'Processing...' : `Confirm Booking - $${totalPrice}`}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
