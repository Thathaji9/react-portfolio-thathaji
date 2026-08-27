import { FiArrowUpRight } from 'react-icons/fi';
import { writingData } from '../../data/writing';
import SectionHeading from '../shared/SectionHeading';

const Writing = () => (
  <section id="writing" className="py-20 sm:py-24">
    <SectionHeading
      index="04"
      eyebrow="Notes"
      title="Writing from the work"
      description="Short essays on patterns I use in production — metadata-driven UI and calmer auth flows."
    />
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {writingData.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="card-surface group p-6 transition hover:border-accent/40 sm:p-8"
        >
          <p className="eyebrow">
            {post.date} · {post.readTime}
          </p>
          <h3 className="display mt-4 text-2xl text-ink group-hover:text-accent">{post.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
            Read on {post.publication}
            <FiArrowUpRight />
          </p>
        </a>
      ))}
    </div>
  </section>
);

export default Writing;
