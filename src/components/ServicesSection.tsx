
import React from 'react';
import { 
  PlaneTakeoff, 
  Wrench, 
  BarChart, 
  Shield, 
  Cpu, 
  BookOpen 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: PlaneTakeoff,
    title: "Aircraft Design",
    description: "Innovative design solutions for commercial, military, and private aircraft that optimize performance and efficiency."
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Comprehensive maintenance services with state-of-the-art facilities and certified technicians."
  },
  {
    icon: BarChart,
    title: "Performance Analysis",
    description: "Advanced data analytics and performance monitoring to optimize aircraft operations and reduce costs."
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description: "Cutting-edge safety systems and protocols that exceed industry standards and regulations."
  },
  {
    icon: Cpu,
    title: "Avionics Solutions",
    description: "Next-generation avionics technology for enhanced navigation, communication, and flight management."
  },
  {
    icon: BookOpen,
    title: "Training Programs",
    description: "Specialized training for pilots, engineers, and maintenance personnel using advanced simulators."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-charcoal tracking-wide">Our Services</h2>
        <p className="section-subtitle leading-relaxed">
          We deliver comprehensive aerospace solutions that combine innovation,
          precision engineering, and uncompromising quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group border border-gray-100 hover:border-skyblue/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              <CardHeader className="pb-2 pt-6">
                <div className="service-icon-container mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="h-6 w-6 group-hover:stroke-[2.5px] transition-all" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-skyblue transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-charcoal leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
