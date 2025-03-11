'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { TracingBeam } from './ui/tracing-beam';
import { Spotlight } from "./ui/spotlight";
import TestimonialsSection from './TestimonialsSection';

const CertificationPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-violet-950 via-black to-purple-950 text-white py-16 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          particleColor="#8B5CF6"
          particleSize={2}
          particleDensity={100}
          className="w-full h-full opacity-50"
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      {/* Main Content */}
      <TracingBeam className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
          {/* NFT Section */}
          <Section
            title="NFT Blockchain"
            subtitle="Certification"
            description="Experience the future of credentials with our NFT-backed certifications. Each certificate is uniquely minted on the blockchain, providing tamper-proof verification and exclusive digital ownership."
            imageSrc="/NFT.gif"
            imageAlt="NFT Animation"
            gradient="from-purple-400 via-violet-400 to-purple-600"
            glow="rgba(168,85,247,0.5)"
            reversed={false}
          />

          {/* IIT Section */}
          <Section
            title="IIT Bombay"
            subtitle="Certification"
            description="Elevate your career with internationally recognized certification from IIT Bombay. Our partnership with India's premier technology institute ensures world-class curriculum standards."
            imageSrc="/certificate1.png"
            imageAlt="IIT Certification"
            gradient="from-amber-400 via-yellow-400 to-amber-600"
            glow="rgba(251,191,36,0.5)"
            reversed={true}
          />

          {/* Music Fest Section */}
          <Section
            title="Music Fest"
            subtitle="2024"
            description="Music Fest 2024 brought together artists and music lovers from across Kerala in Kochi on July 11, 2024. From mesmerizing performances to spontaneous jam sessions, the festival celebrated the unifying power of music."
            imageSrc="/music.png"
            imageAlt="Music Festival"
            gradient="from-pink-400 via-fuchsia-400 to-pink-600"
            glow="rgba(236,72,153,0.5)"
            reversed={false}
          />

          {/* VR Section */}
          <Section
            title="VR & Metaverse"
            subtitle="Experience"
            description="Experience VR and AR firsthand with our technology demonstration event, where fun meets technology. Dive into virtual worlds, from Jurassic adventures to space exploration aboard the ISS."
            imageSrc="/VR.png"
            imageAlt="VR Headset"
            gradient="from-cyan-400 via-blue-400 to-cyan-600"
            glow="rgba(6,182,212,0.7)"
            reversed={true}
          />
        </div>
      </TracingBeam>
      
      {/* Testimonials with enhanced spacing */}
      <div className="mt-32"> 
        <TestimonialsSection />
      </div>
    </div>
  );
};

// Add this interface above the Section component
interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradient: string;
  glow: string;
  reversed: boolean;
}

// Update the Section component with TypeScript types
const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt, 
  gradient, 
  glow, 
  reversed 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 md:gap-12 lg:gap-20`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:w-1/2 space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {title}
            </span>
          </h2>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {subtitle}
          </h2>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed font-mono">
          {description}
        </p>

        
      </motion.div>

      {/* Image - Removed circular glows */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:w-1/2 relative"
        whileHover={{ scale: 1.02, rotate: reversed ? -1 : 1 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="relative w-full aspect-square max-w-md mx-auto flex justify-center items-center"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            height={imageSrc.includes('music') ? 500 : 350}
            width={imageSrc.includes('music') ? 500 : 350}
            alt={imageAlt}
            className="object-contain relative z-10 rounded-lg"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationPage;