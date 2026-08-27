import { capabilities } from '../../data/skills';
import SectionHeading from '../shared/SectionHeading';

const Capabilities = () => (
  <section className="py-20 sm:py-24">
    <SectionHeading
      index="02"
      eyebrow="Capabilities"
      title="What I actually spend time on"
      description="Not a grab-bag of buzzwords — these are the problem shapes I keep returning to in product work and in my own labs."
    />
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {capabilities.map((item) => (
        <article key={item.id} className="card-surface p-6 sm:p-8">
          <p className="font-mono text-xs text-accent">{item.id}</p>
          <h3 className="display mt-3 text-2xl text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Capabilities;
