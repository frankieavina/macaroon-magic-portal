
import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
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
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Flavors' },
    { id: 'classic', name: 'Classic' },
    { id: 'seasonal', name: 'Seasonal' },
    { id: 'signature', name: 'Signature' },
  ];

  // This would be replaced with your actual gallery items
  const galleryItems = [
    { id: 1, category: 'classic', name: 'Vanilla Bean' },
    { id: 2, category: 'classic', name: 'Chocolate' },
    { id: 3, category: 'seasonal', name: 'Raspberry Rose' },
    { id: 4, category: 'signature', name: 'Lavender Honey' },
    { id: 5, category: 'classic', name: 'Pistachio' },
    { id: 6, category: 'seasonal', name: 'Pumpkin Spice' },
    { id: 7, category: 'signature', name: 'Champagne' },
    { id: 8, category: 'classic', name: 'Salted Caramel' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section 
      id="gallery" 
      className="py-20 md:py-32 px-6 md:px-10 bg-macaron-softPink/30 relative"
    >
      <div 
        ref={galleryRef}
        className="max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-1000"
      >
        <span className="block text-center text-sm text-macaron-darkPink font-medium mb-4">OUR CREATIONS</span>
        <h2 className="section-title text-center">Macaron Gallery</h2>
        <p className="section-subtitle text-center">
          Explore our collection of exquisite macarons, each one a perfect blend of crispy shells, 
          soft centers, and unforgettable flavors.
        </p>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-macaron-pink text-macaron-charcoal' 
                  : 'bg-white/50 text-macaron-charcoal/70 hover:bg-white'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="h-64 relative">
                {/* Placeholder for macaron image */}
                <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
                  <p className="text-macaron-charcoal/50 font-serif text-lg">Macaron photo</p>
                </div>
                <div className="absolute inset-0 border border-macaron-pink/20 group-hover:border-macaron-pink/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase text-macaron-darkPink/70 mb-2 inline-block">
                  {categories.find(cat => cat.id === item.category)?.name}
                </span>
                <h3 className="text-xl font-serif font-medium text-macaron-charcoal group-hover:text-macaron-darkPink transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-macaron-charcoal/70 mb-6">
            Want to see more of our creations or place a custom order?
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
