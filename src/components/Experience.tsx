import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Professional Experience</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        {/* Impact Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {resumeData.experience[0].bullets.slice(0, 3).map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3"
            >
              <Zap size={16} className="text-white/60 mt-1 shrink-0" />
              <p className="text-xs text-white/70 leading-relaxed">{bullet}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                expandedIndex === index 
                  ? 'bg-white/10 border-white/20 shadow-2xl shadow-white/5' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                className="w-full p-8 text-left flex justify-between items-start"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white/80">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="ml-4 p-2 rounded-full bg-white/5">
                  {expandedIndex === index ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-white/40" />}
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-2">
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex gap-3 text-white/60 leading-relaxed"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
