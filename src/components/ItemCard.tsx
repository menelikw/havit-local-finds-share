
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, User } from 'lucide-react';

interface ItemCardProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    type: 'give' | 'lend' | 'sell' | 'swap' | 'reclaimed';
    price?: string;
    location: string;
    timeAgo: string;
    user: string;
    condition: string;
  };
}

const typeColors = {
  give: 'bg-havit-green text-white',
  lend: 'bg-havit-blue text-white', 
  sell: 'bg-havit-yellow text-gray-900',
  swap: 'bg-havit-purple text-white',
  reclaimed: 'bg-emerald-500 text-white'
};

const typeLabels = {
  give: 'Free',
  lend: 'Borrow',
  sell: 'For Sale',
  swap: 'Swap',
  reclaimed: 'Handmade'
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Card className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${typeColors[item.type]} font-medium`}>
              {typeLabels[item.type]}
            </Badge>
          </div>
          {item.price && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
              <span className="text-lg font-bold text-gray-900">{item.price}</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-havit-green transition-colors duration-300">
            {item.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Badge variant="outline" className="text-xs">
              {item.condition}
            </Badge>
            <span>•</span>
            <span>{item.category}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{item.timeAgo}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
            <div className="w-6 h-6 bg-gradient-to-br from-havit-green to-havit-blue rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-gray-600">{item.user}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
