import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site } from '../../data/site';
import { projectsData } from '../../data/projects';

const AppBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % site.rotating.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pb-10 pt-10 sm:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <p className="eyebrow">
            {site.role} · {site.location}
          </p>
          <h1 className="display mt-5 text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.subhead} Right now that looks like{' '}
            <span className="font-medium text-accent">{site.rotating[index]}</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              See selected work
              <FiArrowDownRight />
            </Link>
            <a
              download="Thathaji_Rallapalli.pdf"
              href={site.resume}
              className="btn-ghost"
              aria-label="Download Resume"
            >
              Download CV
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line/10 bg-elevated/80 px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability}
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line/10 pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Years</dt>
              <dd className="display mt-1 text-2xl text-ink">{site.years}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Projects</dt>
              <dd className="display mt-1 text-2xl text-ink">
                {String(projectsData.length).padStart(2, '0')}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Essays</dt>
              <dd className="display mt-1 text-2xl text-ink">02</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="lg:col-span-5"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
};

const HeroCanvas = () => (
  <div className="card-surface hero-grid relative p-5 shadow-lift">
    <div className="mb-4 flex items-center justify-between">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        ui.engine / schema
      </p>
      <span className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-ember/80" />
        <span className="h-2 w-2 rounded-full bg-accent/80" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
      </span>
    </div>
    <pre className="rounded-2xl bg-paper/80 p-4 font-mono text-[11px] leading-6 text-muted">
      {`{
  "module": "DNS Posture",
  "render": "metadata",
  "widgets": ["radar", "table", "filters"]
}`}
    </pre>
    <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-line/10 bg-paper/70 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Radar</p>
        <svg viewBox="0 0 120 88" className="mt-2 h-20 w-full text-accent">
          <polygon
            points="60,10 100,40 84,80 36,80 20,40"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="60" cy="48" r="28" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        </svg>
      </div>
      <div className="rounded-2xl border border-line/10 bg-paper/70 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Load</p>
        <div className="mt-4 space-y-2">
          {[88, 64, 72].map((width) => (
            <div key={width} className="h-2 overflow-hidden rounded-full bg-line/10">
              <div className="h-full rounded-full bg-accent" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-1 text-xs text-accent">
          Live modules
          <FiArrowUpRight />
        </p>
      </div>
    </div>
  </div>
);

export default AppBanner;
