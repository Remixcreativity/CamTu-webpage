import React from 'react';

const OverMij = () => {
  return (
    <section id="over-mij" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Nurse" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Professionele Beschrijving</h2>
            <p className="text-gray-600 mb-6">
              Als HBO-verpleegkundige met uitgebreide ervaring in zowel basiszorg als gespecialiseerde verpleegtechnische handelingen, bied ik zorg op het hoogste niveau. Mijn expertise in wondzorg, medicatiebeheer en het begeleiden van cliënten en hun families, stelt mij in staat om persoonlijke, hoogwaardige zorg te leveren.
            </p>
            <p className="text-gray-600 mb-6">
              Door nauw samen te werken met multidisciplinaire teams, waaronder artsen, fysiotherapeuten en ergotherapeuten, streef ik ernaar om altijd de best mogelijke zorg en begeleiding te bieden.
            </p>
            <div className="flex items-center">
              <img 
                src="https://github.com/Remixcreativity/sb1-s9abqh/blob/main/IMG_32EB929C4E3C-1.jpeg?raw=true" 
                alt="Cam Tu Tran Portrait" 
                className="w-19 h-24 rounded-full mr-6 object-cover shadow-md" 
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Cam Tu Tran</h3>
                <p className="text-lg text-gray-600">HBO-Verpleegkundige</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverMij;