import React from 'react';

interface GenerationProgressProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: 'Analyzing your notes' },
  { id: 2, label: 'Building a story' },
  { id: 3, label: 'Creating your episode' },
];

const GenerationProgress: React.FC<GenerationProgressProps> = ({ currentStep }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-base font-medium text-gray-900 mb-8">
          Generating episode
        </h2>
        
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isComplete = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex items-center gap-4">
                {/* Step Indicator */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                      isComplete
                        ? 'bg-gray-900 text-white'
                        : isActive
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {isComplete ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                </div>
                
                {/* Step Label */}
                <div className="flex-1">
                  <h3
                    className={`text-sm font-medium transition-colors ${
                      isActive || isComplete ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </h3>
                  {isActive && (
                    <div className="mt-2 flex gap-1">
                      <div className="w-1 h-1 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-1 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 h-1 bg-gray-900 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GenerationProgress;
