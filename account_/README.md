# React + Vite — Account App

Minimal React application scaffolded with Vite. This project implements a tiny account management flow (register, login, edit) intended for learning and interview practicals.

Built with:
- Vite + React
- Bootstrap 5 for simple UI

Key points
- Authentication is simulated client-side using `localStorage` — this is for demonstration only and NOT secure for production.
- The authentication helpers live in `src/utils/auth.js`.

Quick Start

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open the app in your browser (Vite will show the URL, usually `http://localhost:5173`).

Available scripts (package.json)
- `dev` — run the Vite dev server with HMR
- `build` — produce a production build
- `preview` — preview the production build locally

Project structure (important files)
- `index.html` — app entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main application component
- `src/pages/` — `Login.jsx`, `Register.jsx`, `Account.jsx` (page components)
- `src/components/NavBar.jsx` — navigation
- `src/utils/auth.js` — client-side auth helpers (register/login/logout; persists to `localStorage`)

Authentication (notes)
- This app simulates authentication by saving a user record and an auth token to `localStorage`.
- Passwords are stored in plain text here for simplicity — do not do this in real apps.
- The flows implemented: register, login, logout, and simple protected-account editing.

Security & production notes
- Replace the client-only auth with a real backend and use secure storage for tokens (HTTP-only cookies or secure storage on the client with proper protections).
- Never store passwords in `localStorage` or plain text in any real product.


