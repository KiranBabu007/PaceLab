'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMovingCards from './ui/infinite-moving-cards';
import testimonials from '@/constants/testimonials';

const TestimonialsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="pt-8"
    >
      <InfiniteMovingCards testimonials={testimonials} />
    </motion.div>

    
  );
};

export default TestimonialsSection;