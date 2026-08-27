const isLink = (item) => Boolean(item.href) || /^https?:\/\//.test(item.details);

const ProjectInfo = ({ project }) => {
  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-12">
      <aside className="space-y-10 lg:col-span-4">
        <div>
          <p className="eyebrow">{project.companyHeading}</p>
          <ul className="mt-4 space-y-3 text-sm">
            {project.company.map((info) => (
              <li key={info.id} className="flex flex-col">
                <span className="text-muted">{info.title}</span>
                {isLink(info) ? (
                  <a
                    href={info.href || info.details}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-accent"
                  >
                    {info.details}
                  </a>
                ) : (
                  <span>{info.details}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Objective</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.objective}</p>
        </div>

        <div>
          <p className="eyebrow">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className="lg:col-span-8">
        <p className="eyebrow">{project.detailsHeading}</p>
        <div className="mt-6 space-y-5">
          {project.details.map((detail) => (
            <p key={detail} className="text-base leading-relaxed text-ink/85">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
