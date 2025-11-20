import { CreditCard, Lock, Calendar, User, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';

export function BookingPage() {
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
          <div className="flex items-center gap-2 text-green-600">
            <Lock className="h-4 w-4" />
            <span className="text-sm">Secure Checkout</span>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md">
              ✓
            </div>
            <span className="text-gray-700">Select Room</span>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-orange-400"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center shadow-md">
              2
            </div>
            <span className="text-gray-900">Guest Details</span>
          </div>
          <div className="w-16 h-0.5 bg-orange-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-200 text-white rounded-full flex items-center justify-center">
              3
            </div>
            <span className="text-gray-500">Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="col-span-2">
            {/* Guest Information */}
            <div className="mb-8">
              <h2 className="text-gray-900 mb-4">Guest Information</h2>
              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">First Name *</label>
                    <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                      <User className="h-4 w-4 text-orange-500" />
                      <Input 
                        placeholder="Rahul" 
                        defaultValue="Rahul"
                        className="border-0 p-0 h-auto focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">Last Name *</label>
                    <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                      <User className="h-4 w-4 text-orange-500" />
                      <Input 
                        placeholder="Sharma" 
                        defaultValue="Sharma"
                        className="border-0 p-0 h-auto focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-gray-700 text-sm mb-1 block">Email Address *</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="email"
                      placeholder="rahul.sharma@example.com" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-gray-700 text-sm mb-1 block">Phone Number *</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="tel"
                      placeholder="+91 98765 43210" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-gray-700 text-sm mb-1 block">Special Requests (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Any special requirements or requests..."
                    className="w-full border border-orange-300 rounded px-3 py-2 text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-8">
              <h2 className="text-gray-900 mb-4">Payment Information</h2>
              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded text-orange-700 text-sm border border-orange-200">
                  <Lock className="h-4 w-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <div className="mb-4">
                  <label className="text-gray-700 text-sm mb-1 block">Card Number *</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <CreditCard className="h-4 w-4 text-orange-500" />
                    <Input 
                      placeholder="1234 5678 9012 3456" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-gray-700 text-sm mb-1 block">Cardholder Name *</label>
                  <Input placeholder="Name on card" className="border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">Expiry Date *</label>
                    <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <Input 
                        placeholder="MM/YY" 
                        className="border-0 p-0 h-auto focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">CVV *</label>
                    <Input placeholder="123" type="password" maxLength={3} className="border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <Checkbox id="save-card" />
                  <label htmlFor="save-card" className="text-gray-700 text-sm cursor-pointer">
                    Save this card for future bookings
                  </label>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
                  I agree to the <a href="#" className="text-orange-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg" size="lg">
              Complete Booking
            </Button>
          </div>

          {/* Booking Summary */}
          <div className="col-span-1">
            <div className="border border-orange-200 rounded-lg p-6 sticky top-6 bg-white shadow-lg">
              <h3 className="text-gray-900 mb-4">Booking Summary</h3>

              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded mb-3 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <span className="relative z-10">Hotel Image</span>
                </div>
                <h4 className="text-gray-900 mb-1">The Taj Mahal Palace</h4>
                <p className="text-gray-600 text-sm">Colaba, Mumbai</p>
              </div>

              <div className="border-t border-orange-200 pt-4 mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Check-in</span>
                  <span className="text-gray-900">Dec 15, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Check-out</span>
                  <span className="text-gray-900">Dec 20, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Guests</span>
                  <span className="text-gray-900">2 Adults</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Room Type</span>
                  <span className="text-gray-900">Deluxe Room</span>
                </div>
              </div>

              <div className="border-t border-orange-200 pt-4 mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">₹12,000 × 5 nights</span>
                  <span className="text-gray-700">₹60,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Service fee</span>
                  <span className="text-gray-700">₹4,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Taxes</span>
                  <span className="text-gray-700">₹6,400</span>
                </div>
              </div>

              <div className="border-t border-orange-200 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">Total Amount</span>
                  <span className="text-gray-900 text-xl">₹70,400</span>
                </div>
                <p className="text-gray-600 text-sm">Includes all taxes and fees</p>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded text-green-700 text-sm border border-green-200">
                ✓ Free cancellation until Dec 10, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
