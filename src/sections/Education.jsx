import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import './Education.css';

const education = [
  {
    id: 'uni',
    icon: GraduationCap,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Washington State University',
    period: 'Jan 2023 - May 2025',
    gpa: '3.8 / 4.0',
    coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Machine Learning', 'Database Systems', 'Computer Networks'],
    children: [],
  },
  {
    id: 'uni',
    icon: GraduationCap,
    degree: 'Diploma in Information Technology',
    institution: 'Gujarat Technical University',
    period: 'Aug 2019 - July 2022',
    gpa: '9.98 / 10',
    coursework: ['Java Programming', 'Operating Systems', 'Object Oriented Programming', 'Cryptography and Network Security', 'Web Development'],
    children: [],
  },
  {
    id: 'hs',
    icon: School,
    degree: 'High School Diploma',
    institution: 'Amrit Jyoti High School',
    period: '2017 - 2019',
    gpa: null,
    coursework: ['AP Computer Science A', 'AP Calculus BC', 'AP Physics', 'AP Statistics'],
    children: [],
  },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.12 } },
});

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">02. Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">My educational journey, from high school to university.</p>
        </motion.div>

        <div className="edu__tree">
          {education.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <motion.div
                key={entry.id}
                variants={fade(i + 1)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="edu__node"
              >
                {/* Connector line (not on last) */}
                {i < education.length - 1 && <div className="edu__connector" />}

                <div className="edu__icon-wrap">
                  <Icon size={20} className="edu__icon" />
                </div>

                <div className="edu__card glass-card">
                  <div className="edu__card-header">
                    <div>
                      <h3 className="edu__degree">{entry.degree}</h3>
                      <p className="edu__institution">{entry.institution}</p>
                    </div>
                    <div className="edu__meta">
                      <span className="tag">{entry.period}</span>
                      {entry.gpa && <span className="tag purple">GPA: {entry.gpa}</span>}
                    </div>
                  </div>
                  <div className="edu__coursework">
                    <span className="edu__cw-label">Relevant Coursework</span>
                    <div className="edu__cw-chips">
                      {entry.coursework.map((c) => (
                        <span key={c} className="tag purple">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
