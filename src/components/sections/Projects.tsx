import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'WebNova AI',
    description: 'A cutting-edge AI Chatbot application with real-time responses and an ultra-modern interface.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://webnova-ai.onrender.com',
    githubUrl: 'https://github.com/Rahi09Suthar',
  },
  {
    id: '3',
    title: 'My Portfolio',
    description: 'You are currently viewing my portfolio website, developed using modern web technologies, featuring smooth animations and interactive elements.',
    tech: ['React.js', 'Tailwind', 'Framer Motion', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Rahi09Suthar',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Work & Creations" subtitle="" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col glass rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 bg-primary/20 backdrop-blur-md rounded text-[10px] font-bold text-primary uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-xs mb-6 flex-1">{project.description}</p>
                
                {project.liveUrl !== '#' && (
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600 hover:to-blue-600 transition-all rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" /> Explore
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
