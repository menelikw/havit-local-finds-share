
import React from 'react';
import ItemCard from './ItemCard';

const sampleItems = [
  {
    id: '1',
    title: 'Vintage Leather Jacket',
    description: 'Beautiful brown leather jacket, barely worn. Perfect for autumn weather.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
    category: 'Clothing',
    type: 'give' as const,
    location: '0.5 km away',
    timeAgo: '2h ago',
    user: 'Sarah M.',
    condition: 'Like New'
  },
  {
    id: '2',
    title: 'Children\'s Books Collection',
    description: 'Set of 20 colorful children\'s books, perfect for ages 3-8.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    category: 'Books',
    type: 'lend' as const,
    location: '1.2 km away',
    timeAgo: '4h ago',
    user: 'Mike R.',
    condition: 'Good'
  },
  {
    id: '3',
    title: 'Upcycled Wooden Coffee Table',
    description: 'Handcrafted from reclaimed wood with unique steel legs.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    category: 'Furniture',
    type: 'reclaimed' as const,
    price: '£85',
    location: '2.1 km away',
    timeAgo: '1d ago',
    user: 'WoodCraft Co.',
    condition: 'Excellent'
  },
  {
    id: '4',
    title: 'Yoga Mat & Blocks Set',
    description: 'High-quality yoga mat with matching blocks, excellent condition.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    category: 'Sports',
    type: 'sell' as const,
    price: '£25',
    location: '0.8 km away',
    timeAgo: '6h ago',
    user: 'Emma L.',
    condition: 'Very Good'
  },
  {
    id: '5',
    title: 'Board Games Bundle',
    description: 'Collection of 5 family board games, great for game nights!',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    category: 'Games',
    type: 'swap' as const,
    location: '1.5 km away',
    timeAgo: '3h ago',
    user: 'The Johnsons',
    condition: 'Good'
  },
  {
    id: '6',
    title: 'Handmade Ceramic Bowls',
    description: 'Beautiful set of 4 ceramic bowls, glazed in ocean blue.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Kitchenware',
    type: 'reclaimed' as const,
    price: '£40',
    location: '1.8 km away',
    timeAgo: '2d ago',
    user: 'Clay Studio',
    condition: 'New'
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending in your 
            <span className="text-gradient-primary"> neighbourhood</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing items shared by people near you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleItems.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ItemCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-havit-green to-havit-blue text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
