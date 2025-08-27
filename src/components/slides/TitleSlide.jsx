import React from 'react';

const TitleSlide = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/ebta-render-1b.jpg)'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/60" />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col h-full px-12 py-16">
      {/* Scratchie Logo - smaller and better positioned */}
      <div className="pt-8 pb-24">
        <img 
          src="/images/scratchie-logo-black.svg" 
          alt="Scratchie Logo" 
          className="h-12 w-auto"
        />
      </div>
      
      {/* Main Content Area - centered and better proportioned */}
      <div className="flex-1 flex flex-col justify-center -mt-20">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 leading-none tracking-tight">
            Amplifying EBTA's
          </h1>
          <h1 className="text-7xl font-bold text-orange-600 mb-12 leading-none tracking-tight">
            Safety Excellence
          </h1>
          
          {/* Decorative element */}
          <div className="flex items-center mb-12">
            <div className="w-24 h-1 bg-orange-500"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full mx-2"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-2"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-2xl text-gray-700 font-light leading-relaxed max-w-4xl">
            How Scratchie + Convo Card Aligns with Next Gear Philosophy
          </h2>
        </div>
      </div>
      
      {/* Bottom Section - more integrated */}
      <div className="flex justify-between items-end pb-12">
        <div className="text-gray-700">
          <p className="text-lg font-medium mb-1">Presented to</p>
          <p className="text-xl font-semibold text-gray-900">Tim Neilson & EBTA Leadership Team</p>
          <p className="text-base text-gray-600 mt-1">Eastern Freeway – Burke to Tram Alliance</p>
        </div>
        
        {/* Page indicator */}
        <div className="text-right">
          <p className="text-sm text-gray-500 font-medium tracking-wide">SLIDE 1 OF 10</p>
        </div>
      </div>
    </div>
    
    {/* Subtle corner accent */}
    <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500 rounded-tl-full"></div>
    </div>
  </div>
);

export default TitleSlide; 