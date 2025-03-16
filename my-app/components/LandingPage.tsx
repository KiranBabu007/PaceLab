'use client';

import React from 'react';
import BookingCounter from './counter';
import ShinyButton from "@/components/ui/shiny-button";
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

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
            <Link 
              href="http://bit.ly/paceintern25" 
              target="_blank" 
              className="group relative overflow-hidden rounded-lg px-6 py-3 
                bg-gradient-to-r from-purple-700 via-fuchsia-700 to-purple-900
                hover:from-purple-600 hover:via-fuchsia-600 hover:to-purple-800
                transform hover:scale-105 active:scale-95
                transition-all duration-300 ease-out
                shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40
                border border-purple-800/20
                text-white font-mono tacking-wide font-semibold "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent 
                group-hover:via-purple-400/20 translate-x-[-100%] group-hover:translate-x-[100%] 
                transition-transform duration-1000 ease-in-out" 
              />
              <span className="relative flex items-center gap-2">
                <Calendar className="w-4 h-4  animate-pulse" />
                <span className="bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent">
                  Book Your Seats
                </span>
              </span>
            </Link>
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