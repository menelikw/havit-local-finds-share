
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, ShoppingBag, RefreshCw, Hammer, Gift } from 'lucide-react';

const categories = [
  {
    id: 'give-get',
    title: 'Give & Get',
    description: 'Share items freely with your community',
    icon: Heart,
    bgColor: 'bg-havit-pink',
    items: '1,234 items available'
  },
  {
    id: 'lend-borrow',
    title: 'Lend & Borrow',
    description: 'Temporary exchanges that help everyone',
    icon: Users,
    bgColor: 'bg-havit-blue',
    items: '856 items available'
  },
  {
    id: 'buy-sell',
    title: 'Buy & Sell',
    description: 'Pre-loved items at great prices',
    icon: ShoppingBag,
    bgColor: 'bg-havit-yellow',
    items: '2,456 items available'
  },
  {
    id: 'swap',
    title: 'Swap',
    description: 'Trade items with fellow community members',
    icon: RefreshCw,
    bgColor: 'bg-havit-purple',
    items: '678 items available'
  },
  {
    id: 'reclaimed',
    title: 'Reclaimed',
    description: 'Unique upcycled and handmade treasures',
    icon: Hammer,
    bgColor: 'bg-havit-orange',
    items: '234 items available'
  },
  {
    id: 'featured',
    title: 'Featured',
    description: 'Handpicked items from your community',
    icon: Gift,
    bgColor: 'bg-havit-green',
    items: '89 items available'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-900 mb-4">
            How would you like to 
            <span className="text-havit-green"> share</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Choose from our community-driven categories and start making a difference today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-32 ${category.bgColor} relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <category.icon className={`w-8 h-8 ${category.bgColor === 'bg-havit-yellow' ? 'text-gray-900' : 'text-white'}`} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-fredoka font-bold text-gray-900 mb-2 group-hover:text-havit-green transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed font-inter">
                    {category.description}
                  </p>
                  <p className="text-sm text-havit-green font-fredoka font-medium">
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
