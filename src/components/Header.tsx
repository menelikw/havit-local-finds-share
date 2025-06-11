
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Plus, User, Bell, Menu } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-heading text-lg font-bold">H</span>
              </div>
              <span className="text-display text-2xl text-foreground">Havit</span>
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-body text-foreground hover:text-primary transition-colors">
              Browse
            </Link>
            <Link to="/search" className="text-body text-foreground hover:text-primary transition-colors">
              Search
            </Link>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                name="search"
                placeholder="Search for items near you..."
                className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body bg-background text-foreground placeholder:text-muted-foreground"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Add Item Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-heading px-4 py-2"
              asChild
            >
              <Link to="/post">
                <Plus className="w-4 h-4 mr-2" />
                Add item
              </Link>
            </Button>

            {/* Mobile Add Button */}
            <Button size="sm" className="sm:hidden bg-primary hover:bg-primary/90 rounded-lg p-2" asChild>
              <Link to="/post">
                <Plus className="w-4 h-4" />
              </Link>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-lg hover:bg-muted p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-warm-orange rounded-full"></span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm" className="rounded-lg hover:bg-muted p-2" asChild>
              <Link to="/account">
                <User className="w-5 h-5" />
              </Link>
            </Button>

            {/* Auth Button */}
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden rounded-lg hover:bg-muted p-2">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              name="search"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body bg-background text-foreground placeholder:text-muted-foreground"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
