
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-skyblue">Olmo Aviation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              About Us
            </a>
            <a href="#services" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-skyblue hover:bg-skyblue-dark">
              Request Information
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-charcoal p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                variant="default" 
                className="bg-skyblue hover:bg-skyblue-dark w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Information
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
