import { Calendar, MapPin, User, Settings, Heart, LogOut, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';

export function UserDashboardPage() {
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
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="#" className="text-orange-600">Dashboard</a>
            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-orange-200 p-6 bg-white/50 backdrop-blur-sm">
          <div className="mb-8">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarFallback className="bg-gradient-to-br from-orange-500 to-amber-500 text-white text-xl">RS</AvatarFallback>
            </Avatar>
            <h3 className="text-gray-900 mb-1">Rahul Sharma</h3>
            <p className="text-gray-600 text-sm">rahul.sharma@example.com</p>
          </div>

          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 rounded border border-orange-200">
              <Calendar className="h-5 w-5" />
              <span>My Bookings</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-orange-50 rounded transition-colors">
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-orange-50 rounded transition-colors">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-orange-50 rounded transition-colors">
              <CreditCard className="h-5 w-5" />
              <span>Payment Methods</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-orange-50 rounded transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-gray-900 mb-6">My Bookings</h1>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="bg-white border border-orange-200">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Upcoming</TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Past</TabsTrigger>
              <TabsTrigger value="cancelled" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-6">
              <div className="space-y-4">
                {[
                  { name: 'The Taj Mahal Palace', location: 'Colaba, Mumbai', total: 70400, bookingId: 'BK1234561' },
                  { name: 'The Oberoi Mumbai', location: 'Nariman Point, Mumbai', total: 75000, bookingId: 'BK1234562' },
                ].map((booking, i) => (
                  <div key={i} className="border border-orange-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="flex gap-6">
                      <div className="w-48 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <span className="relative z-10">Hotel Image</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-gray-900 mb-1">{booking.name}</h3>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <MapPin className="h-4 w-4 text-orange-500" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm border border-green-200">
                            Confirmed
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-gray-600 text-sm mb-1">Check-in</div>
                            <div className="text-gray-900">Dec 15, 2024</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-sm mb-1">Check-out</div>
                            <div className="text-gray-900">Dec 20, 2024</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-sm mb-1">Booking ID</div>
                            <div className="text-gray-900">{booking.bookingId}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-900">Total: ₹{booking.total.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">View Details</Button>
                            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">Modify</Button>
                            <Button variant="outline" size="sm" className="border-red-300 hover:bg-red-50 text-red-600">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-6">
              <div className="space-y-4">
                <div className="border border-orange-200 rounded-lg p-6 bg-white">
                  <div className="flex gap-6">
                    <div className="w-48 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded flex items-center justify-center text-gray-400 flex-shrink-0 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                      <span className="relative z-10">Hotel Image</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-gray-900 mb-1">ITC Maratha Mumbai</h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <MapPin className="h-4 w-4 text-orange-500" />
                            <span>Andheri East, Mumbai</span>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          Completed
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Check-in</div>
                          <div className="text-gray-900">Nov 10, 2024</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Check-out</div>
                          <div className="text-gray-900">Nov 15, 2024</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Booking ID</div>
                          <div className="text-gray-900">BK098765</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900">Total: ₹42,500</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">View Details</Button>
                          <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">Write Review</Button>
                          <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">Book Again</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cancelled" className="mt-6">
              <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-orange-200">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                <p>No cancelled bookings</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
