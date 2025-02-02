'use client';

import Image from 'next/image';
import React from 'react';

const MusicFestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-12">
          <Image
            src="/music.png"
            alt="Music Fest Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <h1 className="text-4xl font-bold">Music Fest 2024</h1>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">A Celebration of Music</h2>
          <p className="text-lg leading-relaxed opacity-90">
            The Music Fest 2024 was an unforgettable experience that brought together artists and music lovers 
            from all over Kerala. Held in Kochi on <span className="font-semibold">July 11, 2024</span>, the event showcased diverse musical performances 
            that resonated with the city&apos;s vibrant culture.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            From the historic streets of Fort Kochi to the energetic cafes of MG Road, the festival embraced a 
            variety of sounds and styles. Attendees enjoyed mesmerizing performances, spontaneous jam sessions, 
            and an atmosphere filled with passion for music.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            As the echoes of the festival fade, the memories remain—music, connection, and the joy of shared experiences.
            The Music Fest 2024 was more than an event; it was a testament to the unifying power of music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicFestPage;
