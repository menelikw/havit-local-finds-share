
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Recycle, Users, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-havit-green via-havit-blue to-havit-purple">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-havit-yellow rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-havit-pink rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-havit-orange rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-havit-yellow rounded-full opacity-25 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Share. Care. 
            <span className="block text-havit-yellow">Reduce Waste.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Connect with your local community to give, get, lend, borrow, buy, sell, and swap items. 
            Together, we're reducing waste one item at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
          <Button size="lg" className="bg-white text-havit-green hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Start Sharing Now
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-havit-green text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Browse Items
          </Button>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
              <Heart className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Give & Get</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
              <Users className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Lend & Borrow</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
              <Recycle className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Buy & Sell</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
              <Leaf className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Reclaimed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
