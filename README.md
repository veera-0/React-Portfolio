# Veera Anjaneyulu's Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**. This site showcases projects, skills, education, and provides access to a downloadable resume.

## Features

- **Single Page Application** with React Router
- **Responsive Design** for desktop and mobile
- **Project Gallery** with images and links to code
- **Skills Section** with icons
- **About Me** timeline with education history
- **Resume Preview** (modal) and download
- **External Badges** (Credly)
- **Footer** with social/contact links

## Demo

![Portfolio Screenshot](src/assets/images/bglogo.jpg) <!-- Replace with an actual screenshot if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

### Building for Production

```sh
npm run build
```
The production-ready files will be in the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
.
├── public/
│   └── resume/
│       ├── pdf.worker.js
│       └── VelpuriAnjaneyulu.pdf
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── resume/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── main/
│   │   │   ├── About/
│   │   │   └── skills/
│   │   └── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Key Files

- [`src/App.jsx`](src/App.jsx): Main app component, sets up routing.
- [`src/components/header/Headers.jsx`](src/components/header/Headers.jsx): Navigation bar and sidebar.
- [`src/components/main/Main.jsx`](src/components/main/Main.jsx): Hero section with resume preview/download.
- [`src/components/main/skills/Skills.jsx`](src/components/main/skills/Skills.jsx): Skills grid.
- [`src/components/main/About/About.jsx`](src/components/main/About/About.jsx): About me and education timeline.
- [`src/components/pages/Project.jsx`](src/components/pages/Project.jsx): Project gallery.
- [`src/components/pages/Badges.jsx`](src/components/pages/Badges.jsx): Redirects to Credly badges.
- [`src/components/footer/Footer.jsx`](src/components/footer/Footer.jsx): Social/contact links.

## Customization

- **Projects:** Edit [`src/components/pages/Project.jsx`](src/components/pages/Project.jsx) and [`src/components/main/ProjectMain.jsx`](src/components/main/ProjectMain.jsx).
- **Skills:** Edit [`src/components/main/skills/Skills.jsx`](src/components/main/skills/Skills.jsx).
- **About/Education:** Edit [`src/components/main/About/About.jsx`](src/components/main/About/About.jsx).
- **Resume:** Replace `src/assets/resume/Velpuri Anjaneyulu.pdf` and `src/assets/resume/resume_pic.png` with your own files.
- **Social Links:** Update URLs in [`src/components/footer/Footer.jsx`](src/components/footer/Footer.jsx).

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-modal](https://github.com/reactjs/react-modal)
- [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline)
- [@react-pdf-viewer/core](https://react-pdf-viewer.dev/) (installed, not currently used)
- [@react-pdf/renderer](https://react-pdf.org/) (installed, not currently used)
- [react-pdf](https://github.com/wojtekmaj/react-pdf) (installed, not currently used)

## Linting

Run ESLint to check code quality:
```sh
npm run lint
```

## Deployment

The project is ready for static hosting (e.g., Netlify, Vercel, GitHub Pages). The `vite.config.js` is set to include PDF assets.


**Author:** Veera Venkata Anjaneyulu Velpuri

For any questions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/anjaneyulu-velpuri/)