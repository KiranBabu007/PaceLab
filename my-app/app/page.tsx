'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Users, Trophy, Calendar } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto relative">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left pt-20 lg:pt-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Pace Lab & Event</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                India&apos;s Largest{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Internship
                </span>{' '}
                Programme!
              </h1>
              
              <p className="text-gray-400 text-lg max-w-xl">
                Join thousands of students in India&apos;s premier internship program and kickstart your career journey today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 text-lg rounded-full h-auto group"
              >
                Book Your Seat
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="sm"
                className="bg-gray-700 hover:bg-gray-800 text-white  px-4 py-3 text-lg rounded-full h-auto"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="bg-gray-800/50 border-gray-700 p-4">
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700 p-4">
                <div className="flex flex-col items-center">
                  <Trophy className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700 p-4">
                <div className="flex flex-col items-center">
                  <Calendar className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-gray-400 text-sm">Weeks</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent"></div>
                <div className="p-8 relative">
                  <div className="grid gap-4">
                    <div className="h-2 w-20 bg-blue-400/20 rounded-full"></div>
                    <div className="h-2 w-32 bg-blue-400/20 rounded-full"></div>
                    <div className="h-2 w-24 bg-blue-400/20 rounded-full"></div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-24 rounded-lg bg-gray-700/50"></div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;