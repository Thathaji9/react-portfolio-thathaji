// Import images
import Image1 from '../images/light-image1.jpeg';
import Image2 from '../images/light-image2.jpeg';
import Image3 from '../images/light-image3.jpeg';

export const singleProjectData = {
  ProjectHeader: {
    title: 'CheckRed Cloud Security Platform',
    publishDate: 'Mar 2023 - Present',
    tags: 'UI / Frontend',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Kabul Project Management UI',
      img: Image1,
    },
    {
      id: 2,
      title: 'Kabul Project Management UI',
      img: Image2,
    },
    {
      id: 3,
      title: 'Kabul Project Management UI',
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
        details: 'Unified Securoty for Your Cloud, SaaS and DNS',
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
};
