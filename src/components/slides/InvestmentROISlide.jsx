import React from 'react';

const InvestmentROISlide = () => {
  const [rewardBudget, setRewardBudget] = React.useState(30);
  const [currentMonth, setCurrentMonth] = React.useState(12);
  
  // Bell curve workforce ramp-up (percentage of peak workforce)
  const workforceRampUp = [
    0.15, 0.25, 0.40, 0.55, 0.70, 0.80, 0.90, 0.95, 1.0, 0.95, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15
  ];
  
  const peakWorkforce = 2300;
  const platformFeePerWorker = 5;
  
  const getCurrentWorkforce = (month) => Math.round(peakWorkforce * workforceRampUp[Math.min(month - 1, 15)]);
  const getCurrentMonthlyInvestment = (month) => {
    const workforce = getCurrentWorkforce(month);
    return workforce * (platformFeePerWorker + rewardBudget);
  };
  
  const currentWorkforce = getCurrentWorkforce(currentMonth);
  const monthlyInvestment = getCurrentMonthlyInvestment(currentMonth);
  const yearlyInvestment = workforceRampUp.slice(0, 12).reduce((total, percentage, index) => {
    return total + (peakWorkforce * percentage * (platformFeePerWorker + rewardBudget));
  }, 0);

  return (
    <div className="h-full p-12 bg-gradient-to-br from-gray-50 to-green-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Investment & Returns Calculator</h2>
      
      {/* Interactive Calculator Section */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold text-2xl mb-6 text-gray-800">Project Investment Calculator</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Left: Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Monthly Reward Budget per Worker: ${rewardBudget}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={rewardBudget}
                onChange={(e) => setRewardBudget(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$0</span>
                <span>$50</span>
                <span>$100</span>
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
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-800">Current Month Investment</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Workforce:</span>
                  <span className="font-semibold">{currentWorkforce.toLocaleString()} workers</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee:</span>
                  <span>${(currentWorkforce * platformFeePerWorker).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rewards:</span>
                  <span>${(currentWorkforce * rewardBudget).toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Monthly Total:</span>
                  <span className="text-blue-600">${monthlyInvestment.toLocaleString()}</span>
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
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-green-800 mb-2">First Year Investment</h4>
            <p className="text-3xl font-bold text-green-600">${Math.round(yearlyInvestment / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Total including ramp-up</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-blue-800 mb-2">Peak Monthly</h4>
            <p className="text-3xl font-bold text-blue-600">${Math.round(getCurrentMonthlyInvestment(9) / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">At full workforce</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <h4 className="font-bold text-lg text-orange-800 mb-2">Average Monthly</h4>
            <p className="text-3xl font-bold text-orange-600">${Math.round(yearlyInvestment / 12 / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Across project lifecycle</p>
          </div>
        </div>
      </div>
      
      {/* ROI Section */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-green-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
          <h3 className="font-bold text-2xl mb-6 text-green-800">Potential Returns</h3>
          <div className="space-y-4">
            <div className="pb-4 border-b border-green-200">
              <p className="font-medium text-lg mb-1">Incident Reduction (15%)</p>
              <p className="text-base text-gray-700">Save $200K+ per prevented LTI</p>
              <p className="text-sm text-green-600 font-semibold">Potential: $400K-800K annually</p>
            </div>
            <div className="pb-4 border-b border-green-200">
              <p className="font-medium text-lg mb-1">Productivity Gain</p>
              <p className="text-base text-gray-700">2hrs/supervisor/week saved</p>
              <p className="text-sm text-green-600 font-semibold">100 supervisors = $520K annually</p>
            </div>
            <div className="pb-4 border-b border-green-200">
              <p className="font-medium text-lg mb-1">Retention Improvement</p>
              <p className="text-base text-gray-700">Reduce recruitment costs by 20%</p>
              <p className="text-sm text-green-600 font-semibold">Potential: $200K+ savings</p>
            </div>
            <div className="pt-4">
              <p className="font-bold text-2xl text-green-600">ROI: 3-6x within 12 months</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
          <h3 className="font-bold text-2xl mb-6 text-blue-800">Comprehensive ROI Analysis</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Get a detailed, customized ROI calculation for your specific project parameters with our comprehensive calculator.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-xl mb-3">Full ROI Calculator Includes:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Project-specific workforce modeling</li>
                <li>• Industry benchmarking data</li>
                <li>• Safety incident cost analysis</li>
                <li>• Productivity improvement metrics</li>
                <li>• Customizable time horizons</li>
                <li>• Sensitivity analysis</li>
              </ul>
            </div>
            
            <a 
              href="https://calculator.scratchie.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Open Full ROI Calculator →
            </a>
            
            <p className="text-sm text-gray-600 text-center">
              Interactive calculator with real-time results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentROISlide; 