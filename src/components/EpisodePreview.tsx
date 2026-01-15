import React from 'react';

interface Scene {
  title: string;
  description: string;
}

interface EpisodePreviewProps {
  title: string;
  logline: string;
  topics: string[];
  scenes: Scene[];
  subject: string;
}

const EpisodePreview: React.FC<EpisodePreviewProps> = ({
  title,
  logline,
  topics,
  scenes,
}) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-base font-medium text-gray-900 mb-8">Episode ready</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Episode Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{logline}</p>
            </div>

            {/* Key Topics */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Topics covered</h4>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Story Outline */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">Story outline</h4>
              <div className="space-y-3">
                {scenes.map((scene, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-4 py-1">
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      Scene {index + 1}: {scene.title}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{scene.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Video Player Mock */}
          <div className="flex flex-col">
            <div className="bg-gray-100 rounded-lg overflow-hidden flex-1 min-h-[400px] flex items-center justify-center relative border border-gray-200">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <svg
                    className="w-5 h-5 text-gray-900 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Preview Text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs font-medium text-gray-700">Episode preview</p>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-600 py-2">
              <span>Episode length: ~5 minutes</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                Ready to watch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodePreview;
