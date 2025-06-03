import React from 'react';

const TurboChargingSlide = () => {
  const [monthlyContributions, setMonthlyContributions] = React.useState(5000);
  const [currentMonth, setCurrentMonth] = React.useState(2);
  const [enableWeeklyPrizes, setEnableWeeklyPrizes] = React.useState(true);
  const [enableMonthlyPrize, setEnableMonthlyPrize] = React.useState(true);
  const [weeklyPrizeAmount, setWeeklyPrizeAmount] = React.useState(100);
  const [monthlyPrizeAmount, setMonthlyPrizeAmount] = React.useState(1000);
  
  // Bell curve workforce ramp-up (percentage of peak workforce)
  const workforceRampUp = [
    0.15, 0.25, 0.40, 0.55, 0.70, 0.80, 0.90, 0.95, 1.0, 0.95, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15
  ];
  
  const peakWorkforce = 2300;
  
  const getCurrentWorkforce = (month) => Math.round(peakWorkforce * workforceRampUp[Math.min(month - 1, 15)]);
  
  // Calculate reward breakdown
  const getRewardBreakdown = (contributions) => {
    const transactionFee = contributions * 0.05; // Hidden from UI
    const monthlyPrize = enableMonthlyPrize ? monthlyPrizeAmount : 0;
    const weeklyPrizes = enableWeeklyPrizes ? (4 * weeklyPrizeAmount) : 0;
    const remaining = contributions - transactionFee - monthlyPrize - weeklyPrizes;
    
    // Distribute remaining equally across three tiers by value
    const tierValue = Math.max(0, remaining / 3);
    const scratchies10 = Math.floor(tierValue / 10);
    const scratchies20 = Math.floor(tierValue / 20);
    const scratchies50 = Math.floor(tierValue / 50);
    
    return {
      transactionFee,
      monthlyPrize,
      weeklyPrizes,
      remaining: Math.max(0, remaining),
      scratchies10,
      scratchies20,
      scratchies50
    };
  };
  
  const currentWorkforce = getCurrentWorkforce(currentMonth);
  const breakdown = getRewardBreakdown(monthlyContributions);
  const yearlyContributions = monthlyContributions * 12;

  return (
    <div className="h-full p-12 bg-gradient-to-br from-green-50 to-emerald-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">🚀 Turbo Charging Scratchie</h2>
      
      {/* Turbo Enhancement Section */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold text-2xl mb-6 text-gray-800">Optional Enhancement - Subcontractor Safety Sponsorship</h3>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Left: The Opportunity */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-xl text-green-800 mb-4">💡 The Enhancement Opportunity</h4>
              <p className="text-lg text-gray-700 mb-4">Scratchie works perfectly at $5/worker/month, but gets exciting when subcontractors contribute:</p>
              
              <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-emerald-800 font-semibold mb-2">✓ Tax Deductible as "Safety Sponsorship"</p>
                <p className="text-sm text-gray-600">ATO recognizes these contributions as legitimate business expenses</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">🏗️ Large Subcontractor</span>
                  <span className="text-green-600 font-semibold">$2,000/month <span className="text-xs text-gray-500">(suggested)</span></span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">🔧 Medium Subcontractor</span>
                  <span className="text-green-600 font-semibold">$1,000/month <span className="text-xs text-gray-500">(suggested)</span></span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-medium text-gray-700">⚡ Small Subcontractor</span>
                  <span className="text-green-600 font-semibold">$500/month <span className="text-xs text-gray-500">(suggested)</span></span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3 italic">All contributions are completely voluntary and can be negotiated based on subcontractor capacity</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-lg text-green-800 mb-3">🤝 Scratchie Support</h4>
              <p className="text-gray-700 mb-2">We help facilitate these conversations:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business case templates for subcontractors</li>
                <li>• ATO compliance documentation</li>
                <li>• Contribution negotiation support</li>
                <li>• Flexible participation models</li>
              </ul>
            </div>
          </div>
          
          {/* Right: Dynamic Reward Calculator */}
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h4 className="font-bold text-lg mb-4 text-emerald-800">🎮 Interactive Turbo Scratchie Calculator</h4>
              
              {/* Contribution Slider */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  Monthly Contributions: ${monthlyContributions.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="500"
                  value={monthlyContributions}
                  onChange={(e) => setMonthlyContributions(parseInt(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$7.5K</span>
                  <span>$15K</span>
                </div>
              </div>
              
              {/* Prize Options */}
              {monthlyContributions > 0 && (
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enableMonthlyPrize}
                        onChange={(e) => setEnableMonthlyPrize(e.target.checked)}
                        className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="font-medium text-gray-700">Monthly Grand Prize</span>
                    </div>
                    {enableMonthlyPrize && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">$</span>
                        <input
                          type="range"
                          min="500"
                          max="2000"
                          step="100"
                          value={monthlyPrizeAmount}
                          onChange={(e) => setMonthlyPrizeAmount(parseInt(e.target.value))}
                          className="w-20 h-2 bg-purple-300 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-purple-600 font-semibold w-12">${monthlyPrizeAmount}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enableWeeklyPrizes}
                        onChange={(e) => setEnableWeeklyPrizes(e.target.checked)}
                        className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="font-medium text-gray-700">Weekly Prizes (4x)</span>
                    </div>
                    {enableWeeklyPrizes && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">$</span>
                        <input
                          type="range"
                          min="50"
                          max="250"
                          step="25"
                          value={weeklyPrizeAmount}
                          onChange={(e) => setWeeklyPrizeAmount(parseInt(e.target.value))}
                          className="w-20 h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-blue-600 font-semibold w-12">${weeklyPrizeAmount}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-lg text-green-800 mb-3">🎯 Available Turbo Scratchies</h4>
              {breakdown.remaining > 0 ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded border border-green-200">
                    <span className="font-medium text-gray-700">💵 $10 Turbo Scratchies</span>
                    <span className="text-green-600 font-bold">{breakdown.scratchies10}x available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded border border-green-200">
                    <span className="font-medium text-gray-700">💰 $20 Turbo Scratchies</span>
                    <span className="text-green-600 font-bold">{breakdown.scratchies20}x available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded border border-green-200">
                    <span className="font-medium text-gray-700">🏆 $50 Turbo Scratchies</span>
                    <span className="text-green-600 font-bold">{breakdown.scratchies50}x available</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Random distribution to all {currentWorkforce.toLocaleString()} eligible workers</p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500">Set contributions above to see available Turbo Scratchies</p>
                </div>
              )}
            </div>
            
            {monthlyContributions > 0 && (
              <div className="bg-green-100 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-green-800 mb-2">Expected Enhancement</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">90%+</p>
                    <p className="text-sm text-gray-600">Worker participation</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">30%+</p>
                    <p className="text-sm text-gray-600">Additional engagement</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Project Month Slider */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Project Month: {currentMonth} ({currentWorkforce.toLocaleString()} estimated workers eligible for draws)
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
        
        {/* Annual Summary */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
            <h4 className="font-bold text-lg text-green-800 mb-2">Annual Contributions</h4>
            <p className="text-3xl font-bold text-green-600">${Math.round(yearlyContributions / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">From participating subcontractors</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg text-center border-2 border-emerald-200">
            <h4 className="font-bold text-lg text-emerald-800 mb-2">Total Prizes</h4>
            <p className="text-3xl font-bold text-emerald-600">{((breakdown.scratchies10 + breakdown.scratchies20 + breakdown.scratchies50) + (enableWeeklyPrizes ? 4 : 0) + (enableMonthlyPrize ? 1 : 0)) * 12}</p>
            <p className="text-sm text-gray-600 mt-1">Turbo Scratchies + Grand Prizes per year</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
            <h4 className="font-bold text-lg text-green-800 mb-2">Tax Benefit</h4>
            <p className="text-3xl font-bold text-green-600">${Math.round(yearlyContributions * 0.3 / 1000)}K</p>
            <p className="text-sm text-gray-600 mt-1">Estimated tax savings (30%)</p>
          </div>
        </div>
      </div>
      
      {/* Key Message Section */}
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-2xl mb-6 text-green-800">🎯 The Perfect Position</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-800 mb-2">Great if We Can</h4>
              <p className="text-gray-700">Subcontractor contributions create exciting cash prizes and dramatically boost engagement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800 mb-2">No Problem if We Can't</h4>
              <p className="text-gray-700">Scratchie + Convo Cards deliver excellent results at just $5/worker/month</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
              <h4 className="font-bold text-lg text-green-700 mb-2">Win-Win for Subcontractors</h4>
              <p className="text-gray-700 mb-2">Tax deductible safety investment that improves their workforce safety culture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-600 text-center">
              <h4 className="font-bold text-2xl text-emerald-700 mb-2">Enhanced ROI</h4>
              <p className="text-4xl font-bold text-emerald-600">15-25x</p>
              <p className="text-gray-700 mb-3">When turbo charged with contributions</p>
              <a 
                href="https://calculator.scratchie.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Full ROI Calculator →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurboChargingSlide; 