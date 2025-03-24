
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuth();
  
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
    { id: 'all', name: 'All Desserts' },
    { id: 'macarons', name: 'Macarons' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'specialty', name: 'Specialty' },
  ];

  // Get gallery items from local storage or use defaults
  const getGalleryItems = () => {
    const storedItems = localStorage.getItem('galleryItems');
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    
    // Default gallery items with expanded dessert options
    return [
      { id: 1, category: 'macarons', name: 'Vanilla Bean Macaron' },
      { id: 2, category: 'macarons', name: 'Chocolate Macaron' },
      { id: 3, category: 'cakes', name: 'Classic Cheesecake' },
      { id: 4, category: 'cookies', name: 'Chocolate Chip Cookies' },
      { id: 5, category: 'specialty', name: 'Chocolate Covered Pretzels' },
      { id: 6, category: 'cakes', name: 'Red Velvet Cake' },
      { id: 7, category: 'specialty', name: 'Cake Pops' },
      { id: 8, category: 'specialty', name: 'Classic Flan' },
    ];
  };

  // Sample gallery items - shown on the main page
  const galleryItems = getGalleryItems();

  // Extended gallery items - shown in the modal dialog
  const extendedGalleryItems = (() => {
    const storedItems = localStorage.getItem('galleryItems');
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    
    // Default extended gallery items with more dessert variety
    return [
      ...galleryItems,
      { id: 9, category: 'macarons', name: 'Raspberry Macaron' },
      { id: 10, category: 'macarons', name: 'Pistachio Macaron' },
      { id: 11, category: 'macarons', name: 'Coffee Macaron' },
      { id: 12, category: 'cakes', name: 'Strawberry Shortcake' },
      { id: 13, category: 'cakes', name: 'German Chocolate Cake' },
      { id: 14, category: 'cakes', name: 'Carrot Cake' },
      { id: 15, category: 'cookies', name: 'Sugar Cookies' },
      { id: 16, category: 'cookies', name: 'Snickerdoodles' },
      { id: 17, category: 'cookies', name: 'Oatmeal Raisin Cookies' },
      { id: 18, category: 'specialty', name: 'Chocolate Mousse' },
      { id: 19, category: 'specialty', name: 'Fruit Tarts' },
      { id: 20, category: 'specialty', name: 'Chocolate Truffles' },
    ];
  })();

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const filteredExtendedItems = activeCategory === 'all'
    ? extendedGalleryItems
    : extendedGalleryItems.filter(item => item.category === activeCategory);

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
        <h2 className="section-title text-center">Dessert Gallery</h2>
        <p className="section-subtitle text-center">
          Explore our collection of exquisite desserts, from signature macarons to cakes, cookies, 
          and specialty treats - each crafted with care and the finest ingredients.
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
        
        {/* Gallery grid - small preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="h-64 relative">
                {/* Placeholder for dessert image */}
                <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
                  <p className="text-macaron-charcoal/50 font-serif text-lg">{item.name}</p>
                </div>
                <div className="absolute inset-0 border border-macaron-pink/20 group-hover:border-macaron-pink/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase text-macaron-darkPink/70 mb-2 inline-block">
                  {categories.find(cat => cat.id === item.category)?.name || 'Dessert'}
                </span>
                <h3 className="text-xl font-serif font-medium text-macaron-charcoal group-hover:text-macaron-darkPink transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button that opens the dialog */}
        <div className="text-center mt-12">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <button 
                className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink hover:text-white transition-colors duration-300"
              >
                Explore Full Collection
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center text-macaron-darkPink mb-2">Our Complete Dessert Collection</DialogTitle>
                <DialogDescription className="text-center text-macaron-charcoal/80">
                  Browse through our full range of delightful desserts and sweet creations
                </DialogDescription>
              </DialogHeader>
              
              {isMobile ? (
                // Mobile view - only show gallery view
                <div className="mt-4">
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                          ${activeCategory === category.id 
                            ? 'bg-macaron-pink text-macaron-charcoal' 
                            : 'bg-macaron-cream/50 text-macaron-charcoal/70 hover:bg-macaron-cream'}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredExtendedItems.map((item) => (
                      <div 
                        key={item.id}
                        className="group rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <div className="h-40 relative">
                          {/* Placeholder for dessert image */}
                          <div className="absolute inset-0 bg-macaron-cream/60 flex items-center justify-center">
                            <p className="text-macaron-charcoal/50 font-serif text-md">{item.name}</p>
                          </div>
                          <div className="absolute inset-0 border border-macaron-pink/20 group-hover:border-macaron-pink/40 transition-colors duration-300"></div>
                        </div>
                        <div className="p-3 bg-white">
                          <span className="text-xs uppercase text-macaron-darkPink/70 inline-block">
                            {categories.find(cat => cat.id === item.category)?.name || 'Dessert'}
                          </span>
                          <h3 className="text-md font-medium text-macaron-charcoal group-hover:text-macaron-darkPink transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Desktop view - show tabs with both gallery and carousel views
                <Tabs defaultValue="gallery" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="gallery">Gallery View</TabsTrigger>
                    <TabsTrigger value="carousel">Carousel View</TabsTrigger>
                  </TabsList>
                  
                  {/* Gallery View Tab */}
                  <TabsContent value="gallery" className="mt-4">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                            ${activeCategory === category.id 
                              ? 'bg-macaron-pink text-macaron-charcoal' 
                              : 'bg-macaron-cream/50 text-macaron-charcoal/70 hover:bg-macaron-cream'}`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {filteredExtendedItems.map((item) => (
                        <div 
                          key={item.id}
                          className="group rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                          <div className="h-40 relative">
                            {/* Placeholder for dessert image */}
                            <div className="absolute inset-0 bg-macaron-cream/60 flex items-center justify-center">
                              <p className="text-macaron-charcoal/50 font-serif text-md">{item.name}</p>
                            </div>
                            <div className="absolute inset-0 border border-macaron-pink/20 group-hover:border-macaron-pink/40 transition-colors duration-300"></div>
                          </div>
                          <div className="p-3 bg-white">
                            <span className="text-xs uppercase text-macaron-darkPink/70 inline-block">
                              {categories.find(cat => cat.id === item.category)?.name || 'Dessert'}
                            </span>
                            <h3 className="text-md font-medium text-macaron-charcoal group-hover:text-macaron-darkPink transition-colors duration-300">
                              {item.name}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Carousel View Tab */}
                  <TabsContent value="carousel" className="mt-4">
                    <Carousel className="w-full max-w-md mx-auto">
                      <CarouselContent>
                        {filteredExtendedItems.map((item) => (
                          <CarouselItem key={item.id}>
                            <div className="p-1">
                              <div className="rounded-xl overflow-hidden border border-macaron-pink/20">
                                <div className="h-64 relative">
                                  {/* Placeholder for dessert image */}
                                  <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
                                    <p className="text-macaron-charcoal/50 font-serif text-xl">{item.name}</p>
                                  </div>
                                </div>
                                <div className="p-4 bg-white">
                                  <span className="text-xs uppercase text-macaron-darkPink/70 mb-1 inline-block">
                                    {categories.find(cat => cat.id === item.category)?.name || 'Dessert'}
                                  </span>
                                  <h3 className="text-xl font-serif font-medium text-macaron-charcoal">
                                    {item.name}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center mt-4">
                        <CarouselPrevious className="relative static translate-y-0 -left-0" />
                        <CarouselNext className="relative static translate-y-0 -right-0" />
                      </div>
                    </Carousel>
                    
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                            ${activeCategory === category.id 
                              ? 'bg-macaron-pink text-macaron-charcoal' 
                              : 'bg-macaron-cream/50 text-macaron-charcoal/70 hover:bg-macaron-cream'}`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </DialogContent>
          </Dialog>
          
          <p className="text-macaron-charcoal/70 mt-6">
            Want to see more of our creations or place a custom order?
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-white text-macaron-charcoal font-medium rounded-md hover:bg-macaron-cream transition-colors duration-300"
            >
              Contact Us
            </a>
            
            {isAuthenticated && (
              <Link 
                to="/admin/gallery" 
                className="inline-block px-8 py-3 bg-macaron-darkPink text-white font-medium rounded-md hover:bg-macaron-darkPink/90 transition-colors duration-300"
              >
                Manage Gallery
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
