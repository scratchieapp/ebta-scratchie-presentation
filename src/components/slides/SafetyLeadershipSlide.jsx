import React from 'react';
import { CheckCircle, Heart, Award, TrendingUp, Users } from 'lucide-react';

const SafetyLeadershipSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-white to-gray-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">EBTA's Safety Leadership</h2>
    <div className="grid grid-cols-2 gap-8 h-5/6">
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
        <h3 className="font-bold text-2xl mb-6 text-blue-800">Current Innovations</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg">Australia's first Automated Cone Truck - 65,000 cones deployed safely</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg">Immersive VR safety training at Consolidation Centre (Project Management Office)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
            <span className="text-lg">Proactive emergency services engagement</span>
          </li>
        </ul>
      </div>
      <div className="space-y-6">
        <div className="bg-green-50 p-8 rounded-xl shadow-sm">
          <h3 className="font-bold text-2xl mb-6 text-green-800">Cultural Values</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Heart className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
              <span className="text-lg"><strong>People:</strong> 2,300 workforce at peak</span>
            </li>
            <li className="flex items-start">
              <Award className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
              <span className="text-lg"><strong>Pride:</strong> Victoria's biggest road program</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-blue-500 mt-1 mr-4 flex-shrink-0" />
              <span className="text-lg"><strong>Performance:</strong> On track for 2028 completion</span>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-xl mb-4 text-yellow-800">Laing O'Rourke: Rethinking Safety through Inclusion & Wellbeing</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">People are the solution</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Safety is the presence of positives</p>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Safety is an ethical responsibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SafetyLeadershipSlide; 