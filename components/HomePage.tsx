import { Search, Calendar, Users, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function HomePage() {
  const featuredHotels = [
    { name: 'Taj Mahal Palace', location: 'Colaba, Mumbai', price: 12000, rating: 4.8 },
    { name: 'The Oberoi Mumbai', location: 'Nariman Point, Mumbai', price: 15000, rating: 4.9 },
    { name: 'ITC Maratha', location: 'Andheri East, Mumbai', price: 8500, rating: 4.7 },
  ];

  return (
    <div className="min-h-[800px]">
      {/* Header/Navigation */}
      <header className="border-b border-orange-200 px-8 py-4 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center text-white shadow-md">
              B
            </div>
            <span className="text-gray-900">BookItNow</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">Login</Button>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">Sign Up</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-16 text-white relative overflow-hidden">
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-white mb-4 drop-shadow-lg">Find Your Perfect Stay in India</h1>
          <p className="text-orange-50 mb-8">
            Search from thousands of hotels across India and book at the best prices
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-2xl p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:border-orange-400 transition-colors">
                <MapPin className="h-5 w-5 text-orange-500" />
                <Input 
                  placeholder="Destination" 
                  className="border-0 p-0 h-auto focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:border-orange-400 transition-colors">
                <Calendar className="h-5 w-5 text-orange-500" />
                <Input 
                  placeholder="Check-in" 
                  type="date"
                  className="border-0 p-0 h-auto focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:border-orange-400 transition-colors">
                <Calendar className="h-5 w-5 text-orange-500" />
                <Input 
                  placeholder="Check-out" 
                  type="date"
                  className="border-0 p-0 h-auto focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 hover:border-orange-400 transition-colors">
                <Users className="h-5 w-5 text-orange-500" />
                <Input 
                  placeholder="Guests" 
                  type="number"
                  className="border-0 p-0 h-auto focus-visible:ring-0"
                />
              </div>
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg">
              <Search className="h-4 w-4 mr-2" />
              Search Hotels
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Hotels Section */}
      <div className="px-8 py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <h2 className="text-gray-900 mb-6">Featured Hotels</h2>
        <div className="grid grid-cols-3 gap-6">
          {featuredHotels.map((hotel, i) => (
            <div key={i} className="border border-orange-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <span className="relative z-10">{hotel.name} Image</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-gray-700">{hotel.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {hotel.location}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-900">₹{hotel.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-orange-300 hover:bg-orange-50 hover:border-orange-400">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-orange-200 px-8 py-6 bg-white/90 backdrop-blur-sm">
        <div className="text-center text-gray-600">
          <p>© 2025 BookItNow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
