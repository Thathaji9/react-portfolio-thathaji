import ProjectCover from './ProjectCover';

const ProjectGallery = ({ project }) => {
  if (!project.images?.length) {
    return (
      <div className="mt-10 overflow-hidden rounded-3xl border border-line/10">
        <ProjectCover cover={project.cover} title={project.title} className="min-h-[320px]" />
      </div>
    );
  }

  const [hero, ...rest] = project.images;

  return (
    <div className="project-gallery mt-10 grid gap-4">
      <div className="overflow-hidden rounded-3xl border border-line/10">
        <img src={hero.img} alt={hero.title} className="max-h-[540px] w-full object-cover" />
      </div>
      {rest.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-3xl border border-line/10">
              <img src={image.img} alt={image.title} className="h-64 w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
