
import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle,
    count: 500,
    label: "Projects Completed"
  },
  {
    icon: Users,
    count: 120,
    label: "Expert Engineers"
  },
  {
    icon: Globe,
    count: 30,
    label: "Countries Served"
  },
  {
    icon: Award,
    count: 25,
    label: "Industry Awards"
  }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  // Animation duration in ms
  const ANIMATION_DURATION = 2000;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = stats.map((stat, index) => {
      const stepTime = Math.floor(ANIMATION_DURATION / stat.count);
      
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.count) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, stepTime);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-skyblue to-skyblue-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform transition-transform duration-500 hover:scale-105">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-3">{isVisible ? counts[index] : 0}{stat.count > 100 ? "+" : ""}</div>
              <div className="text-white/90 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
