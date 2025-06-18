import React, { useEffect, useRef } from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

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
        className="max-w-4xl mx-auto relative z-10 opacity-0 translate-y-10 transition-all duration-1000 text-center"
      >
        <span className="block text-center text-sm text-macaron-darkPink font-medium mb-4">GET IN TOUCH</span>
        <h2 className="section-title text-center">Connect With Us</h2>
        <p className="section-subtitle text-center mb-16">
          We'd love to help you find the perfect macarons for your special occasion.
          Reach out to us through any of the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-macaron-softPink flex items-center justify-center">
              <Instagram size={24} className="text-macaron-darkPink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-macaron-charcoal">Instagram</h3>
            <p className="text-macaron-charcoal/70 text-center">
              Follow us for daily updates and send us a DM for quick responses
            </p>
            <a 
              href="https://www.instagram.com/themacshop209/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink hover:text-white transition-colors duration-300"
            >
              @themacshop209
            </a>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-macaron-softPink flex items-center justify-center">
              <Mail size={24} className="text-macaron-darkPink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-macaron-charcoal">Email</h3>
            <p className="text-macaron-charcoal/70 text-center">
              Send us an email for detailed inquiries and custom orders
            </p>
            <a 
              href="mailto:themacshop209@gmail.com"
              className="inline-block px-6 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink hover:text-white transition-colors duration-300"
            >
              themacshop209@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-macaron-softPink flex items-center justify-center">
              <Facebook size={24} className="text-macaron-darkPink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-macaron-charcoal">Facebook</h3>
            <p className="text-macaron-charcoal/70 text-center">
              Like our page and message us for updates and orders
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=61574711577534"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-macaron-pink text-macaron-charcoal font-medium rounded-md hover:bg-macaron-darkPink hover:text-white transition-colors duration-300"
            >
              Visit Our Page
            </a>
          </div>
        </div>

        <div className="bg-macaron-softPink/30 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} className="text-macaron-darkPink" />
              <h3 className="text-2xl font-serif font-medium text-macaron-charcoal">Service Area</h3>
            </div>
            <p className="text-macaron-charcoal/70 text-lg">
              We offer local pickup and delivery in select areas around Patterson, CA.
              Contact us through any of the above channels for availability and details.
            </p>
          </div>
          <div className="relative">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50521.89394621309!2d-121.16291462167969!3d37.47172729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090071c6c0b7f35%3A0x3e5c6d5c5c5c5c5c!2sPatterson%2C%20CA!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, height: '15rem'}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patterson, California Location"
            ></iframe>

          </div>
        </div>
        
        {/* <div className="bg-macaron-softPink/30 rounded-xl p-8">
          <h3 className="text-2xl font-serif font-medium text-macaron-charcoal mb-4">Service Area</h3>
          <p className="text-macaron-charcoal/70 text-lg">
            We offer local pickup and delivery in select areas around Patterson, CA.
            Contact us through any of the above channels for availability and details.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;