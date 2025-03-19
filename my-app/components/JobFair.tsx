'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { Building2 } from 'lucide-react'; // Import the building icon

const JobFair = () => {
  const companies = [
    { name: "Infosys", logo: "/infosys.png" },
    { name: "Tata", logo: "/tata.png" },
    { name: "Capgemini", logo: "/cape.png" },
    { name: "TCS", logo: "/tcs.png" },
    { name: "Accenture", logo: "/acc.png" },
    { name: "EY", logo: "/ey.png" },
    { name: "Amazon", logo: "/amazon.png" },
    { name: "AWS", logo: "/aws.png" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          particleColor="#8B5CF6"
          particleSize={1.5}
          particleDensity={80}
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Gradient Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Building2 className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Career Opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Launch Your Career with Industry Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300/90 leading-relaxed"
          >
            Our internship program opens doors to opportunities with leading multinational corporations,
            helping you kickstart your professional journey.
          </motion.p>
        </div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glass Container */}
          <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-12">
            {/* Grid of Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 justify-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut'
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative aspect-[3/2] flex items-center justify-center"
                >
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobFair;