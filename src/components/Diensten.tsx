import React from 'react';
import { Heart, Activity, MessageCircle, Users, BookOpen } from 'lucide-react';

const diensten = [
  { icon: Heart, title: 'Basiszorg', description: 'Persoonlijke verzorging, ondersteuning bij dagelijkse activiteiten en hygiëne.' },
  { icon: Activity, title: 'Verpleegtechnische Handelingen', description: 'Wondzorg, injecties, katheterisatie, en het monitoren van vitale functies.' },
  { icon: MessageCircle, title: 'Ondersteuning en Advies', description: 'Heldere communicatie en ondersteuning bij behandelingen, met emotionele begeleiding voor zowel cliënten als hun families.' },
  { icon: Users, title: 'Multidisciplinair Overleg', description: 'Samenwerking met zorgprofessionals voor een geïntegreerd zorgplan en optimale zorgcoördinatie.' },
  { icon: BookOpen, title: 'Coaching en Begeleiding', description: 'Begeleiding van studenten en het coachen van collega\'s ter bevordering van deskundigheid en zorgkwaliteit.' },
];

const Diensten = () => {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Mijn Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diensten.map((dienst, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              {React.createElement(dienst.icon, { className: 'h-12 w-12 text-pink-500 mx-auto mb-4' })}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{dienst.title}</h3>
              <p className="text-gray-600">{dienst.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diensten;