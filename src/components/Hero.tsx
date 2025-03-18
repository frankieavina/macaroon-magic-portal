
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Make sure the hero section is visible when the page loads
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100');
        heroRef.current.classList.remove('opacity-0');
      }
    }, 100);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 py-20 overflow-hidden"
      ref={heroRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-macaron-softPink/40 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-macaron-pink/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full bg-macaron-pink/15 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 opacity-0 transition-opacity duration-1000">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-macaron-softPink text-macaron-darkPink text-sm font-medium">
            Artisanal French Macarons
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-macaron-charcoal mb-6 leading-tight">
            A Taste of <br />
            <span className="text-macaron-pink">French</span> Elegance
          </h1>
          <p className="text-lg text-macaron-charcoal/70 mb-8 max-w-lg mx-auto md:mx-0">
            Delicate, handcrafted macarons made with the finest ingredients, bringing
            a touch of Parisian luxury to your special moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#gallery" 
              className="px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
            >
              Explore Our Flavors
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-macaron-charcoal/20 text-macaron-charcoal font-medium rounded-md hover:bg-macaron-charcoal hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-72 md:h-96 rounded-2xl overflow-hidden relative">
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
            <p className="text-macaron-charcoal/50 font-serif text-lg">Your macaron hero image here</p>
          </div>
          <div className="absolute inset-0 border border-macaron-pink/20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
