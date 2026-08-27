import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import Logo from './Logo';
import { site } from '../../data/site';

const links = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, toggleTheme] = useThemeSwitcher();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 80 && current > last);
      last = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-y-hidden', showMenu);
    return () => document.documentElement.classList.remove('overflow-y-hidden');
  }, [showMenu]);

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition ${
      isActive ? 'text-accent' : 'text-ink/80 hover:text-accent'
    }`;

  return (
    <header
      className={`nav-glass sticky top-0 z-30 transition-transform duration-300 ${
        hidden && !showMenu ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="site-wrap flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/#writing" className="text-sm tracking-wide text-ink/80 transition hover:text-accent">
            Notes
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-elevated text-ink"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <a href={site.resume} download="Thathaji_Rallapalli.pdf" className="btn-primary hidden sm:inline-flex">
            Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line/10 md:hidden"
            onClick={() => setShowMenu((open) => !open)}
            aria-label={showMenu ? 'Close menu' : 'Open menu'}
          >
            {showMenu ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="border-t border-line/10 bg-paper px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/#writing"
              className="text-sm tracking-wide text-ink/80"
              onClick={() => setShowMenu(false)}
            >
              Notes
            </Link>
            <a
              href={site.resume}
              download="Thathaji_Rallapalli.pdf"
              className="btn-primary w-full"
              onClick={() => setShowMenu(false)}
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
