
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ItemCard from '@/components/ItemCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Filter, Grid, List, Search, MapPin, SlidersHorizontal } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState(query);

  const mockResults = [
    {
      id: '1',
      title: 'MacBook Pro 2020',
      description: 'Gently used MacBook Pro, perfect for students or professionals. Comes with original charger.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'lend' as const,
      location: 'Manhattan, NY',
      timeAgo: '4 hours ago',
      user: 'Alex K.',
      condition: 'Very Good'
    },
    {
      id: '2',
      title: 'Gaming Laptop Setup',
      description: 'High-performance gaming laptop with RTX graphics card and gaming accessories.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'sell' as const,
      price: '$850',
      location: 'Brooklyn, NY',
      timeAgo: '5 days ago',
      user: 'Tom W.',
      condition: 'Very Good'
    },
    {
      id: '3',
      title: 'Professional Camera Equipment',
      description: 'Complete photography setup with camera, lenses, and accessories for professionals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'swap' as const,
      location: 'Bronx, NY',
      timeAgo: '2 days ago',
      user: 'Mike D.',
      condition: 'Good'
    },
    {
      id: '4',
      title: 'Work from Home Setup',
      description: 'Complete work setup including laptop stand, keyboard, and monitor for remote work.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'Electronics',
      type: 'give' as const,
      location: 'Queens, NY',
      timeAgo: '1 day ago',
      user: 'Emma R.',
      condition: 'Good'
    }
  ];

  const filterOptions = {
    types: ['All', 'Give', 'Lend', 'Sell', 'Swap', 'Handmade'],
    conditions: ['All', 'New', 'Like New', 'Very Good', 'Good', 'Fair'],
    distances: ['All', '1 mile', '5 miles', '10 miles', '25 miles'],
    priceRanges: ['All', 'Free', '$1-25', '$26-100', '$101-500', '$500+']
  };

  const [selectedFilters, setSelectedFilters] = useState({
    type: 'All',
    condition: 'All',
    distance: 'All',
    priceRange: 'All'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
          
          {query && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Search results for:</span>
              <Badge variant="outline" className="text-foreground">"{query}"</Badge>
              <span>• {mockResults.length} items found</span>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-6">
              <h3 className="text-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Type</label>
                  <div className="space-y-2">
                    {filterOptions.types.map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={selectedFilters.type === type}
                          onChange={(e) => setSelectedFilters(prev => ({ ...prev, type: e.target.value }))}
                          className="text-primary"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Condition</label>
                  <div className="space-y-2">
                    {filterOptions.conditions.map((condition) => (
                      <label key={condition} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="condition"
                          value={condition}
                          checked={selectedFilters.condition === condition}
                          onChange={(e) => setSelectedFilters(prev => ({ ...prev, condition: e.target.value }))}
                          className="text-primary"
                        />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Distance</label>
                  <div className="space-y-2">
                    {filterOptions.distances.map((distance) => (
                      <label key={distance} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="distance"
                          value={distance}
                          checked={selectedFilters.distance === distance}
                          onChange={(e) => setSelectedFilters(prev => ({ ...prev, distance: e.target.value }))}
                          className="text-primary"
                        />
                        <span className="text-sm">{distance}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-body text-sm font-medium text-foreground mb-2 block">Price Range</label>
                  <div className="space-y-2">
                    {filterOptions.priceRanges.map((range) => (
                      <label key={range} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range}
                          checked={selectedFilters.priceRange === range}
                          onChange={(e) => setSelectedFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                          className="text-primary"
                        />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-body text-muted-foreground">
                  {mockResults.length} results
                </span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-input rounded-md px-3 py-1 text-sm bg-background"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="distance">Distance</option>
                </select>
              </div>
              
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

            {/* Results Grid */}
            {mockResults.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {mockResults.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-heading text-xl font-semibold mb-2">No results found</h3>
                <p className="text-body text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button variant="outline">Clear All Filters</Button>
              </Card>
            )}

            {/* Load More */}
            {mockResults.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Results
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
