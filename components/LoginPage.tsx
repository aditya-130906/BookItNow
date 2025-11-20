import { Mail, Lock, User, Chrome } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function LoginPage() {
  return (
    <div className="min-h-[800px] flex">
      {/* Left Side - Branding */}
      <div className="w-1/2 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 p-12 flex flex-col justify-center text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-orange-600 shadow-lg">
              B
            </div>
            <span className="text-white text-2xl">BookItNow</span>
          </div>
          
          <h2 className="text-white mb-4 drop-shadow-lg">Welcome Back!</h2>
          <p className="text-orange-50 mb-8">
            Access your bookings, manage your profile, and explore thousands of hotels across India.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="text-white mb-1">Easy Booking Management</h4>
                <p className="text-orange-50 text-sm">View and manage all your reservations in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="text-white mb-1">Exclusive Deals</h4>
                <p className="text-orange-50 text-sm">Get access to member-only discounts and offers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="text-white mb-1">Secure & Safe</h4>
                <p className="text-orange-50 text-sm">Your information is protected with top-level security</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Forms */}
      <div className="w-1/2 p-12 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border border-orange-200">
              <TabsTrigger value="login" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Login</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">Register</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <div className="mb-6">
                <h2 className="text-gray-900 mb-2">Login to Your Account</h2>
                <p className="text-gray-600">Enter your credentials to access your account</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Email Address</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="email"
                      placeholder="your.email@example.com" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Password</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Lock className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="password"
                      placeholder="Enter your password" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type="checkbox" className="rounded border-orange-300" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-orange-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md">
                  Login
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-orange-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gradient-to-br from-orange-50 to-amber-50 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-orange-300 hover:bg-orange-50">
                  <Chrome className="h-4 w-4 mr-2" />
                  Sign in with Google
                </Button>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <div className="mb-6">
                <h2 className="text-gray-900 mb-2">Create an Account</h2>
                <p className="text-gray-600">Fill in your details to get started</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">First Name</label>
                    <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                      <User className="h-4 w-4 text-orange-500" />
                      <Input 
                        placeholder="Rahul" 
                        className="border-0 p-0 h-auto focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 text-sm mb-1 block">Last Name</label>
                    <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                      <User className="h-4 w-4 text-orange-500" />
                      <Input 
                        placeholder="Sharma" 
                        className="border-0 p-0 h-auto focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Email Address</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="email"
                      placeholder="your.email@example.com" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Password</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Lock className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="password"
                      placeholder="Create a password" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-sm mb-1 block">Confirm Password</label>
                  <div className="flex items-center gap-2 border border-orange-300 rounded px-3 py-2 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
                    <Lock className="h-4 w-4 text-orange-500" />
                    <Input 
                      type="password"
                      placeholder="Confirm your password" 
                      className="border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-orange-300" />
                  <label className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-orange-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md">
                  Create Account
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-orange-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gradient-to-br from-orange-50 to-amber-50 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-orange-300 hover:bg-orange-50">
                  <Chrome className="h-4 w-4 mr-2" />
                  Sign up with Google
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
