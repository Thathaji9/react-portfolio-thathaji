import { Link } from 'react-router-dom';

const Logo = ({ compact = false }) => (
  <Link to="/" className="group flex items-center gap-3" aria-label="Thathaji Rallapalli home">
    <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-line/15 bg-ink text-paper">
      <span className="font-display text-sm tracking-tight">TR</span>
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
    </span>
    {!compact && (
      <span className="hidden leading-tight sm:block">
        <span className="block font-display text-sm text-ink">Thathaji</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Rallapalli
        </span>
      </span>
    )}
  </Link>
);

export default Logo;
