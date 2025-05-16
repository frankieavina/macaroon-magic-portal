
import React, { useEffect, useRef } from 'react';
import { Home, Instagram, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

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
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-macaron-softPink/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
      
      <div 
        ref={contactRef}
        className="max-w-7xl mx-auto relative z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <span className="block text-center text-sm text-macaron-darkPink font-medium mb-4">GET IN TOUCH</span>
        <h2 className="section-title text-center">Connect With Us</h2>
        <p className="section-subtitle text-center mb-16">
          We'd love to help you find the perfect macarons for your special occasion.
          Fill out the form below or reach out to us on social media.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-macaron-charcoal mb-6">Contact Information</h3>
            
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
                  <h4 className="text-lg font-medium text-macaron-charcoal mb-1">Email</h4>
                  <p className="text-macaron-charcoal/70">
                    hello@macspatisserie.com
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
            
            <div className="py-6">
              <a 
                href="https://instagram.com/macspatisserie" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink transition-colors duration-300"
              >
                Follow Us on Instagram
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif font-medium text-macaron-charcoal mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
