
import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6 md:px-10 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-macaron-softPink/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-macaron-softPink/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div 
        ref={aboutRef}
        className="max-w-7xl mx-auto relative z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <span className="block text-center text-sm text-macaron-darkPink font-medium mb-4">OUR STORY</span>
        <h2 className="section-title text-center">The Art of Macaron Making</h2>
        <p className="section-subtitle text-center">
          Crafting perfect macarons is an art form that combines precision, patience, and passion.
          At MACS, we honor traditional French techniques while adding our unique creative touch.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Ingredients",
              description: "We source only the finest almond flour, farm-fresh eggs, and premium flavorings to ensure exceptional taste and texture in every bite."
            },
            {
              title: "Handcrafted Care",
              description: "Each macaron is meticulously handcrafted by our skilled pastry chefs who bring years of experience and attention to detail."
            },
            {
              title: "Creative Flavors",
              description: "From timeless classics to seasonal specialties, our innovative flavor combinations offer a unique sensory experience."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 text-center hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-macaron-pink flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-macaron-charcoal">{index + 1}</span>
              </div>
              <h3 className="text-xl font-serif font-medium text-macaron-charcoal mb-4">{item.title}</h3>
              <p className="text-macaron-charcoal/70">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 h-80 rounded-2xl overflow-hidden relative">
            {/* Placeholder for about image */}
            <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
              <p className="text-macaron-charcoal/50 font-serif text-lg">Your baker image here</p>
            </div>
            <div className="absolute inset-0 border border-macaron-pink/20 rounded-2xl"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-macaron-charcoal mb-6">Meet Our Master Baker</h3>
            <p className="text-macaron-charcoal/70 mb-6">
              With a passion for French patisserie and over 15 years of experience, our head baker brings authentic 
              techniques and innovative flavors to create macarons that are both visually stunning and deliciously 
              unforgettable.
            </p>
            <p className="text-macaron-charcoal/70">
              Every macaron at MACS is crafted with love, precision, and a commitment to excellence that 
              has made us a beloved destination for macaron enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
