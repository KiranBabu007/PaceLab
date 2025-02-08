import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface Props {
  testimonials: Testimonial[];
}

const InfiniteMovingCards: React.FC<Props> = ({ testimonials }) => {
  return (
    <section className="py-12 bg-transparent sm:py-16 lg:py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Our Students Speak
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bg-gradient-to-r from-black/90 to-transparent w-40 h-full z-10" />
            <div className="absolute right-0 top-0 bg-gradient-to-l from-black/90 to-transparent w-40 h-full z-10" />
            
            {/* Sliding Container */}
            <div className="flex gap-8 overflow-hidden">
              <div className="flex animate-scroll hover:pause gap-8 min-w-full">
                {[...testimonials, ...testimonials, ...testimonials,...testimonials].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 w-[450px] p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/10 transition-all duration-300 hover:bg-white/20"
                  >
                    <blockquote className="relative">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className="w-5 h-5 text-yellow-500" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-gray-200 mb-6 line-clamp-4">
                        {item.quote}
                      </p>
                      <div className="flex items-center">
                        <div>
                          <p className="text-base font-semibold text-purple-300">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-sm text-gray-400">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteMovingCards;