import { useState } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import NotesInputSection from './components/NotesInputSection';
import GenerationProgress from './components/GenerationProgress';
import EpisodePreview from './components/EpisodePreview';
import SourceMaterialPanel from './components/SourceMaterialPanel';
import { generateMockEpisode, extractKeywords } from './utils/mockData';

interface Scene {
  title: string;
  description: string;
}

interface EpisodeData {
  title: string;
  logline: string;
  topics: string[];
  scenes: Scene[];
}

function App() {
  // Input state
  const [notesText, setNotesText] = useState('');
  const [subject, setSubject] = useState('');
  const [length, setLength] = useState('medium');
  const [fileName, setFileName] = useState<string | null>(null);

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressStep, setProgressStep] = useState(1);
  const [hasResult, setHasResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Result state
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null);
  const [sourceKeywords, setSourceKeywords] = useState<string[]>([]);
  const [sourcePanelOpen, setSourcePanelOpen] = useState(false);

  /**
   * Handle the generate button click
   * Simulates the AI generation process with progress steps
   */
  const handleGenerate = () => {
    // Validation
    if (!notesText.trim()) {
      setError('Please enter some notes before generating an episode.');
      return;
    }

    if (!subject) {
      setError('Please select a subject.');
      return;
    }

    setError(null);
    setIsGenerating(true);
    setProgressStep(1);
    setHasResult(false);
    setSourcePanelOpen(false);

    // Extract keywords from the notes for the source panel
    const keywords = extractKeywords(notesText);
    setSourceKeywords(keywords);

    // Simulate progress through steps
    // Step 1: Analyzing notes (2 seconds)
    setTimeout(() => {
      setProgressStep(2);
    }, 2000);

    // Step 2: Building story (2 seconds)
    setTimeout(() => {
      setProgressStep(3);
    }, 4000);

    // Step 3: Creating episode (2 seconds), then show result
    setTimeout(() => {
      // Generate mock episode data
      // In production, this would be an API call to the AI service
      const mockData = generateMockEpisode(notesText, subject, length);
      setEpisodeData(mockData);
      
      setIsGenerating(false);
      setHasResult(true);
      
      // Scroll to result after a brief moment
      setTimeout(() => {
        const resultElement = document.getElementById('episode-result');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 6000);
  };

  /**
   * Reset the form to generate a new episode
   */
  const handleReset = () => {
    setNotesText('');
    setSubject('');
    setLength('medium');
    setFileName(null);
    setIsGenerating(false);
    setProgressStep(1);
    setHasResult(false);
    setError(null);
    setEpisodeData(null);
    setSourceKeywords([]);
    setSourcePanelOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Section 1: Introduction */}
        <IntroSection />

        {/* Section 2: Input Area */}
        {!isGenerating && !hasResult && (
          <NotesInputSection
            notesText={notesText}
            setNotesText={setNotesText}
            subject={subject}
            setSubject={setSubject}
            length={length}
            setLength={setLength}
            fileName={fileName}
            setFileName={setFileName}
            onGenerate={handleGenerate}
            error={error}
          />
        )}

        {/* Section 3: Generation Progress */}
        {isGenerating && (
          <GenerationProgress currentStep={progressStep} />
        )}

        {/* Section 4: Episode Preview */}
        {hasResult && episodeData && (
          <div id="episode-result">
            <EpisodePreview
              title={episodeData.title}
              logline={episodeData.logline}
              topics={episodeData.topics}
              scenes={episodeData.scenes}
              subject={subject}
            />

            {/* Source Material Panel */}
            <SourceMaterialPanel
              notesText={notesText}
              keywords={sourceKeywords}
              isOpen={sourcePanelOpen}
              onToggle={() => setSourcePanelOpen(!sourcePanelOpen)}
            />

            {/* Action Buttons */}
            <div className="max-w-4xl mx-auto px-6 py-8 flex gap-3 justify-center border-t border-gray-200 mt-8">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Create new episode
              </button>
              <button
                onClick={() => {
                  setHasResult(false);
                  setSourcePanelOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Edit notes & regenerate
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 mt-12 border-t border-gray-200">
        <p className="text-center text-xs text-gray-500">
          This is a frontend-only prototype. In production, AI services would be called to generate actual episodes.
        </p>
      </footer>
    </div>
  );
}

export default App;
