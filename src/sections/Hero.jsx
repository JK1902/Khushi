import TubesBackground from '../components/TubesBackground';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <TubesBackground>
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero__inner"
          >
            <div className="hero__badge">
              <Sparkles size={13} />
              <span>Open to opportunities</span>
            </div>

            <h1 className="hero__name">
              <span className="hero__greeting">Hi, I'm</span>
              <br />
              <span className="gradient-text hero__fullname">Khushi Panchal</span>
            </h1>

            <p className="hero__tagline">
              Developer · Designer · Problem Solver
            </p>

            <p className="hero__sub">
              I build beautiful, high-performance digital experiences.<br />
              Move your cursor across the canvas — click to remix the colors.
            </p>

            <div className="hero__ctas">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </motion.div>

          <motion.div
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#about" className="hero__scroll-link">
              <ArrowDown size={18} />
              <span>Scroll down</span>
            </a>
          </motion.div>
        </div>
      </TubesBackground>
    </section>
  );
}
