import React from 'react';

const Hero = () => {
  return (
    <section className="bg-pink-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Professionele Verpleegkundige Zorg</h1>
        <p className="text-xl text-gray-600 mb-8">Ervaren en zorgzame verpleging op maat voor uw behoeften</p>
        <a href="#contact" className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-600 transition duration-300">
          Afspraak Maken
        </a>
      </div>
    </section>
  );
};

export default Hero;