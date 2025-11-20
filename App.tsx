import { useState } from 'react';
import { CoverPage } from './components/CoverPage';
import { HomePage } from './components/HomePage';
import { SearchResultsPage } from './components/SearchResultsPage';
import { HotelDetailsPage } from './components/HotelDetailsPage';
import { BookingPage } from './components/BookingPage';
import { LoginPage } from './components/LoginPage';
import { UserDashboardPage } from './components/UserDashboardPage';
import { ConfirmationPage } from './components/ConfirmationPage';
import { AdminDashboardPage } from './components/AdminDashboardPage';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';

const pages = [
  { id: 1, name: 'Cover Page', component: CoverPage },
  { id: 2, name: 'Home Page', component: HomePage },
  { id: 3, name: 'Search Results', component: SearchResultsPage },
  { id: 4, name: 'Hotel Details', component: HotelDetailsPage },
  { id: 5, name: 'Booking Page', component: BookingPage },
  { id: 6, name: 'Login/Register', component: LoginPage },
  { id: 7, name: 'User Dashboard', component: UserDashboardPage },
  { id: 8, name: 'Confirmation', component: ConfirmationPage },
  { id: 9, name: 'Admin Dashboard', component: AdminDashboardPage },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const CurrentComponent = pages[currentPage].component;

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Navigation Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Main Heading - Centered */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                <span className="text-xl">B</span>
              </div>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 text-4xl tracking-tight">
                BookItNow
              </h1>
            </div>
            <p className="text-gray-600 text-sm">Your Gateway to Perfect Stays Across India</p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">
              Page {currentPage + 1} of {pages.length}: {pages[currentPage].name}
            </span>
            <div className="flex items-center gap-2">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                variant="outline"
                size="sm"
                className="border-orange-300 hover:bg-orange-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                variant="outline"
                size="sm"
                className="border-orange-300 hover:bg-orange-50"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Page Indicators */}
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(index)}
                className={`px-3 py-1 rounded text-sm whitespace-nowrap transition-colors ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-200'
                }`}
              >
                {page.id}. {page.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg min-h-[800px]">
          <CurrentComponent />
        </div>
      </div>
    </div>
  );
}
