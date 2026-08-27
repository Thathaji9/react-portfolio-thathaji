import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import TechMarquee from '../components/home/TechMarquee';
import Capabilities from '../components/home/Capabilities';
import Experience from '../components/home/Experience';
import Writing from '../components/home/Writing';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div>
      <div className="site-wrap">
        <AppBanner />
      </div>
      <TechMarquee />
      <div className="site-wrap">
        <ProjectsProvider>
          <ProjectsGrid limit={5} featuredFirst />
        </ProjectsProvider>
        <div className="flex justify-center">
          <Link to="/projects" className="btn-ghost">
            View all projects
          </Link>
        </div>
        <Capabilities />
        <Experience />
        <Writing />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Home;
