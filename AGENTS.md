# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router project. Application routes live in `src/app`, with the homepage in `src/app/page.tsx` and the contact API route in `src/app/api/contact/route.ts`. UI is organized under `src/components`, split into `layout`, `sections`, `ui`, and `brand`. Shared logic and tests live in `src/lib`, site data in `src/data`, and shared types in `src/types`. Static images and product assets are stored in `public/products`. Setup notes belong in `docs`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and run TypeScript checks.
- `npm start`: serve the production build after `npm run build`.
- `npm test`: run the Vitest test suite once.

Use `npm` for dependency management because the repository includes `package-lock.json`.

## Coding Style & Naming Conventions

Write TypeScript and React components with 2-space indentation. Use PascalCase for React components and context providers, such as `ContactForm` and `ThemeContext`. Use kebab-case for documentation files and descriptive lowercase names for static assets. Keep reusable business logic in `src/lib` and avoid duplicating validation or email-building logic inside components. Prefer existing Tailwind and CSS patterns from `src/app/globals.css` before adding new styling conventions.

## Testing Guidelines

Tests use Vitest. Place tests next to the code they cover with the `.test.ts` suffix, as in `src/lib/contact-email.test.ts`. Add or update tests when changing validation, email rendering, API behavior, or shared utilities. Run `npm test` before handing off changes, and run `npm run build` for changes that touch routes, imports, configuration, or TypeScript types.

## Commit & Pull Request Guidelines

Recent commits use short imperative messages, for example `Add Resend contact notifications` and `Deploy only after successful CI`. Follow that style: start with a verb, keep the subject concise, and describe one logical change. Pull requests should include a short summary, testing performed, linked issues when available, and screenshots for visible UI changes.

## Security & Configuration Tips

Never commit real secrets. Local values belong in `.env.local`; examples belong in `.env.example`. Resend configuration requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_NOTIFICATION_EMAIL`. Keep server-only keys out of client components and never prefix them with `NEXT_PUBLIC_`.
