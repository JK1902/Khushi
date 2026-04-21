import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const randomHex = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
const randomColors = (n) => Array.from({ length: n }, randomHex);

export default function TubesBackground({ children, onClick }) {
  const canvasRef = useRef(null);
  const tubesRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      if (!canvasRef.current) return;
      try {
        const mod = await import(
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        );
        if (!mounted) return;
        const TubesCursor = mod.default;
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ['#f967fb', '#b06ef3', '#53bc28'],
            lights: {
              intensity: 200,
              colors: ['#f967fb', '#b06ef3', '#fe8a2e', '#60aed5'],
            },
          },
        });
        tubesRef.current = app;
        setLoaded(true);
      } catch (e) {
        console.error('Tubes load failed:', e);
        setLoaded(true); // still show children
      }
    };
    init();
    return () => { mounted = false; };
  }, []);

  const handleClick = () => {
    if (tubesRef.current) {
      tubesRef.current.tubes.setColors(randomColors(3));
      tubesRef.current.tubes.setLightsColors(randomColors(4));
    }
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#07091a', cursor: 'crosshair' }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', touchAction: 'none' }}
      />
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
