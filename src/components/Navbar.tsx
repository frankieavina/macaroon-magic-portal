
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Desserts', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 
      ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-macaron-charcoal">
            MACS<span className="text-macaron-pink">.</span> <span className="text-xs font-light tracking-normal hidden sm:inline-block">Patterson, CA</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-macaron-charcoal text-sm font-medium hover:text-macaron-pink transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a 
              href="https://www.instagram.com/themacshop209/"
              className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61574711577534"
              className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="mailto:contact@macspatisserie.com"
              className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-macaron-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="block py-3 px-8 text-macaron-charcoal hover:bg-macaron-softPink transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            
            {/* Social Icons in Mobile Menu */}
            <li className="flex justify-center space-x-8 py-4 border-t border-macaron-softPink mt-2">
              <a 
                href="https://www.instagram.com/themacshop209/"
                className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574711577534"
                className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contact@macspatisserie.com"
                className="text-macaron-charcoal hover:text-macaron-pink transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
