import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Code2, Globe, Users, Music, BookOpen } from 'lucide-react';
import './Extracurriculars.css';

const activities = [
  {
    icon: Code2,
    title: 'Coding Club — President',
    org: 'University Coding Club',
    period: '2023 — Present',
    desc: 'Leading weekly workshops, organizing hackathons, and growing membership to 100+ students.',
  },
  {
    icon: Trophy,
    title: 'Hackathon Finalist',
    org: 'HackXYZ 2024',
    period: 'Mar 2024',
    desc: 'Top 5 finalist out of 200 teams. Built [project] solving [problem] in 36 hours.',
  },
  {
    icon: Globe,
    title: 'Open Source Contributor',
    org: 'Various Projects',
    period: '2022 — Present',
    desc: 'Contributed PRs to [library/tool], focusing on performance improvements and documentation.',
  },
  {
    icon: Users,
    title: 'Women in Tech Society',
    org: 'University Chapter',
    period: '2022 — Present',
    desc: 'Organizing networking events, mentorship programs, and speaker series for underrepresented students.',
  },
  {
    icon: Music,
    title: 'Placeholder Activity',
    org: 'Club / Organization',
    period: '2021 — 2023',
    desc: 'A fun extracurricular that shows you\'re well-rounded beyond just coding.',
  },
  {
    icon: BookOpen,
    title: 'Teaching Assistant',
    org: 'CS 101 — Intro to Programming',
    period: 'Fall 2023',
    desc: 'Assisted professor in grading, held office hours, and helped 80+ students with weekly labs.',
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } },
});

export default function Extracurriculars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="extracurriculars" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">05. Extracurriculars</span>
          <h2 className="section-title">Beyond the Code</h2>
          <p className="section-subtitle">Activities and communities I'm proud to be part of.</p>
        </motion.div>

        <div className="extra__grid">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                variants={fade(i + 1)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="extra__card glass-card"
              >
                <div className="extra__icon-wrap">
                  <Icon size={18} />
                </div>
                <div className="extra__body">
                  <div className="extra__row">
                    <h3 className="extra__title">{a.title}</h3>
                    <span className="tag">{a.period}</span>
                  </div>
                  <p className="extra__org">{a.org}</p>
                  <p className="extra__desc">{a.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
