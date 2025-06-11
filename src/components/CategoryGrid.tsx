
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
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl heading-hierarchy-1 text-gray-900 mb-6 leading-tight">
            How would you like to 
            <span className="text-havit-green"> share</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-refined">
            Choose from our community-driven categories and start making a difference today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in rounded-3xl bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-40 ${category.bgColor} relative overflow-hidden flex items-center justify-center`}>
                  <category.icon className={`w-12 h-12 ${category.bgColor === 'bg-havit-yellow' ? 'text-gray-900' : 'text-white'} transform group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl heading-hierarchy-1 text-gray-900 mb-3 group-hover:text-havit-green transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-refined text-base">
                    {category.description}
                  </p>
                  <p className="text-sm text-havit-green heading-hierarchy-2">
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
