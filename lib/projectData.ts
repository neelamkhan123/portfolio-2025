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
    description: `- Uses Firebase Authentication to sign up, login, and logout
- Uses NewsAPI to get, post and delete news articles
- Search engine to explore specific topics, languages etc.
- Bookmark artcles and view them in your dashbaord
- Delete bookmarks`,
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
    description: `- Uses Firebase Authentication to sign up, login, and logout
- Spoonacular API
- State management with localStorage
- Search recipes using both search bars
- Discover recipes on explore page
- View whole recipes including: name, ingredients, steps, and nutrition data
- Add and delete recipes of your own
- Bookmark recipes`,
  },
];
