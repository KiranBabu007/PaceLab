'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/background-beams';
import { SparklesCore } from './ui/sparkles';
import { TracingBeam } from './ui/tracing-beam';
import TestimonialsSection from './TestimonialsSection';

const CertificationPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-violet-950 via-black to-purple-950 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams className="opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          particleColor="#8B5CF6"
          particleSize={1.5}
          particleDensity={50}
          className="w-full h-full opacity-30"
        />
      </div>
      
      <TracingBeam className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          {/* NFT Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20"
          >
            {/* NFT Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600">
                    NFT Blockchain
                  </span>
                </h2>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Certification
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                Experience the future of credentials with our NFT-backed certifications.
                Each certificate is uniquely minted on the blockchain, providing tamper-proof verification and exclusive digital ownership.
              </p>
              
              
            </motion.div>

            {/* NFT Animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 relative"
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              
              <div className="relative w-full aspect-square max-w-md mx-auto flex justify-center items-center">
                <Image
                  src="/NFT.gif"
                  height={400}
                  width={400}
                  alt="NFT Animation"
                  className="object-contain relative z-10 rounded-lg drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>

          {/* IIT Certification Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-20"
          >
            {/* IIT Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600">
                    IIT Bombay
                  </span>
                </h2>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Certification
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                Elevate your career with internationally recognized certification from IIT Bombay.
                Our partnership with India&apos;s premier technology institute ensures world-class curriculum standards.
              </p>
              
              
            </motion.div>

            {/* Certificate Image with Reduced Glow */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 relative"
              whileHover={{ scale: 1.02, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              
              <div className="relative w-full aspect-square max-w-md mx-auto flex justify-center items-center">
                <Image
                  src="/certificate1.png"
                  height={350}
                  width={350}
                  alt="IIT Certification"
                  className="object-contain relative z-10 rounded-lg drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials Section */}
          
        </div>
      </TracingBeam>
      <TestimonialsSection />
    </div>
  );
};

export default CertificationPage;
