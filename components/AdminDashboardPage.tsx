import { Users, Hotel, Calendar, DollarSign, TrendingUp, BarChart3, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function AdminDashboardPage() {
  return (
    <div className="min-h-[800px] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center text-white shadow-md">
              B
            </div>
            <span className="text-gray-900">BookItNow Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-50">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white shadow-md">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="px-8 py-8">
        {/* Stats Overview */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                  <Hotel className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+12%</span>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-1">Total Hotels</div>
              <div className="text-gray-900 text-2xl">245</div>
            </div>

            <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+8%</span>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-1">Active Bookings</div>
              <div className="text-gray-900 text-2xl">1,847</div>
            </div>

            <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+24%</span>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-1">Total Users</div>
              <div className="text-gray-900 text-2xl">12,458</div>
            </div>

            <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>+15%</span>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-1">Revenue (Monthly)</div>
              <div className="text-gray-900 text-2xl">₹2.28Cr</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="bg-white border border-orange-200">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Recent Bookings</TabsTrigger>
            <TabsTrigger value="hotels" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Hotels</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Users</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-6">
            <div className="bg-white border border-orange-200 rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4 border-b border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900">Recent Bookings</h3>
                  <Button size="sm" variant="outline" className="border-orange-300 hover:bg-orange-100">Export</Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Booking ID</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Guest</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Hotel</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Check-in</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    {[
                      { id: 'BK1234561', guest: 'Rahul Sharma', hotel: 'The Taj Mahal Palace', date: 'Dec 15', amount: 60000 },
                      { id: 'BK1234562', guest: 'Priya Kumar', hotel: 'The Oberoi Mumbai', date: 'Dec 16', amount: 75000 },
                      { id: 'BK1234563', guest: 'Amit Patel', hotel: 'ITC Maratha', date: 'Dec 17', amount: 42500 },
                      { id: 'BK1234564', guest: 'Sneha Singh', hotel: 'Trident Nariman Point', date: 'Dec 18', amount: 47500 },
                      { id: 'BK1234565', guest: 'Vikram Reddy', hotel: 'JW Marriott Mumbai', date: 'Dec 19', amount: 52500 },
                    ].map((booking, i) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900">{booking.id}</td>
                        <td className="px-6 py-4 text-gray-700">{booking.guest}</td>
                        <td className="px-6 py-4 text-gray-700">{booking.hotel}</td>
                        <td className="px-6 py-4 text-gray-700">{booking.date}, 2024</td>
                        <td className="px-6 py-4 text-gray-900">₹{booking.amount.toLocaleString('en-IN')}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm border border-green-200">
                            Confirmed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="mt-6">
            <div className="bg-white border border-orange-200 rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4 border-b border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900">Hotel Management</h3>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">Add New Hotel</Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Hotel Name</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Location</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Rooms</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Rating</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    {[
                      { name: 'The Taj Mahal Palace', location: 'Mumbai', rooms: 560, rating: 4.8 },
                      { name: 'The Oberoi Mumbai', location: 'Mumbai', rooms: 287, rating: 4.9 },
                      { name: 'ITC Maratha', location: 'Mumbai', rooms: 384, rating: 4.7 },
                      { name: 'Trident Nariman Point', location: 'Mumbai', rooms: 550, rating: 4.6 },
                    ].map((hotel, i) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900">{hotel.name}</td>
                        <td className="px-6 py-4 text-gray-700">{hotel.location}</td>
                        <td className="px-6 py-4 text-gray-700">{hotel.rooms}</td>
                        <td className="px-6 py-4 text-gray-700">{hotel.rating}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm border border-green-200">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <div className="bg-white border border-orange-200 rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4 border-b border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                <h3 className="text-gray-900">User Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Bookings</th>
                      <th className="px-6 py-3 text-left text-xs text-gray-600 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    {[
                      { name: 'Rahul Sharma', email: 'rahul.sharma@example.com', date: 'Nov 1', bookings: 2 },
                      { name: 'Priya Kumar', email: 'priya.kumar@example.com', date: 'Nov 2', bookings: 4 },
                      { name: 'Amit Patel', email: 'amit.patel@example.com', date: 'Nov 3', bookings: 6 },
                      { name: 'Sneha Singh', email: 'sneha.singh@example.com', date: 'Nov 4', bookings: 8 },
                      { name: 'Vikram Reddy', email: 'vikram.reddy@example.com', date: 'Nov 5', bookings: 10 },
                    ].map((user, i) => (
                      <tr key={i} className="hover:bg-orange-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 text-gray-700">{user.email}</td>
                        <td className="px-6 py-4 text-gray-700">{user.date}, 2024</td>
                        <td className="px-6 py-4 text-gray-700">{user.bookings}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm border border-green-200">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-gray-900">Monthly Revenue</h3>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-50 to-amber-50 rounded flex items-center justify-center text-gray-400 border border-orange-200">
                  Revenue Chart Placeholder
                </div>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-gray-900">Booking Trends</h3>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-50 to-amber-50 rounded flex items-center justify-center text-gray-400 border border-orange-200">
                  Booking Chart Placeholder
                </div>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-gray-900">Popular Destinations</h3>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-50 to-amber-50 rounded flex items-center justify-center text-gray-400 border border-orange-200">
                  Destinations Chart Placeholder
                </div>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-gray-900">User Growth</h3>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-50 to-amber-50 rounded flex items-center justify-center text-gray-400 border border-orange-200">
                  User Growth Chart Placeholder
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
