
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Settings, 
  Package, 
  Heart, 
  Star,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Edit,
  Plus
} from 'lucide-react';

const UserAccount = () => {
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@email.com',
    phone: '+1 (555) 123-4567',
    location: 'Brooklyn, NY',
    memberSince: 'March 2023',
    avatar: 'SM',
    rating: 4.8,
    reviews: 23,
    itemsShared: 42,
    itemsReceived: 18
  };

  const userItems = [
    {
      id: '1',
      title: 'Vintage Leather Armchair',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      type: 'sell',
      price: '$120',
      status: 'active'
    },
    {
      id: '2',
      title: 'Designer Winter Coat',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      type: 'give',
      status: 'pending'
    },
    {
      id: '3',
      title: 'Professional Camera',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
      type: 'lend',
      status: 'completed'
    }
  ];

  const favoriteItems = [
    {
      id: '4',
      title: 'Gaming Laptop',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop',
      type: 'sell',
      price: '$850',
      owner: 'Tom W.'
    },
    {
      id: '5',
      title: 'Handmade Pottery Set',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      type: 'reclaimed',
      price: '$45',
      owner: 'Lisa P.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-display text-3xl text-foreground mb-2">{user.name}</h1>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Member since {user.memberSince}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {user.rating} ({user.reviews} reviews)
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                  <div className="text-center">
                    <div className="text-display text-2xl text-primary font-bold">{user.itemsShared}</div>
                    <div className="text-xs text-muted-foreground">Items Shared</div>
                  </div>
                  <div className="text-center">
                    <div className="text-display text-2xl text-primary font-bold">{user.itemsReceived}</div>
                    <div className="text-xs text-muted-foreground">Items Received</div>
                  </div>
                  <div className="text-center">
                    <div className="text-display text-2xl text-primary font-bold">{user.reviews}</div>
                    <div className="text-xs text-muted-foreground">Reviews</div>
                  </div>
                </div>
              </div>
              
              <Button onClick={() => setIsEditing(!isEditing)} variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="items" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              My Items
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-heading text-2xl font-semibold">My Items</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <Badge className={`absolute top-2 right-2 ${getStatusColor(item.status)}`}>
                      {item.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-heading font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.type}</Badge>
                      {item.price && <span className="font-semibold">{item.price}</span>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-heading text-2xl font-semibold">Favorite Items</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-video">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-heading font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{item.type}</Badge>
                      {item.price && <span className="font-semibold">{item.price}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">by {item.owner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={user.name} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user.email} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={user.phone} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" value={user.location} disabled={!isEditing} />
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex gap-4">
                    <Button>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-heading font-semibold">Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Email notifications for new messages</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Push notifications for item updates</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Weekly digest of new items</span>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default UserAccount;
