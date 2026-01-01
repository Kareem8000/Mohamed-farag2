import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side with Animation */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <RevealOnScroll className="relative z-10">
              <div className="absolute top-0 right-0 w-full h-full border-4 border-medical-accent/20 rounded-2xl transform translate-x-4 -translate-y-4 z-0"></div>
              {/* Image: Examination Room - Matches 'about-room.jpg' */}
              {/* Changed h-[450px] to aspect-[3/4] for a balanced portrait look */}
              <img 
                src="/images/about-room.jpg" 
                alt="غرفة الكشف" 
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl relative z-10 bg-stone-200"
                onError={(e) => {
                  // Keep fallback just in case image isn't loaded yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=2069&auto=format&fit=crop"; 
                }}
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-r-4 border-medical-accent z-20 animate-fade-in-up hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-medical-50 rounded-full flex items-center justify-center text-medical-accent">
                        <Award size={24} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-medical-primary">100%</p>
                        <p className="text-stone-500 text-sm font-medium">رضا المرضى</p>
                    </div>
                 </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <RevealOnScroll delay={200}>
              <h4 className="text-medical-accent font-bold tracking-wider uppercase mb-2">عن العيادة</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-medical-primary mb-8 leading-tight">
                رعاية طبية تهمها <span className="text-medical-accent">راحتك</span> في المقام الأول
              </h2>
              
              <p className="text-stone-600 mb-6 text-lg leading-loose text-justify">
                في عيادة د. محمد فرج، يهمنا جداً إن زيارتك لطبيب الأسنان تكون مريحة ومطمنة. فلسفتنا قايمة على الصراحة، التعقيم اللي مافيهوش تهاون، والدقة في كل تفصيلة. بنجمعلك بين العلم والخبرة واللمسة الفنية عشان النتيجة تعجبك في الآخر.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "خطة علاج متفصلة ليك مخصوص",
                  "أحدث أجهزة التعقيم لسلامتك",
                  "مكان هادي ومريح للأعصاب",
                  "وضوح تام في الأسعار والعلاج"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-medical-50 p-3 rounded-lg hover:bg-medical-100 transition-colors">
                    <CheckCircle2 className="text-medical-accent w-5 h-5 flex-shrink-0" />
                    <span className="text-stone-700 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-6 border-t border-stone-100">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-medical-accent shadow-md flex-shrink-0">
                  {/* Image: Doctor Profile - Matches 'doctor-profile.jpg' */}
                  <img 
                    src="/images/doctor-profile.jpg" 
                    alt="د. محمد فرج" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                       (e.target as HTMLImageElement).style.display = 'none';
                       (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full bg-stone-200 flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-medical-primary">د. محمد فرج</p>
                  <p className="text-sm text-stone-700 font-bold mt-1">استشاري جراحة الفم وزراعة الأسنان - جامعة عين شمس</p>
                  <p className="text-xs text-stone-500 mt-1">عضو هيئة تدريس كلية طب الأسنان الجامعة البريطانية في مصر</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;