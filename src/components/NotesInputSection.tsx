import React from 'react';

interface NotesInputSectionProps {
  notesText: string;
  setNotesText: (text: string) => void;
  subject: string;
  setSubject: (subject: string) => void;
  length: string;
  setLength: (length: string) => void;
  fileName: string | null;
  setFileName: (fileName: string | null) => void;
  onGenerate: () => void;
  error: string | null;
}

const NotesInputSection: React.FC<NotesInputSectionProps> = ({
  notesText,
  setNotesText,
  subject,
  setSubject,
  length,
  setLength,
  fileName,
  setFileName,
  onGenerate,
  error,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, we would read the file content here
      // For this demo, we just show the filename
      setFileName(file.name);
    }
  };

  const isGenerateDisabled = !notesText.trim() || !subject;

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <div className="space-y-8">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Upload file
            <span className="text-gray-400 font-normal ml-1">(optional)</span>
          </label>
          <div className="flex items-center gap-3">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".txt,.doc,.docx,.pdf,.md"
                onChange={handleFileUpload}
              />
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Choose file
              </span>
            </label>
            {fileName && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{fileName}</span>
                <button
                  onClick={() => setFileName(null)}
                  className="text-gray-400 hover:text-gray-600 ml-1"
                  type="button"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Text Area */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-900 mb-2">
            Paste your notes
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="notes"
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Paste your study notes here... For example: 'Photosynthesis is the process by which plants convert sunlight into energy. It requires water, carbon dioxide, and chlorophyll.'"
            className="w-full h-48 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 resize-y bg-white"
          />
          <p className="mt-2 text-xs text-gray-500">
            {notesText.length} characters
          </p>
        </div>

        {/* Subject and Length Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
              Subject
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 bg-white"
            >
              <option value="">Select a subject</option>
              <option value="Biology">Biology</option>
              <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Physics">Physics</option>
              <option value="English">English</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="length" className="block text-sm font-medium text-gray-900 mb-2">
              Target length
            </label>
            <select
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 bg-white"
            >
              <option value="short">Short: 3 min</option>
              <option value="medium">Medium: 5 min</option>
              <option value="long">Long: 8 min</option>
            </select>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={isGenerateDisabled}
          className={`w-full py-2.5 px-4 text-sm font-medium rounded-md transition-colors ${
            isGenerateDisabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          Generate episode
        </button>
      </div>
    </section>
  );
};

export default NotesInputSection;
