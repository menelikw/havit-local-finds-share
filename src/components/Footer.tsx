
import React from 'react';
import { Heart, Leaf, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-heading text-lg font-bold">H</span>
              </div>
              <span className="text-display text-2xl text-white">Havit</span>
            </div>
            <p className="text-body text-gray-300 text-base mb-6 max-w-md leading-relaxed">
              Building sustainable communities through local sharing. Together, we're reducing waste and creating connections.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Share with purpose</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <Leaf className="w-4 h-4" />
                <span className="text-sm">Reduce waste</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-heading text-base font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Give & Get</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Lend & Borrow</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Buy & Sell</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Swap Items</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Reclaimed</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-heading text-base font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Safety Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-heading text-base font-semibold mb-2 text-white">Stay connected</h4>
              <p className="text-body text-gray-300 text-sm">Get updates on new features and community highlights</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white text-sm"
              />
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-body text-gray-400 text-sm">
            © 2024 Havit. Made with <Heart className="w-4 h-4 inline text-red-500" /> for our planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
