# NanaTech — Simplified Smartphone Assistant for Seniors

A conversational layer that lets older adults use technology without menus, typing, or confusion.

## 🚀 Overview

Many seniors struggle with smartphones — small text, complex menus, too many apps, and physical limitations like tremors or arthritis. EASY AI replaces traditional navigation with a single AI-controlled interface powered by voice.

**Just speak. The phone does the rest.**

The system supports essential daily tasks, protects users from scams, and allows family members to remotely assist when needed.

## 🎯 Mission Statement

To empower seniors and individuals with physical limitations by turning modern smartphones into simple, intuitive, voice-first devices — restoring confidence, independence, and connection with family.

## 📱 Core Features (MVP)

### 1. Voice-First Control

- One tap to speak, no menus
- Large buttons, large text, high contrast
- Spoken and on-screen confirmations

### 2. Daily Actions

- Send & receive texts
- Read texts aloud
- Make and receive calls
- Send voice-driven emails
- Adjust settings
  - Volume
  - Brightness
  - Wi-Fi & Bluetooth toggles

### 3. Helpful Navigation

- Directions
- "Who called me?"
- "Read my last message"

### 4. Physical Accessibility

Mode tailored for:

- Tremors
- Arthritis
- Parkinson's
- Stroke recovery

Includes:

- Oversized UI
- Dictation-only input
- Avoids swiping/typing entirely

## 👪 Family & Trusted Helper Support

### Why Family Access Matters

Many seniors need occasional help — forgetting passwords, missing notifications, or getting stuck navigating apps. EASY AI allows trusted relatives to help without physically being there.

### Levels of Assistant Access

**View Only**

- Battery level
- Missed calls / unread messages count

**Remote Assist (MVP)**

- Send texts on senior's behalf
- Turn volume/brightness up
- Trigger call reminders
- Send message reply suggestions

**Full Remote Control (Future)**

- Screen mirroring
- Interactive touch control
- Always clearly indicated to the senior

All actions are transparent and logged, maintaining user dignity and safety.

## 🔐 Safety & Consent

- Seniors manually approve helpers
- Family added via one-time pairing code
- Clear permissions toggles:
  - View status
  - Assist calls/messages
  - Adjust device settings
  - Optional location sharing
- Every remote action displays a banner:
  - "Emily is helping you right now."
- Stop Help button instantly ends remote control

## 🧩 System Components (High-Level)

### Senior App

Runs on the user's phone:

- Voice commands
- Oversized UI
- Prompts + confirmations
- Handles calls/messages/settings

### Family App / Web Portal

Used by trusted helpers:

- Simple dashboard
- Status indicators
- Assist UI for replies/calls/settings
- Secure role permissions

### AI Layer

- Speech → Text
- Intent → Actions
- Natural confirmations
- Optional device-side processing for safety

## 🛠️ Proposed Tech Stack (Flexible)

*Not required for prototype — included for future planning*

| Component | Possible Tech |
|-----------|---------------|
| Frontend UI | Flutter / React Native |
| Speech Recognition | Whisper, iOS/Android API |
| Intent Routing | LLM (GPT), or fine-tuned model |
| Phone Actions | OS APIs (Contacts, Calls, SMS, Settings) |
| Family Portal | React + Firebase or Supabase |
| Security | One-time pairing code, permissions flags |

## 🎨 Design Guidelines (for Figma)

- One giant action button per screen
- Never more than 3–4 options
- No long scrolls
- Icons + text reinforcement
- High contrast colors (navy, black, white)
- Always provide spoken + visual feedback

### Figma Screens to Build

- Welcome / Onboarding
- Add Trusted Helper (pairing code)
- Home Screen — Speak Button
- Listening / Processing UI
- Confirm Action UI
- Messages (simplified)
- Settings (volume/brightness toggles only)
- Family Dashboard
- Remote Assist Send-Text Flow
- Permission Management

## 🧱 Phase Roadmap

### Phase 1 — Figma Prototype

- UI for senior app
- UI for family app
- UX flow diagrams
- Pitch deck

### Phase 2 — Proof of Concept

- Voice command recognition
- Routing to SMS/Call API
- Basic remote assist via push or webhook

### Phase 3 — Production

- Full permissions system
- Robust security and auditing
- Offline fallback AI

## 🌟 Why This Matters

### Seniors:

- Stay independent longer
- Avoid technology frustration
- Stay connected with family
- Reduce loneliness and isolation

### Families:

- Worry less
- Can help instantly without driving over
- Keep their loved ones safe and reachable

### Healthcare + Social Impact:

- Supports aging-in-place
- Reduces caregiver burden
- Scales to millions across the world

## 🤝 Team + Challenge Focus

This project is built for a social impact challenge with an AI-first approach. We aim to show:

- Empathy-driven UX
- Real-world utility
- Extendability beyond the hackathon
- Clear path from prototype → MVP → real users

## 📬 Want to Contribute?

Open issues for:

- UX ideas
- Accessibility needs
- Remote assist experiences
- Safety concerns
- Legal/regulatory prep
