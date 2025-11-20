// Import images
import Image1 from '../images/web-light1.jpeg';
import Image2 from '../images/dynamic-table.png';
import Image3 from '../images/radar-graph.png';
import Image4 from '../images/dashboard-builder.png';
import Image5 from '../images/insightsAi1.png';
import Image6 from '../images/custom_report1.png';

export const projectsData = [
  {
    id: 1,
    title: 'CheckRed Security Platform',
    category: 'Web Application',
    img: Image1,
    ProjectHeader: {
      title: 'CheckRed Security Platform - Frontend Modules',
      publishDate: 'Mar 2023 - Present',
      tags: 'UI / Frontend'
    },
    description: `As part of the CheckRed frontend team, I contributed to the design and development of multiple modules including DNS Posture, DNS Inventory, and real-time dashboards. My work involved building reusable components, handling global state using Redux Toolkit, and dynamically rendering UIs from backend-driven JSON metadata.`
  },
  {
    id: 2,
    title: 'Dynamic Table',
    category: 'Web Application',
    img: Image2,
    ProjectHeader: {
      title: 'Dynamic Table with Search, Filter & Pagination',
      publishDate: 'Aprtil 2025',
      tags: 'UI / Frontend'
    },
    description:
      'A reusable, client-side table built with React & TypeScript featuring search with debounce, role-based filtering, and pagination — optimized for performance with memoization techniques.'
  },
  {
    id: 3,
    title: 'Custom Radar Chart',
    category: 'Data Visualization',
    img: Image3,
    ProjectHeader: {
      title: 'Custom Radar Chart - React + SVG',
      publishDate: 'Apr 2025',
      tags: 'Data Visualization / UI Component'
    },
    description:
      'A reusable and fully dynamic radar chart built using React, SVG, and Context API. It supports dynamic axes, dark/light theme switching, and interactivity without relying on chart libraries.'
  },
  {
    id: 4,
    title: 'Dynamic Dashboard Builder',
    category: 'Data Visualization & UI/UX',
    img: Image4,
    ProjectHeader: {
      title: 'Dynamic Dashboard Builder - React & RGL',
      publishDate: 'May 2025',
      tags: 'React.js / TypeScript / React Grid Layout / Recharts / D3.js / LocalStorage'
    },
    description:
      'A robust and interactive web application for building custom dashboards. Users can drag-and-drop various widget types (Text, Chart, Table, D3.js custom viz) onto a responsive grid, resize them, and configure their content through dedicated modals. Features include real-time input validation, automatic persistence of layout and data to LocalStorage, and a highly intuitive user experience.'
  },
  {
    id: 5,
    title: 'InsightFlow AI - Data Storyteller',
    category: 'Data Analysis & UI/UX',
    img: Image5,
    ProjectHeader: {
      title: 'InsightFlow AI: AI-Powered Dashboard Builder',
      publishDate: 'May 2025',
      tags: 'Next.js / React.js / TypeScript / Tailwind CSS / React Grid Layout / Recharts / D3.js / LocalStorage / AI Integration (Specify API, e.g., Gemini API)'
    },
    description:
      'An innovative, AI-powered web application designed to transform raw data into compelling stories and interactive dashboards. It simplifies data analysis, making sophisticated insights accessible to everyone. Users can upload CSV/JSON data, leverage AI for automatic analysis and visualization suggestions, and build dynamic dashboards with drag-and-drop, resizable widgets (Charts, Tables, Text, D3.js custom visualizations). Features include real-time input validation and automatic persistence of layout and data to LocalStorage for a seamless user experience.'
  },
  {
    id: 6,
    title: 'Custom Report Service',
    category: 'Full Stack Application',
    img: Image6,
    ProjectHeader: {
      title: 'Custom Report Service - React + Node.js + Scheduler',
      publishDate: 'Jan 2025',
      tags: 'React.js / TypeScript / Node.js / Express / Scheduler / PDF Export / Email Service'
    },
    description: `
A full-stack reporting and scheduling platform designed to generate PDF reports, send automated email summaries, and build customizable dashboards.

This project integrates a TypeScript-based Node.js backend with a React TypeScript frontend, offering dynamic widgets, hooks-based state management, and backend-driven data rendering. 

Key features include:
- Automated report scheduling using cron-style jobs
- PDF export service for generating downloadable reports
- Email delivery of scheduled reports via SMTP
- React-based UI for visualizing dashboards and managing components
- Modular backend architecture (Routes, Services, Models)
- Fully typed TypeScript codebase for both frontend and backend
`
  }
];
