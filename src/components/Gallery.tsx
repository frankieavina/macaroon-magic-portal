import { useEffect, useRef, useState } from 'react';
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

  const galleryItems = [
    { 
      id: 1, 
      category: 'macarons', 
      name: 'St. Patrick\'s Day Treats',
      image: '/lovable-uploads/8e31f798-dfe5-4590-a06e-a972459cf8a7.png'
    },
    { 
      id: 2, 
      category: 'macarons', 
      name: 'Disney Minnie Macarons',
      image: '/lovable-uploads/705f3dbd-c803-4517-9c22-a75ffae584f2.png'
    },
    { 
      id: 3, 
      category: 'cookies', 
      name: 'Cinco de Mayo Cookie Collection',
      image: '/lovable-uploads/957b48fc-00b1-40a3-bc81-c679dbfb370b.png'
    },
    { 
      id: 4, 
      category: 'macarons', 
      name: 'Alice in Wonderland Tower',
      image: '/lovable-uploads/bb9b290b-e731-47e7-ae5d-e63d65414785.png'
    },
  ];

  const extendedGalleryItems = [
    ...galleryItems,
    { 
      id: 5, 
      category: 'specialty', 
      name: 'Virgin de Guadalupe Cookie',
      image: '/lovable-uploads/c31faf76-5813-4cc9-983a-b41f74069444.png'
    },
    { 
      id: 6, 
      category: 'macarons', 
      name: 'Fall Themed Macaron Box',
      image: '/lovable-uploads/d0a3e609-125b-4eaf-9320-f2c1d714be3f.png'
    },
    { 
      id: 7, 
      category: 'specialty', 
      name: 'Halloween Themed Macarons',
      image: '/lovable-uploads/32888fb0-a872-4c77-ab62-b234a344093e.png'
    },
    { 
      id: 8, 
      category: 'specialty', 
      name: 'Valentine\'s Ghost Macarons',
      image: '/lovable-uploads/c66990b2-23cb-494c-9165-6f5b2eb93430.png'
    },
    { 
      id: 9, 
      category: 'macarons', 
      name: 'Hello Kitty Macaron Tower',
      image: '/lovable-uploads/7f682eba-5b32-45c0-b949-9f31afb294ba.png'
    },
    { 
      id: 10, 
      category: 'macarons', 
      name: 'Classic Macaron Tower',
      image: '/lovable-uploads/3a54acb7-4bff-44cd-8ae4-da8453219bc8.png'
    },
    { 
      id: 11, 
      category: 'macarons', 
      name: 'Colorful Macaron Varieties',
      image: '/lovable-uploads/b56fc1b3-2c63-4da9-9c0f-cbbe8be25f7d.png'
    },
    { 
      id: 12, 
      category: 'macarons', 
      name: 'Rainbow Macarons',
      image: '/lovable-uploads/9443baa8-68df-4351-8641-14bfb03dbe75.png'
    },
    { 
      id: 13, 
      category: 'macarons', 
      name: 'Mini Macaron Collection',
      image: '/lovable-uploads/00c3bad6-590c-4425-acac-9b1c9bda2eb0.png'
    },
    { 
      id: 14, 
      category: 'macarons', 
      name: 'PhD Graduation Celebration Tower',
      image: '/lovable-uploads/95586930-016e-4424-b143-2538dd27a10e.png'
    },
    { 
      id: 15, 
      category: 'specialty', 
      name: 'Harry Potter Character Macarons',
      image: '/lovable-uploads/4ba3c57e-e420-46f1-ba42-6de9ce019858.png'
    },
    { 
      id: 16, 
      category: 'specialty', 
      name: 'Thanksgiving Macaron Collection',
      image: '/lovable-uploads/3a0f39ff-3acf-4fe9-a9dc-639ed99dd596.png'
    },
    { 
      id: 17, 
      category: 'specialty', 
      name: 'Halloween Macaron Set',
      image: '/lovable-uploads/08d78340-851e-4d3f-ab4d-2ba0a65b84fa.png'
    },
    { 
      id: 18, 
      category: 'macarons', 
      name: 'Pastel Macaron Assortment',
      image: '/lovable-uploads/3cac243d-66f5-4da1-9ae7-d2822ddd4fe7.png'
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
                <Tabs defaultValue="gallery" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="gallery">Gallery View</TabsTrigger>
                    <TabsTrigger value="carousel">Carousel View</TabsTrigger>
                  </TabsList>
                  
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
