alx-project-0x00-setup
=======================

This repository contains the code required to pass the ALX checkers for the Next.js setup project.

Project directory: `alx-project-0x00`

What was done per tasks
-----------------------

- Task 0: Project scaffolded with TypeScript, ESLint, Tailwind CSS, and import alias; no `src` directory; Pages Router.
- Task 1: Created `components/` and `interfaces/`; updated `pages/index.tsx` to arrow function with export at end; created empty `components/Card.tsx`, `components/Pill.tsx`, and `interfaces/index.ts` (now implemented in later tasks).
- Task 2: Added basic routes `pages/landing.tsx` and `pages/about.tsx` with functional components.
- Task 3: Implemented `components/Card.tsx` and `components/Pill.tsx`; assets organized under `public/assets` (with `public/assets/images` folder created for checker compatibility).
- Task 4: Used `Card` component in `pages/landing.tsx`; rendered multiple instances.
- Task 5: Added `PillProps` in `interfaces/index.ts` and typed `Pill` to accept `title` prop.
- Task 6: Added `Button` component with `title`, `size`, and `shape` props; showcased variants on `pages/landing.tsx`.

How to run locally
------------------

```bash
npm install
npm run dev -- -p 3000
```

Open `http://localhost:3000` for Home, `http://localhost:3000/landing` for Landing, and `http://localhost:3000/about` for About.

Key files for checkers
----------------------

- `components/Card.tsx`
- `components/Pill.tsx`
- `components/Button.tsx`
- `interfaces/index.ts`
- `pages/index.tsx`
- `pages/landing.tsx`
- `pages/about.tsx`
