
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  MapPin, 
  DollarSign,
  ArrowLeft,
  Camera,
  Plus
} from 'lucide-react';

const PostCreation = () => {
  const [selectedType, setSelectedType] = useState<'give' | 'lend' | 'sell' | 'swap' | 'reclaimed'>('give');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    location: '',
    tags: [] as string[],
    dimensions: '',
    material: ''
  });

  const categories = [
    'Electronics', 'Furniture', 'Clothing', 'Books', 'Sports', 
    'Home & Garden', 'Toys', 'Art & Crafts', 'Kitchen', 'Tools', 'Other'
  ];

  const conditions = ['New', 'Like New', 'Very Good', 'Good', 'Fair'];

  const typeConfig = {
    give: { label: 'Give Away', color: 'bg-primary text-primary-foreground', description: 'Share items for free' },
    lend: { label: 'Lend', color: 'bg-soft-blue text-white', description: 'Temporarily lend items' },
    sell: { label: 'Sell', color: 'bg-warm-orange text-white', description: 'Sell items at fair prices' },
    swap: { label: 'Swap', color: 'bg-purple-600 text-white', description: 'Trade items with others' },
    reclaimed: { label: 'Handmade', color: 'bg-emerald-600 text-white', description: 'Share handmade creations' }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: selectedType, images: uploadedImages });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-display text-3xl text-foreground mb-2">Share an Item</h1>
          <p className="text-body text-muted-foreground">Help reduce waste by sharing with your community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What would you like to do?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Object.entries(typeConfig).map(([type, config]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type as any)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedType === type 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Badge className={`${config.color} mb-2`}>
                      {config.label}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{config.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                      <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {uploadedImages.length < 6 && (
                    <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Camera className="w-6 h-6 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground text-center">Add Photo</span>
                    </label>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Add up to 6 photos. The first photo will be your cover image.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Give your item a clear, descriptive title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your item in detail. Include its history, condition, and any special features..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="condition">Condition *</Label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select condition</option>
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                </div>
              </div>

              {(selectedType === 'sell' || selectedType === 'reclaimed') && (
                <div>
                  <Label htmlFor="price">Price *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dimensions">Dimensions (optional)</Label>
                  <Input
                    id="dimensions"
                    name="dimensions"
                    placeholder="e.g., 12&quot; x 8&quot; x 4&quot;"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="material">Material (optional)</Label>
                  <Input
                    id="material"
                    name="material"
                    placeholder="e.g., Wood, Plastic, Metal"
                    value={formData.material}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="location">Where is this item located? *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter your city or neighborhood"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  We&apos;ll only show your general area to protect your privacy
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" asChild>
              <Link to="/">Cancel</Link>
            </Button>
            <Button type="submit" size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Share Item
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PostCreation;
