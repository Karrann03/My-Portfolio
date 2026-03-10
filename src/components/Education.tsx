import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Education</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 opacity-5">
                <GraduationCap size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-white/60 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono text-white/40 block mb-1">{edu.dates}</span>
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-white">CGPA: {edu.cgpa}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-white/40">
                      <BookOpen size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section Integrated */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-white/40" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Key Achievements</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                <p className="text-sm text-white/70 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
