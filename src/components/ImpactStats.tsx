
import React from 'react';
import { Leaf, Users, Package, Heart } from 'lucide-react';

const stats = [
  {
    icon: Package,
    number: '12,459',
    label: 'Items Shared',
    description: 'Saved from landfill',
    bgColor: 'bg-havit-green'
  },
  {
    icon: Users,
    number: '3,247',
    label: 'Community Members',
    description: 'Making a difference',
    bgColor: 'bg-havit-blue'
  },
  {
    icon: Leaf,
    number: '8.2 tonnes',
    label: 'CO₂ Saved',
    description: 'Environmental impact',
    bgColor: 'bg-emerald-500'
  },
  {
    icon: Heart,
    number: '£89,320',
    label: 'Money Saved',
    description: 'By our community',
    bgColor: 'bg-havit-pink'
  }
];

const ImpactStats = () => {
  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl heading-hierarchy-1 text-white mb-6 leading-tight">
            Our Community 
            <span className="text-havit-yellow"> Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-refined">
            Together, we're creating a more sustainable future, one share at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-4xl lg:text-5xl heading-hierarchy-1 text-white mb-3">
                {stat.number}
              </h3>
              
              <p className="text-lg heading-hierarchy-2 text-gray-200 mb-2">
                {stat.label}
              </p>
              
              <p className="text-sm text-gray-400 text-refined">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-300 text-xl mb-8 text-refined">
            Ready to make your impact?
          </p>
          <button className="bg-havit-yellow text-gray-900 px-10 py-4 rounded-2xl heading-hierarchy-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
