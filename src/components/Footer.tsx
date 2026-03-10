import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">Let's build something <span className="text-white/30">extraordinary.</span></h2>
            <p className="text-white/50 max-w-md mb-10 leading-relaxed">
              {resumeData.extra[0]}
            </p>
            <div className="space-y-4">
              <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">{resumeData.basics.email}</span>
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-3 rounded-xl bg-white/5">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">{resumeData.basics.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-3 rounded-xl bg-white/5">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">{resumeData.basics.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-4">
              {resumeData.basics.links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between aspect-square group"
                >
                  <div className="flex justify-between items-start">
                    {link.name === 'GitHub' ? <Github size={32} /> : <Linkedin size={32} />}
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/30 block mb-1">{link.name}</span>
                    <span className="text-sm font-medium text-white/60 truncate block">{link.label}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            © 2024 {resumeData.basics.name}. All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
