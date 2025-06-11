
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, User, Bell, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-heading text-lg font-bold">H</span>
              </div>
              <span className="text-display text-2xl text-foreground">Havit</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search for items near you..."
                className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Add Item Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-heading px-4 py-2"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add item
            </Button>

            {/* Mobile Add Button */}
            <Button size="sm" className="sm:hidden bg-primary hover:bg-primary/90 rounded-lg p-2">
              <Plus className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-lg hover:bg-muted p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-warm-orange rounded-full"></span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm" className="rounded-lg hover:bg-muted p-2">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden rounded-lg hover:bg-muted p-2">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
