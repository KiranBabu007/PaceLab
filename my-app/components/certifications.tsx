'use client';

import React from 'react';
import Image from 'next/image';

const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-purple-900/50 text-white">
      {/* Add subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-8 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-16">
            {/* NFT Certification Section */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  NFT Blockchain
                </span>{' '}
                Certification
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-mono">
                Experience the future of credentials with our NFT-backed certifications. 
                Each certificate is uniquely minted on the blockchain, providing 
                tamper-proof verification and exclusive digital ownership. Stand out 
                in the digital era with cutting-edge certification technology that 
                showcases your achievements.
              </p>
            </div>

            {/* IIT Bombay Certification Section */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  IIT Bombay
                </span>{' '}
                Certification
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-mono">
                Elevate your career with internationally recognized certification 
                from IIT Bombay. Our partnership with India's premier technology 
                institute ensures world-class curriculum standards and industry-relevant 
                skills validation. Gain the prestigious advantage of an IIT-backed 
                certification in your professional journey.
              </p>
            </div>
          </div>

          {/* Right Content - NFT Animation */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Glow effect behind the NFT */}
              <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-3xl" />
              
              <Image
                src="/NFT.gif"
                alt="NFT Animation"
                fill
                className="object-contain relative z-10"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;