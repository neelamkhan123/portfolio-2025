export type Metric = { label: string; value: string; note: string };
export type Feature = { title: string; body: string };
export type StackGroup = { group: string; items: string[] };

export type Project = {
  slug: string;
  /** Category kicker shown beside the index number in Selected work. */
  label: string;
  /** Which tint the figure ground and pills take. */
  tint: "p1" | "p2" | "p3";
  /** Editorial blurb for the Selected work row — problem, build, outcome. */
  pitch: string;
  navLabel: string;
  kicker: string;
  title: string;
  cardKicker: string;
  blurb: string;
  cardTech: string[];
  summary: string;
  tech: string[];
  repo: string;
  demo: string;
  demoLabel: string;
  metrics: Metric[];
  features: Feature[];
  stack: StackGroup[];
  skills: string;
};

export const projects: Project[] = [
  {
    slug: "component-library",
    label: "Open source",
    tint: "p1",
    pitch:
      "Forty React components built to the WAI-ARIA Authoring Practices Guide and published to npm with dual ESM/CJS builds, generated types and hosted Storybook documentation. Every story is run against axe-core in CI, so an accessibility regression fails the build before it can merge.",
    navLabel: "Component library",
    kicker: "Project, built outside work",
    title: "Accessible component library",
    cardKicker: "Published to npm",
    blurb:
      "40 React components built to the WAI-ARIA APG, shipped as @neelamkhan21/ui with hosted Storybook docs and axe-core enforced in CI.",
    cardTech: ["TypeScript", "React", "Storybook"],
    summary:
      "A published React component library of 40 accessible components, built to the WAI-ARIA Authoring Practices Guide and shipped to npm as @neelamkhan21/ui, with hosted Storybook documentation and accessibility testing enforced in CI.",
    tech: ["TypeScript", "React 19", "Tailwind CSS 4", "Storybook 10", "Vitest", "tsup"],
    repo: "https://github.com/neelamkhan123/component-library",
    demo: "https://df22wszov2zdy.cloudfront.net",
    demoLabel: "Live documentation",
    metrics: [
      { label: "Components published", value: "40", note: "each with stories and tests" },
      { label: "Test files", value: "40", note: "Vitest, RTL and jest-axe" },
      { label: "Build formats", value: "2", note: "ESM and CJS with generated types" },
    ],
    features: [
      {
        title: "40 components",
        body: "From primitives (Button, Input, Checkbox) to composite widgets (Dialog, Combobox, Command palette, DataTable, Carousel, Calendar), each with its own Storybook stories and test suite.",
      },
      {
        title: "Accessibility as the design constraint",
        body: "Every interactive component implements the WAI-ARIA APG pattern for its widget type: correct roles and ARIA relationships, full keyboard support, and managed focus.",
      },
      {
        title: "Native platform first",
        body: "Dialog is a real <dialog> driven by showModal(), so the focus trap, Escape-to-close, and top-layer stacking come from the browser rather than hand-rolled JavaScript; menus and popovers use the native Popover API.",
      },
      {
        title: "Automated a11y testing in CI",
        body: "Every story is run against axe-core via the Storybook test runner, so an accessibility regression fails the build before it can merge.",
      },
      {
        title: "Reduced-motion support",
        body: "All transitions are dropped under prefers-reduced-motion (WCAG 2.3.3), including animations built to avoid non-animatable properties (open/close via a grid-template-rows 0fr to 1fr transition instead of height: auto).",
      },
      {
        title: "Documented decision log",
        body: "A DECISIONS.md recording the per-component accessibility reasoning: why a native element was or wasn't used, how hidden content is removed from the tab order and accessibility tree with inert, and what each ARIA relationship is doing.",
      },
      {
        title: "Published and consumable",
        body: "Versioned on npm with dual ESM/CJS builds, generated TypeScript declarations, and MIT licensing including third-party notices for bundled dependencies.",
      },
    ],
    stack: [
      {
        group: "Library",
        items: [
          "React 19 + TypeScript, authored as a headless-leaning component API",
          "Tailwind CSS 4 for styling, class-variance-authority for variant-driven props",
          "lucide-react for iconography",
          "Native browser primitives (<dialog>, the Popover API, inert) in place of JavaScript reimplementations",
        ],
      },
      {
        group: "Documentation",
        items: [
          "Storybook 10 with the a11y addon, one story file per component",
          "Static Storybook build deployed behind AWS CloudFront as the public documentation site",
        ],
      },
      {
        group: "Testing",
        items: [
          "Vitest + React Testing Library + jest-axe for unit and accessibility assertions (40 test files)",
          "Storybook test runner with axe-playwright running axe-core over every story in a real browser",
        ],
      },
      {
        group: "Build and distribution",
        items: [
          "tsup producing ESM + CJS bundles with TypeScript declaration files",
          "Published to npm as a scoped public package with an exports map and peer-dependency ranges for React",
          "GitHub Actions CI running the unit suite, the package build, the Storybook build, and the full axe-core story sweep on every push and pull request",
        ],
      },
    ],
    skills:
      "Accessibility engineering to a published specification (WAI-ARIA APG), design-system and component API design, keyboard and focus management, automated accessibility testing, npm package authoring and distribution (bundling, type declarations, licensing and compliance), documentation-driven development with Storybook, and CI pipeline configuration.",
  },
  {
    slug: "oss-health-dashboard",
    label: "Full stack",
    tint: "p2",
    pitch:
      "A GitHub analytics dashboard that ingests pull requests, issues, commits and contributors on a schedule, then reports how long PRs take to merge and whether the backlog is growing. Redis caching took the landing request from 1,510ms to 71ms at p50, and the whole thing runs on a k3s cluster for £0 a month.",
    navLabel: "OSS health dashboard",
    kicker: "Project, built outside work",
    title: "OSS health dashboard",
    cardKicker: "Deployed to a k3s cluster",
    blurb:
      "Full-stack GitHub analytics: scheduled ingestion on Celery, Redis caching that cut load time 21x, benchmarked and written up.",
    cardTech: ["FastAPI", "PostgreSQL", "Kubernetes"],
    summary:
      "A full-stack dashboard that tracks the health of open-source repositories, syncing pull requests, issues, commits and contributors from the GitHub API on a schedule, then reporting how long PRs take to merge, whether the issue backlog is growing, and who is active. Built on my own published component library, and deployed to a real Kubernetes cluster.",
    tech: ["TypeScript", "React 19", "FastAPI", "PostgreSQL", "Redis", "Celery", "Kubernetes (k3s)"],
    repo: "https://github.com/neelamkhan123/oss-health-dashboard",
    demo: "https://oss-dashboard.duckdns.org",
    demoLabel: "Live demo",
    metrics: [
      { label: "Dashboard load, p50", value: "71ms", note: "21x faster, from 1,510ms" },
      { label: "Initial JavaScript", value: "368 KB", note: "53% smaller, from 782 KB" },
      { label: "Monthly hosting cost", value: "£0", note: "down from $39 on managed services" },
    ],
    features: [
      {
        title: "Scheduled ingestion pipeline",
        body: "Celery beat triggers a sync every 15 minutes; a worker paginates the GitHub API across pull requests, issues, commits, contributors, reviews and issue comments, caching responses to stay well inside the rate limit.",
      },
      {
        title: "Measured performance work, not asserted",
        body: "Every optimisation was benchmarked against 1,000 to 1,800 PRs per repository and written up in PERFORMANCE.md, including the places where the expected win turned out not to exist.",
      },
      {
        title: "21x faster dashboard load",
        body: "Redis caching takes the landing request from 1,510ms to 71ms at p50, and from 6.5 to 136 requests per second under concurrency.",
      },
      {
        title: "53% smaller initial bundle",
        body: "Route-level and chart-library code splitting cuts initial JavaScript from 782KB to 368KB, worth around 0.4s of LCP on a simulated mobile connection. Lighthouse scores 0.98 with a CLS of 0.",
      },
      {
        title: "Revocable sessions by design",
        body: "Authentication uses opaque random tokens in Redis rather than JWTs, because a JWT is only as revocable as its expiry; sign-out is a single DEL. Sessions are httpOnly cookies, with GitHub and Google OAuth alongside email and password.",
      },
      {
        title: "Real Kubernetes, not a demo",
        body: "A k3s cluster running Postgres as a StatefulSet with a PersistentVolumeClaim, migrations as a one-off Job, readiness and liveness probes, rolling restarts, and horizontal pod autoscaling.",
      },
      {
        title: "Cost engineering as an explicit decision",
        body: "The managed-services design (RDS + ElastiCache + always-on compute) would have cost about $39/month. Moving the data tier into the cluster and the cluster onto an always-free host brought that to £0/month, with the reasoning and the trade-offs documented rather than hidden.",
      },
    ],
    stack: [
      {
        group: "Backend",
        items: [
          "FastAPI + SQLAlchemy 2.0 with Alembic migrations, running on PostgreSQL",
          "Celery worker and beat scheduler over Redis, which doubles as response cache and session store",
          "Opaque-token session auth with bcrypt password hashing, per-user rate limiting, and GitHub/Google OAuth",
        ],
      },
      {
        group: "Frontend",
        items: [
          "React 19 + TypeScript + Vite, styled with Tailwind CSS 4",
          "Built on @neelamkhan21/ui, my own published component library, consumed as a real npm dependency",
          "Recharts for trend visualisation, lazy-loaded so it stays out of the initial bundle",
        ],
      },
      {
        group: "Infrastructure",
        items: [
          "Docker Compose for local development, driven by a Taskfile so setup is two commands",
          "Kubernetes (k3s) in production: separate Deployments for API, worker and scheduler, nginx serving the SPA and proxying the API from one origin, and Caddy terminating TLS with automatically renewed certificates",
          "Multi-architecture container images (arm64 + amd64) published to Docker Hub",
          "Scripted, idempotent deployments to either an always-free ARM host or an on-demand cloud instance",
        ],
      },
      {
        group: "CI",
        items: [
          "GitHub Actions running the backend suite against live Postgres and Redis services, frontend lint, typecheck and build, and Lighthouse CI with asserted performance and accessibility budgets",
        ],
      },
    ],
    skills:
      "Backend API design and data modelling, background job scheduling and third-party API integration, query optimisation and cache strategy backed by benchmarks, authentication and session security, Kubernetes manifest authoring and cluster operation, infrastructure automation, CI pipeline configuration, and cost-aware architecture decisions with the trade-offs written down.",
  },
  {
    slug: "task-manager",
    label: "Side project",
    tint: "p3",
    pitch:
      "A decoupled Django REST API and React SPA with Google OAuth, JWT sessions and per-user task scoping. Tested on both sides — APITestCase on the backend, Vitest and Testing Library on the front — and deployed across two independent pipelines.",
    navLabel: "Task manager",
    kicker: "Project, built outside work",
    title: "Task manager",
    cardKicker: "Two deploy pipelines",
    blurb:
      "Decoupled Django REST API and React SPA with Google OAuth, JWT sessions, per-user scoping and tests across both layers.",
    cardTech: ["Django", "React", "OAuth"],
    summary:
      "A full-stack task management application with secure authentication, priority-based organization, and a modern, responsive UI. Built as a decoupled REST API (Django) + SPA (React) architecture, deployed across two platforms (Render for the API, Vercel for the frontend).",
    tech: ["TypeScript", "React 19", "Django 6", "Django REST Framework", "PostgreSQL"],
    repo: "https://github.com/neelamkhan123/todo-project",
    demo: "https://todo-app-six-wine-55.vercel.app/",
    demoLabel: "Live demo",
    metrics: [
      { label: "Architecture", value: "API + SPA", note: "deployed independently" },
      { label: "Test coverage", value: "Both layers", note: "APITestCase, Vitest + RTL" },
      { label: "Authentication", value: "OAuth + JWT", note: "server-verified ID tokens" },
    ],
    features: [
      {
        title: "Google Sign-In (OAuth 2.0)",
        body: "Users authenticate with their Google account; the backend verifies the ID token server-side and issues JWTs for session management.",
      },
      {
        title: "JWT-based auth",
        body: "Stateless authentication via djangorestframework-simplejwt, with 12-hour access tokens.",
      },
      {
        title: "Per-user task ownership",
        body: "Each todo is scoped to its owner; the API only ever returns or mutates the authenticated user's own data.",
      },
      {
        title: "Priority levels",
        body: "Low, medium and high priorities with a custom priority selector UI, including a data migration to remap legacy priority values.",
      },
      { title: "Full CRUD", body: "Pagination, inline editing, and delete confirmation modals." },
      {
        title: "Responsive, accessible UI",
        body: "Built with shadcn-style components on top of Base UI primitives.",
      },
    ],
    stack: [
      {
        group: "Frontend",
        items: [
          "React 19 + TypeScript, built with Vite",
          "Tailwind CSS 4 for styling, class-variance-authority + tailwind-merge for variant-driven component APIs",
          "shadcn/ui-pattern components on Base UI primitives: dialogs, tabs, pagination, checkboxes",
          "@react-oauth/google for Google Sign-In, sonner for toast notifications",
        ],
      },
      {
        group: "Backend",
        items: [
          "Django 6 + Django REST Framework, with ViewSets and serializers",
          "PostgreSQL hosted on Neon, managed via dj-database-url",
          "djangorestframework-simplejwt for JWT issuance and verification, google-auth for verifying Google OAuth ID tokens",
          "WhiteNoise for compressed, hashed static files; Gunicorn as the production WSGI server",
        ],
      },
      {
        group: "Testing",
        items: [
          "Backend: Django/DRF APITestCase with force_authenticate, covering the Todo API and Google login flow with mocked token verification",
          "Frontend: Vitest + React Testing Library + jsdom, with component-level tests for the task list, modals, and priority selector",
        ],
      },
      {
        group: "Tooling and deployment",
        items: [
          "Task automation via Taskfile.yml (Go Task) for one-command local setup",
          "Separate deploy pipelines: Render for the Django API, Vercel for the Vite static build",
          "TypeScript project references for split app and tooling type-checking",
        ],
      },
    ],
    skills:
      "Full-stack development, REST API design, OAuth and JWT authentication flows, relational data modelling and migrations, responsive UI engineering with a modern component system, automated testing across frontend and backend, and multi-service cloud deployment and CI configuration.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
