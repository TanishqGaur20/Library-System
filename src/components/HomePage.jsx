import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 relative">
      {/* Carousel Section */}
      <div className="relative mt-1 z-10">
        <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg relative">
          {/* Dimmed Background Image */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1555116505-38ab61800975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D"
            alt="Library"
            className="w-full h-full object-cover brightness-75"
          />
          {/* Text and Button Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Library System
            </h1>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className="text-center mt-12 z-10 relative">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
          Welcome to the Online Library
        </h2>

        {/* Categories Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Explore Categories
          </h3>
          <ul className="flex flex-wrap justify-center gap-8">
            {/* Category Items */}
            <li className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-8 py-4 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-110">
              Fiction
            </li>
            <li className="bg-green-100 hover:bg-green-200 text-green-800 font-medium px-8 py-4 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-110">
              Non-Fiction
            </li>
            <li className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium px-8 py-4 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-110">
              Sci-Fi
            </li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
            Browse All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
