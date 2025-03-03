'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="space-y-12">
          <section className="space-y-6">
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
          </section>

          {/* VR & Metaverse Section */}
          <section className="relative mt-16 pt-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-6 md:w-3/5">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent inline-block">
                  VR & Metaverse Experience
                </h2>
                
                <p className="text-lg leading-relaxed opacity-90">
                  Experience VR and AR firsthand with our technology demonstration event, where fun meets
                  technology (Exclusive for Kochi Destination).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <h3 className="text-xl font-medium text-purple-300">Metaverse</h3>
                    <p className="mt-2 opacity-90">Dive into a virtual-reality space where interaction with computer-generated environments and other users is possible.</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <h3 className="text-xl font-medium text-purple-300">The Jurassic World</h3>
                    <p className="mt-2 opacity-90">Feel the presence of a living dinosaur up close, experiencing awe, beauty, and danger.</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <h3 className="text-xl font-medium text-purple-300">Mission ISS</h3>
                    <p className="mt-2 opacity-90">Explore life aboard the International Space Station, learning zero-gravity movement and tasks guided by real NASA astronauts using Interactions.</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <h3 className="text-xl font-medium text-purple-300">Beat Saber Gaming Series</h3>
                    <p className="mt-2 opacity-90">Join our VR rhythm game competition where you slash beats as they come at you. Compete in groups for awards.</p>
                  </div>
                </div>
              </div>

              {/* Right side VR image column */}
              <div className="md:w-2/5 flex items-center justify-center md:justify-end mt-12 relative">
                <motion.div
                  className="relative"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="absolute -inset-10 rounded-full bg-purple-600/20 blur-xl"></div>
                  <div className="absolute -inset-16 rounded-full bg-blue-500/10 blur-2xl animate-pulse"></div>
                  <div className="relative z-10">
                    <Image
                      src="/VR.png"
                      alt="VR Headset"
                      width={350}
                      height={350}
                      className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MusicFestPage;