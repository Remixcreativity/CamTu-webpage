import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-pink-500" />
          <span className="ml-2 text-xl font-semibold text-gray-800">ZorgProNL</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#diensten" className="text-gray-600 hover:text-pink-500">Diensten</a>
          <a href="#over-mij" className="text-gray-600 hover:text-pink-500">Over Mij</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;