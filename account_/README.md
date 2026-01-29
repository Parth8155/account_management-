# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

## React Interns Interview Practical

This repository contains a small React application built for the React internship practical (REACTIIP01002). The app demonstrates a minimal account management flow with register, login, and an account edit page.

Key details:
- Uses Vite + React
- Uses Bootstrap 5 for basic styling
- Authentication is simulated with `localStorage` (no backend)

Getting started:

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Notes:
- This implementation is intentionally simple and readable — it is meant for evaluation during the interview practical. Passwords are stored in `localStorage` for the exercise only (not for production).
- See `src/utils/auth.js` for the small client-side auth helpers.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
