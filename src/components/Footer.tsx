import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="ml-2 text-xl font-semibold">ZorgProNL</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500 transition duration-300">Privacybeleid</a>
            <a href="#" className="hover:text-pink-500 transition duration-300">Algemene Voorwaarden</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ZorgProNL. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;