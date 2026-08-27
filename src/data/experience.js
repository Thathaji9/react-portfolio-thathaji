export const experienceData = [
  {
    id: 1,
    company: 'Clearwater',
    role: 'Software Engineer, UI',
    period: 'Dec 2025 — Present',
    location: 'Product engineering',
    url: 'https://clearwateranalytics.com/',
    summary:
      'Building production UI in an Angular + Nx monorepo — shared libraries, TanStack Table for dense financial data, and screens that have to stay fast as the workspace grows.',
    highlights: [
      'Shipping UI in a monorepo with Nx: shared libs, bounded apps, and a consistent design language across features.',
      'Building data-heavy tables with TanStack Table — sorting, filtering, virtualization-friendly column defs, and typed row models.',
      'Working in Angular with a component-driven architecture so new product surfaces reuse the same primitives instead of forking UI.',
      'Collaborating across the monorepo on APIs, theming, and performance so table-heavy views stay usable with real production datasets.',
    ],
  },
  {
    id: 2,
    company: 'CheckRed India Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'Mar 2023 — Nov 2025',
    location: 'Product team',
    url: 'https://checkred.com',
    summary:
      'Built the frontend for a unified cloud, SaaS, and DNS security platform — schema-driven modules, not one-off screens.',
    highlights: [
      'Owned DNS Posture and DNS Inventory UI, rendering complex views from backend JSON metadata instead of hardcoded screens.',
      'Shipped a reusable Material UI component library with theming so new modules could move faster with less duplication.',
      'Designed search, filter, and pagination for large security datasets using React Hook Form, memoized selectors, and server-driven fetching.',
      'Hardened performance with React.memo, lazy loading, and careful Redux Toolkit state boundaries.',
      'Partnered with backend on dynamic schema contracts that support multi-tenant UI configuration.',
    ],
  },
];

export const values = [
  {
    id: 'systems',
    title: 'Systems over screens',
    body: 'I prefer UI that is generated from contracts — metadata, schemas, shared libs in a monorepo — so products can grow without rewriting every view.',
  },
  {
    id: 'clarity',
    title: 'Clarity under complexity',
    body: 'Security data, reports, and charts only help if a person can scan them in seconds. I obsess over hierarchy, empty states, and honest loading.',
  },
  {
    id: 'craft',
    title: 'Craft you can feel',
    body: 'Typed APIs, memoized hot paths, accessible forms, and motion that explains instead of decorating. The details are the product.',
  },
];
