const SectionHeading = ({ index, eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="eyebrow">
      {index && <span className="mr-3 text-accent">{index}</span>}
      {eyebrow}
    </p>
    <h2 className="display mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    )}
  </div>
);

export default SectionHeading;
