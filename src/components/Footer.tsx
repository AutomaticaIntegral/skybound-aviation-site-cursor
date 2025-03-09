
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-skyblue mb-4">Olmo Aviation</h3>
            <p className="mb-4 text-gray-300 max-w-md">
              A global leader in aerospace innovation, delivering cutting-edge solutions 
              for commercial and defense applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-skyblue transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-skyblue transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skyblue transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-skyblue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Aviation Blvd</p>
              <p className="mb-2">Seattle, WA 98101, USA</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Email: info@olmoaviation.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Olmo Aviation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-skyblue transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-skyblue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
