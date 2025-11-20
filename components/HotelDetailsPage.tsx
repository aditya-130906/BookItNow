import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Phone, Mail, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function HotelDetailsPage() {
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
          <nav className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="hover:bg-orange-50 hover:text-orange-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Results
            </Button>
            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">Login</Button>
          </nav>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Hotel Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-gray-900 mb-2">The Taj Mahal Palace</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span>Apollo Bunder, Colaba, Mumbai, Maharashtra 400001</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-600 text-sm mb-1">Starting from</div>
              <div className="text-gray-900">₹12,000/night</div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg h-80 flex items-center justify-center text-gray-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10">Main Hotel Image</span>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg h-39 flex items-center justify-center text-gray-400 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10">Image 2</span>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg h-39 flex items-center justify-center text-gray-400 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10">Image 3</span>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg h-39 flex items-center justify-center text-gray-400 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10">Image 4</span>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg h-39 flex items-center justify-center text-gray-400 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10">+12 more</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start bg-white border border-orange-200">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Overview</TabsTrigger>
                <TabsTrigger value="rooms" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Rooms</TabsTrigger>
                <TabsTrigger value="amenities" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Amenities</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 bg-white rounded-lg p-6 border border-orange-200">
                <h3 className="text-gray-900 mb-3">About this hotel</h3>
                <p className="text-gray-700 mb-4">
                  Experience luxury and comfort at The Taj Mahal Palace. Located in the heart of South Mumbai, 
                  our hotel offers world-class amenities, exceptional service, and stunning views of the 
                  Arabian Sea and Gateway of India. Perfect for both business and leisure travelers.
                </p>
                <p className="text-gray-700 mb-6">
                  Each room is elegantly designed with modern furnishings and equipped with the latest 
                  technology. Enjoy our rooftop restaurant, spa, fitness center, and more.
                </p>

                <h3 className="text-gray-900 mb-3">Popular Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Wifi, label: 'Free High-Speed WiFi' },
                    { icon: Car, label: 'Valet Parking' },
                    { icon: Coffee, label: 'Complimentary Breakfast' },
                    { icon: Dumbbell, label: '24/7 Fitness Center' },
                  ].map((amenity) => (
                    <div key={amenity.label} className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded border border-orange-200">
                      <amenity.icon className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="rooms" className="mt-6">
                <div className="space-y-4">
                  {[
                    { name: 'Deluxe Room', beds: '1 King Bed', price: 10000 },
                    { name: 'Premium Suite', beds: '2 Queen Beds', price: 15000 },
                    { name: 'Royal Suite', beds: '1 King Bed + Living Room', price: 20000 },
                  ].map((room, i) => (
                    <div key={i} className="flex gap-4 border border-orange-200 rounded-lg p-4 bg-white hover:shadow-lg transition-all">
                      <div className="w-48 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <span className="relative z-10">Room Image</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">{room.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {room.beds} • 35 sqm • Sea View
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-900">₹{room.price.toLocaleString('en-IN')}</span>
                            <span className="text-gray-600 text-sm">/night</span>
                          </div>
                          <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                            Select Room
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6 bg-white rounded-lg p-6 border border-orange-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-900 mb-3">General</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Free WiFi</li>
                      <li>• Air Conditioning</li>
                      <li>• 24-hour Front Desk</li>
                      <li>• Concierge Service</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-3">Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fitness Center</li>
                      <li>• Swimming Pool</li>
                      <li>• Spa & Wellness</li>
                      <li>• Restaurant & Bar</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 bg-white rounded-lg p-6 border border-orange-200">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl text-gray-900">4.8</div>
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <div className="text-gray-600 text-sm">Based on 245 reviews</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Rajesh Kumar', initial: 'RK' },
                    { name: 'Priya Sharma', initial: 'PS' },
                  ].map((reviewer, i) => (
                    <div key={i} className="border-b border-orange-100 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white">
                          {reviewer.initial}
                        </div>
                        <div>
                          <div className="text-gray-900">{reviewer.name}</div>
                          <div className="flex items-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, idx) => (
                              <Star key={idx} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Excellent hotel with amazing service. The room was spacious and clean. 
                        Highly recommend!
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Card */}
          <div className="col-span-1">
            <div className="border border-orange-200 rounded-lg p-6 sticky top-6 bg-white shadow-lg">
              <div className="mb-4">
                <div className="text-gray-900 mb-1">₹12,000/night</div>
                <div className="text-gray-600 text-sm">+ taxes and fees</div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Check-in</label>
                  <input type="date" className="w-full border border-orange-300 rounded px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                </div>
                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Check-out</label>
                  <input type="date" className="w-full border border-orange-300 rounded px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                </div>
                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Guests</label>
                  <input type="number" defaultValue={2} className="w-full border border-orange-300 rounded px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                </div>
              </div>

              <div className="border-t border-orange-200 pt-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">₹12,000 × 5 nights</span>
                  <span className="text-gray-700">₹60,000</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Service fee</span>
                  <span className="text-gray-700">₹4,000</span>
                </div>
                <div className="flex items-center justify-between text-gray-900 pt-2 border-t border-orange-200">
                  <span>Total</span>
                  <span>₹64,000</span>
                </div>
              </div>

              <Button className="w-full mb-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                Reserve Now
              </Button>
              <p className="text-gray-600 text-sm text-center">You won't be charged yet</p>

              <div className="mt-6 pt-6 border-t border-orange-200">
                <h4 className="text-gray-900 text-sm mb-3">Contact Property</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <span>+91 22 6665 3366</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <span>reservations@tajhotels.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
