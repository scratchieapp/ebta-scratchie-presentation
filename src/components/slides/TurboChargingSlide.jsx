import React from 'react';

const TurboChargingSlide = () => {
  const [turboRewardBudget, setTurboRewardBudget] = React.useState(15);
  const [currentMonth, setCurrentMonth] = React.useState(2);
  
  // Bell curve workforce ramp-up (percentage of peak workforce)
  const workforceRampUp = [
    0.15, 0.25, 0.40, 0.55, 0.70, 0.80, 0.90, 0.95, 1.0, 0.95, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15
  ];
  
  const peakWorkforce = 2300;
  const platformFeePerWorker = 5; // Base platform fee
  
  const getCurrentWorkforce = (month) => Math.round(peakWorkforce * workforceRampUp[Math.min(month - 1, 15)]);
  const getCurrentTotalInvestment = (month) => {
    const workforce = getCurrentWorkforce(month);
    return workforce * (platformFeePerWorker + turboRewardBudget);
  };
  
  const currentWorkforce = getCurrentWorkforce(currentMonth);
  const monthlyTotalInvestment = getCurrentTotalInvestment(currentMonth);
  const yearlyTotalInvestment = workforceRampUp.slice(0, 12).reduce((total, percentage, index) => {
    return total + (peakWorkforce * percentage * (platformFeePerWorker + turboRewardBudget));
  }, 0);

  return (
    <div className="h-full p-12 bg-gradient-to-br from-green-50 to-emerald-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">🚀 Turbo Charging Scratchie</h2>
      
      {/* Turbo Rewards Section */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold text-2xl mb-6 text-gray-800">Multi-Stakeholder Investment Model</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Left: Stakeholder Contributions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-2 border-emerald-200">
              <h4 className="font-bold text-xl text-emerald-800 mb-4">💰 The "Cash Green" Opportunity</h4>
              <p className="text-lg text-gray-700 mb-4">When everyone contributes to safety rewards:</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">🏗️ General Contractors</span>
                  <span className="text-emerald-600 font-semibold">$3-8/worker/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">🏢 Client/Owner</span>
                  <span className="text-emerald-600 font-semibold">$5-10/worker/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">🔧 Subcontractors</span>
                  <span className="text-emerald-600 font-semibold">$2-5/worker/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-100 rounded border-2 border-emerald-300">
                  <span className="font-bold text-emerald-800">📱 Platform Fee (EBTA)</span>
                  <span className="text-emerald-600 font-bold">$5/worker/month</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Total Turbo Rewards Budget: ${turboRewardBudget + platformFeePerWorker} per worker/month
              </label>
              <p className="text-sm text-gray-600 mb-3">Adjust total contribution (Platform fee + Turbo rewards)</p>
              <input
                type="range"
                min="10"
                max="30"
                value={turboRewardBudget + platformFeePerWorker}
                onChange={(e) => setTurboRewardBudget(parseInt(e.target.value) - platformFeePerWorker)}
                className="w-full h-3 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$10</span>
                <span>$20 (Sweet Spot)</span>
                <span>$30</span>
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
          </div>
          
          {/* Right: Investment Breakdown */}
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h4 className="font-bold text-lg mb-3 text-emerald-800">Current Month Turbo Investment</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Workforce:</span>
                  <span className="font-semibold">{currentWorkforce.toLocaleString()} workers</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Platform Fee:</span>
                  <span>${(currentWorkforce * platformFeePerWorker).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Turbo Rewards:</span>
                  <span className="text-emerald-600 font-semibold">${(currentWorkforce * turboRewardBudget).toLocaleString()}</span>
                </div>
                <div className="border-t border-emerald-300 pt-2 flex justify-between font-bold text-xl">
                  <span>Total Monthly:</span>
                  <span className="text-emerald-600">${monthlyTotalInvestment.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-300">
              <h4 className="font-bold text-lg text-orange-800 mb-3">🎯 The Excitement Factor</h4>
              <div className="space-y-2 text-gray-700">
                <p>• <strong>Instant Cash Rewards:</strong> Real money, real motivation</p>
                <p>• <strong>Leaderboard Prizes:</strong> Monthly/quarterly bonuses</p>
                <p>• <strong>Family Rewards:</strong> Gift cards, experiences</p>
                <p>• <strong>Team Celebrations:</strong> Group achievements</p>
                <p>• <strong>Recognition Events:</strong> Public acknowledgment</p>
              </div>
            </div>
            
            <div className="bg-green-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-800 mb-2">Expected Engagement Boost</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">85%+</p>
                  <p className="text-sm text-gray-600">Worker participation</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">25%+</p>
                  <p className="text-sm text-gray-600">Additional safety improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Annual Summary */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-emerald-50 p-6 rounded-lg text-center border-2 border-emerald-200">
            <h4 className="font-bold text-lg text-emerald-800 mb-2">First Year Turbo Investment</h4>
            <p className="text-3xl font-bold text-emerald-600">${Math.round(yearlyTotalInvestment / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Platform + Turbo rewards</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
            <h4 className="font-bold text-lg text-green-800 mb-2">Peak Monthly Turbo</h4>
            <p className="text-3xl font-bold text-green-600">${Math.round(getCurrentTotalInvestment(9) / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">At full workforce</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center border-2 border-yellow-200">
            <h4 className="font-bold text-lg text-yellow-800 mb-2">Shared Investment</h4>
            <p className="text-3xl font-bold text-yellow-600">${Math.round((yearlyTotalInvestment - (workforceRampUp.slice(0, 12).reduce((total, percentage) => total + (peakWorkforce * percentage * platformFeePerWorker), 0))) / 4 / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Per stakeholder (4-way split)</p>
          </div>
        </div>
      </div>
      
      {/* Exponential Returns Section */}
      <div className="bg-gradient-to-r from-emerald-100 to-green-100 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-emerald-800">🚀 Exponential Returns from Turbo Investment</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">Enhanced Safety Outcomes</h4>
              <p className="text-gray-700 mb-2">30-40% incident reduction vs 15% basic</p>
              <p className="text-emerald-600 font-semibold">Potential: $800K-1.5M savings annually</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-800 mb-2">Maximum Productivity</h4>
              <p className="text-gray-700 mb-2">4hrs/supervisor/week + worker efficiency gains</p>
              <p className="text-green-600 font-semibold">Additional $300K+ in productivity</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h4 className="font-bold text-lg text-blue-800 mb-2">Cultural Transformation</h4>
              <p className="text-gray-700 mb-2">Industry-leading safety culture & retention</p>
              <p className="text-blue-600 font-semibold">Brand value + recruitment advantages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500 text-center">
              <h4 className="font-bold text-2xl text-purple-800 mb-2">Total ROI</h4>
              <p className="text-4xl font-bold text-purple-600">8-15x</p>
              <p className="text-gray-700">Investment return within 12 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurboChargingSlide; 