import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const ExpansionVisionSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-purple-50 to-orange-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Vision for North East Link</h2>
    <div className="bg-purple-100/80 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
      <h3 className="font-bold text-2xl mb-6 text-purple-800">Expansion Roadmap</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-orange-200 rounded-xl p-6 mb-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-600">Phase 1</div>
            <p className="text-lg mt-3">EBTA Success</p>
          </div>
          <p className="text-base text-gray-700">Prove concept on Eastern Freeway</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-200 rounded-xl p-6 mb-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-blue-600">Phase 2</div>
            <p className="text-lg mt-3">Tunnels & M80</p>
          </div>
          <p className="text-base text-gray-700">Expand to Spark & AMA packages</p>
        </div>
        <div className="text-center">
          <div className="bg-green-200 rounded-xl p-6 mb-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-green-600">Phase 3</div>
            <p className="text-lg mt-3">Full Program</p>
          </div>
          <p className="text-base text-gray-700">Standard across all NEL works</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-yellow-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-xl mb-6 text-yellow-800">Industry Recognition</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <Award className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <span>Position EBTA as safety innovation leader (like ACT success)</span>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <span>Submit for 2025 Australian Workplace Health & Safety Awards</span>
          </li>
          <li className="flex items-start">
            <Award className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <span>Case study for Engineers Australia publications</span>
          </li>
        </ul>
      </div>
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-xl mb-6 text-green-800">Partner Benefits</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <span><strong>Laing O'Rourke:</strong> Showcase Next Gear in action globally</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <span><strong>Symal:</strong> Differentiate as innovative employer</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <span><strong>WSP/Arcadis:</strong> Lead safety innovation in design</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ExpansionVisionSlide; 