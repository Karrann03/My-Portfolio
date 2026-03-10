import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Available for Opportunities</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            {resumeData.basics.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {resumeData.basics.title}
          </p>

          <p className="text-base text-white/40 max-w-xl mx-auto mb-12 italic">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 group"
            >
              View Experience
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>
            <motion.button
              onClick={() => window.print()}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full flex items-center gap-2 backdrop-blur-sm"
            >
              Download Resume
              <Download size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
