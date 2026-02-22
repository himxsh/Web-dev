# 🚀 Web Development Mastery Plan — AI Context File

> **Student**: Himesh Jain
> **Start Date**: February 18, 2026
> **Prerequisites**: HTML & CSS (already known)
> **Goal**: Complete mastery of full-stack web development

---

## 📋 AI Agent Instructions — READ THIS FIRST

> [!CAUTION]
> **Every AI agent MUST read this entire section before starting a teaching session.**

### Core Rules

1. **Read the Progress Tracker** to find the first incomplete item `[ ]`. That is today's lesson.
2. **All code and exercises** go inside `/Users/himeshjain/Desktop/projects/js/` using the folder structure defined below.
3. **After each session**, update the Progress Tracker (`[ ]` → `[x]`) and add a row to the Session Log.

### 🎓 Teaching Methodology — CRITICAL

> [!IMPORTANT]
> **These rules are NON-NEGOTIABLE. Follow them exactly. Do not over-help.**

#### Rule 1: Concept → Example → Challenge → Verify

Every topic must follow this exact flow:
1. **Explain** the concept with simple analogies and real-world context
2. **Show ONE small example** to illustrate — keep it minimal
3. **Give a coding challenge** — the student MUST write the code themselves
4. **Review their code** — give feedback, point out improvements
5. **Only move on** when the student demonstrates understanding

#### Rule 2: Regular Coding Challenges (Every 15–20 Minutes)

- After explaining each sub-concept, **immediately ask the student to code something**
- These should range from small (1–5 lines) to medium (a small function/component)
- Format challenges clearly:
  ```
  🧩 CHALLENGE: [Clear description of what to build]
  Requirements:
  - [Requirement 1]
  - [Requirement 2]
  Try it yourself first! Ask me for hints if you get stuck.
  ```
- **Wait for the student's attempt** before proceeding
- End-of-day challenges should be larger and combine multiple concepts from the day

#### Rule 3: NEVER Give Away Answers

When the student asks for help on a challenge:
- **Level 1** — Ask a guiding question: *"What do you think happens when...?"*
- **Level 2** — Give a conceptual hint: *"Think about how arrays store data..."*
- **Level 3** — Give a structural hint: *"You'll need a loop and a conditional here..."*
- **Level 4** — Show pseudocode only: *"First get the input, then check if..., then return..."*
- **Level 5** — Only if truly stuck after multiple attempts, walk through the solution **step by step**, explaining each line, and then give a **similar follow-up challenge** to confirm understanding

**NEVER jump straight to Level 5.** Always start at Level 1 and escalate only as needed.

#### Rule 4: Comprehension Gates

Before moving to the next topic, verify understanding:
- Ask the student to **explain the concept back** in their own words
- Ask a **"what would happen if..."** question to test deeper understanding
- If the student cannot explain it clearly, **re-teach with a different example** before moving on

#### Rule 5: Spaced Repetition

- At the **start of each session**, spend 5 minutes reviewing 2–3 concepts from previous days
- Ask quick-fire questions: *"Without looking, what does `.map()` return?"*
- If the student struggles, note it in the Session Log for future review

#### Rule 6: Encourage & Motivate

- Celebrate wins: *"That's a clean solution! 🎉"*
- Normalize mistakes: *"This is a super common gotcha, even senior devs hit this"*
- Show real-world relevance: *"Companies like Netflix use this exact pattern"*

#### Rule 8: Scope of Assistance (The "No Spoiler" Rule)

- If the student asks about a specific tool/concept (e.g., *"How does `rm` work?"*), explain **only** the tool/concept generically.
- **NEVER** immediately apply it to the current challenge.
- **Bad**: "Use `rm -rf .git` to fix it."
- **Good**: "`rm -r` removes directories. Now, given that, which command would you run to remove the `.git` folder?"

#### Rule 9: Daily Evaluation & Scoring

- **After every session**, you MUST evaluate the student's performance.
- Add a **Score (0-100)** and a **One-line Remark** to the completed item in the Progress Tracker.
- **Be Unbiased**:
  - 100 = Perfect understanding, no hints needed, solved challenges instantly.
  - 90-99 = Great understanding, minor syntax errors, maybe 1 small hint.
  - 80-89 = Good, but needed a few hints or had logical gaps.
  - < 80 = Struggled significantly, needed step-by-step walkthroughs.
- **Format**: `[x] Day X — Topic (Date) — **Score: 85/100** — *Remark: Good grasp of basic concepts but struggled with nested loops.*`

---

## 🗺️ Mastery Roadmap Overview

| Phase | Topic | Duration | Goal |
|-------|-------|----------|------|
| 0 | **Git & GitHub** | Days 1–3 | Version control mastery |
| 1 | **JavaScript Fundamentals** | Days 4–18 | Core JS: syntax, functions, DOM, async |
| 2 | **Advanced JavaScript** | Days 19–28 | OOP, closures, prototypes, modules, ES6+ |
| 3 | **Node.js & Backend Basics** | Days 29–38 | Server-side JS, file system, npm, HTTP |
| 4 | **Express.js & REST APIs** | Days 39–50 | APIs, middleware, auth, databases |
| 5 | **React.js** | Days 51–72 | Components, hooks, routing, state management |
| 6 | **TypeScript** | Days 73–85 | Type system, generics, TS with React & Node |
| 7 | **Next.js & Modern Stack** | Days 86–98 | SSR/SSG, Tailwind CSS, Prisma, PostgreSQL |
| 8 | **Testing & Quality** | Days 99–106 | Jest, React Testing Library, E2E, CI |
| 9 | **GraphQL** | Days 107–112 | Apollo, queries, mutations, subscriptions |
| 10 | **DevOps & Deployment** | Days 113–118 | Docker, CI/CD, AWS/Vercel, monitoring |
| 11 | **Full-Stack Capstone** | Days 119–135 | Production-grade project from scratch |
| 12 | **Mastery & Portfolio** | Days 136–140 | Open source, portfolio, interview prep |

---

## 📖 Detailed Daily Plan

---

### Phase 0: Git & GitHub (Days 1–3)

> **Goal**: Version control is the backbone of all professional development. Learn it first.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 1 | **Git Basics** | `init`, `add`, `commit`, `status`, `log`, `.gitignore`, staging area vs working directory | Initialize a repo, make 5 meaningful commits, write good commit messages |
| 2 | **Branching & Merging** | `branch`, `checkout`, `merge`, merge conflicts, `stash`, branch strategies | Create feature branches, resolve a merge conflict manually |
| 3 | **GitHub & Collaboration** | Remote repos, `push`, `pull`, `clone`, pull requests, forks, GitHub workflow | Push your project to GitHub, open a PR, review a diff |

---

### Phase 1: JavaScript Fundamentals (Days 4–18)

> **Goal**: Build an unshakeable JS foundation. Everything else rests on this.

#### Week 1 — Core Syntax & Logic

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 4 | **JS Intro & Setup** | How browsers run JS, `<script>`, console, `let`/`const`/`var`, semicolons, strict mode | Variable swap without temp var, temperature converter, personal bio printer |
| 5 | **Data Types & Operators** | Primitives, type coercion, `typeof`, `===` vs `==`, logical operators, nullish coalescing | Type prediction quiz (predict output before running), expression evaluator |
| 6 | **Conditionals** | `if/else`, `switch`, ternary, truthy/falsy, nested conditions | Grade calculator, leap year checker, rock-paper-scissors logic |
| 7 | **Loops** | `for`, `while`, `do-while`, `for...of`, `for...in`, `break`/`continue`, nested loops | FizzBuzz, pyramid pattern, find prime numbers up to N |
| 8 | **Functions — Basics** | Declarations, expressions, arrow functions, parameters, defaults, return, scope | Build a mini math library (factorial, isPrime, fibonacci) |
| 9 | **Functions — Advanced** | Higher-order functions, callbacks intro, closures preview, recursion | Implement your own `forEach`, recursive countdown, power function |
| 10 | **Strings & Numbers** | String methods, template literals, regex basics, `Math`, `parseInt`/`parseFloat`, `NaN` | Palindrome checker, word frequency counter, Caesar cipher |

#### Week 2 — Data Structures & DOM

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 11 | **Arrays — Part 1** | Creating, accessing, `push/pop/shift/unshift`, `splice`, `slice`, spread, destructuring | Rotate array, remove duplicates, flatten nested array (without `.flat()`) |
| 12 | **Arrays — Part 2** | `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`, chaining | Student grade analyzer, shopping cart total, group items by category |
| 13 | **Objects** | Literals, dot/bracket, methods, `this`, destructuring, `Object.keys/values/entries`, spread | User profile builder, deep clone (without JSON trick), object diff checker |
| 14 | **DOM Manipulation — Part 1** | `querySelector/All`, `getElementById`, `textContent`, `innerHTML`, `classList`, `style`, attributes | Dynamic card generator, theme toggler, live character counter |
| 15 | **DOM Manipulation — Part 2** | `createElement`, `appendChild`, `insertBefore`, `remove`, `cloneNode`, traversal, fragments | Build a dynamic list with add/delete, table generator from data |
| 16 | **Events** | `addEventListener`, event object, delegation, bubbling/capturing, `preventDefault`, custom events | Interactive form validation, keyboard shortcuts handler, drag indicator |
| 17 | **Local Storage & JSON** | `JSON.stringify/parse`, `localStorage/sessionStorage`, data persistence patterns | Persist a todo list, user preferences system, data export/import |
| 18 | **🏗️ Phase 1 Project** | Combine everything | **Personal Expense Tracker** — DOM + events + localStorage + input validation |

---

### Phase 2: Advanced JavaScript (Days 19–28)

> **Goal**: Understand the "why" behind JS. This separates juniors from seniors.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 19 | **Scope & Closures** | Lexical scope, closure patterns, IIFE, private variables, factory functions, memory implications | Build a counter with private state, memoize function, rate limiter |
| 20 | **`this` Deep Dive** | `this` in different contexts, `.bind/.call/.apply`, arrow functions & `this`, common pitfalls | Fix broken `this` bugs, method borrowing, event handler `this` issues |
| 21 | **Prototypes & Inheritance** | Prototype chain, `__proto__`, `Object.create`, constructor functions, `instanceof` | Build Animal → Dog chain, implement `instanceof` from scratch |
| 22 | **ES6 Classes** | `class`, `constructor`, `extends`, `super`, static, getters/setters, private fields (`#`) | Shape hierarchy with area/perimeter, linked list class |
| 23 | **Callbacks & Event Loop** | Call stack, Web APIs, callback queue, microtask queue, `setTimeout`, `setInterval` | Predict execution order puzzles, build debounce & throttle from scratch |
| 24 | **Promises** | `new Promise`, `.then/.catch/.finally`, chaining, `Promise.all/race/allSettled/any` | Promisify callbacks, simulate API calls, parallel vs sequential fetching |
| 25 | **Async/Await** | `async` functions, `await`, error handling, sequential vs parallel, top-level await | Refactor promise chains, retry function with exponential backoff |
| 26 | **Fetch API & HTTP** | `fetch()`, request methods, headers, response handling, error handling, AbortController | Build a **Weather Dashboard** using a free API |
| 27 | **ES6+ Modules & Tooling** | `import/export`, default/named, dynamic imports, module patterns, intro to bundlers | Refactor weather app into clean modules |
| 28 | **🏗️ Phase 2 Project** | Combine advanced concepts | **GitHub Profile Viewer** — fetch + async + DOM + modules + error handling |

---

### Phase 3: Node.js & Backend Basics (Days 29–38)

> **Goal**: Transition from browser to server. Understand how the internet works.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 29 | **Node.js Intro** | What is Node, V8 engine, REPL, `process`, `__dirname`, `__filename`, global vs browser | "Hello Server" script, CLI argument parser, system info reporter |
| 30 | **Modules & npm** | `require` vs `import`, CommonJS vs ESM, creating modules, `npm init`, `package.json`, semver | Build a utility module, use `chalk` + `inquirer`, understand `node_modules` |
| 31 | **File System (`fs`)** | `readFile/writeFile/appendFile`, `readdir`, `stat`, `mkdir`, sync vs async vs promises API | Note-taking CLI app, markdown-to-HTML converter, file organizer |
| 32 | **Path, OS & Events** | `path.join/resolve/parse`, `os` module, `EventEmitter`, custom events, observer pattern | Logger with events, file watcher, system health monitor |
| 33 | **HTTP Module** | `http.createServer`, request/response objects, status codes, routing, serving HTML/JSON | Raw HTTP server with multiple routes, static file server |
| 34 | **Streams & Buffers** | Readable/writable/transform streams, piping, `Buffer`, backpressure, processing large files | File copy with streams, CSV parser, word count for huge files |
| 35 | **Error Handling & Debugging** | `try/catch`, custom error classes, `process.on('uncaughtException')`, Node debugger, `--inspect` | Add robust error handling to previous projects |
| 36 | **Environment & Config** | `.env` files, `dotenv`, `process.env`, config patterns, secrets management | Configurable multi-environment server |
| 37 | **Databases Intro** | SQL vs NoSQL, MongoDB basics, Mongoose, schemas, CRUD, indexing, relationships | Set up MongoDB, model a blog (users, posts, comments) |
| 38 | **🏗️ Phase 3 Project** | Combine Node concepts | **CLI Task Manager** — fs + modules + inquirer + JSON persistence |

---

### Phase 4: Express.js & REST APIs (Days 39–50)

> **Goal**: Build production-quality APIs that real frontends consume.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 39 | **Express Intro** | What is Express, `app.get/post`, `req/res`, `app.listen()`, nodemon, project structure | "Hello Express" with multiple routes, JSON responses |
| 40 | **Routing** | Route params, query strings, `express.Router()`, route organization, RESTful conventions | RESTful routes for a bookstore (design the API first, then implement) |
| 41 | **Middleware** | `app.use()`, custom middleware, `next()`, middleware chain, order matters, third-party middleware | Logger, request timer, API key validator, CORS handler |
| 42 | **Request Body & CRUD** | `express.json()`, POST/PUT/PATCH/DELETE, in-memory CRUD, HTTP status codes | Full CRUD API for notes — test with Postman/Thunder Client |
| 43 | **MongoDB + Mongoose** | Connecting Express to Mongo, schemas, models, validation, virtuals, hooks, population | Convert notes API to MongoDB, add author references |
| 44 | **PostgreSQL + Prisma** | Relational databases, SQL basics, Prisma ORM, migrations, relations, typed queries | Build same notes API with PostgreSQL + Prisma |
| 45 | **Validation & Error Handling** | `joi` or `zod`, error middleware, async wrapper, centralized error handling, HTTP error classes | Validate all inputs, meaningful error responses |
| 46 | **Authentication — Part 1** | Hashing (`bcrypt`), JWT (access + refresh tokens), signup/login flow, password security | User registration + login, token generation |
| 47 | **Authentication — Part 2** | Auth middleware, protected routes, role-based access, token refresh, logout | Protect notes API — users own their notes, admin role |
| 48 | **File Uploads & Static** | `multer`, file validation, `express.static()`, serving uploads, cloud storage intro | Profile picture upload + avatar serving |
| 49 | **API Best Practices** | Pagination, filtering, sorting, rate limiting, versioning, documentation (Swagger) | Add pagination + filtering to notes API, write API docs |
| 50 | **🏗️ Phase 4 Project** | Complete backend | **RESTful Blog API** — auth + CRUD + MongoDB + Prisma + validation + docs |

---

### Phase 5: React.js (Days 51–72)

> **Goal**: Master the most in-demand frontend framework. Think in components.

#### Week 1 — React Fundamentals

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 51 | **React Intro & Setup** | What/why React, Virtual DOM, Vite, JSX, rendering, component mindset | "Hello React", JSX experiments, component tree exercise |
| 52 | **Components & Props** | Functional components, props, destructuring, composition, children, prop types | Profile card, product card, reusable Button component |
| 53 | **Lists & Conditional Rendering** | `.map()` in JSX, `key`, `&&`, ternary, early returns, rendering patterns | User list, filtered table, empty state handling |
| 54 | **State with `useState`** | `useState`, updater functions, state vs props, derived state, lifting state up | Counter, toggle, temperature converter with two-way binding |
| 55 | **Events & Forms** | Event handling, synthetic events, controlled components, form submission, multi-field forms | Registration form with validation, live search filter |
| 56 | **Styling in React** | CSS modules, inline styles, conditional classes, CSS variables, Tailwind intro | Styled component library (buttons, cards, inputs, modals) |
| 57 | **🏗️ Mini Project** | Combine fundamentals | **Recipe Finder App** — components + state + lists + styling |

#### Week 2 — Hooks & Side Effects

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 58 | **`useEffect` Basics** | Side effects, dependency array, cleanup, API calls on mount, loading/error states | Fetch and display data from a public API |
| 59 | **`useEffect` Advanced** | Multiple effects, race conditions, AbortController, stale closures, data fetching patterns | Search-as-you-type with debounce, cleanup on unmount |
| 60 | **`useRef` & `useMemo`** | DOM refs, mutable refs, memoization, `React.memo`, `useCallback`, when to optimize | Focus management, expensive list rendering, infinite scroll |
| 61 | **Custom Hooks** | Extracting logic, `useLocalStorage`, `useFetch`, `useDebounce`, `useMediaQuery` | Build a hooks utility library, use in previous projects |
| 62 | **Context API** | `createContext`, `useContext`, Provider pattern, context vs prop drilling, performance | Theme system (light/dark/custom), auth context |
| 63 | **`useReducer`** | Reducer pattern, vs `useState`, dispatch actions, complex state logic | Shopping cart with add/remove/update quantity/clear |
| 64 | **🏗️ Mini Project** | Hooks mastery | **Movie Search App** — API + hooks + context + reducer |

#### Week 3 — Routing, State, & Production

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 65 | **React Router Basics** | `BrowserRouter`, `Route`, `Link`, `useNavigate`, `useParams`, nested routes, `Outlet` | Multi-page app: Home, About, Products, Product Detail |
| 66 | **React Router Advanced** | Protected routes, layouts, 404, `useSearchParams`, loaders, lazy routes | Dashboard layout with auth-guarded sections |
| 67 | **State Management (Zustand)** | Why external state, Zustand stores, selectors, middleware, devtools | Global state for e-commerce: cart, auth, preferences |
| 68 | **Redux Toolkit** | Store, slices, reducers, actions, `useSelector`, `useDispatch`, RTK Query intro | Convert e-commerce state to Redux, async thunks |
| 69 | **Performance & Patterns** | React DevTools, code splitting, `lazy/Suspense`, error boundaries, render optimization | Profile and optimize movie app, add error boundaries |
| 70 | **Accessibility & Best Practices** | ARIA, keyboard nav, semantic HTML in React, a11y testing, React patterns (compound components) | Audit and fix accessibility in previous projects |
| 71 | **Connecting Frontend to Backend** | Axios, CORS, auth tokens, interceptors, env variables, API service layer | Connect React frontend to Blog API backend |
| 72 | **🏗️ Phase 5 Project** | Full React app | **Blog Frontend** — React + Router + API + auth + state management |

---

### Phase 6: TypeScript (Days 73–85)

> **Goal**: Add type safety to everything. This is the industry standard.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 73 | **TS Intro & Setup** | What/why TS, `tsc`, `tsconfig.json`, basic types, type inference, type errors | Convert simple JS files to TS, fix type errors |
| 74 | **Primitive & Object Types** | `string`, `number`, `boolean`, arrays, tuples, `enum`, type aliases, literal types | Type a user profile, product catalog, API config |
| 75 | **Interfaces & Type Aliases** | `interface` vs `type`, extending, optional/readonly, index signatures, declaration merging | Define API response shapes for Blog API |
| 76 | **Functions & Generics Basics** | Typed params/return, overloads, generic functions, generic constraints | Typed utility library, generic `Stack<T>` class |
| 77 | **Generics Advanced** | Generic interfaces, utility types (`Partial`, `Pick`, `Omit`, `Record`, `Required`), `keyof` | Build a typed API client, form builder types |
| 78 | **Union, Intersection & Narrowing** | Unions, discriminated unions, type guards, `in`, `instanceof`, exhaustive checks | API response handler, type-safe event system |
| 79 | **TypeScript + Node & Express** | Typing Express, `@types/*`, typed middleware, typed req/res, `zod` integration | Convert Blog API to TypeScript |
| 80 | **TypeScript + React — Part 1** | Typed components, props, state, events, `React.FC` debate, children types | Convert form and card components to TS |
| 81 | **TypeScript + React — Part 2** | Typed hooks, context, generics in components, typed API calls, `as const` | Convert Movie Search App to TypeScript |
| 82 | **Advanced Types** | Mapped types, conditional types, `infer`, template literal types, branded types | Type-safe event emitter, builder pattern |
| 83 | **Declaration Files & Config** | `.d.ts`, `strict` mode, project references, path aliases, module resolution | Professional TS project configuration |
| 84 | **TypeScript + Zod** | Runtime validation with Zod, Zod-to-TS inference, form validation, API validation | End-to-end type safety: Zod schemas → API → Frontend |
| 85 | **🏗️ Phase 6 Project** | Full TypeScript conversion | **Convert Blog API + Frontend** to full TypeScript + Zod |

---

### Phase 7: Next.js & Modern Stack (Days 86–98)

> **Goal**: Learn the framework companies actually use in production.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 86 | **Next.js Intro** | What/why Next.js, file-based routing, pages vs app router, SSR vs SSG vs CSR | Create a Next.js app, understand the routing system |
| 87 | **App Router & Layouts** | `app/` directory, layouts, loading/error files, route groups, parallel routes | Multi-section site with shared layouts |
| 88 | **Data Fetching** | Server components, `fetch` in server components, caching, revalidation, streaming | Blog posts from API with ISR |
| 89 | **Server Actions & Forms** | Server actions, form handling, `useFormState`, `useFormStatus`, mutations | Full CRUD with server actions (no API routes needed) |
| 90 | **Tailwind CSS Deep Dive** | Utility classes, responsive design, dark mode, custom config, component patterns | Redesign the blog with Tailwind — make it beautiful |
| 91 | **Tailwind Advanced** | Animations, custom plugins, `@apply`, design systems with Tailwind, shadcn/ui intro | Build a reusable UI component library |
| 92 | **Prisma & PostgreSQL** | Prisma in Next.js, schema design, migrations, relations, seeding, Prisma Studio | Model a project management database |
| 93 | **Prisma Advanced** | Complex queries, transactions, middleware, soft deletes, pagination, full-text search | Advanced API with Prisma: filtering, sorting, relations |
| 94 | **Authentication (NextAuth.js)** | NextAuth setup, providers (credentials, OAuth), sessions, middleware, protected pages | Google + email/password auth |
| 95 | **Image & File Handling** | `next/image`, optimization, Cloudinary/S3 uploads, OG images, metadata API | Image gallery with upload and optimization |
| 96 | **API Routes & Middleware** | Route handlers, Next.js middleware, redirects, rewrites, headers | Rate limiting middleware, analytics tracker |
| 97 | **Performance & SEO** | Core Web Vitals, `next/font`, metadata, sitemap, robots.txt, structured data, Lighthouse | Achieve 90+ Lighthouse score |
| 98 | **🏗️ Phase 7 Project** | Full Next.js app | **SaaS Landing Page + Dashboard** — Next.js + Tailwind + Prisma + Auth |

---

### Phase 8: Testing & Quality (Days 99–106)

> **Goal**: Write code that you can trust. Testing is a senior-level skill.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 99 | **Testing Fundamentals** | Why test, test pyramid, unit/integration/E2E, TDD basics, AAA pattern | Write tests for utility functions from Phase 1–2 |
| 100 | **Jest Deep Dive** | Matchers, mocks, spies, `beforeEach/afterEach`, async testing, coverage | Test the Blog API endpoints |
| 101 | **React Testing Library** | Render, queries, user events, async utilities, testing hooks, MSW for API mocking | Test React components: forms, lists, modals |
| 102 | **Integration Testing** | Testing component interactions, context testing, router testing, API integration tests | Test full user flows: login → create post → view post |
| 103 | **E2E with Playwright** | Browser automation, page objects, assertions, visual testing, CI integration | End-to-end test for the blog app |
| 104 | **Testing Patterns** | Snapshot testing, custom renders, test factories, testing error states, accessibility testing | Comprehensive test suite for a feature |
| 105 | **Code Quality Tools** | ESLint, Prettier, Husky, lint-staged, commitlint, conventional commits | Set up quality pipeline for all projects |
| 106 | **🏗️ Phase 8 Project** | Testing mastery | **Full test suite** for Blog API + Frontend (80%+ coverage) |

---

### Phase 9: GraphQL (Days 107–112)

> **Goal**: Understand the alternative to REST that powers GitHub, Shopify, and more.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 107 | **GraphQL Intro** | What/why GraphQL, schemas, types, queries, mutations, REST vs GraphQL | Design a schema for the blog, run queries in playground |
| 108 | **Apollo Server** | Setting up Apollo, resolvers, context, error handling, data sources | Build a GraphQL API for the blog |
| 109 | **Apollo Client + React** | `useQuery`, `useMutation`, caching, optimistic updates, pagination | Connect React frontend to GraphQL API |
| 110 | **Advanced GraphQL** | Subscriptions, fragments, custom scalars, N+1 problem, DataLoader | Real-time comments with subscriptions |
| 111 | **GraphQL + TypeScript** | `graphql-codegen`, typed resolvers, typed hooks, end-to-end type safety | Fully typed GraphQL stack |
| 112 | **🏗️ Phase 9 Project** | GraphQL mastery | **Convert Blog API to GraphQL** — Apollo Server + Client + subscriptions |

---

### Phase 10: DevOps & Deployment (Days 113–118)

> **Goal**: Ship your code to the real world. Understand production infrastructure.

| Day | Topic | Key Concepts | Challenges |
|-----|-------|-------------|------------|
| 113 | **Docker Basics** | Containers, images, Dockerfile, `docker build/run`, volumes, networking | Dockerize the Blog API |
| 114 | **Docker Compose** | Multi-container apps, `docker-compose.yml`, services, environment, health checks | Full stack in Docker: API + DB + Frontend |
| 115 | **CI/CD Pipelines** | GitHub Actions, workflows, jobs, steps, artifacts, secrets, automated testing | CI pipeline: lint → test → build on every push |
| 116 | **Cloud Deployment** | Vercel (frontend), Railway/Render (backend), managed databases, domains, SSL | Deploy the full-stack blog to production |
| 117 | **Monitoring & Logging** | Application logging, error tracking (Sentry), health checks, uptime monitoring | Add logging and error tracking to deployed app |
| 118 | **Security Best Practices** | OWASP Top 10, XSS, CSRF, SQL injection, rate limiting, helmet.js, HTTPS, CSP | Security audit and hardening of the blog |

---

### Phase 11: Full-Stack Capstone (Days 119–135)

> **Goal**: Build a production-quality app from scratch. This is your portfolio centerpiece.

**Project: TaskFlow** — A collaborative project management tool (mini Trello)

**Tech Stack**: Next.js + TypeScript + Tailwind + Prisma + PostgreSQL + NextAuth

| Day | Topic | What You'll Build |
|-----|-------|-------------------|
| 119 | **Planning** | Requirements, wireframes, database schema, API design |
| 120 | **Project Setup** | Next.js + TS + Tailwind + Prisma + ESLint + Prettier + Git |
| 121 | **Database Design** | Prisma schema: users, projects, boards, columns, tasks, comments |
| 122 | **Auth System** | NextAuth with Google + credentials, middleware, protected routes |
| 123 | **Project CRUD** | Create/read/update/delete projects, team invitations |
| 124 | **Board & Columns** | Kanban board layout, column management, ordering |
| 125 | **Task CRUD** | Create/edit/delete tasks, assignments, due dates, labels |
| 126 | **Drag & Drop** | `@dnd-kit` for task reordering, column reordering, cross-column moves |
| 127 | **Comments & Activity** | Task comments, activity log, @mentions |
| 128 | **Real-time Updates** | WebSocket or Server-Sent Events for live board updates |
| 129 | **Search & Filters** | Full-text search, filter by assignee/label/due date, saved filters |
| 130 | **Responsive Design** | Mobile-first design, touch-friendly drag and drop, PWA basics |
| 131 | **Testing** | Unit tests, integration tests, E2E tests for critical flows |
| 132 | **Performance** | Optimize queries, lazy loading, image optimization, caching strategy |
| 133 | **Deployment** | Docker + CI/CD + Vercel + Railway, environment setup |
| 134 | **Polish** | Animations, error handling, loading states, accessibility audit |
| 135 | **Code Review** | Full code review, refactoring, documentation, README |

---

### Phase 12: Mastery & Portfolio (Days 136–140)

> **Goal**: Present yourself as a professional. Prepare for the real world.

| Day | Topic | Key Concepts |
|-----|-------|-------------|
| 136 | **Portfolio Website** | Build your personal portfolio with Next.js + Tailwind, showcase projects |
| 137 | **Open Source Contribution** | Find a project, understand contribution workflow, submit a PR |
| 138 | **System Design Basics** | Architecture patterns, scaling, caching, CDNs, database design at scale |
| 139 | **Interview Prep — Technical** | Common JS interview questions, coding challenges, algorithm basics |
| 140 | **Interview Prep — Behavioral** | Portfolio walkthrough, project explanations, talking about technical decisions |

---

## 📁 Project Directory Structure

```
/Users/himeshjain/Desktop/projects/js/
├── LEARNING_PLAN.md          ← This file
├── phase-0-git/
│   ├── day-01-git-basics/
│   ├── day-02-branching/
│   └── day-03-github/
├── phase-1-js-fundamentals/
│   ├── day-04-intro/
│   ├── day-05-data-types/
│   ├── day-06-conditionals/
│   ├── day-07-loops/
│   ├── day-08-functions/
│   ├── day-09-functions-advanced/
│   ├── day-10-strings-numbers/
│   ├── day-11-arrays-part-1/
│   ├── day-12-arrays-part-2/
│   ├── day-13-objects/
│   ├── day-14-dom-part-1/
│   ├── day-15-dom-part-2/
│   ├── day-16-events/
│   ├── day-17-local-storage/
│   └── ...
├── phase-2-advanced-js/
├── phase-3-nodejs/
├── phase-4-express/
├── phase-5-react/
├── phase-6-typescript/
├── phase-7-nextjs/
├── phase-8-testing/
├── phase-9-graphql/
├── phase-10-devops/
├── phase-11-capstone/
└── phase-12-portfolio/
```

---

## 📊 Progress Tracker

> [!NOTE]
> AI agents: Update this section after each session.
> Mark items `[x]` with **Date**, **Score**, and **Remark**.
> Example: `- [x] Day 1 — Git Basics (Feb 18, 2026) — **Score: 88/100** — *Remark: Solid understanding of init/add/commit, but needed help reverting mistakes.*`

### Phase 0: Git & GitHub
- [x] Day 1 — Git Basics (Feb 18, 2026) — **Score: 85/100** — *Remark: Good understanding of core commands, accidentally initialized wrong folder but fixed it well.*
- [x] Day 2 — Branching & Merging (Feb 18, 2026) — **Score: 90/100** — *Remark: Excellent grasp of branching/merging; resolved conflict correctly on first try.*
- [x] Day 3 — GitHub & Collaboration (Feb 19, 2026) — **Score: 90/100** — *Remark: Mastered remote repos, PRs, and even set up GitHub CLI (`gh`) for PRO-level merging!*

### Phase 1: JavaScript Fundamentals
- [x] Day 4 — JS Intro & Setup (Feb 19, 2026) — **Score: 92/100** — *Remark: Great start! Mastered variables and logic quickly. Minor syntax trip-up with backticks but recovered fast.*
- [x] Day 5 — Data Types & Operators (Feb 19, 2026) — **Score: 95/100** — *Remark: Excellent logic! Quickly grasped coercion and fixed the operator precedence bug immediately.*
- [x] Day 6 — Conditionals (Feb 19, 2026) — **Score: 90/100** — *Remark: Solid grasp of conditionals. Quickly fixed a logic range bug. Mastered ternary & switch basics.*
- [x] Day 7 — Loops (Feb 19, 2026) — **Score: 95/100** — *Remark: Excellent grasp of loops. Solved all challenges, including nested logic, with ease. Caught the infinite loop trap immediately.*
- [x] Day 8 — Functions — Basics (Feb 21, 2026) — **Score: 100/100** — *Remark: Flawless execution. Grasped parameters, returns, arrow functions, and defaults perfectly.*
- [x] Day 9 — Functions — Advanced (Feb 21, 2026) — **Score: 95/100** — *Remark: Excellent grasp of advanced concepts. Handled closures and recursion smoothly after minor clarifications on callbacks.*
- [x] Day 10 — Strings & Numbers (Feb 21, 2026) — **Score: 98/100** — *Remark: Mastered string methods (split, reverse, join) and correctly identified the function call bug on Math.random().*
- [x] Day 11 — Arrays — Part 1 (Feb 21, 2026) — **Score: 100/100** — *Remark: Excellent execution! Expertly navigated array mutation methods, destructuring, and the spread operator with no hints needed.*
- [x] Day 12 — Arrays — Part 2 (Feb 21, 2026) — **Score: 100/100** — *Remark: Excellent intuition for array iteration. Flawlessly grasped implicit returns in map/filter and successfully chained filter and reduce methods together.*
- [x] Day 13 — Objects (Feb 21, 2026) — **Score: 98/100** — *Remark: Excellent work navigating the `this` keyword and Object helper methods.*
- [x] Day 14 — DOM Manipulation — Part 1 (Feb 21, 2026) — **Score: 95/100** — *Remark: Grasped the concept of the DOM and learned to retrieve/modify elements. Quickly identified and fixed typo bugs.*
- [x] Day 15 — DOM Manipulation — Part 2 (Feb 21, 2026) — **Score: 95/100** — *Remark: Successfully generated and removed DOM nodes dynamically based on array data. Encountered minor Node.js scope confusion but resolved it quickly.*
- [x] Day 16 — Events (Feb 22, 2026) — **Score: 92/100** — *Remark: Excellent intuition for event delegation! Handled keyboard events perfectly. Needed a slight nudge for style assignment but recovered brilliantly.*
- [x] Day 17 — Local Storage & JSON (Feb 22, 2026) — **Score: 95/100** — *Remark: Mastered data persistence. Successfully strung together JSON parsing and Local Storage to create a persistent score counter after a great display of debugging!*
- [ ] Day 18 — Phase 1 Project (Expense Tracker)

### Phase 2: Advanced JavaScript
- [ ] Day 19 — Scope & Closures
- [ ] Day 20 — `this` Deep Dive
- [ ] Day 21 — Prototypes & Inheritance
- [ ] Day 22 — ES6 Classes
- [ ] Day 23 — Callbacks & Event Loop
- [ ] Day 24 — Promises
- [ ] Day 25 — Async/Await
- [ ] Day 26 — Fetch API & HTTP
- [ ] Day 27 — ES6+ Modules & Tooling
- [ ] Day 28 — Phase 2 Project (GitHub Profile Viewer)

### Phase 3: Node.js & Backend Basics
- [ ] Day 29 — Node.js Intro
- [ ] Day 30 — Modules & npm
- [ ] Day 31 — File System (`fs`)
- [ ] Day 32 — Path, OS & Events
- [ ] Day 33 — HTTP Module
- [ ] Day 34 — Streams & Buffers
- [ ] Day 35 — Error Handling & Debugging
- [ ] Day 36 — Environment & Config
- [ ] Day 37 — Databases Intro
- [ ] Day 38 — Phase 3 Project (CLI Task Manager)

### Phase 4: Express.js & REST APIs
- [ ] Day 39 — Express Intro
- [ ] Day 40 — Routing
- [ ] Day 41 — Middleware
- [ ] Day 42 — Request Body & CRUD
- [ ] Day 43 — MongoDB + Mongoose
- [ ] Day 44 — PostgreSQL + Prisma
- [ ] Day 45 — Validation & Error Handling
- [ ] Day 46 — Authentication — Part 1
- [ ] Day 47 — Authentication — Part 2
- [ ] Day 48 — File Uploads & Static
- [ ] Day 49 — API Best Practices
- [ ] Day 50 — Phase 4 Project (RESTful Blog API)

### Phase 5: React.js
- [ ] Day 51 — React Intro & Setup
- [ ] Day 52 — Components & Props
- [ ] Day 53 — Lists & Conditional Rendering
- [ ] Day 54 — State with `useState`
- [ ] Day 55 — Events & Forms
- [ ] Day 56 — Styling in React
- [ ] Day 57 — Mini Project (Recipe Finder)
- [ ] Day 58 — `useEffect` Basics
- [ ] Day 59 — `useEffect` Advanced
- [ ] Day 60 — `useRef` & `useMemo`
- [ ] Day 61 — Custom Hooks
- [ ] Day 62 — Context API
- [ ] Day 63 — `useReducer`
- [ ] Day 64 — Mini Project (Movie Search App)
- [ ] Day 65 — React Router Basics
- [ ] Day 66 — React Router Advanced
- [ ] Day 67 — State Management (Zustand)
- [ ] Day 68 — Redux Toolkit
- [ ] Day 69 — Performance & Patterns
- [ ] Day 70 — Accessibility & Best Practices
- [ ] Day 71 — Connecting Frontend to Backend
- [ ] Day 72 — Phase 5 Project (Blog Frontend)

### Phase 6: TypeScript
- [ ] Day 73 — TS Intro & Setup
- [ ] Day 74 — Primitive & Object Types
- [ ] Day 75 — Interfaces & Type Aliases
- [ ] Day 76 — Functions & Generics Basics
- [ ] Day 77 — Generics Advanced
- [ ] Day 78 — Union, Intersection & Narrowing
- [ ] Day 79 — TypeScript + Node & Express
- [ ] Day 80 — TypeScript + React — Part 1
- [ ] Day 81 — TypeScript + React — Part 2
- [ ] Day 82 — Advanced Types
- [ ] Day 83 — Declaration Files & Config
- [ ] Day 84 — TypeScript + Zod
- [ ] Day 85 — Phase 6 Project (Full TS Conversion)

### Phase 7: Next.js & Modern Stack
- [ ] Day 86 — Next.js Intro
- [ ] Day 87 — App Router & Layouts
- [ ] Day 88 — Data Fetching
- [ ] Day 89 — Server Actions & Forms
- [ ] Day 90 — Tailwind CSS Deep Dive
- [ ] Day 91 — Tailwind Advanced
- [ ] Day 92 — Prisma & PostgreSQL
- [ ] Day 93 — Prisma Advanced
- [ ] Day 94 — Authentication (NextAuth.js)
- [ ] Day 95 — Image & File Handling
- [ ] Day 96 — API Routes & Middleware
- [ ] Day 97 — Performance & SEO
- [ ] Day 98 — Phase 7 Project (SaaS Dashboard)

### Phase 8: Testing & Quality
- [ ] Day 99 — Testing Fundamentals
- [ ] Day 100 — Jest Deep Dive
- [ ] Day 101 — React Testing Library
- [ ] Day 102 — Integration Testing
- [ ] Day 103 — E2E with Playwright
- [ ] Day 104 — Testing Patterns
- [ ] Day 105 — Code Quality Tools
- [ ] Day 106 — Phase 8 Project (Full Test Suite)

### Phase 9: GraphQL
- [ ] Day 107 — GraphQL Intro
- [ ] Day 108 — Apollo Server
- [ ] Day 109 — Apollo Client + React
- [ ] Day 110 — Advanced GraphQL
- [ ] Day 111 — GraphQL + TypeScript
- [ ] Day 112 — Phase 9 Project (GraphQL Blog)

### Phase 10: DevOps & Deployment
- [ ] Day 113 — Docker Basics
- [ ] Day 114 — Docker Compose
- [ ] Day 115 — CI/CD Pipelines
- [ ] Day 116 — Cloud Deployment
- [ ] Day 117 — Monitoring & Logging
- [ ] Day 118 — Security Best Practices

### Phase 11: Full-Stack Capstone (TaskFlow)
- [ ] Day 119 — Planning
- [ ] Day 120 — Project Setup
- [ ] Day 121 — Database Design
- [ ] Day 122 — Auth System
- [ ] Day 123 — Project CRUD
- [ ] Day 124 — Board & Columns
- [ ] Day 125 — Task CRUD
- [ ] Day 126 — Drag & Drop
- [ ] Day 127 — Comments & Activity
- [ ] Day 128 — Real-time Updates
- [ ] Day 129 — Search & Filters
- [ ] Day 130 — Responsive Design
- [ ] Day 131 — Testing
- [ ] Day 132 — Performance
- [ ] Day 133 — Deployment
- [ ] Day 134 — Polish
- [ ] Day 135 — Code Review

### Phase 12: Mastery & Portfolio
- [ ] Day 136 — Portfolio Website
- [ ] Day 137 — Open Source Contribution
- [ ] Day 138 — System Design Basics
- [ ] Day 139 — Interview Prep — Technical
- [ ] Day 140 — Interview Prep — Behavioral

---

## 🧠 Session Log

| Date | Day # | Topics Covered | Comprehension | Notes |
|------|-------|---------------|---------------|-------|
| Feb 18 | 1 | `init`, `status`, `add`, `commit`, `log`, `.gitignore` | High | Accidentally ran `init` in wrong folder, fixed with `rm -rf`. Learned Vim escape sequence. |
| Feb 18 | 2 | Branches, `checkout`, `merge`, Conflicts | High | Successfully navigated branching/merging. Encountered Vim config issue and resolved conflict manually. |
| Feb 19 | 3 | Remotes, `clone`, `push`, `pull`, PRs, `gh` CLI | High | Setup remote repo, handled auth, used GitHub CLI to create/merge PRs. |
| Feb 19 | 4 | `console.log`, `let/const`, Template Literals, Operators | High | Connected HTML/JS, solved Swap & Temp Converter. Learned backticks vs quotes. |
| Feb 19 | 5 | Primitives, Coercion, `===` vs `==`, Logical (`&&`, or operator, `!`) | High | Discovered `typeof null` bug, mastered type coercion quiz, and fixed logic gate security flaw. |
| Feb 19 | 6 | if/else, Truthy/Falsy, Ternary, switch | High | Solved range condition limit bug. Understood `break` keyword importance. |
| Feb 19 | 7 | `for`, `while`, `break/continue`, Nested Loops | High | Mastered loop syntax and control flow. Correctly identified infinite loop risks and nested loop logic. |
| Feb 21 | 8 | Function Basics, Parameters, Returns, Arrow Functions, Defaults | High | Executed all syntax refactors cleanly. Mastered implicit returns early. |
| Feb 21 | 9 | Higher-Order Functions, Callbacks, Closures, Recursion | High | Grappled briefly with callback parameter passing, but fully conquered custom forEach, closures, and recursive power function. |
| Feb 21 | 10 | String Methods, Template Literals, Number Parsing, `Math` Object | High | Mastered chaining methods for palindromes and correctly implemented random indexes for password generation. |
| Feb 21 | 11 | Array Creation, Access, Mutation (`push/pop/unshift/splice`), Spread, Destructuring | High | Showed excellent mastery over destructuring syntax and seamlessly combined arrays using the spread operator. |
| Feb 21 | 12 | Array Iteration (`map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`), Chaining | High | Easily picked up implicit arrow returns and successfully chained `filter` with `reduce` to process numeric data efficiently. |
| Feb 21 | 13 | Object Creation, Dot/Bracket Notation, Methods, Iteration (`Object.keys`), `this` Keyword | High | Mastered bracket notation distinction and accurately utilized `this` context inside regular function methods. |
| Feb 21 | 14 | DOM Overview, Element Selection (`getElementById`, `querySelector`), Modifying Elements (`innerText`, `style`, `classList`) | High | Transitioned successfully to DOM concepts. Quickly identified parameter behavior for `forEach` loops over NodeLists. |
| Feb 21 | 15 | DOM Creation (`createElement`), Appending (`append`), and Removal (`remove`) | High | Correctly built an array-driven todo list by iterating and assigning classes/text dynamically to newly created `<li>` elements. |
| Feb 22 | 16 | Event Listeners (`addEventListener`), Event Object (`e`), Event Bubbling, Delegation | High | Nailed event listeners and the event object. Grasped the concept of delegation perfectly. Required a hint on DOM style access but resolved it smoothly. |
| Feb 22 | 17 | Local Storage, `JSON.stringify`, `JSON.parse` | High | Mastered data persistence. Successfully debugged string parsing and case sensitivity to create a persistent score counter. |

---

## 📚 Supplementary Resources

- **MDN Web Docs** — The definitive JS/Web reference
- **javascript.info** — Excellent free tutorials
- **React.dev** — Official React docs (hooks-first)
- **TypeScript Handbook** — Official TS guide
- **Next.js Docs** — Official Next.js documentation
- **Prisma Docs** — Prisma ORM guide
- **Testing Library Docs** — Testing best practices
- **Docker Docs** — Container reference
