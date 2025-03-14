'use client';

import React from 'react';
import BookingCounter from './counter';
import ShinyButton from "@/components/ui/shiny-button";
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/90 z-10" />
        <Image
          src="/robot.jpg"
          alt="Background"
          fill
          className="object-cover object-center md:object-[center_35%]" // Adjusted background position
          priority 
        />
      </div>

      {/* Logo */}
      <div className="absolute left-4 top-4 sm:left-10 sm:top-10 z-20">
        <Image
          src="/Pacelab.png"
          alt="PaceLab Logo"
          width={3600}
          height={2100}
          className="w-32 md:w-48 h-auto object-contain" // Adjusted mobile size
        />
      </div>

      {/* Centered Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 py-20"> {/* Added padding for mobile */}
          {/* Event Logo */}
          <div className="z-20 -mt-16 sm:mt-0"> {/* Adjusted mobile margin */}
            <Image
              src="/eventlogo.png"
              alt="PaceLab Logo"
              width={3600}
              height={2100}
              className="w-[22rem] md:w-[32rem] h-auto object-contain" // Smaller on mobile
            />
          </div>
          {/* Header */}
          <div className="w-full max-w-3xl text-center -mt-8 sm:-mt-16"> {/* Adjusted spacing */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
              India&apos;s Largest{' '}
              <span className="glowing text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800">
                Internship
              </span>{' '}
              Programme!
            </h1>
            <p className="mt-4 text-gray-300 text-xs sm:text-base lg:text-lg font-mono px-4 sm:px-0"> {/* Added padding on mobile */}
              Join thousands of students in India&apos;s premier internship program and kickstart your career journey today.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-14 justify-center mt-8 sm:mt-0">
            <ShinyButton
              className="w-[80%] sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 font-bold font-mono text-gray-800 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 relative overflow-hidden text-sm sm:text-base"
              onClick={() => window.open('http://bit.ly/paceintern25', '_blank')}
            >
              Book your seats
            </ShinyButton>
            <div className="w-auto">
              <BookingCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;