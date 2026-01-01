import React from 'react';
import SectionTitle from './SectionTitle';
import RevealOnScroll from './RevealOnScroll';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    // Image 1: Matches 'reception.jpg'
    { src: "/images/reception.jpg", title: "منطقة الاستقبال" },
    
    // Image 2: Matches 'about-room.jpg' (reused here as part of the tour)
    { src: "/images/about-room.jpg", title: "غرفة الكشف" },
    
    // Image 3: Matches 'facade.jpg'
    { src: "/images/facade.jpg", title: "واجهة العيادة" },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback logic
    const target = e.target as HTMLImageElement;
    const title = target.alt;
    
    if (title === "منطقة الاستقبال") {
       target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop";
    } else if (title === "واجهة العيادة") {
       target.src = "https://images.unsplash.com/photo-1516549655169-df83a0927f06?q=80&w=800&auto=format&fit=crop";
    } else if (title === "غرفة الكشف") {
       target.src = "https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=800&auto=format&fit=crop";
    } else {
       target.src = "https://via.placeholder.com/600x400?text=Gallery+Image";
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="خد جولة في العيادة" 
          subtitle="شوف التجهيزات الحديثة، التعقيم، والمكان المريح اللي يفتح النفس." 
        />
        
        {/* Grid adjusted for exactly 3 images to look balanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer bg-stone-100 border border-stone-200">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={handleImageError}
                />
                
                {/* Dark Overlay with Title */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-medical-primary">
                     <Plus size={24} />
                   </div>
                   <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     {item.title}
                   </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;