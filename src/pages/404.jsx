import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="px-3 py-1 lg:px-6 lg:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;