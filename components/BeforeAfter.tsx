import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { ArrowDown } from 'lucide-react';

const cases = [
  // Matches filenames: case-1.jpg, case-2.jpg, etc.
  { id: 1, image: "/images/case-1.jpg" },
  { id: 2, image: "/images/case-2.jpg" },
  { id: 3, image: "/images/case-3.jpg" },
  { id: 4, image: "/images/case-4.jpg" },
  { id: 5, image: "/images/case-5.jpg" },
];

const BeforeAfter: React.FC = () => {
  const [scrollCases, setScrollCases] = useState<{id: number, image: string}[]>([]);

  useEffect(() => {
    // Duplicate the cases multiple times to create a seamless infinite loop
    setScrollCases([...cases, ...cases, ...cases, ...cases]); 
  }, []);

  // Fallback function for missing images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "https://via.placeholder.com/500x500?text=Case+Image+(Square)";
  };

  return (
    <section id="before-after" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="شوف الفرق بنفسك" 
          subtitle="صور حقيقية لحالات عالجناها، بتوضح الشكل قبل العلاج (فوق) والنتيجة النهائية (تحت)." 
        />
      </div>

       {/* Infinite Scroll Container */}
       <div className="relative w-full overflow-hidden mt-8">
         {/* Gradient Masks for fading edges */}
         <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

         <div className="flex animate-scroll gap-6 w-max px-6">
            {scrollCases.map((item, index) => (
               // aspect-[3/4] forces the 1:1 ratio requested
               <div key={`${item.id}-${index}`} className="w-[300px] md:w-[400px] aspect-[3/4] bg-medical-50 rounded-2xl overflow-hidden shadow-lg border border-stone-100 group hover:shadow-xl transition-all duration-300 flex-shrink-0 relative">
                <div className="relative w-full h-full">
                  <img 
                    src={item.image} 
                    alt={`Case ${item.id}`} 
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  
                  {/* Decorative Labels */}
                  <div className="absolute top-3 right-3 bg-stone-800/80 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">
                    قبل
                  </div>
                  <div className="absolute bottom-3 left-3 bg-medical-accent/90 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">
                    بعد
                  </div>

                  {/* Center Indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowDown size={24} />
                  </div>
                </div>
              </div>
            ))}
         </div>
      </div>
      
      <div className="mt-12 text-center container mx-auto px-4">
           <p className="text-stone-500 text-sm italic">* الصور دي لنتائج حقيقية تمت داخل العيادة.</p>
      </div>
    </section>
  );
};

export default BeforeAfter;