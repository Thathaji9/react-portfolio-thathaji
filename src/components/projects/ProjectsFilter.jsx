import { projectCategories } from '../../data/projects';

const ProjectsFilter = ({ selectProject, setSelectProject }) => {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
      {projectCategories.map((option) => {
        const active = selectProject === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setSelectProject(option)}
            className={`rounded-full px-3 py-1.5 text-xs transition ${
              active
                ? 'bg-ink text-paper dark:bg-accent dark:text-[#062421]'
                : 'border border-line/10 text-muted hover:text-ink'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
