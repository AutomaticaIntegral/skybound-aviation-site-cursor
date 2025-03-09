
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, form data would be sent to a backend service
    console.log("Form submitted");
    // Show a success message
    alert("Your message has been sent. We'll get back to you soon!");
  };

  return (
    <section id="contact" className="container-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Have questions or need more information about our services? Our team is ready to assist you.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-6">
            Fill out the form and one of our representatives will contact you promptly
            to discuss how Olmo Aviation can meet your aerospace needs.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-charcoal-light">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-charcoal-light">info@olmoaviation.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-charcoal-light">123 Aviation Blvd, Seattle, WA 98101, USA</p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder - In a real implementation, this would be a real map */}
          <div className="mt-8 rounded-lg overflow-hidden h-[200px] bg-gray-200 flex items-center justify-center">
            <p className="text-charcoal-light">Interactive Map Would Be Here</p>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                Full Name
              </label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                required 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                Email Address
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                Phone Number
              </label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number" 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                Message
              </label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your project or inquiry" 
                required 
                className="w-full min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full bg-skyblue hover:bg-skyblue-dark">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
