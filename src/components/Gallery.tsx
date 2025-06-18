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

// Define the gallery item interface to ensure type safety
interface GalleryItem {
  id: number;
  categories: string[];
  name: string;
  image: string;
}

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


  const galleryItems: GalleryItem[] = [
    { 
      id: 9,  
      categories: ['macarons', 'specialty'], 
      name: 'Hello Kitty Macaron Tower',
      image: '/lovable-uploads/10.jpg'
    },
    { 
      id: 39,  
      categories: ['macarons', 'specialty'], 
      name: '3rd Birthday Construction Macarons',
      image: '/lovable-uploads/40.jpg'
    },
    { 
      id: 24,  
      categories: ['macarons', 'specialty', 'cakes'], 
      name: 'Soccer Birthday Macaron',
      image: '/lovable-uploads/25.jpg'
    },
    { 
      id: 14,  
      categories: ['macarons', 'specialty'], 
      name: 'PhD Graduation Celebration Tower',
      image: '/lovable-uploads/15.jpg'
    },
  ];


  const extendedGalleryItems: GalleryItem[] = [
    { 
      id: 1, 
      categories: ['macarons', 'specialty'], 
      name: 'St. Patrick\'s Day Treats',
      image: '/lovable-uploads/1.jpg'
    },
    { 
      id: 2, 
      categories: ['macarons', 'specialty'], 
      name: 'Disney Minnie Macarons',
      image: '/lovable-uploads/2.jpg'
    },
    { 
      id: 3, 
      categories: ['macarons', 'specialty'], 
      name: 'Cinco de Mayo Cookie Collection',
      image: '/lovable-uploads/3.jpg'
    },
    { 
      id: 4, 
      categories: ['macarons', 'specialty'], 
      name: 'Alice in Wonderland Tower',
      image: '/lovable-uploads/4.jpg'
    },
    { 
      id: 5, 
      categories: ['macarons', 'specialty'], 
      name: 'Virgin de Guadalupe Cookie',
      image: '/lovable-uploads/5.jpg'
    },
    { 
      id: 6,  
      categories: ['macarons', 'specialty'], 
      name: 'Fall Themed Macaron Box',
      image: '/lovable-uploads/6.jpg'
    },
    { 
      id: 7, 
      categories: ['macarons', 'specialty'], 
      name: 'Halloween Themed Macarons',
      image: '/lovable-uploads/7.jpg'
    },
    { 
      id: 8, 
      categories: ['macarons', 'specialty'], 
      name: 'Valentine\'s Ghost Macarons',
      image: '/lovable-uploads/8.jpg'
    },
    { 
      id: 9,  
      categories: ['macarons', 'specialty'], 
      name: 'Hello Kitty Macaron Tower',
      image: '/lovable-uploads/10.jpg'
    },
    { 
      id: 10,  
      categories: ['macarons'], 
      name: 'Classic Macaron Tower',
      image: '/lovable-uploads/11.jpg'
    },
    { 
      id: 11,  
      categories: ['macarons'], 
      name: 'Colorful Macaron Varieties',
      image: '/lovable-uploads/12.jpg'
    },
    { 
      id: 12,  
      categories: ['macarons'], 
      name: 'Rainbow Macarons',
      image: '/lovable-uploads/13.jpg'
    },
    { 
      id: 13,  
      categories: ['macarons', 'specialty'], 
      name: 'Mini Macaron Collection',
      image: '/lovable-uploads/14.jpg'
    },
    { 
      id: 14,  
      categories: ['macarons', 'specialty'], 
      name: 'PhD Graduation Celebration Tower',
      image: '/lovable-uploads/15.jpg'
    },
    { 
      id: 15,  
      categories: ['macarons'], 
      name: 'Rice Krispies Macarons',
      image: '/lovable-uploads/16.jpg'
    },
    { 
      id: 16,  
      categories: ['macarons'], 
      name: 'Choclate and Vanilla',
      image: '/lovable-uploads/17.jpg'
    },
    { 
      id: 17,  
      categories: ['macarons', 'specialty'], 
      name: 'Halloween Macaron Set',
      image: '/lovable-uploads/18.jpg'
    },
    { 
      id: 18,  
      categories: ['macarons', 'specialty'], 
      name: 'Mickey Halloween Macarons',
      image: '/lovable-uploads/19.jpg'
    },
    { 
      id: 19,  
      categories: ['macarons', 'specialty'], 
      name: 'Thanksgiving Macarons',
      image: '/lovable-uploads/20.jpg'
    },
    { 
      id: 20,  
      categories: ['macarons', 'specialty'], 
      name: 'Mickey Christmas Macarons',
      image: '/lovable-uploads/21.jpg'
    },
    { 
      id: 21,  
      categories: ['macarons', 'specialty'], 
      name: 'Christmas Macarons',
      image: '/lovable-uploads/22.jpg'
    },
    { 
      id: 22,  
      categories: ['macarons', 'specialty'], 
      name: 'St.Pattricks Macarons',
      image: '/lovable-uploads/23.jpg'
    },
    { 
      id: 23,  
      categories: ['macarons', 'specialty'], 
      name: '18th Birthda Macarons',
      image: '/lovable-uploads/24.jpg'
    },
    { 
      id: 24,  
      categories: ['macarons', 'specialty', 'cakes'], 
      name: 'Soccer Birthday Macaron',
      image: '/lovable-uploads/25.jpg'
    },
    { 
      id: 25,  
      categories: ['macarons', 'specialty'], 
      name: 'Easter Macarons',
      image: '/lovable-uploads/26.jpg'
    },
    { 
      id: 26,  
      categories: ['macarons', 'specialty', 'cakes'], 
      name: '18th Birthday Star Wars Macarons Cake',
      image: '/lovable-uploads/19.jpg'
    },
    { 
      id: 27,  
      categories: ['macarons', 'specialty'], 
      name: 'Cat Rainbow Macarons',
      image: '/lovable-uploads/28.jpg'
    },
    { 
      id: 28,  
      categories: ['macarons', 'specialty'], 
      name: 'Barbie Macarons',
      image: '/lovable-uploads/29.jpg'
    },
    { 
      id: 29,  
      categories: ['macarons', 'specialty', 'cakes'], 
      name: 'Choclate Cake Macarons',
      image: '/lovable-uploads/30.jpg'
    },
    { 
      id: 30,  
      categories: ['macarons', 'specialty'], 
      name: '40th Birthday Macarons',
      image: '/lovable-uploads/31.jpg'
    },
    { 
      id: 31,  
      categories: ['macarons', 'specialty'], 
      name: 'Hello Kitty Macarons',
      image: '/lovable-uploads/32.jpg'
    },
    { 
      id: 32, 
      categories: ['macarons', 'specialty', 'cakes', 'cookies'], 
      name: 'Quince Setup',
      image: '/lovable-uploads/33.jpg'
    },
    { 
      id: 33,  
      categories: ['macarons', 'specialty'], 
      name: 'Thanksgiving Turkey Macarons',
      image: '/lovable-uploads/34.jpg'
    },
    { 
      id: 34,  
      categories: ['macarons', 'specialty'], 
      name: 'Christmas Ornament Macarons',
      image: '/lovable-uploads/35.jpg'
    },
    { 
      id: 35,  
      categories: ['macarons', 'specialty'], 
      name: 'Grinch Macarons',
      image: '/lovable-uploads/36.jpg'
    },
    { 
      id: 36, 
      categories: ['cookies', 'specialty'], 
      name: 'Valentines Cookies',
      image: '/lovable-uploads/37.jpg'
    },
    { 
      id: 37,  
      categories: ['macarons', 'specialty'], 
      name: 'St. Patties Day Macarons',
      image: '/lovable-uploads/38.jpg'
    },
    { 
      id: 38,  
      categories: ['macarons', 'specialty'], 
      name: 'Easter Macarons',
      image: '/lovable-uploads/39.jpg'
    },
    { 
      id: 39,  
      categories: ['macarons', 'specialty'], 
      name: '3rd Birthday Construction Macarons',
      image: '/lovable-uploads/40.jpg'
    },
    { 
      id: 40,  
      categories: ['cakes', 'specialty'], 
      name: '3rd Birthday Construction Macarons',
      image: '/lovable-uploads/41.JPG'
    },
    { 
      id: 41,  
      categories: ['cakes','cookies', 'specialty'], 
      name: '3rd Birthday Construction Macarons',
      image: '/lovable-uploads/42.JPG'
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.categories.includes(activeCategory));

  const filteredExtendedItems = activeCategory === 'all'
    ? extendedGalleryItems
    : extendedGalleryItems.filter(item => item.categories.includes(activeCategory));

  // Helper function to get primary category for display
  const getPrimaryCategory = (categories: string[]) => {
    return categories[0];
  };

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
                  {categories.find(cat => cat.id === getPrimaryCategory(item.categories))?.name || 'Dessert'}
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
                            {categories.find(cat => cat.id === getPrimaryCategory(item.categories))?.name || 'Dessert'}
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
                              {categories.find(cat => cat.id === getPrimaryCategory(item.categories))?.name || 'Dessert'}
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
                                    {categories.find(cat => cat.id === getPrimaryCategory(item.categories))?.name || 'Dessert'}
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
              className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink hover:text-white transition-colors duration-300"
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
