import React from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Layers } from 'lucide-react';
import resumeData from '../data/resume.json';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-white/40 max-w-xl mx-auto">Showcasing full-stack applications built with modern Java ecosystems and performant frontends.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-white/40" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/10">
                  <Code2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-white/60 leading-relaxed flex gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Full Stack Project</span>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white flex items-center gap-2"
                >
                  View Details <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
