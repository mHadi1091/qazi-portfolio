# Qazi Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Modern glassmorphism design
- Smooth animations and transitions
- Responsive layout
- Interactive mouse tracking effects
- Contact form with validation
- Project showcase
- Skills section

## Tech Stack

- React 18
- Tailwind CSS
- Lucide React (icons)
- Custom hooks for state management

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.js
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── ProjectsSection.js
│   ├── ContactSection.js
│   ├── Footer.js
│   └── BackgroundEffects.js
├── hooks/              # Custom React hooks
│   ├── useMousePosition.js
│   └── useActiveSection.js
├── data/               # Static data
│   └── portfolioData.js
├── styles/             # Global styles
│   └── globals.css
├── Portfolio.js        # Main portfolio component
├── App.js             # App component
└── index.js           # Entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## Customization

1. Update personal information in `src/data/portfolioData.js`
2. Modify colors and styling in component files
3. Add your own projects and skills
4. Update social media links in Navigation and Contact components