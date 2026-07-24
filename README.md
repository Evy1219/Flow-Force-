# Flow-Force-

Database for a wide variety of workflows and workforces.

Flow Force is a production-ready workplace management platform that adapts its modules, terminology, dashboards, and navigation based on the industry selected during onboarding.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM
- PostgreSQL
- JWT via secure HTTP-only cookies
- bcrypt password hashing

## Project Structure

- `src/app` – route-level UI and layout
- `src/components` – reusable enterprise UI components
- `src/lib` – shared services and configuration
- `src/modules` – business-type adapters and feature modules
- `prisma` – Prisma schema and seed data

## Phase Plan

1. Authentication and organization onboarding
2. Dashboard, sidebar, employee management
3. Industry adaptation engine and module system
4. Tasks, messaging, alerts, and reporting
5. Security hardening, testing, and deployment

## Getting Started

1. Install dependencies
2. Configure environment variables
3. Start PostgreSQL
4. Run Prisma migrations
5. Launch the development server

## Environment Variables

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/flow_force"
JWT_SECRET="super-secret"
NEXTAUTH_URL="http://localhost:3000"
RESEND_API_KEY="optional"
```
