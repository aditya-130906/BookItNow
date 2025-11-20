import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';

export function SearchResultsPage() {
  const hotels = [
    { name: 'The Taj Mahal Palace', distance: 0.5, price: 12000, rating: 4.8 },
    { name: 'The Oberoi Mumbai', distance: 1.2, price: 15000, rating: 4.9 },
    { name: 'Trident Nariman Point', distance: 0.8, price: 9500, rating: 4.7 },
    { name: 'ITC Maratha Mumbai', distance: 12, price: 8500, rating: 4.6 },
    { name: 'JW Marriott Mumbai Sahar', distance: 14, price: 10500, rating: 4.7 },
  ];

  return (
    <div className="min-h-[800px]">
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
            <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#" className="text-orange-600">Hotels</a>
            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">Login</Button>
          </nav>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200 px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center gap-2 bg-white border border-orange-300 rounded px-3 py-2 shadow-sm">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="text-gray-700">Mumbai, India</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-orange-300 rounded px-3 py-2 shadow-sm">
            <span className="text-gray-700">Dec 15 - Dec 20</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-orange-300 rounded px-3 py-2 shadow-sm">
            <span className="text-gray-700">2 Guests</span>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
            Modify Search
          </Button>
        </div>
      </div>

      <div className="flex bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Filters Sidebar */}
        <aside className="w-80 border-r border-orange-200 p-6 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Filters</h3>
            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
              Clear All
            </Button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-gray-900 mb-3">Price Range</h4>
            <Slider defaultValue={[5000, 20000]} max={50000} step={500} className="mb-2" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>₹5,000</span>
              <span>₹20,000</span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="mb-6">
            <h4 className="text-gray-900 mb-3">Star Rating</h4>
            {[5, 4, 3, 2].map((rating) => (
              <div key={rating} className="flex items-center gap-2 mb-2">
                <Checkbox id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`} className="flex items-center gap-1 text-gray-700 cursor-pointer">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </label>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h4 className="text-gray-900 mb-3">Amenities</h4>
            {[
              { icon: Wifi, label: 'Free WiFi' },
              { icon: Car, label: 'Parking' },
              { icon: Coffee, label: 'Breakfast' },
              { icon: Dumbbell, label: 'Gym' },
            ].map((amenity) => (
              <div key={amenity.label} className="flex items-center gap-2 mb-2">
                <Checkbox id={amenity.label} />
                <label htmlFor={amenity.label} className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <amenity.icon className="h-4 w-4 text-orange-500" />
                  {amenity.label}
                </label>
              </div>
            ))}
          </div>
        </aside>

        {/* Results */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">125 Hotels Found in Mumbai</h2>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-orange-500" />
              <select className="border border-orange-300 rounded px-3 py-2 text-gray-700 bg-white hover:border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="space-y-4">
            {hotels.map((hotel, i) => (
              <div key={i} className="flex gap-4 border border-orange-200 rounded-lg p-4 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="w-64 h-48 bg-gradient-to-br from-orange-200 to-amber-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <span className="relative z-10">Hotel Image</span>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-gray-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span>South Mumbai, {hotel.distance}km from center</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 mb-3">
                        {[...Array(4)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-current" />
                        ))}
                        <span className="text-gray-700 ml-2">{hotel.rating} (245 reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900">₹{hotel.price.toLocaleString('en-IN')}</div>
                      <div className="text-gray-600 text-sm">/night</div>
                      <div className="text-gray-600 text-sm">₹{(hotel.price * 5).toLocaleString('en-IN')} total</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Wifi className="h-4 w-4 text-orange-500" />
                      <span>WiFi</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Car className="h-4 w-4 text-orange-500" />
                      <span>Parking</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Coffee className="h-4 w-4 text-orange-500" />
                      <span>Breakfast</span>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-gray-600 text-sm">Free cancellation until Dec 10</p>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
