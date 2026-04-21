import './FolderCard.css';
import { ExternalLink, Github } from 'lucide-react';

function FolderIcon() {
  return (
    <svg className="folder-icon" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f967fb" />
          <stop offset="100%" stopColor="#b06ef3" />
        </linearGradient>
        <filter id="glow-f" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Back panel */}
      <rect x="2" y="18" width="84" height="52" rx="6" fill="url(#fg)" opacity="0.18" filter="url(#glow-f)" />
      {/* Tab */}
      <path d="M2 18 C2 13 5 10 10 10 L32 10 L38 18 Z" fill="url(#fg)" opacity="0.55" filter="url(#glow-f)" />
      {/* Main body */}
      <rect x="2" y="18" width="84" height="52" rx="6" fill="url(#fg)" opacity="0.55" filter="url(#glow-f)" />
      {/* Shine */}
      <path d="M8 26 Q44 22 80 28" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" />
    </svg>
  );
}

export default function FolderCard({ title, description, tags = [], github, live }) {
  return (
    <div className="folder-card glass-card">
      <div className="folder-card__top">
        <FolderIcon />
        <div className="folder-card__links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="folder-card__icon-link" title="GitHub">
              <Github size={17} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="folder-card__icon-link" title="Live site">
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>
      <h3 className="folder-card__title">{title}</h3>
      <p className="folder-card__desc">{description}</p>
      <div className="folder-card__tags">
        {tags.map((t) => (
          <span key={t} className="tag purple">{t}</span>
        ))}
      </div>
    </div>
  );
}
