import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const skills = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  Frontend: ['React', 'HTML/CSS', 'Three.js', 'Figma'],
  Backend: ['Node.js', 'Express', 'Flask', 'REST APIs'],
  Tools: ['Git', 'Docker', 'VS Code', 'Linux', 'Adobe XD', 'Maya',],
};

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">01. About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A quick look at my background, what drives me, and the tools I love using.
          </p>
        </motion.div>

        <div className="about__grid">
          {/* Bio */}
          <motion.div variants={fade(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="about__bio glass-card">
            <div className="about__avatar">
              <span className="gradient-text">KP</span>
            </div>
            <div className="about__text">
              <p>
                Hi! I'm <strong>Khushi Panchal</strong> — a passionate developer and creative problem solver
                who loves turning complex ideas into elegant, intuitive products.
              </p>
              <p>
                I thrive at the intersection of <span className="about__highlight">design and engineering</span>,
                building digital experiences that are not only functional but genuinely delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons,
                or contributing to open-source communities.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fade(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="about__skills">
            {Object.entries(skills).map(([cat, items], ci) => (
              <motion.div key={cat} variants={fade(ci + 3)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="about__skill-group glass-card">
                <h4 className="about__skill-label">{cat}</h4>
                <div className="about__skill-chips">
                  {items.map((s) => (
                    <span key={s} className={`tag ${ci % 2 === 0 ? '' : 'purple'}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
