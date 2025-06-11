
import React from 'react';
import { Leaf, Users, Package, Heart } from 'lucide-react';

const stats = [
  {
    icon: Package,
    number: '12,459',
    label: 'Items Shared',
    description: 'Saved from landfill',
    color: 'from-havit-green to-havit-green-light'
  },
  {
    icon: Users,
    number: '3,247',
    label: 'Community Members',
    description: 'Making a difference',
    color: 'from-havit-blue to-cyan-400'
  },
  {
    icon: Leaf,
    number: '8.2 tonnes',
    label: 'CO₂ Saved',
    description: 'Environmental impact',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Heart,
    number: '£89,320',
    label: 'Money Saved',
    description: 'By our community',
    color: 'from-havit-pink to-rose-400'
  }
];

const ImpactStats = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-havit-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-havit-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Community 
            <span className="text-gradient-primary"> Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Together, we're creating a more sustainable future, one share at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              
              <p className="text-lg font-semibold text-gray-200 mb-1">
                {stat.label}
              </p>
              
              <p className="text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Ready to make your impact?
          </p>
          <button className="bg-gradient-to-r from-havit-yellow to-havit-orange text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
