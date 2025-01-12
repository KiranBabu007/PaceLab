

import React from 'react';
import { Button } from "@/components/ui/button";


import Spline from '@splinetool/react-spline/next';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-purple-900  text-white">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className="flex items-center z-10 px-6 lg:px-5">
            <div className="py-10">
              <h2 className="text-xl font-semibold text-blue-400 mb-4">
                Pace Lab & Event
              </h2>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                India's Largest <span className="text-blue-400">Internship</span> Programme!
              </h1>
              
              
              
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-full transform transition-transform hover:scale-105"
              >
                Book Your Seat
              </Button>
            </div>
          </div>

          {/* Right Spline Animation */}
          <div className="absolute top-0 right-0 w-full h-full  lg:relative lg:w-auto">
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/URoJ2YAeymxF5fJr/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;