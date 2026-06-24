import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FolderCard from '../components/FolderCard';
import './Projects.css';

const projects = [
   {
    title: 'International Application Rating Algorithm',
    description:
      'Developed and deployed IARA, a web-based system that automates and streamlines the scoring of international applicants for WSU Admissions. The system utilizes a custom algorithm to evaluate applicants based on multiple criteria, providing a fair and efficient assessment process.',
    tags: ['TypeScript', 'Three.js', 'WebGL'],
    github: 'https://github.com/Stevieb253/CPTS421_International_Rating_Algorithm',
    live: 'https://iara-app-25.azurewebsites.net/login',
  },
  {
    title: 'Flight Route Analysis',
    description:
      'Built a multi-page Streamlit dashboard to analyze U.S. domestic flight routes using data analytics, machine learning, forecasting, and interactive geospatial visualizations.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning'],
    github: 'https://github.com/JK1902/Flight_Route_Analysis',
    live: null,
  },
  {
    title: 'Room Booking System',
    description:
      'Collaborated in a four-person team to design and develop a room booking system with Python, SQL, and HTML/CSS, implementing database integration, reservation workflows, and a web-based user interface.',
    tags: ['Django','Python', 'SQL', 'HTML/CSS', 'Collaboration'],
    github: 'https://github.com/Jacawb/CPTS_451-Project',
    live: null,
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
