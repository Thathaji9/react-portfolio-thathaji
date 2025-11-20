// Import images
import Image1 from '../images/light-image1.jpeg';
import Image2 from '../images/light-image2.jpeg';
import Image3 from '../images/light-image3.jpeg';
import Image4 from '../images/dynamic-table.png';
import Image5 from '../images/radar-graph.png';
import Image6 from '../images/dashboard-builder.png';
import Image7 from '../images/dashboard-builder2.png';
import Image8 from '../images/dashboard-builder3.png';
import Image9 from '../images/insightsAi1.png';
import Image10 from '../images/insightsAi2.png';
import Image11 from '../images/insightsAi3.png';
import Image12 from '../images/custom_report1.png';
import Image13 from '../images/custom_report2.png';
import Image14 from '../images/custom_report3.png';

export const singleProjectData = [
  {
    ProjectHeader: {
      mainTitle: 'CheckRed Security Platform',
      title: 'CheckRed Cloud Security Platform',
      publishDate: 'Mar 2023 - Present',
      tags: 'UI / Frontend'
    },
    ProjectImages: [
      {
        id: 1,
        title: 'CheckRed UI 1',
        img: Image1
      },
      {
        id: 2,
        title: 'CheckRed UI 2',
        img: Image2
      },
      {
        id: 3,
        title: 'CheckRed UI 3',
        img: Image3
      }
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'CheckRed India Pvt. Ltd.'
        },
        {
          id: 2,
          title: 'Services',
          details: 'Unified Security for Your Cloud, SaaS and DNS'
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://checkred.com'
        }
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To design and implement scalable, secure, and modular UI systems for DNS visibility and cloud posture management, helping organizations monitor and respond to potential security threats efficiently.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'React',
            'TypeScript',
            'Redux Toolkit',
            'Material-UI',
            'Recharts',
            'React Hook Form',
            'Chart.js',
            'D3.js'
          ]
        }
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Led the development of DNS Posture and Inventory modules, building dynamic rendering logic that allows components to be generated based on JSON metadata received from backend services.'
        },
        {
          id: 2,
          details:
            'Created a scalable, reusable component library using Material UI and custom theming, ensuring consistency across modules and rapid feature delivery with minimal duplication.'
        },
        {
          id: 3,
          details:
            'Integrated advanced filtering, pagination, and search functionalities in data-heavy views using React Hook Form, useMemo, and server-side data fetching strategies.'
        },
        {
          id: 4,
          details:
            'Improved frontend performance by implementing React.memo, lazy loading, and selective re-renders through useCallback and optimized state selectors.'
        },
        {
          id: 5,
          details:
            'Worked closely with backend teams to define and consume dynamic schema models that reduce the need for static UI code, enabling scalable multi-tenant UI configuration.'
        },
        {
          id: 6,
          details:
            'Handled authentication flows using protected routes and HOC wrappers to guard sensitive views, supporting role-based access control and seamless user navigation.'
        },
        {
          id: 7,
          details:
            'Followed clean architecture principles by separating business logic from UI and promoting reusable utility hooks across modules.'
        },
        {
          id: 8,
          details:
            'Participated in regular UI/UX reviews and contributed to improving user experience based on feedback and accessibility standards.'
        }
      ]
    }
  },
  {
    ProjectHeader: {
      mainTitle: 'Dynamic Table',
      title: 'Dynamic Table - React + TypeScript',
      publishDate: 'Apr 2025',
      tags: 'React, TypeScript, Debounce, Pagination'
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Dynamic Table Screenshot 1',
        img: Image4
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'GitHub Repo',
          details: 'https://github.com/Thathaji9/dynamic-table'
        },
        {
          id: 2,
          title: 'Tech Stack',
          details: 'React, TypeScript, Lodash, CSS'
        }
      ],
      ObjectivesHeading: 'Goal',
      ObjectivesDetails:
        'Create a fully functional and reusable dynamic table with search (debounced), role-based filtering, and client-side pagination — demonstrating React optimization and clean architecture.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'TypeScript', 'Lodash', 'Memoization', 'CSS']
        }
      ],
      ProjectDetailsHeading: 'Implementation Details',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Built separate components for Table, Search, and Pagination to ensure reusability and maintainability.'
        },
        {
          id: 2,
          details: 'Used lodash debounce to optimize search performance and reduce unnecessary re-renders.'
        },
        {
          id: 3,
          details:
            'Applied memoization techniques using useMemo, useCallback, and React.memo to prevent unnecessary computation.'
        },
        {
          id: 4,
          details: 'Styled the app using modular CSS from index.css for clarity and scalability.'
        }
      ]
    }
  },
  {
    ProjectHeader: {
      mainTitle: 'Custom Radar Chart',
      title: 'Custom Radar Chart - React + SVG',
      publishDate: 'Apr 2025',
      tags: 'Radar Chart, React, SVG'
    },
    ProjectImages: [{ id: 1, title: 'Radar Chart Preview', img: Image5 }],
    ProjectInfo: {
      ClientHeading: 'GitHub Repository',
      CompanyInfo: [
        {
          id: 1,
          title: 'Repo',
          details: 'https://github.com/Thathaji9/custom-radar-chart'
        },
        {
          id: 2,
          title: 'Tech Stack',
          details: 'React, TypeScript, TailwindCSS, SVG, Context API'
        },
        {
          id: 3,
          title: 'Live Demo',
          details: 'https://custom-radar-chart.vercel.app/'
        }
      ],
      ObjectivesHeading: 'Goal',
      ObjectivesDetails:
        'To build a customizable radar chart using SVG and React with theming support and reusable architecture.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'TypeScript', 'TailwindCSS', 'SVG']
        }
      ],
      ProjectDetailsHeading: 'Implementation',
      ProjectDetails: [
        {
          id: 1,
          details: 'Used Context API to manage theme switching across the application.'
        },
        {
          id: 2,
          details: 'Created scalable radar chart using SVG elements dynamically with loop-based rendering.'
        },
        {
          id: 3,
          details: 'Integrated interactive features such as hover highlights and value tooltips.'
        },
        {
          id: 4,
          details: 'Added light/dark mode rendering based on context, improving UX for different environments.'
        },
        {
          id: 5,
          details: 'Styled the component with Tailwind and added preview visuals using mock data.'
        }
      ]
    }
  },
  {
    ProjectHeader: {
      mainTitle: 'Dynamic Dashboard Builder',
      title: 'Interactive Dashboard with React Grid Layout & Data Persistence',
      publishDate: 'May 2025',
      tags: 'React.js, TypeScript, React Grid Layout, Recharts, D3.js, LocalStorage'
    },
    ProjectImages: [
      { id: 1, title: 'Dashboard Overview', img: Image6 },
      { id: 2, title: 'Widget Configuration Modal', img: Image7 },
      { id: 3, title: 'Table Widget Data Entry', img: Image8 }
    ],
    ProjectInfo: {
      ClientHeading: 'Project Details',
      CompanyInfo: [
        {
          id: 1,
          title: 'Repository',
          details: 'https://github.com/Thathaji9/react-dashboard-builder'
        },
        {
          id: 2,
          title: 'Live Demo',
          details: 'https://react-dashboard-builder.vercel.app/'
        },
        {
          id: 3,
          title: 'Tech Stack',
          details: 'React.js, TypeScript, React Grid Layout, Recharts, D3.js, Vite'
        }
      ],
      ObjectivesHeading: 'Project Goals',
      ObjectivesDetails:
        'To build a highly dynamic, user-configurable dashboard application demonstrating advanced React concepts, flexible UI design, interactive data visualization, and robust client-side data persistence. The primary aim was to create a reusable and extendable platform for visualizing diverse datasets.',
      Technologies: [
        {
          title: 'Core Technologies',
          techs: ['React.js', 'TypeScript', 'React Grid Layout', 'Vite']
        },
        {
          title: 'Data Visualization',
          techs: ['Recharts', 'D3.js (for custom visuals)']
        },
        {
          title: 'UI/UX & State Management',
          techs: ['Local Storage (Persistence)', 'Modular CSS (Components)', 'Responsive Design']
        }
      ],
      ProjectDetailsHeading: 'Implementation Highlights',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Implemented a robust drag-and-drop dashboard layout using `react-grid-layout`, enabling users to freely add, resize, and rearrange widgets across a responsive grid system.'
        },
        {
          id: 2,
          details:
            'Developed multiple distinct widget types (Text, Chart, Table, D3.js custom) with dynamic content rendering, showcasing versatility in UI component design.'
        },
        {
          id: 3,
          details:
            'Designed and integrated a generic `WidgetConfigModal` that dynamically renders configuration fields based on widget type, incorporating real-time input validation for data integrity.'
        },
        {
          id: 4,
          details:
            'Managed complex dashboard state, including widget positions, dimensions, and unique data, with seamless persistence to and retrieval from `localStorage` for cross-session continuity.'
        },
        {
          id: 5,
          details:
            'Integrated `Recharts` for creating interactive Bar, Line, and Pie charts with customizable datasets and titles, and `D3.js` for building a bespoke interactive visualization (e.g., dynamic circle) to demonstrate low-level graphic control.'
        },
        {
          id: 6,
          details:
            'Ensured a clean and maintainable codebase by using TypeScript for strong typing across all components and state management, significantly reducing runtime errors.'
        },
        {
          id: 7,
          details:
            'Enhanced user experience through intuitive UI elements such as clear edit/remove buttons, a dedicated drag handle, and informative messages for an empty dashboard state.'
        }
      ]
    }
  },
  {
    ProjectHeader: {
      mainTitle: 'InsightFlow AI - Data Storyteller',
      title: 'AI-Powered Data Storyteller & Dynamic Dashboard',
      publishDate: 'May 2025',
      tags: 'Next.js, React.js, TypeScript, Tailwind CSS, React Grid Layout, Recharts, D3.js, LocalStorage, AI Integration (e.g., Google Gemini API)'
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Dashboard Overview',
        img: Image9
      },
      {
        id: 2,
        title: 'AI Insights & Chart Suggestions',
        img: Image10
      },
      {
        id: 3,
        title: 'Widget Configuration Modal',
        img: Image11
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Project Details',
      CompanyInfo: [
        {
          id: 1,
          title: 'Repository',
          details: 'https://github.com/Thathaji9/insightflow-ai'
        },
        {
          id: 2,
          title: 'Live Demo',
          details: 'https://insightflow-ai.vercel.app/'
        },
        {
          id: 3,
          title: 'Tech Stack',
          details: 'Next.js, React.js, TypeScript, Tailwind CSS, React Grid Layout, Recharts, D3.js, AI (LLM)'
        }
      ],
      ObjectivesHeading: 'Project Goals & AI Vision',
      ObjectivesDetails:
        'To revolutionize data analysis by providing an AI-powered platform for effortless data storytelling and dynamic dashboard creation. The primary objective was to build a highly intuitive, user-configurable web application that not only visualizes data but also provides intelligent insights, transforming raw information into actionable narratives. This project aims to demonstrate advanced React concepts, flexible UI/UX design, cutting-edge AI integration for data interpretation, and robust client-side data persistence, all within a scalable and extendable architecture.',
      Technologies: [
        {
          title: 'Core Application Stack',
          techs: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vite (if used for parts of build)']
        },
        {
          title: 'Dashboard & UI/UX',
          techs: [
            'React Grid Layout (Drag & Drop)',
            'Local Storage (Persistence)',
            'Responsive Design',
            'Modular CSS (Components)'
          ]
        },
        {
          title: 'Data Processing & Visualization',
          techs: ['papaparse (CSV)', 'Native JSON', 'Recharts (Charts)', 'D3.js (Custom Visuals)']
        },
        {
          title: 'Artificial Intelligence',
          techs: ['LLM Integration (e.g., Google Gemini API, OpenAI API)', 'Data Interpretation Algorithms']
        }
      ],
      ProjectDetailsHeading: 'Implementation Highlights & AI Integration',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Developed an innovative AI integration layer capable of ingesting uploaded CSV/JSON data, performing semantic analysis, and generating intelligent insights along with recommended chart types and data fields for visualization.'
        },
        {
          id: 2,
          details:
            'Implemented a robust drag-and-drop dashboard layout using `react-grid-layout`, enabling users to freely add, resize, and rearrange AI-suggested or custom widgets across a responsive grid system.'
        },
        {
          id: 3,
          details:
            'Developed multiple distinct widget types (Text, AI-Generated Chart, Custom Chart, Table, D3.js custom viz) with dynamic content rendering, showcasing versatility in UI component design driven by both user input and AI suggestions.'
        },
        {
          id: 4,
          details:
            'Designed and integrated a versatile `WidgetConfigModal` that dynamically renders configuration fields based on widget type, incorporating real-time input validation for data integrity and user-friendly customization.'
        },
        {
          id: 5,
          details:
            'Managed complex dashboard state, including AI-generated insights, widget positions, dimensions, and unique data, with seamless persistence to and retrieval from `localStorage` for cross-session continuity and an uninterrupted user workflow.'
        },
        {
          id: 6,
          details:
            'Integrated `Recharts` for creating interactive Bar, Line, and Pie charts with customizable datasets and titles (often pre-filled by AI suggestions), and `D3.js` for building bespoke interactive visualizations to demonstrate low-level graphic control and unique data storytelling.'
        },
        {
          id: 7,
          details:
            'Ensured a clean, scalable, and maintainable codebase using TypeScript for strong typing across all components, state management, and AI integration logic, significantly reducing runtime errors and improving developer experience.'
        },
        {
          id: 8,
          details:
            'Enhanced user experience through intuitive UI elements such as clear edit/remove buttons, a dedicated drag handle, informative messages for an empty dashboard state, and clear visual feedback for AI processing.'
        }
      ]
    }
  },
  {
    ProjectHeader: {
      mainTitle: 'Custom Report Service',
      title: 'Custom Reporting & Scheduler Platform',
      publishDate: 'Nov 2025',
      tags: 'Full Stack / Automation / Reporting'
    },

    ProjectImages: [
      {
        id: 1,
        title: 'UI',
        img: Image12
      },
      {
        id: 2,
        title: 'Dashboard',
        img: Image13
      },
      {
        id: 3,
        title: 'Schedule Report Modal',
        img: Image14
      }
    ],

    ProjectInfo: {
      ClientHeading: 'About Project',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Full Stack Automation Platform'
        },
        {
          id: 2,
          title: 'Purpose',
          details: 'Automated report generation, scheduling & dashboard visualization'
        },
        {
          id: 3,
          title: 'Repository',
          details: 'https://github.com/Thathaji9/custom-report-service'
        },
        {
          id: 3,
          title: 'Live Demo',
          details: 'https://custom-report-service.vercel.app/dashboard/new',
        },
      ],

      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To build a full-stack system capable of generating dynamic reports, exporting them as PDFs, and scheduling recurring jobs — along with a React dashboard for visualizing and managing data.',

      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'Cron Jobs',
            'MongoDB',
            'Puppeteer',
            'PDF Generation',
            'React Hooks'
          ]
        }
      ],

      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Developed a complete React-based dashboard interface with modular components for tables, charts, text widgets, and scheduling controls.'
        },
        {
          id: 2,
          details:
            'Implemented a Node.js + TypeScript backend using Express with a well-structured architecture (Models, Routes, Services, Controllers).'
        },
        {
          id: 3,
          details:
            'Created a PDF Export Service capable of converting HTML layouts into high-quality PDF reports for download or email delivery.'
        },
        {
          id: 4,
          details:
            'Developed a Scheduler Service using cron-like job triggers to automate weekly, daily, and custom report generation.'
        },
        {
          id: 6,
          details:
            'Designed frontend hooks (`useDashboard`, `useEmployeeData`, `usePdfExport`) to manage complex data flows and UI states cleanly.'
        },
        {
          id: 7,
          details:
            'Implemented form validations, error handling, and interactive modals for scheduling new reports with custom date/time settings.'
        },
        {
          id: 8,
          details:
            'Added LocalStorage persistence for dashboard widgets, layouts, user inputs, and scheduler configuration for a seamless UX.'
        },
        {
          id: 9,
          details:
            'Optimized frontend performance with memoization (`useCallback`, `useMemo`, `React.memo`) and reduced unnecessary re-renders.'
        },
        {
          id: 10,
          details:
            'Created reusable backend utilities and helper services to maintain clean architecture and encourage maintainability.'
        },
        {
          id: 11,
          details:
            'Integrated backend APIs with frontend components allowing seamless creation, editing, and execution of scheduled reports.'
        }
      ]
    }
  }
];
