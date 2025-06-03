import React from 'react';

const ProvenResultsSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-green-50 to-orange-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Proven Construction Results</h2>
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-green-800">Measurable Outcomes</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-lg">Safety Attitude Improvement</span>
              <span className="text-3xl font-bold text-green-600">28%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-600 h-4 rounded-full" style={{width: '28%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-lg">Worker Site Preference</span>
              <span className="text-3xl font-bold text-blue-600">96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{width: '96%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-lg">Supervisor Time Saved/Week</span>
              <span className="text-3xl font-bold text-purple-600">2hrs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-blue-800">Client Testimonials</h3>
        <div className="space-y-5">
          <div className="bg-white/90 p-5 rounded-lg">
            <p className="italic text-lg mb-2">"Our drivers love it. Scratchie turned our safety training into a positive challenge."</p>
            <p className="text-sm text-gray-600">- Toll Group Manager</p>
          </div>
          <div className="bg-white/90 p-5 rounded-lg">
            <p className="italic text-lg mb-2">"96% of our workers prefer being on Scratchie-enabled sites."</p>
            <p className="text-sm text-gray-600">- Taylor Construction</p>
          </div>
          <div className="bg-white/90 p-5 rounded-lg">
            <p className="italic text-lg mb-2">"Teams are actively seeking out opportunities to demonstrate safe practices."</p>
            <p className="text-sm text-gray-600">- Major Construction Client</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-orange-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
      <h3 className="font-bold text-2xl mb-6 text-orange-800">Leading Indicators of Success</h3>
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="transform hover:scale-110 transition-transform">
          <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
          <p className="text-lg">Increase in near-miss reporting</p>
        </div>
        <div className="transform hover:scale-110 transition-transform">
          <div className="text-4xl font-bold text-green-600 mb-2">82%</div>
          <p className="text-lg">More likely to report hazards</p>
        </div>
        <div className="transform hover:scale-110 transition-transform">
          <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
          <p className="text-lg">Higher engagement levels</p>
        </div>
        <div className="transform hover:scale-110 transition-transform">
          <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
          <p className="text-lg">Reduction in incidents</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProvenResultsSlide; 