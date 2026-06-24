import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Code2, Globe, Users, Music, Microphone, BookOpen, BookmarkMinusIcon } from 'lucide-react';
import './Extracurriculars.css';

const activities = [
  {
    icon: Globe,
    title: 'Vice President',
    org: 'International Student Council',
    period: 'Aug 2025 — May2026',
    desc: 'Led the ASWSU International Student Council as Vice President, managing a 10-member executive cabinet, overseeing budgeting, operations, and strategic planning, and spearheading cultural showcase events attended by 400+ students to strengthen engagement between international and domestic communities.',
  },
  {
    icon: Microphone,
    title: 'Guest Speaker',
    org: 'Alumni Panel, WSU',
    period: 'May 2026',
    desc: 'Invited as a guest speaker for the WSU Alumni Panel, sharing insights on career development, networking, and personal growth with an audience of 20+ students and alumni.',
  },
  {
    icon: Code2,
    title: 'Member',
    org: 'Official Society oof Women Engineers (SWE)',
    period: 'May 2024 — May 2026',
    desc: 'Active member of the Society of Women Engineers, participating in events, workshops, and networking opportunities.',
  },
  {
    icon: Users,
    title: 'President',
    org: 'XR/ VR Club, WSU',
    period: 'Dec 2024 — March 2025',
    desc: 'Led the XR/VR Club at WSU, organizing workshops, events, and collaborative projects to promote immersive technology exploration among students.',
  },
  // {
  //   icon: BookmarkMinusIcon,
  //   title: 'Placeholder Activity',
  //   org: 'Club / Organization',
  //   period: '2021 — 2023',
  //   desc: 'A fun extracurricular that shows you\'re well-rounded beyond just coding.',
  // },
  // {
  //   icon: BookOpen,
  //   title: 'Teaching Assistant',
  //   org: 'CS 101 — Intro to Programming',
  //   period: 'Fall 2023',
  //   desc: 'Assisted professor in grading, held office hours, and helped 80+ students with weekly labs.',
  // },
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
