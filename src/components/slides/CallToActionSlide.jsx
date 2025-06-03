import React from 'react';

const CallToActionSlide = () => (
  <div className="h-full p-12 bg-gradient-to-br from-blue-50 to-orange-50">
    <div className="bg-gradient-to-r from-blue-100 to-green-100 p-10 rounded-2xl shadow-lg text-center mb-10">
      <h2 className="text-5xl font-bold mb-6">Ready to Take Safety to the Next Level?</h2>
      <p className="text-2xl">Join leading construction companies already transforming their safety culture</p>
    </div>
    <div className="grid grid-cols-3 gap-8 mb-10">
      <div className="bg-white/90 backdrop-blur border-4 border-blue-200 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
        <div className="text-5xl font-bold text-blue-600 mb-4">1</div>
        <h4 className="font-bold text-xl mb-3">Schedule Demo</h4>
        <p className="text-lg text-gray-700">See Scratchie in action with your team</p>
        <p className="text-base mt-3 text-blue-600 font-medium">30-minute session</p>
      </div>
      <div className="bg-white/90 backdrop-blur border-4 border-green-200 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
        <div className="text-5xl font-bold text-green-600 mb-4">2</div>
        <h4 className="font-bold text-xl mb-3">Pilot Program</h4>
        <p className="text-lg text-gray-700">4-week trial on Bulleen interchange</p>
        <p className="text-base mt-3 text-green-600 font-medium">200 workers to start</p>
      </div>
      <div className="bg-white/90 backdrop-blur border-4 border-orange-200 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
        <div className="text-5xl font-bold text-orange-600 mb-4">3</div>
        <h4 className="font-bold text-xl mb-3">Full Rollout</h4>
        <p className="text-lg text-gray-700">Scale across all EBTA works</p>
        <p className="text-base mt-3 text-orange-600 font-medium">2,300 workers engaged</p>
      </div>
    </div>
    <div className="bg-yellow-100/80 backdrop-blur p-8 rounded-xl shadow-lg">
      <h3 className="font-bold text-3xl mb-6 text-center">Contact Information</h3>
      <div className="text-center">
        <p className="text-2xl mb-3">Garry Mansfield, Co-Founder & COO</p>
        <p className="text-xl text-blue-600 mb-2">garry@scratchie.com</p>
        <p className="text-xl text-gray-700">0414 228 820</p>
        <div className="mt-8 pt-8 border-t-2 border-yellow-300">
          <p className="font-bold text-xl mb-3">Already Using Scratchie:</p>
          <p className="text-lg text-gray-700">McDonald's • Toll Group • Richard Crookes • John Holland</p>
        </div>
      </div>
    </div>
  </div>
);

export default CallToActionSlide; 