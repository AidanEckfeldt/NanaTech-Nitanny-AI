/**
 * Utility functions for generating mock episode data
 * In a production version, these would be replaced with actual AI API calls
 */

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

/**
 * Extract keywords from text
 * Simple implementation: removes common words and extracts meaningful terms
 */
export function extractKeywords(text: string, maxKeywords: number = 8): string[] {
  // Common stop words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
    'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been', 'be', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
    'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
    'what', 'which', 'who', 'when', 'where', 'why', 'how', 'all', 'each', 'every', 'both',
    'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
    'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should',
    'now', 'use', 'get', 'make', 'go', 'know', 'think', 'take', 'come', 'give', 'look',
    'see', 'find', 'want', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call',
  ]);

  // Split text into words, filter and normalize
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count word frequencies
  const wordCounts: Record<string, number> = {};
  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  // Get unique keywords, sorted by frequency
  const keywords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word.charAt(0).toUpperCase() + word.slice(1));

  return keywords;
}

/**
 * Generate mock episode data based on user input
 * In production, this would call an AI service to generate actual content
 */
export function generateMockEpisode(
  notesText: string,
  subject: string,
  length: string
): EpisodeData {
  const keywords = extractKeywords(notesText, 6);
  
  // Generate title based on subject
  const title = `${subject} Adventure: The Big Discovery`;

  // Generate logline
  const logline = `Join our hero as they explore the fascinating world of ${subject.toLowerCase()} through an engaging animated story based on your study materials.`;

  // Generate scenes based on keywords and subject
  const sceneTemplates: Record<string, Scene[]> = {
    Biology: [
      { title: 'The Mysterious Process Begins', description: 'Our protagonist discovers a hidden process happening all around them, involving key biological concepts from your notes.' },
      { title: 'The Journey Through the System', description: 'Watch as characters travel through a biological system, learning about each component and how they work together.' },
      { title: 'The Great Transformation', description: 'Witness an amazing transformation that demonstrates the core principles you\'re studying.' },
      { title: 'The Discovery Unfolds', description: 'Everything comes together as our hero understands the bigger picture of how biological processes connect.' },
    ],
    Math: [
      { title: 'The Problem Appears', description: 'A challenging mathematical problem presents itself, requiring our hero to use key concepts from your notes.' },
      { title: 'Breaking It Down', description: 'Step by step, our character breaks down the problem into manageable parts, demonstrating problem-solving strategies.' },
      { title: 'The Formula Unlocked', description: 'Through exploration and discovery, the key formulas and methods reveal themselves in an intuitive way.' },
      { title: 'The Solution Revealed', description: 'Watch as all the pieces come together to solve the problem, reinforcing the mathematical principles.' },
    ],
    History: [
      { title: 'The Time Period Awakens', description: 'Travel back in time to explore the historical period and events covered in your study materials.' },
      { title: 'Key Figures Come to Life', description: 'Meet the important historical figures who shaped the events we\'re studying, seeing their motivations and actions.' },
      { title: 'Events Unfold', description: 'Witness the sequence of historical events as they happened, understanding cause and effect relationships.' },
      { title: 'The Impact Revealed', description: 'See how these historical events shaped the world we know today, connecting past to present.' },
    ],
    default: [
      { title: 'The Adventure Begins', description: 'Our hero embarks on a journey to understand key concepts from your study materials, starting with the fundamentals.' },
      { title: 'Discovering Connections', description: 'As the story progresses, connections between different concepts become clear, building understanding step by step.' },
      { title: 'Deeper Understanding', description: 'The hero delves deeper into the subject matter, exploring advanced concepts and their applications.' },
      { title: 'The Big Picture', description: 'Everything comes together as our character sees how all the pieces fit into the complete picture of the subject.' },
    ],
  };

  // Get scene template based on subject, fallback to default
  const scenes = sceneTemplates[subject] || sceneTemplates.default;

  // Adjust number of scenes based on length
  const numScenes = length === 'short' ? 3 : length === 'medium' ? 4 : 5;
  const selectedScenes = scenes.slice(0, numScenes);

  // Add keywords context to scenes if available
  if (keywords.length > 0) {
    const enrichedScenes = selectedScenes.map((scene) => ({
      ...scene,
      description: scene.description.replace(
        /key concepts|important concepts|core principles/gi,
        `concepts like ${keywords.slice(0, 2).join(' and ')}`
      ),
    }));
    return { title, logline, topics: keywords, scenes: enrichedScenes };
  }

  return { title, logline, topics: keywords.length > 0 ? keywords : ['Learning', 'Understanding', 'Application'], scenes: selectedScenes };
}
