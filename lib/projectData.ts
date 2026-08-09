import { ProjectTemplate } from "@/types";

export const projectData: ProjectTemplate[] = [
  {
    title: "Task Manager",
    languages: [
      {
        language: "TypeScript",
        className: "typescript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "TailwindCSS",
        className: "tailwind",
      },
      {
        language: "Python",
        className: "python",
      },
      {
        language: "Django",
        className: "django",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/todo-project",
        website: "https://todo-app-six-wine-55.vercel.app/",
      },
    ],
    description: `A full-stack task management application with secure authentication, priority-based organization, and a modern, responsive UI. Built as a decoupled REST API (Django) + SPA (React) architecture, deployed across two platforms (Render for the API, Vercel for the frontend).

### Key Features
- **Google Sign-In (OAuth 2.0)** — users authenticate with their Google account; the backend verifies the ID token server-side and issues JWTs for session management.
- **JWT-based auth** — stateless authentication via \`djangorestframework-simplejwt\`, with 12-hour access tokens.
- **Per-user task ownership** — each todo is scoped to its owner; the API only ever returns/mutates the authenticated user's own data.
- **Priority levels** (Low/Medium/High) with a custom priority selector UI, including a data migration to remap legacy priority values.
- **Full CRUD** with pagination, inline editing, and delete confirmation modals.
- **Responsive, accessible UI** built with shadcn-style components on top of Base UI primitives.

### Tech Stack

**Frontend**
- React 19 + TypeScript, built with Vite
- Tailwind CSS 4 for styling, \`class-variance-authority\` + \`tailwind-merge\` for variant-driven component APIs
- shadcn/ui-pattern components on **Base UI** (\`@base-ui/react\`) primitives — dialogs, tabs, pagination, checkboxes, etc.
- \`@react-oauth/google\` for Google Sign-In integration
- \`sonner\` for toast notifications
- ESLint 10 + typescript-eslint for linting

**Backend**
- Django 6 + Django REST Framework — RESTful API with ViewSets/serializers
- PostgreSQL (hosted on Neon), managed via \`dj-database-url\`
- \`djangorestframework-simplejwt\` for JWT issuance/verification
- \`google-auth\` for verifying Google OAuth ID tokens
- \`django-cors-headers\` for cross-origin requests from the deployed frontend
- WhiteNoise for compressed, hashed static file serving
- Gunicorn as the production WSGI server

**Testing**
- **Backend:** Django/DRF \`APITestCase\` with \`force_authenticate\`, covering the Todo API and Google login flow (mocked token verification)
- **Frontend:** Vitest + React Testing Library + jsdom, with component-level tests for the task list, modals, and priority selector

**Tooling / DevOps**
- Task automation via a Taskfile.yml (Go Task) for one-command local setup (venv, migrations, npm install) and running backend+frontend concurrently
- Separate deploy pipelines: Render (Django API via build.sh: install deps → collectstatic → migrate) and Vercel (Vite static build)
- TypeScript project references (\`tsconfig.app.json\` / tsconfig.node.json) for split app/tooling type-checking
- Environment-based configuration via .env / \`python-dotenv\`

### Skills Demonstrated
Full-stack development, REST API design, OAuth/JWT authentication flows, relational data modeling & migrations, responsive UI engineering with a modern component system, automated testing (unit + integration, frontend + backend), and multi-service cloud deployment/CI configuration.`,
  },
  {
    title: "The Continental Post",
    languages: [
      {
        language: "TypeScript",
        className: "typescript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "TailwindCSS",
        className: "tailwind",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/the-continental-post",
        website: "https://the-continental-post-neelam.netlify.app/",
      },
    ],
    description: `A full-stack news aggregation and bookmarking platform built with React Router 7 in framework mode, combining SSR-capable routing with a serverless API layer for authenticated news browsing and personal article curation.

### Key Features
- **Firebase Authentication** — sign up, login, and logout flow gating bookmarking and dashboard features.
- **NewsAPI integration via serverless functions** — fetch, post, and delete news articles through Netlify Functions, keeping API keys off the client.
- **Topic/language search & discovery** — a search engine to explore specific topics, languages, etc., plus a dedicated Discover page.
- **Personal bookmarking + dashboard** — bookmark articles and view/manage them in a user dashboard, with delete support.
- **Responsive UI** built with TailwindCSS across mobile and desktop.
- **Containerized deployment option** via a production Dockerfile.

### Tech Stack

**Frontend**
- React Router 7 (framework mode) + TypeScript, built with Vite
- TailwindCSS for styling
- Firebase SDK for authentication

**Backend / Services**
- Netlify serverless Functions acting as a lightweight API proxy/backend for NewsAPI requests
- NewsAPI as the external news data source
- Firebase Authentication for identity/session management

**Testing**
- Jest (with Babel transform) test suite (\`jest.config.mjs\`, \`jest.setup.ts\`) for component/logic coverage

**Tooling / DevOps**
- Dockerfile + .dockerignore for containerized deployment (AWS ECS, Cloud Run, Fly.io, etc.)
- Deployed on Netlify, leveraging integrated Functions for the API layer
- TypeScript-first configuration throughout the app

### Skills Demonstrated
Serverless backend architecture, third-party REST API integration (NewsAPI), Firebase authentication flows, responsive UI engineering with React Router 7 + Tailwind, containerization, and automated testing with Jest.`,
  },
  {
    title: "Recipe Blog",
    languages: [
      {
        language: "TypeScript",
        className: "typescript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/recipe-blog",
        website: "https://recipe-blog-neelam-khan.netlify.app/",
      },
    ],
    description: `A recipe discovery and management blog that lets users search, explore, save, and author their own recipes, combining a public recipe API with Firebase-backed accounts and local persistence for a fast, personalized browsing experience.

### Key Features
- **Firebase Authentication** — sign up, login, and logout to unlock personalized features.
- **Spoonacular API integration** — search and retrieve recipe data (ingredients, steps, nutrition) from a large external recipe database.
- **Dual search experience** — two independent search bars for finding recipes by different criteria.
- **Explore page** — curated recipe discovery outside of direct search.
- **Full recipe detail view** — name, ingredients, steps, and nutrition data per recipe.
- **User-authored recipes** — add and delete your own recipes alongside API-sourced ones.
- **Bookmarking** — save favorite recipes for quick access later.
- **State persistence via \`localStorage\`** — keeps bookmarks and preferences across sessions without a dedicated backend.

### Tech Stack

**Frontend**
- React + TypeScript (~70% of codebase), built with Vite
- CSS-based styling system (~28% of codebase) for custom, responsive layouts
- HTML for semantic page structure

**Backend / Services**
- Spoonacular API as the external recipe data source
- Firebase Authentication for user accounts and session handling
- Browser \`localStorage\` for lightweight client-side state persistence (no dedicated app backend)

**Tooling / DevOps**
- Vite build tooling with a TypeScript project configuration
- Static production build (\`dist/\`) deployed via Netlify

### Skills Demonstrated
Frontend-focused CRUD-style UX (recipes + bookmarks), third-party REST API integration, Firebase authentication, client-side state persistence, and responsive UI/UX design with TypeScript.`,
  },
];
