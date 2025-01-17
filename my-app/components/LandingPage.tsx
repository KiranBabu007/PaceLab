'use client';

import React from 'react';
import BookingCounter from './counter';
import ShinyButton from "@/components/ui/shiny-button";
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white  md:bg-transparent sm:bg-gradient-to-r sm:from-black">
      <div className="absolute inset-0 bg-black lg:bg-transparent sm:bg-gradient-to-r sm:from-black">
        <Image
          src="/robo.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority 
        />
      </div>
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-50">
        <Image
          src="/Pacelab.png"
          alt="PaceLab Logo"
          width={150}
          height={75}
          className="object-contain"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-8 py-8 relative">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 px-4 sm:px-6">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left pt-16 sm:pt-20 lg:pt-0">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                India&apos;s Largest{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Internship
                </span>{' '}
                Programme!
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-xl font-mono">
                Join thousands of students in India&apos;s premier internship program and kickstart your career journey today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <ShinyButton className='
                bg-gradient-to-r 
                from-gray-300 
                via-gray-100 
                to-gray-300
                font-bold 
                font-mono 
                text-gray-800
                border
                border-gray-200
                mr-0 sm:mr-5
                transition-all 
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-white/20
                hover:from-gray-100
                hover:via-white
                hover:to-gray-100
                relative
                overflow-hidden
                after:absolute
                after:inset-0
                after:bg-gradient-to-r
                after:from-transparent
                after:via-white/40
                after:to-transparent
                after:animate-shimmer
                after:hover:opacity-75
              '>
                Book your seats
              </ShinyButton>
              <div>
                <BookingCounter />
              </div>
            </div>
          </div>
          {/* Right Content - NFT Animation */}
          <div className="lg:w-1/2 relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute -inset-1 rounded-lg blur opacity-20"></div>
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
