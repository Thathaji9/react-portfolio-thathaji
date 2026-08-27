import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import { getProjectBySlug, projectsData } from '../data/projects';
import ProjectSingle from '../components/projects/ProjectSingle';

const ProjectSinglePage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projectsData.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="site-wrap pb-20 pt-10"
    >
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
        <FiArrowLeft />
        All work
      </Link>
      <div className="mt-8">
        <ProjectHeader project={project} />
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Live demo
              <FiArrowUpRight />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiGithub />
              Source
            </a>
          )}
        </div>
        <ProjectGallery project={project} />
        <ProjectInfo project={project} />
      </div>

      <div className="mt-20">
        <p className="eyebrow">More work</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {related.map((item) => (
            <ProjectSingle key={item.id} project={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSinglePage;
