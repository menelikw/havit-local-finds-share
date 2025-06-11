
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, User, Bell, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-havit-green rounded-xl flex items-center justify-center">
                <span className="text-white font-fredoka font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-fredoka font-bold text-gray-900">Havit</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for items, people, or categories..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-havit-green focus:border-transparent font-inter"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Add Item Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-havit-green hover:bg-havit-green-light transition-all duration-300 hover:scale-105 rounded-2xl font-fredoka font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>

            {/* Mobile Add Button */}
            <Button size="sm" className="sm:hidden bg-havit-green hover:bg-havit-green-light rounded-2xl">
              <Plus className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-2xl">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-havit-orange rounded-full"></span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm" className="rounded-2xl">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden rounded-2xl">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-havit-green focus:border-transparent font-inter"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
