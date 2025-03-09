
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white">
      {/* EU Funding Banner */}
      <div className="w-full bg-white py-4">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/f6b1cb2b-4801-45ba-a80e-e892b498fa6f.png" 
            alt="Programa Kit Digital - Cofinanciado por los fondos Next Generation EU" 
            className="w-auto max-w-[800px] px-4"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-700/50 pb-12">
          <div className="col-span-1 md:col-span-5">
            <h3 className="text-2xl font-bold text-skyblue mb-6">Olmo Aviation</h3>
            <p className="mb-6 text-gray-300 max-w-md leading-relaxed">
              A global leader in aerospace innovation, delivering cutting-edge solutions 
              for commercial and defense applications with uncompromising quality and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors transform hover:scale-110 duration-300">
                <Facebook size={22} className="hover:animate-pulse" />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors transform hover:scale-110 duration-300">
                <Twitter size={22} className="hover:animate-pulse" />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={22} className="hover:animate-pulse" />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors transform hover:scale-110 duration-300">
                <Instagram size={22} className="hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white/90">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center">
                  <MapPin size={18} className="text-skyblue" />
                </div>
                <p className="text-gray-300">123 Aviation Blvd, Seattle, WA 98101, USA</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center">
                  <Phone size={18} className="text-skyblue" />
                </div>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center">
                  <Mail size={18} className="text-skyblue" />
                </div>
                <p className="text-gray-300">info@olmoaviation.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Olmo Aviation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-skyblue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-skyblue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
