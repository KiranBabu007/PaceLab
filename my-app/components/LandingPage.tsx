'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import SplineLap from './spline';



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">
            Pace Lab & Event
          </h2>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            India&apos;s Largest <span className="text-blue-400">Internship</span> Programme!
          </h1>
          
          
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-full"
          >
            Book Your Seat
          </Button>
        </div>

        <div>
            <SplineLap />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;