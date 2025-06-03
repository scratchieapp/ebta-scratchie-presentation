import React from 'react';
import { CheckCircle, Heart, Award, Target } from 'lucide-react';

const AlignmentSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-blue-50 to-purple-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Perfect Alignment with EBTA</h2>
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-blue-800">Seamless Integration</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>HammerTech Integration:</strong> Works with your existing HSE system</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>4D Planning Links:</strong> Tie rewards to construction stages</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>Power BI Dashboards:</strong> Safety metrics alongside schedule/cost</span>
          </li>
        </ul>
      </div>
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-green-800">Supporting Your Initiatives</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Heart className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>Mental Health:</strong> Daily positive feedback reduces stress</span>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>STEM Returners:</strong> Gamification appeals to diverse workforce</span>
          </li>
          <li className="flex items-start">
            <Target className="w-6 h-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg"><strong>Safety Innovation:</strong> Next award-winning initiative after ACT</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
      <h3 className="font-bold text-2xl mb-6 text-yellow-800">Specific EBTA Use Cases</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white/90 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-3">🚧</div>
          <p className="font-bold text-lg mb-2">Traffic Management</p>
          <p className="text-base">Reward crews for safe cone deployment alongside ACT</p>
        </div>
        <div className="bg-white/90 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-3">🌉</div>
          <p className="font-bold text-lg mb-2">Bridge Works</p>
          <p className="text-base">Recognise complex lifting operations done safely</p>
        </div>
        <div className="bg-white/90 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
          <div className="text-5xl mb-3">🚌</div>
          <p className="font-bold text-lg mb-2">Busway Construction</p>
          <p className="text-base">Incentivise quality work on Melbourne's first busway</p>
        </div>
      </div>
    </div>
  </div>
);

export default AlignmentSlide; 