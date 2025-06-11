
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  User, 
  Heart, 
  Share2, 
  Flag,
  Star,
  MessageCircle
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Mock item data
  const item = {
    id: id || '1',
    title: 'Vintage Leather Armchair',
    description: 'Beautiful vintage leather armchair in excellent condition. This piece has been in my family for years and I\'m hoping to find it a new loving home. The leather is genuine and has developed a beautiful patina over time. Perfect for a reading corner or as a statement piece in your living room.',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    ],
    category: 'Furniture',
    type: 'sell' as const,
    price: '$120',
    location: 'Brooklyn, NY',
    timeAgo: '2 hours ago',
    user: {
      name: 'Sarah M.',
      avatar: 'SM',
      rating: 4.8,
      reviews: 23,
      memberSince: 'March 2023'
    },
    condition: 'Excellent',
    dimensions: '32" W x 30" D x 36" H',
    material: 'Genuine Leather',
    tags: ['vintage', 'leather', 'armchair', 'furniture']
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  const typeColors = {
    give: 'bg-primary text-primary-foreground',
    lend: 'bg-soft-blue text-white', 
    sell: 'bg-warm-orange text-white',
    swap: 'bg-purple-600 text-white',
    reclaimed: 'bg-emerald-600 text-white'
  };

  const typeLabels = {
    give: 'Free',
    lend: 'Borrow',
    sell: 'For Sale',
    swap: 'Swap',
    reclaimed: 'Handmade'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={item.images[selectedImage]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className={`${typeColors[item.type]} mb-2`}>
                    {typeLabels[item.type]}
                  </Badge>
                  <h1 className="text-display text-3xl text-foreground">{item.title}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {item.price && (
                <p className="text-display text-2xl text-primary font-bold mb-4">{item.price}</p>
              )}

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.timeAgo}
                </div>
              </div>

              <p className="text-body text-foreground leading-relaxed">{item.description}</p>
            </div>

            {/* Item Specifications */}
            <Card className="p-6">
              <h3 className="text-heading text-lg font-semibold mb-4">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Condition:</span>
                  <Badge variant="outline" className="ml-2">{item.condition}</Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <span className="ml-2 text-foreground">{item.category}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <span className="ml-2 text-foreground">{item.dimensions}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Material:</span>
                  <span className="ml-2 text-foreground">{item.material}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-muted-foreground text-sm">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* User Info */}
            <Card className="p-6">
              <h3 className="text-heading text-lg font-semibold mb-4">Shared by</h3>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {item.user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="text-heading font-semibold text-foreground">{item.user.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {item.user.rating} ({item.user.reviews} reviews)
                    </div>
                    <span>•</span>
                    <span>Member since {item.user.memberSince}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact {item.user.name.split(' ')[0]}
              </Button>
              <Button variant="outline" size="lg">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
