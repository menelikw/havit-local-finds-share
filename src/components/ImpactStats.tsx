
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
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-white mb-4">
            Our Community 
            <span className="text-havit-yellow"> Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
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
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-4xl font-fredoka font-bold text-white mb-2">
                {stat.number}
              </h3>
              
              <p className="text-lg font-fredoka font-semibold text-gray-200 mb-1">
                {stat.label}
              </p>
              
              <p className="text-sm text-gray-400 font-inter">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6 font-inter">
            Ready to make your impact?
          </p>
          <button className="bg-havit-yellow text-gray-900 px-8 py-3 rounded-full font-fredoka font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Join the Movement 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
