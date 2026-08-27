import { experienceData } from '../../data/experience';
import SectionHeading from '../shared/SectionHeading';

const Experience = () => (
  <section className="py-20 sm:py-24">
    <SectionHeading
      index="03"
      eyebrow="Experience"
      title="Where the production hours went"
    />
    <div className="mt-12 space-y-6">
      {experienceData.map((job) => (
        <article key={job.id} className="card-surface p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <p className="eyebrow">{job.period}</p>
              <h3 className="display mt-2 text-2xl text-ink">{job.role}</h3>
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-accent hover:underline"
              >
                {job.company}
              </a>
            </div>
            <p className="chip">{job.location}</p>
          </div>
          <p className="mt-5 max-w-3xl text-muted">{job.summary}</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/80">
            {job.highlights.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
