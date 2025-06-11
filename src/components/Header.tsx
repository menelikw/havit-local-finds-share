
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, User, Bell, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-havit-green rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white heading-hierarchy-1 text-xl">H</span>
              </div>
              <span className="text-3xl heading-hierarchy-1 text-gray-900">Havit</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for items, people, or categories..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-havit-green focus:border-transparent text-refined bg-gray-50 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Add Item Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-havit-green hover:bg-havit-green-light transition-all duration-300 hover:scale-105 rounded-2xl heading-hierarchy-2 px-6 py-3 shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>

            {/* Mobile Add Button */}
            <Button size="sm" className="sm:hidden bg-havit-green hover:bg-havit-green-light rounded-2xl shadow-lg">
              <Plus className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-2xl hover:bg-gray-100 p-3">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-havit-orange rounded-full border-2 border-white"></span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm" className="rounded-2xl hover:bg-gray-100 p-3">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden rounded-2xl hover:bg-gray-100 p-3">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-havit-green focus:border-transparent text-refined bg-gray-50 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
