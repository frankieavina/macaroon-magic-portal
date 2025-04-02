
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-macaron-softPink py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <a href="#home" className="mb-6 md:mb-0">
            <h2 className="text-3xl font-serif font-medium tracking-tight text-macaron-charcoal">
              MACS<span className="text-macaron-pink">.</span>
            </h2>
          </a>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/themacshop209/" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-macaron-pink transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-macaron-charcoal" />
            </a>
            <a 
              href="https://www.facebook.com/themacshop209" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-macaron-pink transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} className="text-macaron-charcoal" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-macaron-pink transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} className="text-macaron-charcoal" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-macaron-pink/30 pt-10 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-macaron-charcoal/70">
              © {new Date().getFullYear()} MACS Patisserie. All rights reserved.
            </p>
          </div>
          
          <ul className="flex flex-wrap gap-4 md:gap-8">
            <li>
              <a href="#" className="text-macaron-charcoal/70 hover:text-macaron-darkPink transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-macaron-charcoal/70 hover:text-macaron-darkPink transition-colors duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#contact" className="text-macaron-charcoal/70 hover:text-macaron-darkPink transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
