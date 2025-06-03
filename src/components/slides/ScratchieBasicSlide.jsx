import React from 'react';

const ScratchieBasicSlide = () => {
  const [currentMonth, setCurrentMonth] = React.useState(2);
  
  // Bell curve workforce ramp-up (percentage of peak workforce)
  const workforceRampUp = [
    0.15, 0.25, 0.40, 0.55, 0.70, 0.80, 0.90, 0.95, 1.0, 0.95, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15
  ];
  
  const peakWorkforce = 2300;
  const platformFeePerWorker = 5;
  
  const getCurrentWorkforce = (month) => Math.round(peakWorkforce * workforceRampUp[Math.min(month - 1, 15)]);
  const getCurrentMonthlyInvestment = (month) => {
    const workforce = getCurrentWorkforce(month);
    return workforce * platformFeePerWorker;
  };
  
  const currentWorkforce = getCurrentWorkforce(currentMonth);
  const monthlyInvestment = getCurrentMonthlyInvestment(currentMonth);
  const yearlyInvestment = workforceRampUp.slice(0, 12).reduce((total, percentage, index) => {
    return total + (peakWorkforce * percentage * platformFeePerWorker);
  }, 0);

  return (
    <div className="h-full p-12 bg-gradient-to-br from-blue-50 to-green-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Scratchie Platform Investment</h2>
      
      {/* Platform Fee Section */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold text-2xl mb-6 text-gray-800">Simple, Transparent Platform Fee</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Left: What You Get */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-2xl text-blue-800 mb-4">$5 per worker per month</h4>
              <p className="text-lg text-gray-700 mb-4">Complete Scratchie platform access including:</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Scratchie Points System:</strong> Gamified safety rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Live Leaderboards:</strong> Team & individual rankings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Convo Cards:</strong> Interactive safety discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Digital Rewards:</strong> Instant recognition system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Analytics Dashboard:</strong> Real-time safety insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Mobile App:</strong> Field-ready safety tools</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Project Month: {currentMonth}
              </label>
              <input
                type="range"
                min="1"
                max="16"
                value={currentMonth}
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Start</span>
                <span>Peak</span>
                <span>End</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-green-800">Current Month Investment</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Workforce:</span>
                  <span className="font-semibold">{currentWorkforce.toLocaleString()} workers</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-xl">
                  <span>Monthly Platform Fee:</span>
                  <span className="text-green-600">${monthlyInvestment.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Workforce Curve Visualization */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">Workforce Ramp-Up Over Project Lifecycle</h4>
            <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 320 200">
                {/* Draw the bell curve */}
                <path
                  d={`M 20,${200 - workforceRampUp[0] * 160} ` + 
                     workforceRampUp.slice(1).map((percentage, index) => 
                       `L ${20 + (index + 1) * 18},${200 - percentage * 160}`
                     ).join(' ')}
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Fill under curve */}
                <path
                  d={`M 20,200 L 20,${200 - workforceRampUp[0] * 160} ` + 
                     workforceRampUp.slice(1).map((percentage, index) => 
                       `L ${20 + (index + 1) * 18},${200 - percentage * 160}`
                     ).join(' ') + ' L 308,200 Z'}
                  fill="#3B82F6"
                  fillOpacity="0.2"
                />
                {/* Current month indicator */}
                <line
                  x1={20 + (currentMonth - 1) * 18}
                  y1="0"
                  x2={20 + (currentMonth - 1) * 18}
                  y2="200"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <text x={20 + (currentMonth - 1) * 18} y="15" textAnchor="middle" className="text-xs fill-red-600 font-semibold">
                  Month {currentMonth}
                </text>
              </svg>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Project Start</span>
              <span>Peak Activity</span>
              <span>Project End</span>
            </div>
          </div>
        </div>
        
        {/* Annual Summary */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-blue-800 mb-2">First Year Investment</h4>
            <p className="text-3xl font-bold text-blue-600">${Math.round(yearlyInvestment / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Platform fees only</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-green-800 mb-2">Peak Monthly</h4>
            <p className="text-3xl font-bold text-green-600">${Math.round(getCurrentMonthlyInvestment(9) / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">At full workforce</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-orange-800 mb-2">Average Monthly</h4>
            <p className="text-3xl font-bold text-orange-600">${Math.round(yearlyInvestment / 12 / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Across project lifecycle</p>
          </div>
        </div>
      </div>
      
      {/* Targeted Returns Section */}
      <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-green-800">Targeted Returns from Platform Investment</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <h4 className="font-medium text-lg mb-2 text-green-800">Incident Reduction (15%)</h4>
            <p className="text-base text-gray-700 mb-2">Save $200K+ per prevented LTI</p>
            <p className="text-sm text-green-600 font-semibold">Target: $400K-800K annually</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <h4 className="font-medium text-lg mb-2 text-green-800">Productivity Gain</h4>
            <p className="text-base text-gray-700 mb-2">2hrs/supervisor/week saved</p>
            <p className="text-sm text-green-600 font-semibold">100 supervisors = $520K annually</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <h4 className="font-medium text-lg mb-2 text-green-800">Retention Improvement</h4>
            <p className="text-base text-gray-700 mb-2">Reduce recruitment costs by 20%</p>
            <p className="text-sm text-green-600 font-semibold">Target: $200K+ savings</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="font-bold text-3xl text-green-600">Conservative ROI: 5-10x platform investment</p>
          <p className="text-lg text-gray-700 mt-2">From basic Scratchie engagement alone</p>
        </div>
      </div>
    </div>
  );
};

export default ScratchieBasicSlide; 