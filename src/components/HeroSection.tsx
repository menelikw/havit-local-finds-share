
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Recycle, Users, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-havit-green px-4">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-fredoka font-bold text-white mb-6 leading-tight">
            Share. Care. 
            <span className="block text-havit-yellow animate-bounce-gentle">Reduce Waste.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-inter">
            Connect with your local community to give, get, lend, borrow, buy, sell, and swap items. 
            Together, we're reducing waste one item at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
          <Button size="lg" className="bg-white text-havit-green hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-fredoka font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Start Sharing Now 🌱
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-havit-green text-lg px-8 py-4 rounded-full font-fredoka font-semibold transition-all duration-300 hover:scale-105">
            Browse Items 👀
          </Button>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-havit-pink rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8" />
            </div>
            <span className="text-sm font-fredoka font-medium">Give & Get</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-havit-blue rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            <span className="text-sm font-fredoka font-medium">Lend & Borrow</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-havit-yellow rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Recycle className="w-8 h-8 text-gray-900" />
            </div>
            <span className="text-sm font-fredoka font-medium">Buy & Sell</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-havit-orange rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Leaf className="w-8 h-8" />
            </div>
            <span className="text-sm font-fredoka font-medium">Reclaimed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
