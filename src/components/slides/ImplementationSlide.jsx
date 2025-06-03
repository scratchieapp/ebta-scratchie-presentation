import React from 'react';

const ImplementationSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-gray-50 to-blue-50">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Simple Implementation Plan</h2>
    <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
      <h3 className="font-bold text-2xl mb-6 text-gray-800">Phased Rollout Approach</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">1</div>
          <div className="flex-1">
            <h4 className="font-bold text-xl mb-2">Week 1-2: Pilot Launch</h4>
            <p className="text-lg text-gray-700">Start with one high-risk area (e.g., Bulleen Road interchange works)</p>
            <p className="text-lg text-gray-700">Train 20 supervisors, onboard 200 workers</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">2</div>
          <div className="flex-1">
            <h4 className="font-bold text-xl mb-2">Week 3-4: Measure & Adjust</h4>
            <p className="text-lg text-gray-700">Review data, gather feedback, optimize reward criteria</p>
            <p className="text-lg text-gray-700">Share early wins at toolbox talks</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">3</div>
          <div className="flex-1">
            <h4 className="font-bold text-xl mb-2">Month 2-3: Full Rollout</h4>
            <p className="text-lg text-gray-700">Expand to all 2,300 workers across the corridor</p>
            <p className="text-lg text-gray-700">Launch team challenges and site-wide competitions</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-xl mb-6 text-green-800">What Scratchie Provides</h3>
        <ul className="space-y-3 text-lg">
          <li>✓ Full platform setup and configuration</li>
          <li>✓ HammerTech integration support</li>
          <li>✓ On-site training for supervisors</li>
          <li>✓ Monthly analytics reports</li>
          <li>✓ Dedicated account manager</li>
          <li>✓ 24/7 technical support</li>
        </ul>
      </div>
      <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-xl mb-6 text-blue-800">What EBTA Provides</h3>
        <ul className="space-y-3 text-lg">
          <li>✓ Executive sponsorship announcement</li>
          <li>✓ Integration with existing systems</li>
          <li>✓ Monthly reward budget ($30/worker avg)</li>
          <li>✓ Champion supervisors for pilot</li>
          <li>✓ Feedback through existing channels</li>
          <li>✓ Success story sharing</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ImplementationSlide; 