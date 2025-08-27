import React from 'react';

const OpportunitySlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-gray-50 to-blue-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">The Opportunity</h2>
    <div className="grid grid-cols-2 gap-8 h-5/6">
      <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-gray-800">Current Reality</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="mb-4 text-lg">✓ Strong safety systems in place</p>
            <p className="mb-4 text-lg">✓ Monthly recognition programs</p>
            <p className="mb-4 text-lg">✓ Regular toolbox talks</p>
            <p className="mb-4 text-lg">✓ EBTA wellbeing program</p>
          </div>
          <div>
            <p className="mb-4 text-lg text-orange-600">⚡ Recognition delayed weeks/months</p>
            <p className="mb-4 text-lg text-orange-600">⚡ Limited visibility of positive behaviors</p>
            <p className="mb-4 text-lg text-orange-600">⚡ Manual tracking of engagement</p>
            <p className="mb-4 text-lg text-orange-600">⚡ Reactive hazard reporting</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-blue-800">The Science of Immediate Recognition</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-3">Research Shows:</h4>
            <ul className="space-y-3">
              <li className="text-lg">• Immediate rewards create 2.2x stronger behavioural reinforcement</li>
              <li className="text-lg">• 90% of employees work harder when recognised</li>
              <li className="text-lg">• Recognition within seconds creates lasting habits</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Construction Reality:</h4>
            <ul className="space-y-3">
              <li className="text-lg">• Workers 8x more likely to die from suicide than workplace accidents</li>
              <li className="text-lg">• Daily positive feedback reduces stress and improves wellbeing</li>
              <li className="text-lg">• Peer recognition builds stronger team cohesion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OpportunitySlide; 