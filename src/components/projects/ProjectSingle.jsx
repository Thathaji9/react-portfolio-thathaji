import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import ProjectCover from './ProjectCover';

const ProjectSingle = ({ project, featured = false }) => {
  return (
    <article className={featured ? 'md:col-span-2' : ''}>
      <Link
        to={`/projects/${project.slug}`}
        className="project-card card-surface group block h-full"
        aria-label={`${project.title} case study`}
      >
        <div className={`project-media ${featured ? 'project-media-featured' : ''}`}>
          {project.img ? (
            <img src={project.img} alt={project.title} />
          ) : (
            <ProjectCover cover={project.cover} title={project.title} className="h-full min-h-[220px]" />
          )}
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">
              {project.category} · {project.year}
            </p>
            <FiArrowUpRight className="text-muted transition group-hover:text-accent" />
          </div>
          <h3 className="display mt-2 text-xl text-ink sm:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, featured ? 6 : 4).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectSingle;
