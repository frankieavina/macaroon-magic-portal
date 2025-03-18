
import { useEffect, useRef } from 'react';
import { Home, Instagram, Mail } from 'lucide-react';

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
        <h2 className="section-title text-center">Connect With Us</h2>
        <p className="section-subtitle text-center">
          We'd love to help you find the perfect macarons for your special occasion.
          Reach out to us on social media or send us a message to place your order.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-96 rounded-2xl overflow-hidden relative flex items-center justify-center bg-macaron-softPink/10">
            <div className="text-center p-10">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-macaron-charcoal mb-4">Follow Our Journey</h3>
              <p className="text-macaron-charcoal/70 mb-6">
                Follow us on Instagram to see our latest creations, behind-the-scenes moments, 
                and get notified about special flavors and seasonal offerings.
              </p>
              <a 
                href="https://instagram.com/macspatisserie" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
              >
                @macspatisserie
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-macaron-charcoal mb-8">How to Order</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Instagram</h4>
                  <p className="text-macaron-charcoal/70">Follow and DM us @macspatisserie</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Send a Message</h4>
                  <p className="text-macaron-charcoal/70">
                    Use the form below to inquire about orders, flavors, and pricing
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-macaron-softPink flex items-center justify-center flex-shrink-0">
                  <Home size={18} className="text-macaron-darkPink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Service Area</h4>
                  <p className="text-macaron-charcoal/70">
                    We offer local pickup and delivery in select areas.
                    Contact us for availability and details.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://instagram.com/macspatisserie" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
              >
                Message Us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
