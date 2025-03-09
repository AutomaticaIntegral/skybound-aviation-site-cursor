
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
              {t('navbar.home')}
            </a>
            <a href="#about" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              {t('navbar.about')}
            </a>
            <a href="#services" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              {t('navbar.services')}
            </a>
            <a href="#contact" className="text-charcoal hover:text-skyblue font-medium transition-colors">
              {t('navbar.contact')}
            </a>
          </nav>

          {/* Language Switcher + Contact Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="default" className="bg-skyblue hover:bg-skyblue-dark">
              {t('navbar.requestInfo')}
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
                {t('navbar.home')}
              </a>
              <a 
                href="#about" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.about')}
              </a>
              <a 
                href="#services" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.services')}
              </a>
              <a 
                href="#contact" 
                className="text-charcoal hover:text-skyblue font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.contact')}
              </a>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button 
                variant="default" 
                className="bg-skyblue hover:bg-skyblue-dark w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.requestInfo')}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
