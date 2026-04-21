import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FolderCard from '../components/FolderCard';
import './Projects.css';

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A placeholder for your first amazing project. Describe what problem it solves, who it\'s for, and the impact it made.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Project Beta',
    description:
      'Your second standout project goes here. Highlight the key features, the tech challenges you overcame, and what you learned.',
    tags: ['Python', 'Flask', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Project Gamma',
    description:
      'Yet another cool thing you built. Maybe a design tool, an open-source library, or a data visualization dashboard.',
    tags: ['TypeScript', 'Three.js', 'WebGL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } },
});

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">04. Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects — click the folder icons to explore the code.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fade(i + 1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <FolderCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
