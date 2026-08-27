import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import ProjectCover from './ProjectCover';

const ProjectSingle = ({ project, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={featured ? 'md:col-span-2' : ''}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="project-card card-surface group block h-full"
        aria-label={`${project.title} case study`}
      >
        <div className={`overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <ProjectCover cover={project.cover} title={project.title} className="h-full" />
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
    </motion.article>
  );
};

export default ProjectSingle;
