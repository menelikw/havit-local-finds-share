
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, ShoppingBag, RefreshCw, Hammer, Gift } from 'lucide-react';

const categories = [
  {
    id: 'give-get',
    title: 'Give & Get',
    description: 'Share items freely with your community',
    icon: Heart,
    gradient: 'from-havit-green to-havit-green-light',
    items: '1,234 items available'
  },
  {
    id: 'lend-borrow',
    title: 'Lend & Borrow',
    description: 'Temporary exchanges that help everyone',
    icon: Users,
    gradient: 'from-havit-blue to-cyan-400',
    items: '856 items available'
  },
  {
    id: 'buy-sell',
    title: 'Buy & Sell',
    description: 'Pre-loved items at great prices',
    icon: ShoppingBag,
    gradient: 'from-havit-yellow to-havit-orange',
    items: '2,456 items available'
  },
  {
    id: 'swap',
    title: 'Swap',
    description: 'Trade items with fellow community members',
    icon: RefreshCw,
    gradient: 'from-havit-purple to-havit-pink',
    items: '678 items available'
  },
  {
    id: 'reclaimed',
    title: 'Reclaimed',
    description: 'Unique upcycled and handmade treasures',
    icon: Hammer,
    gradient: 'from-emerald-500 to-teal-500',
    items: '234 items available'
  },
  {
    id: 'featured',
    title: 'Featured',
    description: 'Handpicked items from your community',
    icon: Gift,
    gradient: 'from-rose-400 to-pink-500',
    items: '89 items available'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How would you like to 
            <span className="text-gradient-primary"> share</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our community-driven categories and start making a difference today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <category.icon className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-havit-green transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-sm text-havit-green font-medium">
                    {category.items}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
