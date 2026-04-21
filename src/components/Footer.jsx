import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="neon-divider" />
      <div className="footer__inner container">
        <p className="footer__copy">
          © {new Date().getFullYear()} <span className="gradient-text">Khushi Panchal</span>. Designed & built with ❤️
        </p>
        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a> */}
        </div>
        <button className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
