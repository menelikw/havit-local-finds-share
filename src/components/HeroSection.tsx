
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Recycle, Users, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-havit-green px-4 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl heading-hierarchy-1 text-white mb-8 leading-[0.95] max-w-5xl mx-auto">
            Share. Care. 
            <span className="block text-havit-yellow mt-2">Reduce Waste.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto text-refined">
            Connect with your local community to give, get, lend, borrow, buy, sell, and swap items. 
            Together, we're building a sustainable future, one share at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-scale-in">
          <Button size="lg" className="bg-white text-havit-green hover:bg-gray-50 text-lg px-10 py-4 rounded-2xl heading-hierarchy-2 transition-all duration-300 hover:scale-105 shadow-2xl">
            Start Sharing
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-havit-green text-lg px-10 py-4 rounded-2xl heading-hierarchy-2 transition-all duration-300 hover:scale-105">
            Browse Items
          </Button>
        </div>

        {/* Refined feature showcase */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col items-center text-white group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center mb-4 transform hover:scale-110 transition-all duration-300 group-hover:bg-havit-pink group-hover:border-havit-pink">
              <Heart className="w-8 h-8" />
            </div>
            <span className="text-sm heading-hierarchy-2 text-white/90">Give & Get</span>
          </div>
          <div className="flex flex-col items-center text-white group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center mb-4 transform hover:scale-110 transition-all duration-300 group-hover:bg-havit-blue group-hover:border-havit-blue">
              <Users className="w-8 h-8" />
            </div>
            <span className="text-sm heading-hierarchy-2 text-white/90">Lend & Borrow</span>
          </div>
          <div className="flex flex-col items-center text-white group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center mb-4 transform hover:scale-110 transition-all duration-300 group-hover:bg-havit-yellow group-hover:border-havit-yellow">
              <Recycle className="w-8 h-8" />
            </div>
            <span className="text-sm heading-hierarchy-2 text-white/90">Buy & Sell</span>
          </div>
          <div className="flex flex-col items-center text-white group">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center mb-4 transform hover:scale-110 transition-all duration-300 group-hover:bg-havit-orange group-hover:border-havit-orange">
              <Leaf className="w-8 h-8" />
            </div>
            <span className="text-sm heading-hierarchy-2 text-white/90">Reclaimed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
