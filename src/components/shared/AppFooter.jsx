import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AppFooterCopyright from './AppFooterCopyright';
import { site } from '../../data/site';

const iconMap = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  hashnode: <FiGlobe />,
};

const AppFooter = () => {
  return (
    <footer className="mt-24 border-t border-line/10">
      <div className="site-wrap grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow">Let’s build</p>
          <h2 className="display mt-3 max-w-md text-3xl text-ink sm:text-4xl">
            Have a product that needs a sharper interface?
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              {site.email}
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link to="/projects" className="hover:text-accent">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/#writing" className="hover:text-accent">
                Notes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-4 flex gap-3">
            {site.socials.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-line/10 bg-elevated text-lg text-ink transition hover:border-accent hover:text-accent"
              >
                {iconMap[link.id]}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line/10 py-6">
        <AppFooterCopyright />
      </div>
    </footer>
  );
};

export default AppFooter;
