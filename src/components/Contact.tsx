
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 px-6 md:px-10 bg-white relative"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-macaron-softPink/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
      
      <div 
        ref={contactRef}
        className="max-w-7xl mx-auto relative z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <span className="block text-center text-sm text-macaron-darkPink font-medium mb-4">GET IN TOUCH</span>
        <h2 className="section-title text-center">Visit Our Boutique</h2>
        <p className="section-subtitle text-center">
          Come experience the elegance and artistry of our macarons in person. 
          We'd love to help you find the perfect flavors for your special occasion.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-96 rounded-2xl overflow-hidden relative">
            {/* Placeholder for map/store image */}
            <div className="absolute inset-0 bg-macaron-cream/80 flex items-center justify-center">
              <p className="text-macaron-charcoal/50 font-serif text-lg">Your store image or map here</p>
            </div>
            <div className="absolute inset-0 border border-macaron-pink/20 rounded-2xl"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-macaron-charcoal mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Our Location</h4>
                  <p className="text-macaron-charcoal/70">123 Patisserie Avenue, Sweetville, CA 94000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Phone</h4>
                  <p className="text-macaron-charcoal/70">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Email</h4>
                  <p className="text-macaron-charcoal/70">hello@macspatisserie.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Hours</h4>
                  <p className="text-macaron-charcoal/70">
                    Tuesday - Friday: 10am - 6pm<br />
                    Saturday - Sunday: 9am - 4pm<br />
                    Monday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="mailto:hello@macspatisserie.com" 
                className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
