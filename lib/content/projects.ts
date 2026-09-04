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
  imageHeader?: string;
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
    imageHeader: "/neelam-ui.png",
    pitch:
      "47 React components built to the WAI-ARIA Authoring Practices Guide and published to npm as neelam-ui, with dual ESM/CJS builds, generated types and a documentation site at neelamui.com that consumes the built package exactly as an outside project would. All 208 Storybook stories are run against axe-core in CI, so an accessibility regression fails the build before it can merge.",
    navLabel: "Component library",
    kicker: "Project, built outside work",
    title: "Accessible component library - neelam-ui",
    cardKicker: "Published to npm",
    blurb:
      "47 React components built to the WAI-ARIA APG, shipped as neelam-ui with a Next.js documentation site at neelamui.com and axe-core enforced in CI.",
    cardTech: ["TypeScript", "React", "Next.js"],
    summary:
      "A published React component library of 47 accessible components, built to the WAI-ARIA Authoring Practices Guide and shipped to npm as neelam-ui. It lives in a monorepo alongside its own documentation site at neelamui.com — a Next.js App Router build with MDX pages, generated prop tables and a gallery of whole-screen blocks — with unit, accessibility and axe-core story testing enforced in CI and releases published through npm trusted publishing.",
    tech: [
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Next.js 15",
      "Storybook 10",
      "Vitest",
      "tsup",
    ],
    repo: "https://github.com/neelamkhan123/component-library",
    demo: "https://neelamui.com",
    demoLabel: "Live documentation",
    metrics: [
      {
        label: "Components published",
        value: "47",
        note: "each with stories and tests",
      },
      {
        label: "Stories swept by axe",
        value: "208",
        note: "in a real browser, every push",
      },
      { label: "Test files", value: "48", note: "Vitest, RTL and jest-axe" },
      {
        label: "Blocks",
        value: "8",
        note: "whole screens built from the library",
      },
    ],
    features: [
      {
        title: "47 components",
        body: "From primitives (Button, Input, Checkbox) to composite widgets (Dialog, Combobox, Command palette, DataTable, Carousel, Calendar, Sidebar, Resizable) and data display (Chart, Sparkline, StatCard), each with its own Storybook stories and test suite.",
      },
      {
        title: "Accessibility as the design constraint",
        body: "Every interactive component implements the WAI-ARIA APG pattern for its widget type: correct roles and ARIA relationships, full keyboard support, and managed focus.",
      },
      {
        title: "Native platform first",
        body: "Dialog is a real <dialog> driven by showModal(), so the focus trap, Escape-to-close, and top-layer stacking come from the browser rather than hand-rolled JavaScript; menus, popovers, selects and tooltips use the native Popover API, and collapsed regions are removed from the tab order with inert.",
      },
      {
        title: "Automated a11y testing in CI",
        body: "All 208 stories are run against axe-core through the Storybook test runner in a real Chromium, alongside 48 Vitest files using React Testing Library and jest-axe. CI deploys the exact artifact it just tested rather than rebuilding it.",
      },
      {
        title: "Its own documentation site",
        body: "neelamui.com is a Next.js App Router site with MDX pages, statically exported to S3 and CloudFront. It depends on neelam-ui as a workspace package and imports the built dist, so the docs exercise the published surface an outside consumer gets; prop tables are generated from the library's own TSDoc and every example renders live beside its verbatim source.",
      },
      {
        title: "Blocks gallery",
        body: "Eight whole-screen compositions — an analytics dashboard, account settings, sign-in and sign-up, pricing, a team table, an FAQ and a chat panel — each assembled only from published components and copy-pasteable as-is.",
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
        body: "Versioned with changesets and published to npm through OIDC trusted publishing with build provenance, as dual ESM/CJS bundles with generated TypeScript declarations and MIT licensing including third-party notices.",
      },
    ],
    stack: [
      {
        group: "Library",
        items: [
          "React 19 + TypeScript, authored as a headless-leaning component API",
          "Tailwind CSS 4 for styling, class-variance-authority for variant-driven props, tailwind-merge so a passed className reliably beats a component default",
          "Native browser primitives (<dialog>, the Popover API, inert) in place of JavaScript reimplementations",
          "Recharts as an optional peer dependency, used only by the charting components",
        ],
      },
      {
        group: "Documentation",
        items: [
          "Next.js 15 App Router + MDX, statically exported and served from neelamui.com behind AWS CloudFront",
          "Prop tables generated from the library's TSDoc with react-docgen-typescript; examples and blocks generated into a registry at build time so each demo ships with its own verbatim source",
          "Storybook 10 with the a11y addon, one story file per component, published separately at storybook.neelamui.com",
        ],
      },
      {
        group: "Testing",
        items: [
          "Vitest + React Testing Library + jest-axe for unit and accessibility assertions (48 test files)",
          "Storybook test runner with axe-playwright running axe-core over all 208 stories in a real browser",
        ],
      },
      {
        group: "Build and distribution",
        items: [
          "npm workspaces monorepo: the package, the docs site, and the CloudFront edge function that redirects the legacy URLs",
          "tsup producing ESM + CJS bundles with TypeScript declaration files",
          "Published to npm as neelam-ui with an exports map and peer-dependency ranges for React; releases versioned by changesets and published via OIDC trusted publishing with provenance",
          "GitHub Actions CI running lint, the unit suite, the package build, the docs typecheck and build, and the full axe-core story sweep on every push and pull request",
        ],
      },
    ],
    skills:
      "Accessibility engineering to a published specification (WAI-ARIA APG), design-system and component API design, keyboard and focus management, automated accessibility testing, npm package authoring and distribution (bundling, type declarations, release automation, licensing and compliance), monorepo tooling, documentation-site engineering with Next.js and MDX, and CI/CD pipeline configuration.",
  },
  {
    slug: "oss-health-dashboard",
    label: "Full stack",
    tint: "p2",
    imageHeader: "/oss-dashboard.png",
    pitch:
      "A GitHub analytics dashboard that ingests pull requests, issues, commits and contributors on a schedule, then reports how long PRs take to merge and whether the backlog is growing. Redis caching took the landing request from 1,510ms to 71ms at p50, and the whole thing runs on a single-node k3s cluster for £0 a month.",
    navLabel: "OSS health dashboard",
    kicker: "Project, built outside work",
    title: "OSS health dashboard",
    cardKicker: "Deployed to a k3s cluster",
    blurb:
      "Full-stack GitHub analytics: scheduled ingestion on Celery, Redis caching that cut load time 21x, benchmarked and written up.",
    cardTech: ["FastAPI", "PostgreSQL", "Kubernetes"],
    summary:
      "A full-stack dashboard that tracks the health of open-source repositories, syncing pull requests, issues, commits and contributors from the GitHub API on a schedule, then reporting how long PRs take to merge, whether the issue backlog is growing, and who is active over the last 90 days. Repos are tracked per user, compared side by side and drilled into individually. Built on my own published component library, and deployed to a real Kubernetes cluster.",
    tech: [
      "TypeScript",
      "React 19",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Kubernetes (k3s)",
    ],
    repo: "https://github.com/neelamkhan123/oss-health-dashboard",
    demo: "https://oss-dashboard.duckdns.org",
    demoLabel: "Live demo",
    metrics: [
      {
        label: "Dashboard load, p50",
        value: "71ms",
        note: "21x faster, from 1,510ms",
      },
      {
        label: "Initial JavaScript",
        value: "368 KB",
        note: "53% smaller, from 782 KB",
      },
      {
        label: "Lighthouse performance",
        value: "0.98",
        note: "CLS 0, signed out and in",
      },
      {
        label: "Monthly hosting cost",
        value: "£0",
        note: "down from $39 on managed services",
      },
    ],
    features: [
      {
        title: "Scheduled ingestion pipeline",
        body: "Celery beat triggers a sync every 15 minutes; a worker paginates the GitHub API across pull requests, issues, commits, contributors, reviews and issue comments, caching responses to stay well inside the rate limit.",
      },
      {
        title: "Repos tracked, compared and drilled into",
        body: "Each user keeps their own watchlist, sees every tracked repo side by side over a chosen window, and can open one for its full contributor and trend breakdown. Syncs can be triggered and stopped from the UI rather than only on the schedule.",
      },
      {
        title: "Measured performance work, not asserted",
        body: "Every optimisation was benchmarked against 1,000 to 1,800 PRs per repository and written up in PERFORMANCE.md, including the places where the expected win turned out not to exist.",
      },
      {
        title: "21x faster dashboard load",
        body: "Redis caching takes the landing request from 1,510ms to 71ms at p50, and from 6.5 to 136 requests per second under concurrency. Measuring the uncached path honestly needed a distinct cache key per request, since hammering one URL only ever misses once.",
      },
      {
        title: "Aggregation pushed into SQL",
        body: "Moving per-repo statistics from Python-side loops into SQL aggregates is 2.3x faster on a 1,048-PR repository and 4.3x on an 1,818-PR one — and, unlike the naive version, roughly flat in the number of rows rather than growing with them.",
      },
      {
        title: "53% smaller initial bundle",
        body: "Route-level and chart-library code splitting cuts initial JavaScript from 782KB to 368KB, worth around 0.4s of LCP on a simulated mobile connection. Lighthouse scores 0.98 with a CLS of 0 on both the login page and the signed-in dashboard.",
      },
      {
        title: "Three ways in, one account",
        body: "Email and password, Continue with GitHub, and Continue with Google, driven off one provider table so a fourth is a line of config plus two functions. A provider signing in with a verified email links onto the existing account rather than forking a second one — unverified addresses are refused, since accepting them would let anyone set a victim's address at some provider and sign straight in. Providers can be unlinked again, unless it would remove the account's last way back in.",
      },
      {
        title: "Revocable sessions by design",
        body: "Authentication uses opaque random tokens in Redis rather than JWTs, because a JWT is only as revocable as its expiry; sign-out is a single DEL. Sessions are httpOnly cookies, the OAuth round trip is CSRF-protected by a state cookie compared in constant time, and failed logins are rate limited per email and IP pair — both, so neither a shared IP nor a targeted email can be used to lock someone out.",
      },
      {
        title: "Real Kubernetes, not a demo",
        body: "A single-node k3s cluster running Postgres as a StatefulSet with a PersistentVolumeClaim, Redis in-cluster, migrations as a one-off Job, readiness and liveness probes on every workload, and the API, worker and scheduler as three Deployments of one image so each restarts independently. Beat is pinned to one replica — a second would double-fire every sync.",
      },
      {
        title: "One origin, no CORS",
        body: "nginx serves the built SPA and proxies /api to the API Service, so the browser sees a single origin and the session cookie stays first-party. Nothing in the build knows the deployment's address, which is what lets the whole stack be destroyed and recreated at a different IP.",
      },
      {
        title: "Cost engineering as an explicit decision",
        body: "The managed-services design (RDS + ElastiCache + always-on compute) would have cost about $39/month. Moving the data tier into the cluster took it to ~$11, and moving the cluster onto an always-free ARM host took it to £0/month — with a permanently live URL rather than one that exists only during a demo, and the trade-offs documented rather than hidden.",
      },
    ],
    stack: [
      {
        group: "Backend",
        items: [
          "FastAPI + SQLAlchemy 2.0 with Alembic migrations, running on PostgreSQL",
          "Celery worker and beat scheduler over Redis, which doubles as response cache and session store",
          "Opaque-token session auth with bcrypt password hashing, login rate limiting keyed on email and IP, and GitHub/Google OAuth alongside email and password, with multiple providers linkable to one account",
        ],
      },
      {
        group: "Frontend",
        items: [
          "React 19 + TypeScript + Vite with React Router 7, styled with Tailwind CSS 4",
          "Built on neelam-ui, my own published component library, consumed as a real npm dependency",
          "Recharts for trend visualisation, lazy-loaded so it stays out of the initial bundle; web-vitals reporting in the browser",
        ],
      },
      {
        group: "Infrastructure",
        items: [
          "Docker Compose for local development, driven by a Taskfile so setup is two commands",
          "Kubernetes (k3s) in production: separate Deployments for API, worker and scheduler, nginx serving the SPA and proxying the API from one origin, and Caddy terminating TLS with automatically renewed certificates on a free DuckDNS subdomain",
          "Multi-architecture container images (arm64 + amd64) published to Docker Hub",
          "Scripted, idempotent deployments to either an always-free ARM host or an on-demand cloud instance",
        ],
      },
      {
        group: "CI",
        items: [
          "GitHub Actions running pytest against live Postgres and Redis service containers with migrations applied first, frontend lint, typecheck and build, and Lighthouse CI asserting performance, accessibility, CLS, LCP and blocking-time budgets over three runs",
        ],
      },
    ],
    skills:
      "Backend API design and data modelling, background job scheduling and third-party API integration, query optimisation and cache strategy backed by benchmarks, authentication and session security, Kubernetes manifest authoring and cluster operation, infrastructure automation, CI pipeline configuration, and cost-aware architecture decisions with the trade-offs written down.",
  },
  {
    slug: "task-manager",
    label: "Full stack",
    tint: "p3",
    imageHeader: "/to-do.png",
    pitch:
      "A decoupled Django REST API and React SPA with Google Sign-In, JWT sessions and per-user task scoping. Tested on both sides — APITestCase on the backend, Vitest and Testing Library on the front, 34 tests in all — and deployed across two independent pipelines.",
    navLabel: "Task manager",
    kicker: "Project, built outside work",
    title: "Task manager",
    cardKicker: "Two deploy pipelines",
    blurb:
      "Decoupled Django REST API and React SPA with Google Sign-In, JWT sessions, per-user scoping and tests across both layers.",
    cardTech: ["Django", "React", "OAuth"],
    summary:
      "A full-stack task management application with Google authentication, priority-based organization, and a responsive, accessible UI. Built as a decoupled REST API (Django) + SPA (React) architecture, tested on both sides, and deployed across two platforms — Render for the API, Vercel for the frontend.",
    tech: [
      "TypeScript",
      "React 19",
      "Django 6",
      "Django REST Framework",
      "PostgreSQL",
    ],
    repo: "https://github.com/neelamkhan123/todo-project",
    demo: "https://todo-app-six-wine-55.vercel.app/",
    demoLabel: "Live demo",
    metrics: [
      {
        label: "Architecture",
        value: "API + SPA",
        note: "deployed independently",
      },
      {
        label: "Tests across both layers",
        value: "34",
        note: "11 APITestCase, 23 Vitest + RTL",
      },
      {
        label: "Authentication",
        value: "OAuth + JWT",
        note: "server-verified ID tokens",
      },
    ],
    features: [
      {
        title: "Google Sign-In (OAuth 2.0)",
        body: "Users authenticate with their Google account; the backend verifies the ID token server-side against the app's client ID, then finds or creates the user from the token's subject claim and issues JWTs for session management.",
      },
      {
        title: "JWT-based auth",
        body: "Stateless authentication via djangorestframework-simplejwt, with 12-hour access tokens and a refresh token issued alongside. DRF is locked down globally: JWT is the only authentication class and every endpoint requires an authenticated user unless it opts out.",
      },
      {
        title: "Per-user task ownership",
        body: "The ViewSet's queryset is filtered to request.user and creation stamps the owner from the request, so the API only ever returns or mutates the authenticated user's own data — asserted from both directions in the tests.",
      },
      {
        title: "Priority levels",
        body: "Low, medium and high priorities with a custom priority selector UI, backed by five migrations including a data migration that remaps legacy priority values and one that introduced per-user ownership.",
      },
      {
        title: "Full CRUD",
        body: "A DRF ModelViewSet behind a router on the API side; on the client, all/active/completed filter tabs, paged four tasks at a time, with inline editing and delete confirmation modals.",
      },
      {
        title: "Responsive, accessible UI",
        body: "Ten shadcn-pattern components built on Base UI primitives — dialog, tabs, pagination, checkbox, field and the rest — with toasts through sonner.",
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
          "Django 6 + Django REST Framework, with ViewSets, serializers and a router-generated API",
          "PostgreSQL hosted on Neon, configured from a DATABASE_URL via dj-database-url",
          "djangorestframework-simplejwt for JWT issuance and verification, google-auth for verifying Google OAuth ID tokens",
          "django-cors-headers to allow the separately deployed SPA origin, WhiteNoise for compressed hashed static files, and Gunicorn as the production WSGI server",
        ],
      },
      {
        group: "Testing",
        items: [
          "Backend: Django/DRF APITestCase covering the Todo API's ownership rules from both sides and the Google login flow with mocked token verification (11 tests)",
          "Frontend: Vitest + React Testing Library + jsdom, with component-level tests for the task list, modals and priority selector (23 tests across 5 files)",
        ],
      },
      {
        group: "Tooling and deployment",
        items: [
          "Task automation via Taskfile.yml (Go Task) for one-command local setup",
          "Separate deploy pipelines: Render for the Django API, built by a build.sh that installs, collects static files and migrates; Vercel for the Vite static build",
          "TypeScript project references for split app and tooling type-checking",
        ],
      },
    ],
    skills:
      "Full-stack development, REST API design, OAuth and JWT authentication flows, relational data modelling and migrations, responsive UI engineering with a modern component system, automated testing across frontend and backend, and multi-service cloud deployment.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
