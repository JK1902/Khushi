import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const jobs = [
  {
    role: 'Web Development Intern',
    company: 'Energy System Innovation Center',
    period: 'May 2024 - Aug 2024 ',
    type: 'Full-time · Internship',
    bullets: [
      'Built and shipped landing page for ESIC that helped to attract more users.',
      'Collaborated with cross-functional teams to design and implement the website.',
      'Optimized and improved the performance of the website.',
    ],
    tags: ['html', 'css', 'javascript', 'WordPress'],
  },
  {
    role: 'Web Developer',
    company: 'Organization / Club',
    period: 'Sep 2023 — May 2024',
    type: 'Part-time · Volunteer',
    bullets: [
      "Developed and maintained the organization\'s website, growing traffic by X%.",
      'Introduced modern tooling ([tool]) cutting build times in half.',
      'Mentored 3 junior developers on React best practices.',
    ],
    tags: ['React', 'Tailwind', 'Figma'],
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } },
});

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">03. Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">Roles and responsibilities across internships and volunteer work.</p>
        </motion.div>

        <div className="exp__timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              variants={fade(i + 1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="exp__item"
            >
              {i < jobs.length - 1 && <div className="exp__line" />}
              <div className="exp__dot"><Briefcase size={14} /></div>

              <div className="exp__card glass-card">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{job.role}</h3>
                    <p className="exp__company">{job.company} <span className="exp__type">· {job.type}</span></p>
                  </div>
                  <span className="tag">{job.period}</span>
                </div>
                <ul className="exp__bullets">
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className="exp__tags">
                  {job.tags.map((t) => <span key={t} className="tag purple">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
