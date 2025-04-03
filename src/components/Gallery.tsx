
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  // Gallery items with real images
  const galleryItems = [
    { 
      id: 1, 
      category: 'macarons', 
      name: 'Colorful Macaron Collection',
      image: '/lovable-uploads/413295bf-42f8-4418-8d58-770ec8f9be4f.png'
    },
    { 
      id: 2, 
      category: 'macarons', 
      name: 'Disney Character Macarons',
      image: '/lovable-uploads/367c24f8-fb3f-4b17-bf3c-732e9024f2f2.png'
    },
    { 
      id: 3, 
      category: 'cookies', 
      name: 'Cinco de Mayo Cookies',
      image: '/lovable-uploads/ea4e4f5d-0e50-4693-b585-149f7cbaf181.png'
    },
    { 
      id: 4, 
      category: 'macarons', 
      name: 'Alice in Wonderland Macaron Tower',
      image: '/lovable-uploads/48a52d1b-92b9-45d6-b2cc-bdeacf392d9b.png'
    },
  ];

  // Extended gallery items with more dessert variety
  const extendedGalleryItems = [
    ...galleryItems,
    { 
      id: 5, 
      category: 'specialty', 
      name: 'Virgin de Guadalupe Cookie',
      image: '/lovable-uploads/69814750-0c4b-4251-ac93-4fc265befe1c.png'
    },
    { 
      id: 6, 
      category: 'macarons', 
      name: 'Fall Themed Macaron Box',
      image: '/lovable-uploads/632388ef-e413-4619-8214-782234b63309.png'
    },
    { 
      id: 7, 
      category: 'specialty', 
      name: 'Halloween Themed Macarons',
      image: '/lovable-uploads/69a27dd9-b4bb-455d-aba5-7c09c7bba055.png'
    },
    { 
      id: 8, 
      category: 'specialty', 
      name: 'Valentine Dessert Collection',
      image: '/lovable-uploads/43b3ad58-5053-4a27-8ade-9a42302528e9.png'
    },
    { 
      id: 9, 
      category: 'macarons', 
      name: 'Hello Kitty Macaron Tower',
      image: '/lovable-uploads/33ed598c-57c7-4b26-86e0-dcc8eb512a97.png'
    },
    { 
      id: 10, 
      category: 'macarons', 
      name: 'Classic Macaron Tower',
      image: '/lovable-uploads/2f347bd4-48cb-4d06-8a4d-d60903140257.png'
    },
    { 
      id: 11, 
      category: 'macarons', 
      name: 'Colorful Macaron Varieties',
      image: '/lovable-uploads/61c16dee-97e2-4adb-9bb2-56dca299fb4a.png'
    },
    { 
      id: 12, 
      category: 'macarons', 
      name: 'Ghost and Special Occasion Macarons',
      image: '/lovable-uploads/ad5bab58-33af-48fd-90d6-856380fcfbd3.png'
    },
  ];

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
              <div className="relative">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 border border-macaron-pink/20 group-hover:border-macaron-pink/40 transition-colors duration-300 rounded-t-xl"></div>
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
                        <div className="relative">
                          <AspectRatio ratio={1/1}>
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-3 text-white w-full">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                            </div>
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
                          <div className="relative">
                            <AspectRatio ratio={1/1}>
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-3 text-white w-full">
                                <h3 className="text-sm font-medium">{item.name}</h3>
                              </div>
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
                                <AspectRatio ratio={1/1}>
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </AspectRatio>
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
