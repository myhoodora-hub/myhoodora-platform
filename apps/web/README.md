# MyHoodora Web Application

The frontend web application for the MyHoodora platform, built with [Next.js](https://nextjs.org/).

## Purpose

The web application serves as the primary interface for MyHoodora users. It allows community members to interact, access local services, and manage their neighborhood profiles.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Library**: React 19
- **Authentication**: Firebase Auth
- **Styling**: CSS Modules (Planned for Tailwind/Shadcn)
- **UI Components**: Internal `@myhoodora/ui` package
- **Data Fetching**: React Server Components & Client-side hooks

## Setup & Local Development

### Prerequisites

Ensure you have followed the root setup instructions in the [main README](../../README.md).

### Running Locally

To run the web application in development mode:

```bash
pnpm dev
```

Or, from the root, targeting only the web app:

```bash
pnpm --filter web dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in this directory based on `.env.example`:

```bash
cp .env.example .env.local
```

| Variable              | Description              | Default                 |
| :-------------------- | :----------------------- | :---------------------- |
| `NEXT_PUBLIC_API_URL` | URL of the MyHoodora API | `http://localhost:3333` |

## Available Scripts

| Command            | Description                          |
| :----------------- | :----------------------------------- |
| `pnpm build`       | Create an optimized production build |
| `pnpm dev`         | Start the development server         |
| `pnpm start`       | Start the production server          |
| `pnpm lint`        | Run ESLint checks                    |
| `pnpm check-types` | Run TypeScript type-checking         |

## Project Structure

- `app/`: Next.js App Router (pages, layouts, and components)
- `public/`: Static assets (images, fonts, etc.)
- `components/`: Shared UI components specific to the web app
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and external service configurations

---

For broader project information, architecture, and contribution guidelines, please refer to the [Root README](../../README.md).
