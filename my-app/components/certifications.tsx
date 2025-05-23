'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { TracingBeam } from './ui/tracing-beam';
import Link from 'next/link';

import TestimonialsSection from './TestimonialsSection';

const CertificationPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-violet-950 via-black to-purple-950 text-white py-8 sm:py-16 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="hidden md:block"> {/* Only show SparklesCore on desktop */}
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            particleColor="#8B5CF6"
            particleSize={2}
            particleDensity={100}
            className="w-full h-[300rem] opacity-50"
          />
        </div>
      </div>

      {/* Main Content - Wrapped in TracingBeam for all screen sizes */}
      <TracingBeam className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-8 relative z-10 space-y-16 sm:space-y-32">
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
            title="IIT Bombay & Hyderabad"
            subtitle="Certification"
            description="Elevate your career with internationally recognized certification from IIT Bombay and IIT Hyderabad. Our partnership with India's premier technology institute ensures world-class curriculum standards."
            imageSrc="/certificate1.png"
            imageAlt="IIT Certification"
            gradient="from-amber-400 via-yellow-400 to-amber-600"
            glow="rgba(251,191,36,0.5)"
            reversed={true}
          />

          {/* Music Fest Section */}
          <Section
            title="Music Fest"
            subtitle="2025"
            description="Music Fest 2025 will bring together artists and music lovers from across Kerala in Kochi this June. From mesmerizing performances to spontaneous jam sessions, the festival will celebrate the unifying power of music in an unforgettable experience."
            imageSrc="/music.png"
            imageAlt="Music Festival"
            gradient="from-pink-400 via-fuchsia-400 to-pink-600"
            glow="rgba(236,72,153,0.5)"
            reversed={true}
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
            reversed={false}
          />

          {/* Job Networking Portal Section */}
          <Section
            title="Job Networking"
            subtitle="Portal"
            description="Connect with top companies, expand your professional network, and land your dream job effortlessly. We matches you with opportunities that align with your skills and career goals."
            imageSrc="/job.png"
            imageAlt="Job Networking"
            gradient="from-emerald-400 via-green-400 to-emerald-600"
            glow="rgba(16,185,129,0.5)"
            reversed={true}
          />

          <Section
            title="Campus Ambassador"
            subtitle="Program"
            description="Join India&apos;s most dedicated Campus Ambassador Program at PaceLab! With a prize pool of ₹5 Lakhs, build your network while earning Internship & Appreciation Certificates."
            imageSrc="/campus.png"
            imageAlt="Campus Ambassador"
            gradient="from-amber-400 via-yellow-400 to-amber-600"
            glow="rgba(99,102,241,0.5)"
            reversed={false}
            buttonText="Apply Now"
            highlightText='₹5 Lakhs Prize Pool'
            scoreboardLink="https://capacalab.replit.app/"
          />
        </div>
      </TracingBeam>
      
      {/* Testimonials with enhanced spacing */}
      <div className="mt-16 sm:mt-32"> 
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
  buttonText?: string;
  highlightText?: string;
  scoreboardLink?: string;
}

// Update the Section component with TypeScript types
const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt, 
  gradient, 
  reversed,
  buttonText,
  highlightText,
  scoreboardLink
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 md:gap-12 lg:gap-20 py-4 sm:py-8`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:w-1/2 space-y-4 sm:space-y-8"
      >
        <div className="space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {title}
            </span>
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
            {subtitle}
          </h2>
          {highlightText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.2
              }}
            >
              <div className="mt-2 sm:mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-full shadow-lg">
                <span className="text-md sm:text-xl font-bold">
                  {highlightText}
                </span>
              </div>
            </motion.div>
          )}
        </div>
        
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-mono px-2 sm:px-0">
          {description}
        </p>

        {buttonText && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://forms.gle/98xdCddBNZnPjrdw6" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Campus Ambassador Apply Now',
                    });
                  }
                }}
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
              >
                {buttonText}
              </motion.button>
            </Link>
            
            {scoreboardLink && (
              <Link href={scoreboardLink} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'View Scoreboard',
                      });
                    }
                  }}
                  className="bg-gradient-to-r from-purple-500 to-violet-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                >
                  View Scoreboard
                </motion.button>
              </Link>
            )}
          </div>
        )}
        
      </motion.div>

      {/* Image with optimized animations */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:w-1/2 relative"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.div
          className="relative w-full aspect-square max-w-md mx-auto flex justify-center items-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut",
            times: [0, 0.5, 1] 
          }}
        >
          <Image
            src={imageSrc}
            height={imageSrc.includes('music') ? 500 : 350}
            width={imageSrc.includes('music') ? 500 : 350}
            alt={imageAlt}
            className="object-contain relative z-10 rounded-lg p-4 sm:p-0"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationPage;