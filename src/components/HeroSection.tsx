
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, RefreshCw, Leaf, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-sage-green/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-orange/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-display text-4xl sm:text-6xl lg:text-7xl text-foreground mb-8 max-w-4xl mx-auto">
            Share locally,
            <br />
            <span className="text-primary">impact globally</span>
          </h1>
          
          <p className="text-body text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with your community to give, lend, buy, sell, and swap items. 
            Together, we're building a more sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-heading">
              Start sharing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg text-heading"
            >
              Browse items
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <span className="text-heading text-sm font-medium text-foreground">Give & Get</span>
            </div>
            
            <div className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-soft-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-soft-blue/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-soft-blue" />
              </div>
              <span className="text-heading text-sm font-medium text-foreground">Lend & Borrow</span>
            </div>
            
            <div className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-warm-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-orange/20 transition-colors duration-300">
                <RefreshCw className="w-8 h-8 text-warm-orange" />
              </div>
              <span className="text-heading text-sm font-medium text-foreground">Buy & Sell</span>
            </div>
            
            <div className="flex flex-col items-center group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                <Leaf className="w-8 h-8 text-emerald-500" />
              </div>
              <span className="text-heading text-sm font-medium text-foreground">Reclaimed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
