'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';

const JobFair = () => {
  const companies = [
    { name: "Infosys", logo: "/infosys.png" },
    { name: "Tata", logo: "/tata.png" },
    { name: "Capgemini", logo: "/cape.png" },
    { name: "TCS", logo: "/tcs.png" },
    { name: "Accenture", logo: "/acc.png" },
    { name: "EY", logo: "/ey.png" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-purple-950 via-black to-purple-950 text-white overflow-hidden py-20">
      {/* Background Effects */}
     
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
            <div className="w-16 h-16 relative">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                <path 
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider">
                <span className="text-white ">
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
              recognition from leading <span className="font-bold">Multinational Corporations (MNCs)</span>.
            </p>
          </motion.div>
        </div>
        
        {/* Company Logos - Single White Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 mb-24"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white/95 rounded-2xl p-6 md:p-10 shadow-xl shadow-purple-500/10"
          >
            <div className="flex flex-wrap justify-around items-center gap-8 md:gap-12">
              {companies.map((company, index) => (
                <motion.div 
                  key={company.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 h-12 md:w-32 md:h-16"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobFair;