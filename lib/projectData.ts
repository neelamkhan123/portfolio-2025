import { ProjectTemplate } from "@/types";

export const projectData: ProjectTemplate[] = [
  {
    title: "Accessible Component Library",
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
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/component-library",
        website: "https://df22wszov2zdy.cloudfront.net",
      },
    ],
    description: `A published React component library of 40 accessible components, built to the WAI-ARIA Authoring Practices Guide and shipped to npm as \`@neelamkhan21/ui\`, with hosted Storybook documentation and accessibility testing enforced in CI.

### Key Features
- **40 components** — from primitives (Button, Input, Checkbox) to composite widgets (Dialog, Combobox, Command palette, DataTable, Carousel, Calendar), each with its own Storybook stories and test suite.
- **Accessibility as the design constraint** — every interactive component implements the WAI-ARIA APG pattern for its widget type: correct roles and ARIA relationships, full keyboard support, and managed focus.
- **Native platform first** — Dialog is a real \`<dialog>\` driven by \`showModal()\`, so the focus trap, Escape-to-close, and top-layer stacking come from the browser rather than hand-rolled JavaScript; menus and popovers use the native Popover API.
- **Automated a11y testing in CI** — every story is run against axe-core via the Storybook test runner, so an accessibility regression fails the build before it can merge.
- **Reduced-motion support** — all transitions are dropped under \`prefers-reduced-motion\` (WCAG 2.3.3), including animations built to avoid non-animatable properties (open/close via a \`grid-template-rows\` 0fr↔1fr transition instead of \`height: auto\`).
- **Documented decision log** — a \`DECISIONS.md\` recording the per-component accessibility reasoning: why a native element was or wasn't used, how hidden content is removed from the tab order and accessibility tree with \`inert\`, and what each ARIA relationship is doing.
- **Published and consumable** — versioned on npm with dual ESM/CJS builds, generated TypeScript declarations, and MIT licensing including third-party notices for bundled dependencies.

### Tech Stack

**Library**
- React 19 + TypeScript, authored as a headless-leaning component API
- Tailwind CSS 4 for styling, \`class-variance-authority\` for variant-driven component props
- \`lucide-react\` for iconography
- Native browser primitives — \`<dialog>\`, the Popover API, and \`inert\` — in place of JavaScript reimplementations

**Documentation**
- Storybook 10 with the a11y addon, one story file per component
- Static Storybook build deployed behind AWS CloudFront as the public documentation site

**Testing**
- Vitest + React Testing Library + \`jest-axe\` for unit and accessibility assertions (40 test files)
- Storybook test runner with \`axe-playwright\` running axe-core over every story in a real browser

**Build / Distribution**
- \`tsup\` producing ESM + CJS bundles with TypeScript declaration files
- Published to npm as a scoped public package with \`exports\` map and peer-dependency ranges for React
- GitHub Actions CI running the unit suite, the package build, the Storybook build, and the full axe-core story sweep on every push and pull request

### Skills Demonstrated
Accessibility engineering to a published specification (WAI-ARIA APG), design-system and component API design, keyboard and focus management, automated accessibility testing, npm package authoring and distribution (bundling, type declarations, licensing/compliance), documentation-driven development with Storybook, and CI pipeline configuration.`,
  },
  {
    title: "OSS Health Dashboard",
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
        language: "Python",
        className: "python",
      },
      {
        language: "FastAPI",
        className: "fastapi",
      },
      {
        language: "PostgreSQL",
        className: "postgresql",
      },
      {
        language: "Kubernetes",
        className: "kubernetes",
      },
      {
        language: "TailwindCSS",
        className: "tailwind",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/oss-health-dashboard",
        website: "https://oss-dashboard.duckdns.org",
      },
    ],
    description: `A full-stack dashboard that tracks the health of open-source repositories — syncing pull requests, issues, commits and contributors from the GitHub API on a schedule, then reporting how long PRs take to merge, whether the issue backlog is growing, and who is active. Built on my own published component library, and deployed to a real Kubernetes cluster.

### Key Features
- **Scheduled ingestion pipeline** — Celery beat triggers a sync every 15 minutes; a worker paginates the GitHub API across pull requests, issues, commits, contributors, reviews and issue comments, caching responses to stay well inside the rate limit.
- **Measured performance work, not asserted** — every optimisation was benchmarked against ~1,000–1,800 PRs per repository and written up in \`PERFORMANCE.md\`, including the places where the expected win turned out not to exist.
- **21x faster dashboard load** — Redis caching takes the landing request from 1,510ms to 71ms at p50, and from 6.5 to 136 requests/second under concurrency.
- **53% smaller initial bundle** — route-level and chart-library code splitting cuts initial JavaScript from 782KB to 368KB, worth ~0.4s of LCP on a simulated mobile connection. Lighthouse scores 0.98 with a CLS of 0.
- **Revocable sessions by design** — authentication uses opaque random tokens in Redis rather than JWTs, because a JWT is only as revocable as its expiry; sign-out is a single \`DEL\`. Sessions are httpOnly cookies, with GitHub and Google OAuth alongside email and password.
- **Real Kubernetes, not a demo** — a k3s cluster running Postgres as a StatefulSet with a PersistentVolumeClaim, migrations as a one-off Job, readiness and liveness probes, rolling restarts, and horizontal pod autoscaling.
- **Cost engineering as an explicit decision** — the managed-services design (RDS + ElastiCache + always-on compute) would have cost about $39/month. Moving the data tier into the cluster and the cluster onto an always-free host brought that to £0/month, with the reasoning and the trade-offs documented rather than hidden.

### Tech Stack

**Backend**
- FastAPI + SQLAlchemy 2.0 with Alembic migrations, running on PostgreSQL
- Celery worker and beat scheduler over Redis, which doubles as response cache and session store
- Opaque-token session auth with bcrypt password hashing, per-user rate limiting, and GitHub/Google OAuth

**Frontend**
- React 19 + TypeScript + Vite, styled with Tailwind CSS 4
- Built on \`@neelamkhan21/ui\`, my own published component library, consumed as a real npm dependency
- Recharts for trend visualisation, lazy-loaded so it stays out of the initial bundle

**Infrastructure**
- Docker Compose for local development, driven by a Taskfile so setup is two commands
- Kubernetes (k3s) in production: separate Deployments for API, worker and scheduler, nginx serving the SPA and proxying the API from one origin, and Caddy terminating TLS with automatically renewed certificates
- Multi-architecture container images (arm64 + amd64) published to Docker Hub
- Scripted, idempotent deployments to either an always-free ARM host or an on-demand cloud instance

**CI**
- GitHub Actions running the backend suite against live Postgres and Redis services, frontend lint, typecheck and build, and Lighthouse CI with asserted performance and accessibility budgets

### Skills Demonstrated
Backend API design and data modelling, background job scheduling and third-party API integration, query optimisation and cache strategy backed by benchmarks, authentication and session security, Kubernetes manifest authoring and cluster operation, infrastructure automation, CI pipeline configuration, and cost-aware architecture decisions with the trade-offs written down.`,
  },
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
