import { FiClock, FiTag } from 'react-icons/fi';

const ProjectHeader = ({ project }) => {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">Case study</p>
      <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">{project.title}</h1>
      <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <FiClock />
          {project.year}
        </span>
        <span className="inline-flex items-center gap-2">
          <FiTag />
          {project.category}
        </span>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>
    </div>
  );
};

export default ProjectHeader;
