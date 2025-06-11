
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, ShoppingBag, RefreshCw, Hammer, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'give-get',
    title: 'Give & Get',
    description: 'Share items freely with your community',
    icon: Heart,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    items: '1,234 items'
  },
  {
    id: 'lend-borrow',
    title: 'Lend & Borrow',
    description: 'Temporary exchanges that help everyone',
    icon: Users,
    color: 'text-soft-blue',
    bgColor: 'bg-soft-blue/10',
    items: '856 items'
  },
  {
    id: 'buy-sell',
    title: 'Buy & Sell',
    description: 'Pre-loved items at great prices',
    icon: ShoppingBag,
    color: 'text-warm-orange',
    bgColor: 'bg-warm-orange/10',
    items: '2,456 items'
  },
  {
    id: 'swap',
    title: 'Swap',
    description: 'Trade items with fellow community members',
    icon: RefreshCw,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    items: '678 items'
  },
  {
    id: 'reclaimed',
    title: 'Reclaimed',
    description: 'Unique upcycled and handmade treasures',
    icon: Hammer,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    items: '234 items'
  },
  {
    id: 'featured',
    title: 'Featured',
    description: 'Handpicked items from your community',
    icon: Sparkles,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    items: '89 items'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-24 px-4 bg-sage-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            How would you like to share?
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our community-driven categories and start making a difference today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading text-lg font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-body text-sm text-muted-foreground mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <p className="text-body text-xs font-medium text-primary">
                      {category.items}
                    </p>
                  </div>
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
