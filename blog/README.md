# Blog Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Features

- Home page with profile, education, and resume-based experience section.
- Projects page with responsive auto-wrapping project cards.
- Project detail page for highlights and roadmap information.
- Global light/dark theme styling with shared design tokens.

## Tech Stack

- React 19
- TypeScript
- Vite
- SCSS modules
- React Router

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: type-check and build production bundle
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint

## Project Structure

- `src/home/`: home page and styles
- `src/projects/`: projects listing and project detail pages
- `src/components/`: shared UI components (`Card`, `Tag`, nav, cards)
- `src/assets/`: profile, menu, and project data
- `src/index.scss`: global theme tokens and base styles
