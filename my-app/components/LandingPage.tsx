'use client';

import React from 'react';
import BookingCounter from './counter';
import ShinyButton from "@/components/ui/shiny-button";
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/40 z-10" />
        <Image
          src="/robot.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority 
        />
      </div>

      {/* Logo */}
      <div className="absolute left-4 sm:left-4 z-20">
        <Image
          src="/eventlogo.png"
          alt="PaceLab Logo"
          width={3600}
          height={2100}
          className="w-48 sm:w-56 md:w-72 h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left pt-24 sm:pt-32 lg:pt-0">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
                India&apos;s Largest{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Internship
                </span>{' '}
                Programme!
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-mono">
                Join thousands of students in India&apos;s premier internship program and kickstart your career journey today.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <ShinyButton className='
                w-full 
                sm:w-auto 
                px-8 
                py-3
                bg-gradient-to-r 
                from-gray-300 
                via-gray-100 
                to-gray-300
                font-bold 
                font-mono 
                text-gray-800
                border
                border-gray-200
                transition-all 
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-white/20
                relative
                overflow-hidden
              '>
                Book your seats
              </ShinyButton>
              <div className="w-full sm:w-auto">
                <BookingCounter />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg aspect-square">
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