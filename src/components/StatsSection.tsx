
import React from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle,
    count: "500+",
    label: "Projects Completed"
  },
  {
    icon: Users,
    count: "120+",
    label: "Expert Engineers"
  },
  {
    icon: Globe,
    count: "30+",
    label: "Countries Served"
  },
  {
    icon: Award,
    count: "25+",
    label: "Industry Awards"
  }
];

const StatsSection = () => {
  return (
    <section className="bg-skyblue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.count}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
