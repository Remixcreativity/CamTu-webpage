import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Diensten from './components/Diensten';
import OverMij from './components/OverMij';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Diensten />
      <OverMij />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;