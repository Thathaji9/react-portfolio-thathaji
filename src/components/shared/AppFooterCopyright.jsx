import { site } from '../../data/site';

function AppFooterCopyright() {
  return (
    <div className="site-wrap flex flex-col items-center justify-between gap-3 text-center text-sm text-muted sm:flex-row sm:text-left">
      <p>
        © {new Date().getFullYear()} {site.name}. Designed and built in the browser.
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
        React · Tailwind · Framer Motion
      </p>
    </div>
  );
}

export default AppFooterCopyright;
