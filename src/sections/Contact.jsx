import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import './Contact.css';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/JK1902' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/khushi-panchal-/' },
  // { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
];

const fade = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } },
});

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    window.location.href = `mailto:panchal.v.khushi@gmail.com?subject=Hello from ${name}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-header">
          <span className="section-label">06. Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether it's a job opportunity, a collab idea, or just a Hi!! I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Left: info */}
          <motion.div variants={fade(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="contact__info">
            <a href="mailto:panchal.v.khushi@gmail.com" className="contact__email">
              <Mail size={20} />
              <span>panchal.v.khushi@gmail.com</span>
            </a>

            <p className="contact__text">
              I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out!
            </p>

            <div className="contact__socials">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__social-link" aria-label={s.label}>
                    <Icon size={18} />
                    <span>{s.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fade(2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="contact__form glass-card"
          >
            <div className="contact__field">
              <label htmlFor="contact-name">Your Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Jane Smith" required />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="jane@example.com" required />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Hey Khushi, I wanted to..." required />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              <Send size={15} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
