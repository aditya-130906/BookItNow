import { CheckCircle, Calendar, MapPin, User, Mail, Phone, Download, Share2, Home } from 'lucide-react';
import { Button } from './ui/button';

export function ConfirmationPage() {
  return (
    <div className="min-h-[800px] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="border-b border-orange-200 px-8 py-4 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center text-white shadow-md">
              B
            </div>
            <span className="text-gray-900">BookItNow</span>
          </div>
          <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      <div className="px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-200">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-gray-900 mb-3">Booking Confirmed!</h1>
          <p className="text-gray-700 mb-2">
            Your reservation has been successfully confirmed.
          </p>
          <p className="text-gray-600">
            A confirmation email has been sent to <span className="text-gray-900">rahul.sharma@example.com</span>
          </p>
        </div>

        {/* Booking Details */}
        <div className="max-w-3xl mx-auto">
          <div className="border border-orange-200 rounded-lg p-8 mb-6 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-orange-200">
              <div>
                <h2 className="text-gray-900 mb-2">Booking Confirmation</h2>
                <div className="flex items-center gap-4">
                  <div className="text-gray-600">Booking ID:</div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 text-xl">BK123456789</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Hotel Information */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-4">Hotel Information</h3>
              <div className="flex gap-6">
                <div className="w-64 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <span className="relative z-10">Hotel Image</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-2">The Taj Mahal Palace</h4>
                  <div className="flex items-center gap-2 text-gray-700 mb-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Apollo Bunder, Colaba, Mumbai, Maharashtra 400001</span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span>+91 22 6665 3366</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span>reservations@tajhotels.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="mb-6 pb-6 border-t border-orange-200 pt-6">
              <h3 className="text-gray-900 mb-4">Reservation Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <div className="text-gray-600 text-sm mb-1">Check-in</div>
                      <div className="text-gray-900">Wednesday, December 15, 2024</div>
                      <div className="text-gray-600 text-sm">After 3:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <div className="text-gray-600 text-sm mb-1">Check-out</div>
                      <div className="text-gray-900">Monday, December 20, 2024</div>
                      <div className="text-gray-600 text-sm">Before 11:00 AM</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm mb-1">Room Type</div>
                    <div className="text-gray-900">Deluxe Room - 1 King Bed</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm mb-1">Guests</div>
                    <div className="text-gray-900">2 Adults</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm mb-1">Number of Nights</div>
                    <div className="text-gray-900">5 Nights</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="mb-6 pb-6 border-t border-orange-200 pt-6">
              <h3 className="text-gray-900 mb-4">Guest Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className="text-gray-600 text-sm">Name</div>
                      <div className="text-gray-900">Rahul Sharma</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className="text-gray-600 text-sm">Email</div>
                      <div className="text-gray-900">rahul.sharma@example.com</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className="text-gray-600 text-sm">Phone</div>
                      <div className="text-gray-900">+91 98765 43210</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="border-t border-orange-200 pt-6">
              <h3 className="text-gray-900 mb-4">Payment Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-gray-700">
                  <span>Room charges (5 nights × ₹12,000)</span>
                  <span>₹60,000</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <span>Service fee</span>
                  <span>₹4,000</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <span>Taxes</span>
                  <span>₹6,400</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-gray-900 pt-4 border-t border-orange-200">
                <span>Total Amount Paid</span>
                <span className="text-xl">₹70,400</span>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded text-orange-700 text-sm border border-orange-200">
                Payment method: •••• •••• •••• 3456
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300 rounded-lg p-6 mb-6">
            <h3 className="text-gray-900 mb-3">Important Information</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Free cancellation until December 10, 2024</li>
              <li>✓ Photo ID and credit card required at check-in</li>
              <li>✓ Early check-in subject to availability</li>
              <li>✓ Please arrive between 3:00 PM and 11:00 PM</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg">
              View My Bookings
            </Button>
            <Button variant="outline" size="lg" className="border-orange-300 hover:bg-orange-50">
              Book Another Hotel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
