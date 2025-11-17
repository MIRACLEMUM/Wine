import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920"
      >
        <source src="https://cdn.coverr.co/videos/coverr-pouring-red-wine-into-a-glass-5305/1080p.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-amber-500 text-sm font-medium">Premium Collection 2024</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 animate-fade-in">
          Elevate Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Celebration
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover our curated collection of the world's finest wines, champagnes, and spirits
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition transform hover:scale-105 inline-flex items-center justify-center gap-2">
            Explore Collection
            <ChevronRight className="w-5 h-5" />
          </a>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
