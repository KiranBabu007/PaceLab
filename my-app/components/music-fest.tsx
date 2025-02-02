import React from 'react';

const MusicFestPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-950 via-black to-purple-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-12">
          <div className="bg-white rounded-full p-4">
            <div className="w-8 h-12 bg-purple-900 rounded-lg" />
          </div>
          <h1 className="text-4xl font-bold">MUSIC FEST</h1>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">JAMMING SESSION!</h2>
              
              <p className="text-xl leading-relaxed">
                Join us for an unforgettable musical experience as Kochi plays
                host to a series of electrifying <span className="font-semibold">jam sessions</span> featuring the <span className="font-semibold">best
                artists</span> from across Kerala!
              </p>
            </div>

            <p className="text-lg leading-relaxed opacity-90">
              From the streets of Fort Kochi to the vibrant cafes of MG Road,
              Kochi's music scene is as diverse as its culture. Get ready to
              groove to the rhythm of the city with an eclectic mix of sounds
              and styles.
            </p>

            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <div className="space-y-1">
                  <span className="text-5xl font-bold">11</span>
                  <span className="text-2xl font-semibold block">JULY</span>
                  <span className="text-xl">2024</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-semibold">'Kochi Jam Sessions 2024:</h3>
                <p className="text-lg">Where Music Comes Alive!'</p>
              </div>
            </div>

            {/* Logo */}
            <div className="pt-8">
              <img 
                src="/api/placeholder/200/50" 
                alt="PACELAB" 
                className="opacity-80"
              />
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 text-purple-400 opacity-50">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50,3 L63,38 L98,38 L70,61 L80,96 L50,75 L20,96 L30,61 L2,38 L37,38 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/500/600"
                alt="Musician with guitar"
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-900/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicFestPage;