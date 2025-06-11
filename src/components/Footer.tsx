
import React from 'react';
import { Heart, Leaf, Users, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-havit-green to-havit-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-3xl font-bold">Havit</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Building sustainable communities through local sharing. Together, we're reducing waste and creating connections.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-havit-green">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Share with love</span>
              </div>
              <div className="flex items-center space-x-2 text-havit-blue">
                <Leaf className="w-5 h-5" />
                <span className="text-sm">Reduce waste</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Give & Get</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Lend & Borrow</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Buy & Sell</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Swap Items</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Reclaimed</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-havit-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay connected</h4>
              <p className="text-gray-300">Get updates on new features and community highlights</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-havit-green text-white"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-havit-green to-havit-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Havit. Made with <Heart className="w-4 h-4 inline text-havit-pink" /> for our planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
