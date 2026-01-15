# 📚 AI-Powered Study Video Generator

Turn your class notes into fun, animated lessons.

## 📌 Overview

This project transforms real classroom materials—notes, study guides, review packets, and slides—into short, engaging cartoon-style videos designed to help students understand and retain key concepts.

Instead of reading through dozens of pages before a test, students get a custom AI-generated lesson crafted specifically from the material their teacher provided.

**Upload your notes. Generate an episode. Learn through storytelling.**

## 🎯 Mission

Make studying more engaging, less overwhelming, and way more effective.

Education often feels:
- Boring
- Dense
- Hard to focus on
- Time-consuming

This tool flips studying upside down by converting traditional text-based materials into a visual, story-driven learning experience.

## 🧠 Core Idea

Upload any study material → Get back an animated teaching video tailored to your exam content.

The system extracts what matters, explains it in simple terms, and delivers it like a cartoon lesson — fun, memorable, and easy to follow.

## ✨ Features

### Current Features

- **Note Input**: Paste study materials or upload files (.txt, .doc, .docx, .pdf, .md)
- **Subject Selection**: Choose from Biology, Math, History, Chemistry, Physics, English, or Other
- **Episode Length**: Configure target episode duration (Short: 3 min, Medium: 5 min, Long: 8 min)
- **Episode Preview**: View generated episode structure with scenes, topics, and story outline
- **Source Material Review**: Access original notes and detected keywords

### UI Design

The application features a clean, minimal design inspired by Notion, Linear, Vercel, and Stripe:
- Clean white backgrounds with subtle borders
- Minimal color palette (grays and black accents)
- Professional typography and spacing
- Simple, intuitive interface

### MVP Features (Planned)

✔️ **Upload Class Material**

Students can upload:
- PDFs
- Writeups
- Slides
- Review packets
- Typed notes

✔️ **Intelligent Study Extraction**

The AI:
- Reads and understands the uploaded files
- Detects important topics, definitions, formulas, and themes
- Removes filler and duplicate information
- Prioritizes what is most likely to be on a test

✔️ **Structured Teaching Plan**

The system converts raw info into a clear lesson format:
- Organized outline
- Major concepts explained simply
- Examples and model answers (if relevant)
- Common mistakes to avoid
- End-of-lesson summary

✔️ **Animated Lesson Generation**

The platform writes and generates:
- A friendly, conversational teaching script
- Scene-based 2D animation with simple characters
- Voice narration synced to visuals
- On-screen captions + key callouts

Result: A fun video that teaches the student only what they need to know.

## 🛠️ Tech Stack

### Current Implementation

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React DOM** - Rendering

### Proposed Tech Stack (Future)

**AI Systems**
- OCR to extract text from uploads
- LLM-based summarization + topic modeling
- Script generation + rewriting
- TTS for natural synthetic voiceover

**Video Engine**
- Simple 2D characters
- Scene templates and backgrounds
- Motion timing synced to narration
- Text overlays and highlights

**Frontend**
- File upload flow
- Progress indicator
- Video viewer + download
- Optional user login profiles

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AidanEckfeldt/Nitanny-AI.git
cd Nitanny-AI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
Nitanny-AI/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── IntroSection.tsx
│   │   ├── NotesInputSection.tsx
│   │   ├── GenerationProgress.tsx
│   │   ├── EpisodePreview.tsx
│   │   └── SourceMaterialPanel.tsx
│   ├── utils/            # Utility functions
│   │   └── mockData.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🎯 Current Status

This is a frontend prototype that demonstrates the UI and user flow. The generation process currently uses mock data to simulate AI-powered episode creation.

### Next Steps

- [ ] Integrate with AI service for actual episode generation
- [ ] Add video/animation rendering
- [ ] Implement user authentication
- [ ] Add episode saving and history
- [ ] Create episode sharing functionality
- [ ] OCR for PDF/image extraction
- [ ] TTS integration for voiceover
- [ ] Animation pipeline

## 👥 Who It Helps

- Middle school, high school, and college students
- Busy learners who cram before tests
- Teachers who want to make lessons more engaging
- Parents supporting at-home study
- Students with ADHD or learning differences
- Homeschool networks & tutoring centers

## 🧭 Future Expansion Ideas

- Character selection
- Multiple voices / personalities
- Interactive quiz segments
- Teacher dashboards
- Class note libraries
- Support for multi-file input
- Subject-specific optimizations
- Gamification and rewards
- Mobile app
- Shared study pools between students

## 💡 Big Picture Vision

Learning should feel:
- Fun
- Personalized
- Easier to digest
- Built for how students actually pay attention

This project aims to turn studying into something that feels like entertainment — without losing rigor or accuracy.

## ⚠️ Licensing + Safety

- All visuals and voices must be original or licensed
- No copyrighted characters or voices from shows or movies
- Uploaded notes must be handled securely and privately
- Educational use first, commercial use later

## 🤝 Contributing

This is an evolving early-stage concept. Open to collaborators interested in:
- Machine learning
- Animation pipelines
- UI/UX design
- Curriculum design
- Education-forward product thinking

Pull requests welcome!

## 📝 License

ISC

## 📬 Contact

Open an issue or comment in discussions if you:
- Want to contribute
- Have feature ideas
- Want to join development

For questions or feedback, please open an issue on GitHub.
