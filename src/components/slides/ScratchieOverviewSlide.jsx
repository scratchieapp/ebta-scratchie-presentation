import React from 'react';
import { Zap, BarChart, Users, AlertCircle, Shield } from 'lucide-react';

const ScratchieOverviewSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-green-50 to-blue-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Scratchie: Next Gear in Action</h2>
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
        <Zap className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h4 className="font-bold text-xl mb-3">Instant Recognition</h4>
        <p className="text-lg">Supervisors reward safe behaviors in real-time with digital scratch cards</p>
      </div>
      <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
        <BarChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h4 className="font-bold text-xl mb-3">Data-Driven Insights</h4>
        <p className="text-lg">Track positive safety actions and identify engagement trends</p>
      </div>
      <div className="bg-purple-100/80 backdrop-blur p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
        <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
        <h4 className="font-bold text-xl mb-3">Team Engagement</h4>
        <p className="text-lg">Gamified challenges and leaderboards drive friendly competition</p>
      </div>
    </div>
    <div className="bg-orange-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
      <h3 className="font-bold text-2xl mb-6 text-orange-800">Convo Card: Proactive Hazard Management</h3>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-xl mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-orange-600" />
            How It Works
          </h4>
          <ul className="space-y-3 text-lg">
            <li>• Workers report hazards instantly via mobile app</li>
            <li>• Categorized by risk type (fall, electrical, traffic, etc.)</li>
            <li>• Photos and voice notes for clarity</li>
            <li>• Instant rewards for proactive reporting</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-green-600" />
            EBTA Benefits
          </h4>
          <ul className="space-y-3 text-lg">
            <li>• Early hazard identification on 6.5km corridor</li>
            <li>• Reduced exposure to live traffic risks</li>
            <li>• Data on emerging safety trends</li>
            <li>• Empowers 2,300 workers as safety leaders</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ScratchieOverviewSlide; 