import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Extras', href: '#extracurriculars' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on link click
  const handleLink = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand" onClick={() => handleLink('#hero')}>
          <span className="gradient-text">Khushi Panchal</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navbar__link ${active === l.href ? 'navbar__link--active' : ''}`}
              onClick={() => handleLink(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={() => handleLink('#contact')}>
            Get In Touch
          </a>
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
