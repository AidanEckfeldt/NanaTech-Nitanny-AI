import React from 'react';

interface SourceMaterialPanelProps {
  notesText: string;
  keywords: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const SourceMaterialPanel: React.FC<SourceMaterialPanelProps> = ({
  notesText,
  keywords,
  isOpen,
  onToggle,
}) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        {/* Collapsible Header */}
        <button
          onClick={onToggle}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <svg
              className={`w-4 h-4 text-gray-500 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
            <h3 className="text-sm font-medium text-gray-900">Source material</h3>
          </div>
          <span className="text-xs text-gray-500">
            {isOpen ? 'Hide' : 'Show'} original notes
          </span>
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="px-4 pb-4 border-t border-gray-200">
            {/* Detected Keywords */}
            {keywords.length > 0 && (
              <div className="mt-4 mb-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Detected keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Original Notes */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Original notes</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-3 max-h-64 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-xs text-gray-700 font-mono leading-relaxed">
                  {notesText || 'No notes provided'}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SourceMaterialPanel;
