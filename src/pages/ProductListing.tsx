
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List, MapPin } from 'lucide-react';

const ProductListing = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = ['All', 'Electronics', 'Furniture', 'Clothing', 'Books', 'Sports', 'Home & Garden'];
  const types = ['All', 'Give', 'Lend', 'Sell', 'Swap', 'Handmade'];

  const mockItems = [
    {
      id: '1',
      title: 'Vintage Leather Armchair',
      description: 'Beautiful vintage leather armchair in excellent condition. Perfect for reading corner.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      category: 'Furniture',
      type: 'sell' as const,
      price: '$120',
      location: 'Brooklyn, NY',
      timeAgo: '2 hours ago',
      user: 'Sarah M.',
      condition: 'Excellent'
    },
    {
      id: '2',
      title: 'MacBook Pro 2020',
      description: 'Gently used MacBook Pro, perfect for students or professionals.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'lend' as const,
      location: 'Manhattan, NY',
      timeAgo: '4 hours ago',
      user: 'Alex K.',
      condition: 'Very Good'
    },
    {
      id: '3',
      title: 'Designer Winter Coat',
      description: 'Barely worn designer winter coat, size M. Perfect for cold weather.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      category: 'Clothing',
      type: 'give' as const,
      location: 'Queens, NY',
      timeAgo: '1 day ago',
      user: 'Emma R.',
      condition: 'Like New'
    },
    {
      id: '4',
      title: 'Professional Camera Setup',
      description: 'Complete photography setup with camera, lenses, and accessories.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'swap' as const,
      location: 'Bronx, NY',
      timeAgo: '2 days ago',
      user: 'Mike D.',
      condition: 'Good'
    },
    {
      id: '5',
      title: 'Handmade Pottery Set',
      description: 'Beautiful handcrafted pottery set, perfect for home decoration.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'Home & Garden',
      type: 'reclaimed' as const,
      price: '$45',
      location: 'Staten Island, NY',
      timeAgo: '3 days ago',
      user: 'Lisa P.',
      condition: 'New'
    },
    {
      id: '6',
      title: 'Gaming Laptop',
      description: 'High-performance gaming laptop with RTX graphics card.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'sell' as const,
      price: '$850',
      location: 'Brooklyn, NY',
      timeAgo: '5 days ago',
      user: 'Tom W.',
      condition: 'Very Good'
    }
  ];

  const filteredItems = mockItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const typeMatch = selectedType === 'all' || item.type === selectedType.toLowerCase();
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-display text-3xl text-foreground mb-2">Browse Items</h1>
          <p className="text-body text-muted-foreground">Discover amazing items shared by your community</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-6">
              <h3 className="text-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <Badge
                        key={type}
                        variant={selectedType === type.toLowerCase() ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedType(type.toLowerCase())}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-body text-muted-foreground">
                {filteredItems.length} items found
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Items Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Items
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListing;
