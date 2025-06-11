
import React from 'react';
import { Leaf, Users, Package, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Package,
    number: '12,459',
    label: 'Items Shared',
    description: 'Kept from landfill',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Users,
    number: '3,247',
    label: 'Community Members',
    description: 'Making a difference',
    color: 'text-soft-blue',
    bgColor: 'bg-soft-blue/10'
  },
  {
    icon: Leaf,
    number: '8.2 tonnes',
    label: 'CO₂ Saved',
    description: 'Environmental impact',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: TrendingUp,
    number: '£89,320',
    label: 'Money Saved',
    description: 'By our community',
    color: 'text-warm-orange',
    bgColor: 'bg-warm-orange/10'
  }
];

const ImpactStats = () => {
  return (
    <section className="py-24 px-4 bg-charcoal text-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Our community impact
          </h2>
          <p className="text-body text-lg text-gray-300 max-w-2xl mx-auto">
            Together, we're creating a more sustainable future, one share at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <h3 className="text-display text-3xl lg:text-4xl text-white mb-2">
                {stat.number}
              </h3>
              
              <p className="text-heading text-base text-gray-200 mb-1">
                {stat.label}
              </p>
              
              <p className="text-body text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-body text-gray-300 text-lg mb-8">
            Ready to make your impact?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-heading transition-all duration-300 hover:scale-105">
            Join the community
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
