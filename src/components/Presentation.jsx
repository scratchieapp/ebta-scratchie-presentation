import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  TitleSlide,
  SafetyLeadershipSlide,
  OpportunitySlide,
  ScratchieOverviewSlide,
  AlignmentSlide,
  ProvenResultsSlide,
  ImplementationSlide,
  ExpansionVisionSlide,
  ScratchieBasicSlide,
  TurboChargingSlide,
  CallToActionSlide
} from './slides';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Amplifying EBTA's Safety Excellence",
      subtitle: "How Scratchie + Convo Card Aligns with Next Gear Philosophy",
      component: TitleSlide
    },
    {
      id: 2,
      title: "EBTA's Safety Leadership",
      subtitle: "Building on Your Strong Foundation",
      component: SafetyLeadershipSlide
    },
    {
      id: 3,
      title: "The Opportunity",
      subtitle: "Taking Excellence to the Next Level",
      component: OpportunitySlide
    },
    {
      id: 4,
      title: "Scratchie: Next Gear in Action",
      subtitle: "Operationalizing 'Safety is the Presence of Positives'",
      component: ScratchieOverviewSlide
    },
    {
      id: 5,
      title: "Perfect Alignment with EBTA",
      subtitle: "Amplifying Your Existing Excellence",
      component: AlignmentSlide
    },
    {
      id: 6,
      title: "Proven Construction Results",
      subtitle: "Real Impact from Australian Projects",
      component: ProvenResultsSlide
    },
    {
      id: 7,
      title: "Simple Implementation Plan",
      subtitle: "Minimal Disruption, Maximum Impact",
      component: ImplementationSlide
    },
    {
      id: 8,
      title: "Vision for North East Link",
      subtitle: "From EBTA Success to Program-Wide Impact",
      component: ExpansionVisionSlide
    },
    {
      id: 9,
      title: "Scratchie Platform Investment",
      subtitle: "Simple, Transparent Platform Fee",
      component: ScratchieBasicSlide
    },
    {
      id: 10,
      title: "Turbo Charging Scratchie",
      subtitle: "Multi-Stakeholder Investment Model",
      component: TurboChargingSlide
    },
    {
      id: 11,
      title: "Next Steps",
      subtitle: "Let's Amplify EBTA's Safety Excellence Together",
      component: CallToActionSlide
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.imgur.com/IB0wCmX.png" 
              alt="Scratchie Icon" 
              className="w-6 h-6"
            />
            <span className="font-bold text-gray-800">Scratchie for EBTA</span>
          </div>
          <span className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Full Screen */}
      <div className="flex-1 pt-16 pb-20">
        <CurrentSlideComponent />
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center fixed bottom-0 left-0 right-0 z-10">
        <button
          onClick={prevSlide}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>
        <div className="text-center">
          <p className="text-sm text-gray-600">{slides[currentSlide].subtitle}</p>
        </div>
        <button
          onClick={nextSlide}
          className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          disabled={currentSlide === slides.length - 1}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;