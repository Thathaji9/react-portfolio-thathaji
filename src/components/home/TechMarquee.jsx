import { techMarquee } from '../../data/skills';

const TechMarquee = () => {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="marquee-mask relative overflow-hidden border-y border-line/10 py-5">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
          >
            {item}
            <span className="ml-10 text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
