import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
  return (
    <ProjectsProvider>
      <div className="site-wrap">
        <ProjectsGrid />
      </div>
    </ProjectsProvider>
  );
};

export default Projects;
