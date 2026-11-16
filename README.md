# Petroxella Energy Services Website

A responsive company website for Petroxella Energy Services Limited, a African energy services company. It presents the company, its service areas, HSE and quality information, project portfolio, and contact options.

## Features

- Home, About, Services, HSE & QA, Projects, and Contact pages, with project detail routes.
- Responsive layouts, animated page transitions and components, and reduced-motion support.
- Expandable service listings covering six capability areas.
- Project portfolio filtering and detail views. Project data is maintained in `src/data/content.ts`; the portfolio is currently empty.
- Validated inquiry form that opens WhatsApp with a drafted message, plus telephone, email, and Google Maps links/embeds.

## Tech stack

- React 18 and TypeScript
- Vite 5
- Tailwind CSS 3, PostCSS, and Autoprefixer
- React Router 6
- Framer Motion
- React Hook Form
- Lucide React icons

## Project structure

```text
public/                  Static assets, including company images and logos
src/
  components/             Shared layout, UI, and contact form components
  data/content.ts         Navigation, contact details, services, and project data
  pages/                  Route-level page components
  App.tsx                 Routes and app-level motion settings
  index.css               Global styles and Tailwind directives
  main.tsx                Application entry point
index.html                HTML entry point
render.yaml               Render static-site configuration
```

## Getting started

Prerequisites: Node.js and npm (use a Node.js version supported by Vite 5).

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check with `tsc` and create a production build in `dist/`. |
| `npx vite preview` | Preview the built site locally after running `npm run build`. |

There is no separate preview script defined in `package.json`.

## Environment variables

The current application does not read environment variables; no values are required to run or build it. `.env.example` contains a `VITE_FORM_ENDPOINT` placeholder for a possible future form backend, but the current inquiry form uses WhatsApp and does not use that variable. Do not add secrets to client-side `VITE_` variables.

## Deployment to Render

The included `render.yaml` configures a Render static site. Connect the repository to Render and deploy using the Blueprint configuration, or create a static site with:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`
- **Rewrite rule:** `/*` to `/index.html` (required for client-side routes)

## Contact

The Contact page displays the company’s configured office addresses, phone numbers, and email address from `src/data/content.ts`. Refer to the deployed site for current contact information.
