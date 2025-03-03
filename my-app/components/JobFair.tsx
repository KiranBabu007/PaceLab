'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundBeams } from './ui/background-beams';

const JobFair = () => {
  const companies = [
    { name: "Infosys", logo: "/infosys.png", role: "Technology Partner" },
    { name: "Tata", logo: "/tata.png", role: "Innovation Sponsor" },
    { name: "Capgemini", logo: "/cape.png", role: "Digital Solutions" },
    { name: "TCS", logo: "/tcs.png", role: "Tech Recruitment" },
    { name: "Accenture", logo: "/acc.png", role: "Strategy Partner" },
    { name: "EY", logo: "/ey.png", role: "Consulting Partner" },
    
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-purple-950 via-black to-purple-950 text-white overflow-hidden py-20">
      {/* Background Effects with wave patterns */}
      <BackgroundBeams className="opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
        
        {/* Header with paper plane icon */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 mb-12"
          >
            <div className="w-24 h-24 relative">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                <path 
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-2xl font-bold mb-2 tracking-wider">
                <span className="text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]">
                  JOBS & OPPORTUNITIES
                </span>
              </h2>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              Our internship certifications have played a pivotal role in helping students gain
              recognition from leading <span className="font-bold">Multinational Corporations (MNCs)</span> and global companies.
            </p>
            <p className="text-xl md:text-2xl mt-6">
              Some of those organizations are mentioned below.
            </p>
          </motion.div>
        </div>
        
        {/* Company Logos - Horizontal Layout with White Backgrounds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 mb-24"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div 
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)" }}
                className="bg-white/90 rounded-xl p-4 flex items-center justify-center h-16 md:h-20"
                style={{ minWidth: '140px' }}
              >
                <div className="relative w-28 h-12">
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* PACELAB Logo */}
        
      </div>
    </div>
  );
};

export default JobFair;