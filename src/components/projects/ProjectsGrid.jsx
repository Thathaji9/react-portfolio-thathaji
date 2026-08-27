import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = ({ limit, heading = true, featuredFirst = false }) => {
  const {
    searchProject,
    setSearchProject,
    filteredProjects,
    selectProject,
    setSelectProject,
  } = useContext(ProjectsContext);

  const visible = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={heading ? 'py-16 sm:py-20' : 'py-6'}>
      {heading && (
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">01 / Work</p>
            <h2 className="display mt-3 text-3xl text-ink sm:text-5xl">Selected work</h2>
            <p className="mt-3 max-w-xl text-muted">
              Production security UI plus a lab of dashboards, charts, reporting, and AI experiments.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 rounded-full border border-line/10 bg-elevated px-4 py-2.5">
          <FiSearch className="text-muted" />
          <input
            onChange={(e) => setSearchProject(e.target.value)}
            value={searchProject}
            className="w-full border-0 bg-transparent p-0 text-sm text-ink placeholder:text-muted focus:ring-0"
            type="search"
            placeholder="Search projects"
            aria-label="Search projects"
          />
        </label>
        <ProjectsFilter selectProject={selectProject} setSelectProject={setSelectProject} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectSingle
            key={project.id}
            project={project}
            featured={featuredFirst && index === 0 && !searchProject && selectProject === 'All'}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">No projects match that filter yet.</p>
      )}
    </section>
  );
};

export default ProjectsGrid;
