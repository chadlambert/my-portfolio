import { useState, useEffect, useCallback } from 'react';
import data from '../data';

const NAV_ITEMS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume',   href: '#resume' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo" onClick={close}>{data.initials}</a>

      <ul className={`navbar__links${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : ''}
              onClick={close}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}