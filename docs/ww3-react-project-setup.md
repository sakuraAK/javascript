# Setup: First React Project Using Vite (One Page Guide)

## Requirements
- Node.js 18+ or 20+ (check: `node -v`)
- Terminal (Mac/Linux Terminal or Windows Terminal/PowerShell)
- Code editor (VS Code recommended)

---

## 1) Create the Project

JavaScript:
    npm create vite@latest my-react-app -- --template react

TypeScript (optional):
    npm create vite@latest my-react-app -- --template react-ts

Then:
    cd my-react-app
    npm install

---

## 2) Start the Development Server

    npm run dev

Open the URL (usually http://localhost:5173)

---

## 3) Project Structure (Key Files)

- index.html → main app HTML
- src/main.jsx → React entry point (mounts App)
- src/App.jsx → root component
- public/ → static assets

---

## 4) VS Code Setup (Recommended)

Extensions:
- ESLint
- Prettier
- React Snippets (optional)

Enable format on save:
    "editor.formatOnSave": true

---

## 5) Create Your First Component

File: src/components/Greeting.jsx

    export default function Greeting({ name }) {
      return <h1>Hello, {name}!</h1>;
    }

Update src/App.jsx:

    import Greeting from './components/Greeting';
    export default function App() {
      return <Greeting name="Student" />;
    }

---

## 6) Build for Production

    npm run build

Preview production build:
    npm run preview

---

## 7) Optional Add-Ons

### React Router:
    npm install react-router-dom

### Tailwind CSS:
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

Add to index.css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

---

## 8) Basic Troubleshooting

- If dev server fails: ensure correct Node version.
- If UI doesn’t update: check console for component errors.
- If JSX errors: ensure file extension is .jsx or .tsx.

---

## Command Cheat Sheet

Create:
    npm create vite@latest my-react-app -- --template react
Run Dev:
    npm run dev
Build:
    npm run build
Preview:
    npm run preview

