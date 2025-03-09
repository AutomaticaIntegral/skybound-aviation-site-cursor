
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
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We deliver comprehensive aerospace solutions that combine innovation,
          precision engineering, and uncompromising quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-skyblue transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-md bg-skyblue/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-skyblue" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-charcoal">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
