import { useState, createContext, useMemo } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState('All');

  const filteredProjects = useMemo(() => {
    const query = searchProject.trim().toLowerCase();

    return projects.filter((item) => {
      const matchesCategory =
        selectProject === 'All' || item.category === selectProject;
      const haystack = `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [projects, searchProject, selectProject]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        searchProject,
        setSearchProject,
        selectProject,
        setSelectProject,
        filteredProjects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
