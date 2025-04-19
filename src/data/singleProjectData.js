// Import images
import Image1 from '../images/light-image1.jpeg';
import Image2 from '../images/light-image2.jpeg';
import Image3 from '../images/light-image3.jpeg';
import Image4 from '../images/dynamic-table.png';
import Image5 from '../images/radar-graph.png';

export const singleProjectData = [
  {
    ProjectHeader: {
      mainTitle: 'CheckRed Security Platform',
      title: 'CheckRed Cloud Security Platform',
      publishDate: 'Mar 2023 - Present',
      tags: 'UI / Frontend',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'CheckRed UI 1',
        img: Image1,
      },
      {
        id: 2,
        title: 'CheckRed UI 2',
        img: Image2,
      },
      {
        id: 3,
        title: 'CheckRed UI 3',
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Company',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'CheckRed India Pvt. Ltd.',
        },
        {
          id: 2,
          title: 'Services',
          details: 'Unified Security for Your Cloud, SaaS and DNS',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://checkred.com',
        },
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
            'D3.js',
          ],
        },
      ],
      ProjectDetailsHeading: 'My Contributions',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Led the development of DNS Posture and Inventory modules, building dynamic rendering logic that allows components to be generated based on JSON metadata received from backend services.',
        },
        {
          id: 2,
          details:
            'Created a scalable, reusable component library using Material UI and custom theming, ensuring consistency across modules and rapid feature delivery with minimal duplication.',
        },
        {
          id: 3,
          details:
            'Integrated advanced filtering, pagination, and search functionalities in data-heavy views using React Hook Form, useMemo, and server-side data fetching strategies.',
        },
        {
          id: 4,
          details:
            'Improved frontend performance by implementing React.memo, lazy loading, and selective re-renders through useCallback and optimized state selectors.',
        },
        {
          id: 5,
          details:
            'Worked closely with backend teams to define and consume dynamic schema models that reduce the need for static UI code, enabling scalable multi-tenant UI configuration.',
        },
        {
          id: 6,
          details:
            'Handled authentication flows using protected routes and HOC wrappers to guard sensitive views, supporting role-based access control and seamless user navigation.',
        },
        {
          id: 7,
          details:
            'Followed clean architecture principles by separating business logic from UI and promoting reusable utility hooks across modules.',
        },
        {
          id: 8,
          details:
            'Participated in regular UI/UX reviews and contributed to improving user experience based on feedback and accessibility standards.',
        },
      ],
    },
  },
  {
    ProjectHeader: {
      mainTitle: 'Dynamic Table',
      title: 'Dynamic Table - React + TypeScript',
      publishDate: 'Apr 2025',
      tags: 'React, TypeScript, Debounce, Pagination',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Dynamic Table Screenshot 1',
        img: Image4,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'GitHub Repo',
          details: 'https://github.com/Thathaji9/dynamic-table',
        },
        {
          id: 2,
          title: 'Tech Stack',
          details: 'React, TypeScript, Lodash, CSS',
        },
      ],
      ObjectivesHeading: 'Goal',
      ObjectivesDetails:
        'Create a fully functional and reusable dynamic table with search (debounced), role-based filtering, and client-side pagination — demonstrating React optimization and clean architecture.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'TypeScript', 'Lodash', 'Memoization', 'CSS'],
        },
      ],
      ProjectDetailsHeading: 'Implementation Details',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Built separate components for Table, Search, and Pagination to ensure reusability and maintainability.',
        },
        {
          id: 2,
          details:
            'Used lodash debounce to optimize search performance and reduce unnecessary re-renders.',
        },
        {
          id: 3,
          details:
            'Applied memoization techniques using useMemo, useCallback, and React.memo to prevent unnecessary computation.',
        },
        {
          id: 4,
          details:
            'Styled the app using modular CSS from index.css for clarity and scalability.',
        },
      ],
    },
  },
  {
    ProjectHeader: {
      mainTitle: 'Custom Radar Chart',
      title: 'Custom Radar Chart - React + SVG',
      publishDate: 'Apr 2025',
      tags: 'Radar Chart, React, SVG',
    },
    ProjectImages: [{ id: 1, title: 'Radar Chart Preview', img: Image5 }],
    ProjectInfo: {
      ClientHeading: 'GitHub Repository',
      CompanyInfo: [
        {
          id: 1,
          title: 'Repo',
          details: 'https://github.com/Thathaji9/custom-radar-chart',
        },
        {
          id: 2,
          title: 'Tech Stack',
          details: 'React, TypeScript, TailwindCSS, SVG, Context API',
        },
      ],
      ObjectivesHeading: 'Goal',
      ObjectivesDetails:
        'To build a customizable radar chart using SVG and React with theming support and reusable architecture.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'TypeScript', 'TailwindCSS', 'SVG'],
        },
      ],
      ProjectDetailsHeading: 'Implementation',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Used Context API to manage theme switching across the application.',
        },
        {
          id: 2,
          details:
            'Created scalable radar chart using SVG elements dynamically with loop-based rendering.',
        },
        {
          id: 3,
          details:
            'Integrated interactive features such as hover highlights and value tooltips.',
        },
        {
          id: 4,
          details:
            'Added light/dark mode rendering based on context, improving UX for different environments.',
        },
        {
          id: 5,
          details:
            'Styled the component with Tailwind and added preview visuals using mock data.',
        },
      ],
    },
  },
];
