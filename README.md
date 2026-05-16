<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Personal Portfolio

A modern, single-page personal portfolio built with React + Vite. The site highlights experience, projects, and technical stack with animated sections and a clean, production-ready layout.

## Features

- Animated sections and reveal effects powered by Motion
- Responsive layout with Tailwind CSS styling
- Project cards that open GitHub repositories in a new tab
- Modular content in a single source file for quick edits

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS 4
- Motion (animation)
- Lucide React (icons)

## Project Structure

```
.
images/           # Static images used by the UI
src/
  App.tsx         # Main content and sections
  index.css       # Global styles
  main.tsx        # App entry point
```

## Getting Started

Prerequisites: Node.js (LTS recommended)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open the app at http://localhost:3000

## Build and Preview

```bash
npm run build
npm run preview
```

## Updating Content

- Main content lives in [src/App.tsx](src/App.tsx)
- Replace images by updating imports or files in the images/ folder
- Project links are defined in the Projects section data
