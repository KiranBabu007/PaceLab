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
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">A Celebration of Music</h2>
          <p className="text-lg leading-relaxed opacity-90">
            Music Fest 2024 brought together artists and music lovers from across Kerala 
            in Kochi on <span className="font-semibold">July 11, 2024</span>. The event featured 
            diverse performances that showcased the city&apos;s vibrant musical culture.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            From mesmerizing performances to spontaneous jam sessions, the festival created 
            lasting memories celebrating the unifying power of music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicFestPage;