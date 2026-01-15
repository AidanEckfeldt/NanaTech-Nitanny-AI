import React from 'react';

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-base font-medium text-gray-900 mb-8">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Upload Study Material</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Paste your notes or upload a file with your study content
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Transform Content</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your notes are transformed into an animated story episode
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Watch and Learn</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enjoy your personalized animated episode that makes learning engaging
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
