import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative w-24 h-24 flex items-center justify-center border-2 border-white/20 rounded-full overflow-hidden">
          <motion.span 
            className="text-4xl font-bold text-white z-10"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            KV
          </motion.span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-white/10"
            style={{ height: `${progress}%` }}
          />
        </div>
      </motion.div>
      
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-white/50 text-xs tracking-[0.2em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
};

export default Splash;
