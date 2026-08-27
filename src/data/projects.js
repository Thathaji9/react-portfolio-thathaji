import checkredCard from '../images/web-light1.jpeg';
import checkred1 from '../images/light-image1.jpeg';
import checkred2 from '../images/light-image2.jpeg';
import checkred3 from '../images/light-image3.jpeg';
import tableImg from '../images/dynamic-table.png';
import radarImg from '../images/radar-graph.png';
import dash1 from '../images/dashboard-builder.png';
import dash2 from '../images/dashboard-builder2.png';
import dash3 from '../images/dashboard-builder3.png';
import insight1 from '../images/insightsAi1.png';
import insight2 from '../images/insightsAi2.png';
import insight3 from '../images/insightsAi3.png';
import report1 from '../images/custom_report1.png';
import report2 from '../images/custom_report2.png';
import report3 from '../images/custom_report3.png';

export const projectCategories = [
  'All',
  'Product UI',
  'AI',
  'Full Stack',
  'Visualization',
  'Components',
  'Personal',
];

export const projectsData = [
  {
    id: 1,
    slug: 'checkred-security-platform',
    title: 'CheckRed Security Platform',
    category: 'Product UI',
    featured: true,
    year: '2023 — Present',
    img: checkredCard,
    images: [
      { id: 1, title: 'CheckRed product UI', img: checkred1 },
      { id: 2, title: 'Operational views', img: checkred2 },
      { id: 3, title: 'Security dashboards', img: checkred3 },
    ],
    liveUrl: 'https://checkred.com',
    repoUrl: null,
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Recharts', 'D3.js'],
    summary:
      'Production frontend for unified cloud, SaaS, and DNS security — schema-driven modules, not one-off screens.',
    objective:
      'Design and implement scalable, secure, modular UI systems for DNS visibility and cloud posture so teams can monitor threats without drowning in tables.',
    companyHeading: 'About the product',
    company: [
      { id: 1, title: 'Company', details: 'CheckRed India Pvt. Ltd.' },
      { id: 2, title: 'Focus', details: 'Unified security for cloud, SaaS, and DNS' },
      { id: 3, title: 'Website', details: 'https://checkred.com', href: 'https://checkred.com' },
    ],
    techs: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Material UI',
      'Recharts',
      'React Hook Form',
      'Chart.js',
      'D3.js',
    ],
    detailsHeading: 'What I built',
    details: [
      'Led DNS Posture and Inventory: a rendering engine that builds views from JSON metadata coming off backend services, so new fields and layouts do not require a rewrite.',
      'Created a reusable Material UI component library with custom theming — consistent density, color, and interaction across modules.',
      'Integrated advanced filtering, pagination, and search on data-heavy security views using React Hook Form, useMemo, and server-side fetching.',
      'Cut wasted renders with React.memo, lazy routes, useCallback, and tight Redux selectors.',
      'Worked with backend on schema models that support multi-tenant UI configuration without forking the frontend.',
      'Shipped protected routes and HOC guards for role-based access on sensitive operational screens.',
      'Separated business logic from presentation with shared hooks so inventory, posture, and dashboard surfaces could reuse the same primitives.',
      'Sat in UI reviews and folded accessibility and density feedback back into the system instead of one-off CSS.',
    ],
  },
  {
    id: 2,
    slug: 'insightflow-ai',
    title: 'InsightFlow AI',
    category: 'AI',
    featured: true,
    year: '2025',
    img: insight1,
    images: [
      { id: 1, title: 'Dashboard overview', img: insight1 },
      { id: 2, title: 'AI insights and chart suggestions', img: insight2 },
      { id: 3, title: 'Widget configuration', img: insight3 },
    ],
    liveUrl: 'https://insightflow-ai.vercel.app/',
    repoUrl: 'https://github.com/Thathaji9/insightflow-ai',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts', 'D3.js', 'LLMs'],
    summary:
      'Upload CSV or JSON, let an LLM propose the story, then rearrange the dashboard yourself.',
    objective:
      'Make sophisticated analysis feel approachable: AI suggests charts and copy, humans keep control of layout, and nothing evaporates on refresh.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/insightflow-ai',
        href: 'https://github.com/Thathaji9/insightflow-ai',
      },
      {
        id: 2,
        title: 'Live demo',
        details: 'insightflow-ai.vercel.app',
        href: 'https://insightflow-ai.vercel.app/',
      },
      { id: 3, title: 'Type', details: 'Personal product experiment' },
    ],
    techs: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Grid Layout',
      'Recharts',
      'D3.js',
      'Gemini / LLM APIs',
    ],
    detailsHeading: 'Implementation',
    details: [
      'Built an ingestion layer for CSV/JSON that hands structure to an LLM for insights, recommended chart types, and field mappings.',
      'Used react-grid-layout so AI-suggested widgets can still be dragged, resized, and rewritten by the user.',
      'Shipped widget types for text, AI charts, custom charts, tables, and a D3 visual — each with a typed config modal and live validation.',
      'Persisted layout, insights, and widget data in localStorage so a session feels like a real workspace.',
      'Pre-filled Recharts from model suggestions while keeping D3 available for one-off storytelling marks.',
      'Kept the whole surface in TypeScript so model payloads, widget unions, and grid state could not silently drift.',
    ],
  },
  {
    id: 3,
    slug: 'custom-report-service',
    title: 'Custom Report Service',
    category: 'Full Stack',
    featured: true,
    year: '2025',
    img: report1,
    images: [
      { id: 1, title: 'Reporting UI', img: report1 },
      { id: 2, title: 'Dashboard', img: report2 },
      { id: 3, title: 'Schedule report modal', img: report3 },
    ],
    liveUrl: 'https://custom-report-service.vercel.app/dashboard/new',
    repoUrl: 'https://github.com/Thathaji9/custom-report-service',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'Cron'],
    summary:
      'Full-stack reporting: compose a dashboard, export PDF, and let cron email it on a schedule.',
    objective:
      'A system that can generate dynamic reports, export them as PDFs, schedule recurring jobs, and still feel like a product — not a pile of scripts.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/custom-report-service',
        href: 'https://github.com/Thathaji9/custom-report-service',
      },
      {
        id: 2,
        title: 'Live demo',
        details: 'custom-report-service.vercel.app',
        href: 'https://custom-report-service.vercel.app/dashboard/new',
      },
      { id: 3, title: 'Type', details: 'Full-stack automation platform' },
    ],
    techs: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Cron',
      'Puppeteer',
      'SMTP',
    ],
    detailsHeading: 'Implementation',
    details: [
      'Designed a React dashboard with modular table, chart, text, and scheduler widgets.',
      'Implemented a typed Express backend with models, routes, services, and controllers instead of a single catch-all file.',
      'Built a PDF export path that turns HTML layouts into downloadable reports for email or disk.',
      'Added a scheduler with cron-style daily, weekly, and custom cadences.',
      'Wrote frontend hooks (useDashboard, useEmployeeData, usePdfExport) so data flow stayed readable as features stacked.',
      'Validated schedule forms with clear errors and time-zone-aware date controls.',
      'Persisted widgets and scheduler config locally so the canvas survived a refresh while the server owned jobs.',
      'Wired create / edit / run APIs so the UI is a control plane, not a mock.',
    ],
  },
  {
    id: 4,
    slug: 'dynamic-dashboard-builder',
    title: 'Dynamic Dashboard Builder',
    category: 'Visualization',
    featured: true,
    year: '2025',
    img: dash1,
    images: [
      { id: 1, title: 'Dashboard overview', img: dash1 },
      { id: 2, title: 'Widget configuration', img: dash2 },
      { id: 3, title: 'Table widget editing', img: dash3 },
    ],
    liveUrl: 'https://react-dashboard-builder.vercel.app/',
    repoUrl: 'https://github.com/Thathaji9/react-dashboard-builder',
    tags: ['React', 'TypeScript', 'React Grid Layout', 'Recharts', 'D3.js', 'Vite'],
    summary:
      'A blank canvas that becomes a dashboard: drag widgets, configure them, keep the layout.',
    objective:
      'Prove that a typed, persistable, drag-and-drop grid can host text, charts, tables, and custom D3 without collapsing into spaghetti.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/react-dashboard-builder',
        href: 'https://github.com/Thathaji9/react-dashboard-builder',
      },
      {
        id: 2,
        title: 'Live demo',
        details: 'react-dashboard-builder.vercel.app',
        href: 'https://react-dashboard-builder.vercel.app/',
      },
      { id: 3, title: 'Stack', details: 'React, TypeScript, Vite, Recharts, D3' },
    ],
    techs: ['React', 'TypeScript', 'React Grid Layout', 'Vite', 'Recharts', 'D3.js'],
    detailsHeading: 'Implementation',
    details: [
      'Implemented add / resize / rearrange on a responsive react-grid-layout canvas.',
      'Built distinct widget types (text, chart, table, D3) with isolated config and rendering.',
      'Designed a generic WidgetConfigModal that switches fields by widget type and validates as you type.',
      'Saved positions, sizes, and widget payloads to localStorage for cross-session continuity.',
      'Integrated Recharts bar, line, and pie charts plus a small D3 visual for low-level graphic control.',
      'Typed the entire widget union so a bad config fails in the editor, not in production.',
    ],
  },
  {
    id: 5,
    slug: 'custom-radar-chart',
    title: 'Custom Radar Chart',
    category: 'Visualization',
    featured: false,
    year: '2025',
    img: radarImg,
    images: [{ id: 1, title: 'Radar chart preview', img: radarImg }],
    liveUrl: 'https://custom-radar-chart.vercel.app/',
    repoUrl: 'https://github.com/Thathaji9/custom-radar-chart',
    tags: ['React', 'TypeScript', 'SVG', 'Tailwind', 'Context API'],
    summary:
      'A radar chart drawn in SVG — no chart library, full theme control, real hover states.',
    objective:
      'Own every vertex: dynamic axes, light/dark rendering, and interactivity without surrendering the graphic to a black-box package.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/custom-radar-chart',
        href: 'https://github.com/Thathaji9/custom-radar-chart',
      },
      {
        id: 2,
        title: 'Live demo',
        details: 'custom-radar-chart.vercel.app',
        href: 'https://custom-radar-chart.vercel.app/',
      },
      { id: 3, title: 'Stack', details: 'React, TypeScript, SVG, Tailwind, Context' },
    ],
    techs: ['React', 'TypeScript', 'SVG', 'Tailwind CSS', 'Context API'],
    detailsHeading: 'Implementation',
    details: [
      'Drove theme from Context so ticks, fills, and labels flip with the page.',
      'Generated polygons, axes, and labels from data — add a dimension, the chart grows.',
      'Added hover highlights and value tooltips without a visualization framework.',
      'Styled the surrounding chrome in Tailwind so the chart can drop into other surfaces.',
    ],
  },
  {
    id: 6,
    slug: 'dynamic-table',
    title: 'Dynamic Table',
    category: 'Components',
    featured: false,
    year: '2025',
    img: tableImg,
    images: [{ id: 1, title: 'Dynamic table', img: tableImg }],
    liveUrl: null,
    repoUrl: 'https://github.com/Thathaji9/dynamic-table',
    tags: ['React', 'TypeScript', 'Debounce', 'Pagination', 'Memoization'],
    summary:
      'Search, role filters, and pagination in a table built to stay fast as rows pile up.',
    objective:
      'A reusable client-side table that demonstrates the boring excellence: debounce, memoization, and split components.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/dynamic-table',
        href: 'https://github.com/Thathaji9/dynamic-table',
      },
      { id: 2, title: 'Stack', details: 'React, TypeScript, Lodash, CSS' },
    ],
    techs: ['React', 'TypeScript', 'Lodash', 'Memoization', 'CSS'],
    detailsHeading: 'Implementation',
    details: [
      'Split Table, Search, and Pagination so each piece can be reused independently.',
      'Debounced search to avoid recomputing the world on every keystroke.',
      'Used useMemo, useCallback, and React.memo on the hot path.',
      'Kept styling modular so the table does not own the page.',
    ],
  },
  {
    id: 7,
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    category: 'Personal',
    featured: false,
    year: '2025',
    img: null,
    cover: {
      eyebrow: 'Live conditions',
      title: 'Weather',
      subtitle: 'Current + 5-day forecast',
      tone: 'sky',
    },
    images: [],
    liveUrl: null,
    repoUrl: 'https://github.com/Thathaji9/my-weather-dashboard',
    tags: ['React', 'Material UI', 'OpenWeatherMap', 'Styled Components'],
    summary:
      'Current conditions and a five-day forecast with a glass UI over the OpenWeatherMap API.',
    objective:
      'A calm weather surface: search a city, read the now, scan the week — no chrome in the way of the forecast.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/my-weather-dashboard',
        href: 'https://github.com/Thathaji9/my-weather-dashboard',
      },
      { id: 2, title: 'API', details: 'OpenWeatherMap' },
      { id: 3, title: 'Stack', details: 'React, MUI, Styled Components' },
    ],
    techs: ['React', 'Material UI', 'Styled Components', 'OpenWeatherMap API', 'JavaScript'],
    detailsHeading: 'Implementation',
    details: [
      'Composed a responsive dashboard for current weather and a 5-day forecast from OpenWeatherMap.',
      'Used Material UI plus styled-components for a glass treatment that still works on small screens.',
      'Kept API keys out of source via environment variables.',
      'Designed empty and error states for unknown cities and failed network calls.',
    ],
  },
  {
    id: 8,
    slug: 'interactive-mood-journal',
    title: 'Interactive Mood Journal',
    category: 'Personal',
    featured: false,
    year: '2025',
    img: null,
    cover: {
      eyebrow: 'Daily log',
      title: 'Mood × Weather',
      subtitle: 'Journal with local climate',
      tone: 'dusk',
    },
    images: [],
    liveUrl: 'https://interactive-mood-journal.vercel.app',
    repoUrl: 'https://github.com/Thathaji9/interactive-mood-journal',
    tags: ['React', 'Material UI', 'Tailwind', 'OpenWeatherMap', 'LocalStorage'],
    summary:
      'Log how you feel next to the weather outside — a private journal that lives in the browser.',
    objective:
      'Pair mood entries with live weather so patterns are easier to notice, without standing up a backend.',
    companyHeading: 'Project',
    company: [
      {
        id: 1,
        title: 'Repository',
        details: 'github.com/Thathaji9/interactive-mood-journal',
        href: 'https://github.com/Thathaji9/interactive-mood-journal',
      },
      {
        id: 2,
        title: 'Live demo',
        details: 'interactive-mood-journal.vercel.app',
        href: 'https://interactive-mood-journal.vercel.app',
      },
      { id: 3, title: 'Storage', details: 'LocalStorage — no server required' },
    ],
    techs: ['React', 'Material UI', 'Tailwind CSS', 'OpenWeatherMap', 'Day.js', 'LocalStorage'],
    detailsHeading: 'Implementation',
    details: [
      'Built a journal UI with date picking (Day.js + MUI X) and mood capture.',
      'Pulled live weather via OpenWeatherMap so each entry sits beside temperature and conditions.',
      'Persisted entries in localStorage for a private, backend-free experience.',
      'Mixed MUI structure with Tailwind utilities for a compact, friendly layout.',
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);

export const featuredProjects = projectsData.filter((project) => project.featured);
