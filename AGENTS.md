# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router website for SportsVentureX. Route entry points and API handlers live in `src/app/` (for example, `src/app/api/contact/route.ts`). Reusable UI is organized by purpose in `src/components/`: page sections, layout, brand, and generic `ui` primitives. Put shared business logic in `src/lib/`, content in `src/data/`, and shared TypeScript types in `src/types/`. Static product images belong in `public/products/`. Keep configuration at the repository root; deployment and CI workflows are in `.github/workflows/`.

## Build, Test, and Development Commands

- `npm ci` installs the lockfile-pinned dependencies used by CI.
- `npm run dev` starts the local Next.js development server.
- `npm run build` produces a production build and catches Next.js build errors.
- `npm start` serves a completed production build.
- `npm test` runs the Vitest suite once.
- `npx tsc --noEmit` performs the strict TypeScript check used in CI.

Before opening a pull request, run `npm test`, `npx tsc --noEmit`, and `npm run build`.

## Coding Style & Naming Conventions

Use TypeScript with strict types and the `@/` alias for imports from `src` (for example, `@/lib/contact-email`). Follow the existing two-space indentation, double quotes, and trailing-comma style. Name React components and context files in PascalCase (`ContactForm.tsx`, `ThemeContext.tsx`); use kebab-case for route and utility filenames where appropriate. Keep components focused and place global styling in `src/app/globals.css`; use Tailwind utility classes for component styling. No lint script is currently configured, so preserve the surrounding file’s formatting.

## Testing Guidelines

Tests use Vitest in the Node environment. Co-locate unit tests with the module they cover and use `*.test.ts` names, such as `src/lib/contact-submission.test.ts`. Cover successful and invalid inputs, especially for validation, HTML escaping, and API-related logic. Do not lower existing coverage expectations by removing boundary-case tests.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative summaries such as `Add Resend contact notifications` and `Deploy only after successful CI`. Keep each commit scoped to one change. Pull requests should describe the user-visible or technical change, link the relevant issue when available, and include screenshots for visual updates. Confirm the validation commands pass; CI requires type checking and a production build on changes targeting `main`.

## Security & Configuration

Copy `.env.example` to `.env.local` for local email configuration. Never commit real Resend or Vercel credentials, and never expose server-only variables with `NEXT_PUBLIC_`. See `docs/resend-setup.md` before modifying contact-form delivery.
