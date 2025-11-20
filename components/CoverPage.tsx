import pesLogo from 'figma:asset/780828e329eb7b8d7cea08ea809b4b3f0409c279.png';

export function CoverPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[800px] p-12 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
      
      {/* PES Logo */}
      <div className="mb-12 relative z-10">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-orange-200">
          <img 
            src={pesLogo} 
            alt="PES University Logo" 
            className="w-80 h-auto"
          />
        </div>
      </div>

      {/* Project Title */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 text-center mb-4 relative z-10">
        BookItNow: The Hotel Reservation Engine
      </h1>

      {/* Team Information */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 mb-8 max-w-2xl w-full border border-orange-200 relative z-10">
        <h2 className="text-gray-900 text-center mb-6">Team Members</h2>
        
        <div className="space-y-3">
          <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <p className="text-gray-900">Aditya Rao</p>
            <p className="text-gray-600 text-sm">PES2UG24CS034</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <p className="text-gray-900">Aaruni Choudary</p>
            <p className="text-gray-600 text-sm">PES2UG24CS013</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <p className="text-gray-900">Alakh Gupta</p>
            <p className="text-gray-600 text-sm">PES2UG24CS051</p>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-3xl w-full border border-orange-200 relative z-10">
        <h2 className="text-gray-900 text-center mb-4">Project Description</h2>
        <p className="text-gray-700 text-center leading-relaxed">
          BookItNow is a modern hotel booking platform that allows users to search, compare, 
          and reserve hotel rooms seamlessly. The application features a dynamic front-end 
          built with React, and a robust back-end using Node.js and Express APIs, with all 
          data stored in a MongoDB database. Key features include user management, advanced 
          search filters, and a secure reservation system. The goal is to create an intuitive 
          and efficient full-stack application that provides a complete hotel booking experience.
        </p>
      </div>
    </div>
  );
}
