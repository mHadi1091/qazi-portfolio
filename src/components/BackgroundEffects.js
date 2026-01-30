import React from 'react';
import { Cloud } from 'lucide-react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-cyan opacity-[0.02]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating clouds */}
        <Cloud className="absolute top-20 left-10 w-16 h-16 text-cyan-500/5 animate-float" />
        <Cloud className="absolute top-40 right-20 w-12 h-12 text-blue-500/5 animate-float-delayed" />
        <Cloud className="absolute bottom-40 left-1/3 w-20 h-20 text-cyan-500/5 animate-float-slow" />
      </div>
    </>
  );
};

export default BackgroundEffects;