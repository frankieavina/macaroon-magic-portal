
import { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Make sure the hero section is visible when the page loads
    if (heroRef.current) {
      heroRef.current.classList.add('opacity-100');
      heroRef.current.classList.remove('opacity-0');
    }
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
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-macaron-softPink text-macaron-darkPink text-sm font-medium">
            Artisanal Desserts & French Macarons in Patterson, CA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-macaron-charcoal mb-6 leading-tight">
            A Taste of <br />
            <span className="text-macaron-pink">Sweet</span> Elegance
          </h1>
          <p className="text-lg text-macaron-charcoal/70 mb-8 max-w-lg mx-auto md:mx-0">
            Delicate, handcrafted desserts made with the finest ingredients in Patterson, CA. Enjoy our signature macarons, cakes, cookies, cake pops, chocolate-covered pretzels and more for your special moments. Serving the 209 area with love in every bite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#gallery" 
              className="px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
            >
              Explore Our Desserts
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-macaron-charcoal/20 text-macaron-charcoal font-medium rounded-md hover:bg-macaron-charcoal hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg relative">
          <AspectRatio ratio={1/1} className="bg-white">
            <img 
              src="/lovable-uploads/13.jpg" 
              alt="Colorful macarons, cookies, and treats in a dessert box" 
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 border border-macaron-pink/20 rounded-2xl"></div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Hero;
