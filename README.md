# Personal Portfolio

A modern, single-page personal portfolio built with React + Vite. It presents experience, projects, and technical stack with animated sections and a clean, production-ready layout.

## What This Project Is About

This is a personal portfolio site focused on showcasing professional experience, technical skills, and project work in a fast, responsive UI.

## Highlights

- Motion-based section reveals and subtle animations
- Responsive layout with Tailwind CSS styling
- Project cards link out to GitHub repositories
- Content is centralized in a single source file for quick edits

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

## Local Development

Prerequisites: Node.js (LTS recommended)

Direct npm workflow:

1. Install dependencies:
  ```bash
  npm install
  ```
2. Run the dev server:
  ```bash
  npm run dev
  ```
3. Open the app at http://localhost:3000

Containerized workflow (Docker):

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```

Open the app at http://localhost:8080

## Build and Preview (Local)

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. Set the Vite base path in vite.config.ts to your repo name:
  ```ts
  export default defineConfig({
    base: "/<your-repo-name>/",
    // ...rest of config
  });
  ```
2. Build the site:
  ```bash
  npm run build
  ```
3. Publish the dist/ folder to GitHub Pages.

You can publish using either:

- GitHub Actions (recommended) to deploy dist/ on every push, or
- A gh-pages branch by committing the dist/ output to it.

## Updating Content

- Main content lives in [src/App.tsx](src/App.tsx)
- Replace images by updating imports or files in the images/ folder
- Project links are defined in the Projects section data
