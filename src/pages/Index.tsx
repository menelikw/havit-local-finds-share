
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedItems from '@/components/FeaturedItems';
import ImpactStats from '@/components/ImpactStats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <FeaturedItems />
      <ImpactStats />
      <Footer />
    </div>
  );
};

export default Index;
