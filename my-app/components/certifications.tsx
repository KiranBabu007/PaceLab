'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import  testimonials  from "@/constants/testimonials";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-violet-950 via-black to-purple-950 text-white py-16">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 relative">
        {/* NFT Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 "
        >
          {/* NFT Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-4"
          >
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
              in the digital era with cutting-edge certification technology.
            </p>
          </motion.div>

          {/* NFT Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto flex justify-center items-center">
              <Image
                src="/NFT.gif"
                height={400}
                width={400}
                alt="NFT Animation"
                className="object-contain relative z-10"
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
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 min-h-[50vh]"
        >
          {/* IIT Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                IIT Bombay
              </span>{' '}
              Certification
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-mono">
              Elevate your career with internationally recognized certification 
              from IIT Bombay. Our partnership with India's premier technology 
              institute ensures world-class curriculum standards and industry-relevant 
              skills validation.
            </p>
          </motion.div>

          {/* Certificate Image with Subtle Golden Glow */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto justify-center items-center flex">
              
              <Image
                src="/certificate1.png"
                height={300}
                width={300}
                
                alt="IIT Certification"
                className="object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div>
      <h2 className=" flex justify-center p-10 text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">
                Testimonials
              </span>
            </h2>
        <InfiniteMovingCards
            className="z-1"
              items={testimonials}
              direction="right"
              speed="normal"
            />
      </div>

       
    </div>
  );
};

export default CertificationPage;
