# NexHire — AI Mock Interview

> A modern AI-powered mock interview web app built with Vite, React, and TypeScript.

NexHire provides a polished UI to practice interview questions, record answers, and get AI-generated feedback and prompts. It's designed as a developer-friendly starter that integrates speech, webcam recording, Firebase persistence, and Google Generative AI.

## Features

- AI-driven question generation and conversational sessions (Google Generative AI).
- Record video answers using `react-webcam` and capture speech input.
- User authentication via Clerk.
- Save and retrieve sessions using Firebase Firestore.
- Clean, responsive UI built with Tailwind CSS and accessible Radix UI primitives.

## Tech Stack

- Frontend: React 18 + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS
- AI: `@google/generative-ai` (Gemini model usage)
- Auth: Clerk (`@clerk/clerk-react`)
- Persistence: Firebase (Firestore)
- Other: React Router, react-hook-form, react-webcam, sonner (toasts)

## Quick Start (Local Development)

Prerequisites:

- Node.js (LTS recommended)
- A package manager (pnpm is preferred in this repo since `pnpm-lock.yaml` is present)

Install and run locally (PowerShell):

```powershell
pnpm install
pnpm dev
```

Or with npm:

```powershell
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Build

```powershell
pnpm build
pnpm preview
```

## Environment Variables

Create a `.env` file at the project root (Vite requires `VITE_` prefixes). Example variables used by the project:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_GEMINI_API_KEY=your_google_generative_ai_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

- Firebase variables are consumed by `src/config/firebase.config.ts`.
- The Gemini/Generative AI key is used in `src/scripts/index.ts`.
- The Clerk publishable key is read in `src/main.tsx`.

Keep secrets out of version control — add `.env` to `.gitignore`.

## Available Scripts

Scripts are defined in `package.json`:

- `dev` - Runs the Vite dev server
- `build` - Type-checks and builds the production bundle
- `preview` - Preview the production build locally
- `lint` - Run ESLint across the codebase

Run them via `pnpm <script>` or `npm run <script>`.

## Project Structure (high level)

- `src/` — Application source
  - `config/` — Firebase config and other env-backed configs
  - `components/` — Reusable UI components and app pages
  - `scripts/` — AI/chat helpers (`src/scripts/index.ts`)
  - `provider/` — Context providers (toasts, auth wrappers)

## Contributing

- Open an issue to discuss new features or bugs.
- Fork the repo, create a branch, and submit a PR with a clear description and tests where appropriate.

## Notes & Next Steps

- You may want to add a `LICENSE` file (MIT is common) and a hosted demo link if you deploy the app.
- Add screenshots or a short demo GIF under `public/assets/` and reference them from this README.

---

Made with ❤️ by `Meharsh7804` — happy interviewing!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
