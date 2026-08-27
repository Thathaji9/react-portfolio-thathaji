const tones = {
  sky: {
    from: '#0b3a4a',
    to: '#1d9bb3',
    accent: '#7ee8ff',
  },
  dusk: {
    from: '#3b1d4a',
    to: '#d97757',
    accent: '#ffd6a8',
  },
};

const ProjectCover = ({ cover, title, className = '' }) => {
  const tone = tones[cover?.tone] || tones.sky;

  return (
    <div
      className={`generated-cover relative flex h-full min-h-[220px] w-full flex-col justify-between overflow-hidden p-6 ${className}`}
      style={{
        background: `radial-gradient(120% 80% at 100% 0%, ${tone.accent}33, transparent 50%), linear-gradient(145deg, ${tone.from}, ${tone.to})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
        {cover?.eyebrow || 'Project'}
      </p>
      <div className="relative">
        <p className="font-display text-3xl text-white sm:text-4xl">{cover?.title || title}</p>
        <p className="mt-2 max-w-xs text-sm text-white/75">{cover?.subtitle}</p>
      </div>
      <span
        className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full blur-2xl"
        style={{ background: tone.accent, opacity: 0.35 }}
      />
    </div>
  );
};

export default ProjectCover;
